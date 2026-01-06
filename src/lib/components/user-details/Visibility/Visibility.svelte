<script lang="ts">
	// 1 - Private, Friends Only, etc
	// 3 - Public
	const { visibility }: { visibility: number } = $props();
</script>

{#if visibility === 1}
	<div>
		<p class="font-semibold">Private Profile</p>
		<p class="text-sm">This user's profile is set to private</p>
	</div>
{/if}
