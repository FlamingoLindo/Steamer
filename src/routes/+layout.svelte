<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header/Header.svelte';
	import { Toaster } from 'svelte-french-toast';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-[#171a21]">
	<Header />
	<Toaster />
	{@render children()}
</div>
