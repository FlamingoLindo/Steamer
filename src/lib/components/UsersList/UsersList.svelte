<script lang="ts">
	import type { PageData } from '../../../routes/$types';
	export let data: PageData;
	const { usersPromise } = data;
</script>

{#await usersPromise}
	<div class="flex items-center justify-center py-12">
		<div class="rounded-lg bg-[#1b2838] px-8 py-6 shadow-lg">
			<p class="text-lg text-[#c7d5e0]">Loading users...</p>
		</div>
	</div>
{:then response}
	<div class="flex items-center justify-center py-8">
		<div class="w-full max-w-5xl px-4 text-center">
			<div class="mb-8 rounded-xl bg-linear-to-r from-[#1b2838] to-[#2a475e] p-6 shadow-2xl">
				<h1 class="mb-2 text-3xl font-bold text-white">Users found in our database</h1>
				<div class="inline-block rounded-full bg-[#3e7899] px-4 py-1">
					<h2 class="text-lg font-semibold text-[#171a21]">
						Total: {response.data.pagination.total}
					</h2>
				</div>
			</div>
			<div
				class="grid grid-cols-3 gap-6 rounded-xl border-2 border-[#2a475e] bg-[#c7d5e0] p-6 shadow-xl"
			>
				{#each response.data.users as user}
					<div
						class="group flex flex-col items-center space-y-3 rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#66c0f4] hover:shadow-xl"
					>
						<div class="relative">
							<img
								src={user.avatar}
								alt={user.username}
								title={user.steam_id}
								class="h-8 w-8 shadow-lg transition-all duration-300 group-hover:border-[#171a21]"
							/>
						</div>
						<a
							href={user.pf_url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-center font-bold text-[#171a21] transition-colors duration-200 hover:text-[#2a475e]"
						>
							{user.username}
						</a>
						{#if user.current_game}
							<p
								class="rounded-md bg-[#c7d5e0] px-2 py-1 text-sm font-medium text-[#2a475e] italic"
							>
								{user.current_game}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
{:catch error}
	<div class="flex items-center justify-center py-12">
		<div class="rounded-lg border-2 border-red-500 bg-[#1b2838] px-8 py-6 shadow-lg">
			<p class="font-semibold text-red-400">Error loading users: {error.message}</p>
		</div>
	</div>
{/await}
