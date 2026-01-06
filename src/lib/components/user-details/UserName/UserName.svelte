<script lang="ts">
	const { username, pf_url }: { username: string; pf_url: string } = $props();
</script>

<h1 title={`Open ${username}'s profile`} class="text-2xl font-bold">
	<a href={pf_url} target="_blank">{username}</a>
</h1>
