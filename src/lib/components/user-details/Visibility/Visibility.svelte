<script lang="ts">
	// 1 - Private, Friends Only, etc
	// 3 - Public
	const { visibility }: { visibility: number } = $props();
</script>

<h1>{visibility === 1 ? 'Private' : 'Public'}</h1>
