<script>
	import SearchUser from '$lib/components/main-page/SearchUser/SearchUser.svelte';
	import UsersList from '$lib/components/main-page/UsersList/UsersList.svelte';
	export let data;
</script>

<SearchUser />
<UsersList {data} />
