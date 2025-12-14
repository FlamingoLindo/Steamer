<script lang="ts">
	import UserName from '$lib/components/user-details/UserName/UserName.svelte';
	import { getRingClass } from '$lib/utils/scripts/user/getRingClass.script';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.userPromise}
	<text>Loading...</text>
{:then response}
	{@const user = response.data.user}
	{@const ringClass = getRingClass(user.persona_state)}

	<UserName username={user.username} />
	<img
		src={user.avatar}
		alt={user.username}
		title={user.steam_id}
		class="h-16 w-16 ring-2 {ringClass} rounded-xs"
	/>
{:catch error}
	<div class="flex items-center justify-center py-12">
		<div class="rounded-lg border-2 border-red-500 bg-[#1b2838] px-8 py-6 shadow-lg">
			<p class="font-semibold text-red-400">Error loading user: {error.message}</p>
		</div>
	</div>
{/await}
