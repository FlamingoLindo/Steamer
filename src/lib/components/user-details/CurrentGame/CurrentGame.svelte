<script lang="ts">
	const { current_game }: { current_game: string | null } = $props();
</script>

{#if current_game}
	<h1>Currently playing:</h1>
	<h1>{current_game}</h1>
{/if}
