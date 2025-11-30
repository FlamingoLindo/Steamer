<script>
	import SearchUser from '$lib/components/SearchUser/SearchUser.svelte';
	import UsersList from '$lib/components/UsersList/UsersList.svelte';
	
	export let data;
</script>

<SearchUser />
<UsersList {data} />
