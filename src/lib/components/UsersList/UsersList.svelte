<script lang="ts">
	import { userService } from '$lib/service/userService';
	const usersPromise = userService.listUsers();
</script>

{#await usersPromise}
	<div class="flex items-center justify-center">
		<p>Loading users...</p>
	</div>
{:then response}
	<div class="flex items-center justify-center">
		<div class="w-full max-w-4xl px-4">
			<div class="mb-8 text-center">
				<h1 class="text-2xl font-bold">Users found in our database</h1>
				<h2 class="text-xl">Total: {response.data.count}</h2>
			</div>
			<div class="grid grid-cols-3 gap-7">
				{#each response.data.users as user}
					<div class="flex flex-col items-center space-y-2 text-center">
						<img
							src={user.avatar}
							alt={user.username}
							title={user.steam_id}
							class="h-8 w-8 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125"
						/>
						<a href={user.pf_url} target="_blank" rel="noopener noreferrer" class="cursor-pointer">
							<p class="w-full font-medium">{user.username}</p>
						</a>
						{#if user.current_game}
							<p class="text-sm text-gray-600">{user.current_game}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
{:catch error}
	<div class="flex items-center justify-center">
		<p class="text-red-600">Error loading users: {error.message}</p>
	</div>
{/await}
