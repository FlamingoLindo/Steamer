import { userService } from '$lib/service/userService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	return {
		usersPromise: userService.listUsers(page)
	};
};
