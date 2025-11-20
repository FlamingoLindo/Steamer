<script lang="ts">
	import { userService } from '$lib/service/userService';

	let steam_id: string = '';

	async function handleSearch() {
		if (!steam_id.trim()) return;

		const addResponse = await userService.addUser({ steam_id });

		if (addResponse.status === 409) {
			const getUserResponse = await userService.getUser(steam_id);
			console.log(getUserResponse.data);
			steam_id = '';
			return getUserResponse.data;
		}
		steam_id = '';
	}
</script>

<div class="flex items-center justify-center">
	<div class="flex flex-col gap-2">
		<label for="steam-id">Steam ID</label>
		<input
			id="steam-id"
			type="text"
			autocomplete="off"
			bind:value={steam_id}
			onkeydown={async (e) => {
				if (e.key !== 'Enter') return;
				handleSearch();
			}}
		/>
		<button type="submit" onclick={handleSearch} class="cursor-pointer">Search</button>
	</div>
</div>
