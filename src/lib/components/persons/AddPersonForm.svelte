<script>	

	import { createEventDispatcher } from 'svelte';
  	const dispatch = createEventDispatcher();
  	
		
	let name = '';
	let email = '';
	let company = '';
	let job = '';
	

	  function addPerson() {
	    const newPerson = {

	      name,
	      email,
	      company, 
	      job,

	    };
	    dispatch('add', newPerson);
	    // Clear the form fields after adding
	    name = '';
	    email = '';
	    company = '';
	    job = '';
	    
	  }
	  
</script>

	<div class="flex justify-between items-center w-full">
		<h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Person Manager</h2>
	</div>
	<form on:submit|preventDefault={addPerson}	class="w-full flex flex-col">
		<div class="form-control w-full max-w-xs">
			<label for="name" class="label">
				<span class="label-text">Name</span>
			</label>

			<input
				type="text"
				name="name"
				bind:value={name}
				class="input input-primary input-bordered w-full max-w-xs"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				bind:value={email}
				class="input input-primary input-bordered w-full max-w-xs"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="company" class="label">
				<span class="label-text">Company</span>
			</label>

			<input
				type="text"
				name="company"
				bind:value={company}
				class="input input-primary input-bordered w-full max-w-xs"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="job" class="label">
				<span class="label-text">Job</span>
			</label>

			<input
				type="text"
				name="job"
				bind:value={job}
				class="input input-primary input-bordered w-full max-w-xs"
			/>
		</div>
		
		

		<button class="mt-4 btn btn-primary w-full max-w-xs" type="submit">Add Person</button>

	</form>

