<script lang="ts">
	import type { CreationResponse } from '$lib/api/dto/user/CreateUserDTO';
	import { userService } from '$lib/service/userService';
	import { CustomToast } from '$lib/toast/custom.toast';
	let steam_id = $state('');
	let errorMessage = $state('');
	let isLoading = $state(false);

	async function handleSearch() {
		errorMessage = '';

		if (!steam_id.trim()) {
			errorMessage = 'Please enter a Steam ID';
			return;
		}

		if (steam_id.length !== 17) {
			errorMessage = 'Steam ID must be exactly 17 characters';
			return;
		}

		isLoading = true;

		try {
			const addResponse = await userService.addUser({ steam_id });
			if (addResponse.status === 409) {
				const getUserResponse = await userService.getUser(steam_id);
				// TODO got to user profile page
				console.log(getUserResponse.data);
				steam_id = '';
				return getUserResponse.data;
			}
			if (addResponse.status === 404) {
				errorMessage = 'Steam user not found';
				CustomToast.show({
					type: 'error',
					message: 'Steam user not found',
					position: 'top-right'
				});
			}
			if (addResponse.status === 200) {
				const userData = addResponse.data as CreationResponse;
				CustomToast.show({
					type: 'success',
					message: `${userData.data.user.username} added successfully!`,
					position: 'top-right'
				});
			}
			steam_id = '';
		} catch (error: any) {
			errorMessage = error?.message ?? 'An unexpected error occurred';
		} finally {
			isLoading = false;
		}
	}

	function handleInput() {
		if (errorMessage) {
			errorMessage = '';
		}
	}
</script>

<div class="flex items-center justify-center">
	<div class="flex w-44 flex-col gap-2">
		<label for="steam-id" class="mb-2 text-center text-2xl font-bold text-white">Steam ID</label>
		<input
			id="steam-id"
			type="text"
			placeholder="76561198088346306"
			maxlength="17"
			minlength="17"
			required
			autocomplete="off"
			bind:value={steam_id}
			oninput={handleInput}
			class="rounded-lg border-2 p-2 transition-colors {errorMessage
				? 'border-red-500 focus:border-red-600'
				: 'border-gray-600 focus:border-blue-500'}"
			onkeydown={(e) => {
				if (e.key !== 'Enter') return;
				handleSearch();
			}}
		/>
		{#if errorMessage}
			<p class="-mt-1 text-sm text-red-400">{errorMessage}</p>
		{/if}
		<button
			type="submit"
			onclick={handleSearch}
			disabled={isLoading}
			class="cursor-pointer rounded-xl bg-[#2a475e] p-2 text-white transition-colors duration-200 hover:bg-[#3e7899] disabled:cursor-not-allowed disabled:opacity-50"
		>
			{isLoading ? 'Searching...' : 'Search'}
		</button>
	</div>
</div>
