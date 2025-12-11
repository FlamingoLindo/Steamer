export interface GetUserResponseDTO {
	status: string;
	user: User;
}

export interface User {
	steam_id: string;
	username: string;
	avatar: string;
	pf_url: string;
	country: string;
	current_game: null;
	persona_state: number;
	visibility: number;
	steam_created_at: Date;
}
