<script lang="ts">
	const { steam_created_at }: { steam_created_at: Date } = $props();

	const formatted = $derived(
		new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date(steam_created_at))
	);
</script>

<h1>Account created at:</h1>
<h1>{formatted}</h1>
