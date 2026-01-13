<script lang="ts">
	import type { Game, GetGameResponseDTO } from '$lib/api/dto/game/GetGameDTO';

	let { game, showDescription }: { game: Game; showDescription: boolean } = $props();
</script>

<div class="flex flex-col items-center justify-center p-5">
	<img src={game.header_image} alt={game.name} title={game.appid} />
	{#if showDescription}
		<p class="mt-4">{game.short_description}</p>
	{/if}
</div>
