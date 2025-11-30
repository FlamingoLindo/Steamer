<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { totalPages }: { totalPages: number } = $props();

	let currentPage = $derived(Number(page.url.searchParams.get('page')) || 1);

	function handlePageChange(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages) {
			goto(`?page=${newPage}`);
		}
	}

	function getPageNumbers(): number[] {
		const pages: number[] = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
		return pages;
	}
</script>

<div class="my-6 flex items-center justify-center gap-1">
	<button
		onclick={() => handlePageChange(currentPage - 1)}
		disabled={currentPage === 1}
		class="rounded border border-[#3e7899] bg-[#2a475e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e7899] disabled:cursor-not-allowed disabled:opacity-50"
	>
		Previous
	</button>

	{#each getPageNumbers() as pageNum}
		<button
			onclick={() => handlePageChange(pageNum)}
			class={`cursor-pointer rounded px-4 py-2 text-sm font-medium transition-colors ${
				pageNum === currentPage
					? 'border border-green-600 bg-green-500 text-white'
					: 'border border-[#3e7899] bg-[#2a475e] text-white hover:bg-[#3e7899]'
			}`}
		>
			{pageNum}
		</button>
	{/each}

	<button
		onclick={() => handlePageChange(currentPage + 1)}
		disabled={currentPage === totalPages}
		class="cursor-pointer rounded border border-[#3e7899] bg-[#2a475e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e7899] disabled:cursor-not-allowed disabled:opacity-50"
	>
		Next
	</button>
</div>
