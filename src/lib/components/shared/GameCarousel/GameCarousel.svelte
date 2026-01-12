<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	let { screenshots }: { screenshots: string[] } = $props();
	let selectedIndex = $state<number>(0);
	const intervalDuration = 5000;
	let intervalId: ReturnType<typeof setInterval>;

	let selectedImage = $derived(screenshots[selectedIndex] || null);

	function showNextImage() {
		selectedIndex = (selectedIndex + 1) % screenshots.length;
	}

	function startInterval() {
		clearInterval(intervalId);
		intervalId = setInterval(showNextImage, intervalDuration);
	}

	function selectImage(index: number, event?: MouseEvent) {
		selectedIndex = index;
		startInterval();

		if (event) {
			const button = event.currentTarget as HTMLElement;
			button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		}
	}

	startInterval();

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="rounded-lg border-2 border-[#454f57] bg-black/50">
	<div class="relative p-4">
		{#key selectedImage}
			<img
				src={selectedImage}
				alt="Selected screenshot"
				class="mx-auto w-auto shadow-lg"
				in:fade={{ duration: 300 }}
			/>
		{/key}
	</div>
	<div class="carousel-scroll overflow-x-auto bg-black/50 p-2 pb-3">
		<div class="flex gap-2">
			{#each screenshots as screenshot, index}
				<button type="button" onclick={(e) => selectImage(index, e)} class="shrink-0">
					<img
						src={screenshot}
						alt={screenshot}
						class="cursor-pointer transition-opacity hover:opacity-75 {selectedIndex === index
							? 'ring-2 ring-blue-500'
							: ''}"
						style="width: 116px; height: 65px; display: block;"
					/>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Webkit browsers (Chrome, Safari, Edge) */
	:global(.carousel-scroll::-webkit-scrollbar) {
		height: 8px;
	}

	:global(.carousel-scroll::-webkit-scrollbar-track) {
		background: #36607f;
		border-radius: 4px;
	}

	:global(.carousel-scroll::-webkit-scrollbar-thumb) {
		background: #121a24;
		border-radius: 4px;
	}

	:global(.carousel-scroll::-webkit-scrollbar-thumb:hover) {
		background: #5a6570;
	}

	/* Firefox */
	:global(.carousel-scroll) {
		scrollbar-color: #121a24 #36607f;
		scrollbar-width: thin;
	}
</style>
