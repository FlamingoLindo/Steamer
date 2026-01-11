import type { CreateUserDTO } from '$lib/api/dto/user/CreateUserDTO';
import type { GetUserResponseDTO } from '$lib/api/dto/user/GetUserDTO';
import type { ListUsersResponseDTO } from '$lib/api/dto/user/ListUsersDTO';
import { userApi } from '$lib/api/users';

export const userService = {
	async addUser(body: CreateUserDTO) {
		return userApi.createUser('users', body);
	},

	async getUser(steam_id: string) {
		return userApi.getUser<GetUserResponseDTO>(`users/user/${steam_id}`);
	},

	async listUsers(page?: number) {
		const queryParams = page ? { page } : undefined;
		return userApi.listUsers<ListUsersResponseDTO>('users', queryParams);
	}
};
