import { gameService } from '$lib/service/gameService';
import { userService } from '$lib/service/userService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const steam_id = params.steam_id;
	const userPromise = userService.getUser(steam_id);

	return {
		userPromise,
		gamePromise: userPromise.then((response) => {
			const gameid = response.data.user.gameid;
			if (gameid) {
				return gameService.getGame(gameid);
			}
			return null;
		})
	};
};
