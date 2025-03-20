<script>
  import { createEventDispatcher } from 'svelte';
  
  export let selectedPerson;
  
  console.log('selectedPerson:', selectedPerson);

  const dispatch = createEventDispatcher();

  let name = selectedPerson.name;
  let company = selectedPerson.company;
  let email = selectedPerson.email;
  let job = selectedPerson.job;
  
  
  
  function save() {
    dispatch('save', {
      id: selectedPerson._id,
      name,
      company,
      email,
      job,
  
    });
  }

  function cancel() {
    dispatch('cancel');
  }

  
</script>

<div class="flex justify-between items-center w-full">
  <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Edit Person</h2>
</div>
<form on:submit|preventDefault={save}>
  <div class="form-control w-full max-w-xs">
    <label>
      Name:
      <input class="input input-primary input-bordered w-full max-w-xs" type="text" bind:value={name} required />
    </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label>
      Company:
      <input class="input input-primary input-bordered w-full max-w-xs" type="text" bind:value={company} required />
    </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label>
      Email:
      <input class="input input-primary input-bordered w-full max-w-xs" type="email" bind:value={email} required />
    </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label>
      Job:
      <input class="input input-primary input-bordered w-full max-w-xs" type="text" bind:value={job} required />
    </label>
  </div>
  
  <div class="w-full max-w-xs flex justify-between mt-4">
    <button class="btn btn-primary w-full max-w-xs" type="submit">Save</button>
    <button class="btn btn-secondary w-full max-w-xs ml-4" type="button" on:click={cancel}>Cancel</button>
  </div>
</form>
