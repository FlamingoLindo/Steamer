<script lang="ts">
	import CustomError from '$lib/components/CustomError/CustomError.svelte';
	import Avatar from '$lib/components/user-details/Avatar/Avatar.svelte';
	import Country from '$lib/components/user-details/Country/Country.svelte';
	import UserName from '$lib/components/user-details/UserName/UserName.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.userPromise}
	<text>Loading...</text>
{:then response}
	{@const user = response.data.user}

	<UserName username={user.username} />
	<Avatar {user} />
	<Country country={user.country} />
{:catch error}
	<CustomError {error} message="Error loading user" />
{/await}
