export interface ListUsersResponseDTO {
	status: string;
	pagination: Pagination;
	users: UserDTO[];
}

export interface UserDTO {
	steam_id: string;
	username: string;
	avatar: string;
	pf_url: string;
	current_game: string | null;
}

export interface Pagination {
	total_in_page: number;
	total: number;
	total_pages: number;
	current_page: number;
	page_size: number;
}
