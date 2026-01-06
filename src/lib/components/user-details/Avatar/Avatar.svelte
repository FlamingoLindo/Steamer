<script lang="ts">
	import type { User } from '$lib/api/dto/GetUserDTO';
	import { getRingClass } from '$lib/utils/scripts/user/getRingClass.script';

	const { user }: { user: User } = $props();
	const ringClass = getRingClass(user.persona_state);
</script>

<img
	src={user.avatar}
	alt={user.username}
	title={user.steam_id}
	class="h-20 w-20 ring-3 {ringClass} rounded-xs"
/>
