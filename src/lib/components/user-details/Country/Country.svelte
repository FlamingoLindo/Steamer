<script lang="ts">
	import { getCountry } from '$lib/utils/scripts/user/getCountry';

	const { country }: { country: string } = $props();
	const user_country = getCountry(country);
</script>

<div class="flex items-center gap-4">
	<img
		src={user_country.flag_url}
		alt={user_country.countryname}
		title={user_country.countryname}
		class="h-10 w-14"
	/>
	<text class="font-semibold">{user_country.countryname}</text>
</div>
