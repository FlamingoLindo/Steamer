import type { CreateUserDTO } from '$lib/api/dto/createUserDTO';
import type { ListUsersResponseDTO } from '$lib/api/dto/ListUsersDTO';
import { userApi } from '$lib/api/users';

export const userService = {
	async addUser(body: CreateUserDTO) {
		return userApi.createUser('users', body);
	},

	async getUser(steam_id: string) {
		return userApi.getUser(`users/user/${steam_id}`);
	},

	async listUsers() {
		return userApi.listUsers<ListUsersResponseDTO>('users');
	}
};
