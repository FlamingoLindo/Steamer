<script lang="ts">
	import { CustomToast } from '$lib/toast/custom.toast';

	const { message, error }: { message: string; error: string } = $props();
</script>

<div class="flex items-center justify-center py-12">
	{CustomToast.show({
		type: 'error',
		message: message,
		position: 'top-right'
	})}
	<div class="rounded-lg border-2 border-red-500 bg-[#1b2838] px-8 py-6 shadow-lg">
		<p class="font-semibold text-red-400">{message}: {error}</p>
	</div>
</div>
