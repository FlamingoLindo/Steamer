<script lang="ts">
	const { current_game }: { current_game: string | null } = $props();
</script>

{#if current_game}
	<h1 class="font-semibold">Currently playing:</h1>
	<text class="text-lg font-bold mt-2">{current_game}</text>
{/if}
