<script lang="ts">
	import { getCountry } from '$lib/utils/scripts/user/getCountry';

	const { country }: { country: string } = $props();
	const user_country = getCountry(country);
</script>

<text>{user_country.countryname}</text>
<img
	src={user_country.flag_url}
	alt={user_country.countryname}
	title={user_country.countryname}
	class="h-8 w-8 shadow-lg transition-all duration-300 group-hover:border-[#171a21]"
/>
