<!-- <script>
	// import Icon from './Icon.svelte';

	let { rows, perPage, trimmedRows = $bindable() } = $props();

	let totalRows = $derived(rows.length);
	let currentPage = $state(0);
	let totalPages = $derived(Math.ceil(totalRows / perPage));
	let start = $derived(currentPage * perPage);
	let end = $derived(currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1);

	$effect(() => {
		trimmedRows = rows.slice(start, end + 1);
	});

	$effect(() => {
		totalRows;
		currentPage = 0;
	});
</script>

{#if totalRows && totalRows > perPage}
	<div class="pointer-events-auto flex items-center justify-center">
		<button
			onclick={() => (currentPage -= 1)}
			disabled={currentPage === 0}
			aria-label="left arrow icon"
			aria-describedby="prev"
			class="flex"
		>
		</button>
		<span id="prev" class="sr-only">Load previous {perPage} rows</span>

		<p class="mx-4 my-0">{start + 1} - {end + 1} of {totalRows}</p>

		<button
			onclick={() => (currentPage += 1)}
			disabled={currentPage === totalPages - 1}
			aria-label="right arrow icon"
			aria-describedby="next"
			class="flex"
		>
		</button>
		<span id="next" class="sr-only">Load next {perPage} rows</span>
	</div>
{/if}

<style>
	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	.pointer-events-auto {
		pointer-events: all;
	}
</style> -->
