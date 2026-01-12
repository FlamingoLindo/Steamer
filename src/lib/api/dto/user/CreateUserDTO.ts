export interface CreateUserDTO {
	steam_id: string;
}

export interface CreationResponse {
	data: CreationData;
	status: string;
}

export interface CreationData {
	user: User;
}

export interface User {
	avatar: string;
	pf_url: string;
	username: string;
	steam_id?: string;
	current_game?: string;
	gameid?: string
}
