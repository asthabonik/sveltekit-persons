<script>
    import PersonsTable from '$lib/components/persons/PersonsTable.svelte';
    import EditPersonForm from '$lib/components/persons/EditPersonForm.svelte';
    import AddPersonForm from '$lib/components/persons/AddPersonForm.svelte';
    import * as api from '$lib/script/api';
    import { base_endpoint } from '$lib/app/env.js';
    import toast, { Toaster } from 'svelte-5-french-toast';
    import { API_PATHS } from '$lib/config';
    import { persons } from '$stores/persons';

    export let data;

    persons.set(data.persons);

    // console.log('persons store:', $persons);    

    let selectedPerson = null;
    let isLoading = false;

    const toastStyle = {
        borderRadius: '200px',
        background: '#333',
        color: '#fff',
    };

    function showToast(message, icon = '👏') {
        toast(message, { icon, style: toastStyle });
    }

    function handleEdit(event) {
        selectedPerson = event.detail.person;
    }

    async function updatePerson(event) {
        const updatedPerson = event.detail;

        updatePersonStore(updatedPerson);   

        console.log('after update persons store:', $persons);


        try {
            const { response, json } = await api.put(base_endpoint, `${API_PATHS.PERSONS}?personId=${updatedPerson.id}`, updatedPerson);
            showToast('Person updated!');
        } catch (error) {
            showToast('Failed to update person. Please try again.', '❌');
        } finally {
            selectedPerson = null;
        }
    }

    async function addPerson(event) {
        
        if (isLoading) return;
        isLoading = true;

        const newPerson = event.detail;

        if (!newPerson || !newPerson.name || newPerson.name.length < 2) {
            showToast('Name is required and must be at least 2 characters long.', '❌');
            return;
        }


        try {
            const { response, json } = await api.post(base_endpoint, API_PATHS.PERSONS, newPerson, { aud: "aud" });
            // persons = [json, ...persons];
            persons.update($persons => [json, ...$persons]);
            showToast('Person added!');
        } catch (error) {
            showToast('Failed to add person. Please try again.', '❌');
        } finally {
            isLoading = false;
        }
    }

    async function deletePerson(event) {
        const delPerson = event.detail.person;
        // persons = persons.filter(person => person._id != delPerson._id);        
        persons.update($persons => $persons.filter(p => p._id !== delPerson._id));
        try {
            const { response, json } = await api.del(base_endpoint, `${API_PATHS.PERSONS}?personId=${delPerson._id}`, { aud: "aud" });
            showToast('Person deleted!');
        } catch (error) {
            showToast('Failed to delete person. Please try again.', '❌');
        }
    }


    // Function to update a person in the store
    function updatePersonStore(updatedPerson) {
      persons.update(currentPersons =>
        currentPersons.map(person =>
          person._id === updatedPerson.id ? updatedPerson : person
        )
      );
    }

</script>

<Toaster />

<div class="w-full">
    {#if selectedPerson}
        <EditPersonForm {selectedPerson} on:save={updatePerson} on:cancel={() => selectedPerson = null} />
    {:else}
        <AddPersonForm on:add={addPerson} />
        {#if isLoading}
            <div>Loading...</div>
        {:else}
            <PersonsTable on:edit={handleEdit} on:delete={deletePerson} />
        {/if}
    {/if}
</div>
