<script lang="ts">
	import GameCarousel from '$lib/components/shared/GameCarousel/GameCarousel.svelte';
	import GameHeader from '$lib/components/shared/GameHeader/GameHeader.svelte';

	const {
		current_game,
		gameid,
		gamePromise
	}: {
		current_game: string | null;
		gameid: string;
		gamePromise: Promise<any>;
	} = $props();

	let showGameInfo = $state(false);
</script>

{#if current_game}
	<h1 class="font-semibold">Currently playing:</h1>
	<a
		href={`https://store.steampowered.com/app/${gameid}/`}
		target="_blank"
		class="mt-2 text-lg font-bold"
		title="{current_game} store page"
	>
		{current_game}
	</a>
	<button 
		type="button"
		class="cursor-pointer hover:underline" 
		onclick={() => (showGameInfo = !showGameInfo)}
	>
		{showGameInfo ? 'Hide' : 'Show'} game info
	</button>

	{#if showGameInfo}
		{#await gamePromise}
			<div class="flex items-center justify-center py-8">
				<p class="text-lg text-white">Loading game...</p>
			</div>
		{:then response}
			{#if response}
				{@const game = response.data.game}

				<GameHeader {game} showDescription={true} />

				<GameCarousel screenshots={game.screenshots} />
			{/if}
		{:catch error}
			<p class="text-red-500">Error loading game: {error.message}</p>
		{/await}
	{/if}
{/if}
