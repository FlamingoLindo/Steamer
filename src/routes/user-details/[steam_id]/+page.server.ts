import { userService } from '$lib/service/userService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const steam_id = params.steam_id;
	return {
		userPromise: userService.getUser(steam_id)
	};
};
