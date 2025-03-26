<script>
	import { createEventDispatcher } from 'svelte';
	import { persons } from '$stores/persons';

	
	const dispatch = createEventDispatcher();

	function editPerson(person) {
	  dispatch('edit', { person });
	}

	function deletePerson(person) {
	  dispatch('delete', { person });
	}


</script>

<div class="overflow-x-auto w-full mt-6">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>Name</th>
				<th>Job</th>
				<th>Email</th>				
				<th />
			</tr>
		</thead>
		<tbody>
			{#each $persons as person}
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" /> 
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img src="https://i.pravatar.cc/150?u={person.name}" alt={person.name} />
								</div>
							</div>
							<div>
								<div class="font-bold">{person.name}</div>
							</div>
						</div>
					</td>
					<td>
						{person.company}
						<br />
						<span class="badge badge-ghost badge-sm">{person.job}</span>
					</td>
					<td>{person.email}</td>					
					<th>						
						<button class="btn btn-error text-white btn-xs" on:click={() => editPerson(person)}>Edit</button>
						<button class="btn btn-error text-white btn-xs" on:click={() => deletePerson(person)}>Delete</button>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>Email</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
