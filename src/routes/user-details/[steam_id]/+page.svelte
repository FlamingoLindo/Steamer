<!-- TODO https://store.steampowered.com/api/appdetails?appids=220 -->
<!-- TODO get user steam level  https://steamcommunity.com/profiles/76561198088346306/?html=1 -->

<script lang="ts">
	import CustomError from '$lib/components/CustomError/CustomError.svelte';
	import GameCarousel from '$lib/components/shared/GameCarousel/GameCarousel.svelte';
	import GameHeader from '$lib/components/shared/GameHeader/GameHeader.svelte';
	import Avatar from '$lib/components/user-details/Avatar/Avatar.svelte';
	import Country from '$lib/components/user-details/Country/Country.svelte';
	import CurrentGame from '$lib/components/user-details/CurrentGame/CurrentGame.svelte';
	import SteamCreatedAt from '$lib/components/user-details/SteamCreatedAt/SteamCreatedAt.svelte';
	import UserName from '$lib/components/user-details/UserName/UserName.svelte';
	import Visibility from '$lib/components/user-details/Visibility/Visibility.svelte';
	import UserDetailsSkeleton from '$lib/components/skeletons/UserDetailsSkeleton/UserDetailsSkeleton.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

{#await data.userPromise}
	<UserDetailsSkeleton />
{:then response}
	{@const user = response.data.user}

	<div class="flex items-center justify-center py-8">
		<div class="w-full max-w-5xl px-4">
			<div class="mb-8 rounded-xl border-2 border-[#2a475e] bg-[#c7d5e0] p-8 shadow-2xl">
				<div class="flex items-center gap-4">
					<Avatar {user} />
					<UserName username={user.username} pf_url={user.pf_url} />

					{#if user.visibility !== 1 && user.country}
						<div class="ml-auto">
							<Country country={user.country} />
						</div>
					{/if}
				</div>

				<div class="mt-4 flex justify-center">
					<Visibility visibility={user.visibility} />
				</div>

				{#if user.visibility !== 1}
					<SteamCreatedAt steam_created_at={user.steam_created_at} />

					<div class="mt-4 flex flex-col items-center justify-center">
						<CurrentGame
							current_game={user.current_game}
							gameid={user.gameid}
							gamePromise={data.gamePromise}
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
{:catch error}
	<CustomError {error} message="Error loading user" />
{/await}
