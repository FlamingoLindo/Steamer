export interface ListUsersResponseDTO {
	status: string;
	count: number;
	users: UserDTO[];
}

export interface UserDTO {
	steam_id: string;
	username: string;
	avatar: string;
	pf_url: string;
	current_game: string | null;
}
