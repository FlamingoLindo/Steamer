<!-- TODO https://store.steampowered.com/api/appdetails?appids=220 -->

<script lang="ts">
	import CustomError from '$lib/components/CustomError/CustomError.svelte';
	import Avatar from '$lib/components/user-details/Avatar/Avatar.svelte';
	import Country from '$lib/components/user-details/Country/Country.svelte';
	import CurrentGame from '$lib/components/user-details/CurrentGame/CurrentGame.svelte';
	import SteamCreatedAt from '$lib/components/user-details/SteamCreatedAt/SteamCreatedAt.svelte';
	import UserName from '$lib/components/user-details/UserName/UserName.svelte';
	import Visibility from '$lib/components/user-details/Visibility/Visibility.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

{#await data.userPromise}
	<text>Loading...</text>
{:then response}
	{@const user = response.data.user}

	<UserName username={user.username} pf_url={user.pf_url} />
	<Avatar {user} />
	<Country country={user.country} />
	<Visibility visibility={user.visibility} />
	<SteamCreatedAt steam_created_at={user.steam_created_at} />
	<CurrentGame current_game={user.current_game} />
{:catch error}
	<CustomError {error} message="Error loading user" />
{/await}
