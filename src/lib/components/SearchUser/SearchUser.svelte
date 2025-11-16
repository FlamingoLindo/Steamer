<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';

	let steam_id: string = '';

	async function addUser(steam_id: string) {
		const response = await fetch(`${PUBLIC_API_URL}api/users`, {
			method: 'POST',
			body: JSON.stringify({ steam_id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		return { status: response.status, data };
	}

	async function getUser(steam_id: string) {
		const response = await fetch(`${PUBLIC_API_URL}api/users/user/${steam_id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		return data;
	}

	async function handleSearch() {
		if (!steam_id.trim()) return;

		const addResponse = await addUser(steam_id);
		if (addResponse.status === 409) {
			const userData = await getUser(steam_id);
			console.log('User data:', userData);
			return userData;
		}
		steam_id = '';
	}
</script>

<div class="flex min-h-screen items-center justify-center">
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
