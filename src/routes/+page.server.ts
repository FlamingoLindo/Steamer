import { userService } from '$lib/service/userService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		usersPromise: userService.listUsers()
	};
};
