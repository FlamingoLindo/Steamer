<div class="flex items-center justify-center py-8">
	<div class="w-full max-w-5xl px-4 text-center">
		<div class="mb-8 rounded-xl bg-[#1b2838] p-6 shadow-2xl">
			<div class="mx-auto mb-2 h-8 w-64 animate-pulse rounded bg-[#2a475e]"></div>
			<div class="inline-block rounded-full bg-[#2a475e] px-4 py-1">
				<div class="h-6 w-20 animate-pulse rounded bg-[#3e7899]"></div>
			</div>
		</div>

		<div
			class="grid grid-cols-3 gap-6 rounded-xl border-2 border-[#2a475e] bg-[#c7d5e0] p-6 shadow-xl"
		>
			{#each Array(9) as _, i}
				<div class="flex flex-col items-center space-y-3 rounded-lg bg-white p-4 shadow-md">
					<div class="h-8 w-8 animate-pulse rounded bg-gray-300"></div>

					<div class="h-5 w-24 animate-pulse rounded bg-gray-300"></div>

					{#if i % 2 === 0}
						<div class="h-6 w-32 animate-pulse rounded-md bg-gray-200"></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
