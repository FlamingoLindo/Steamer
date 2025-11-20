import { PUBLIC_API_URL } from '$env/static/public';
import type { CreateUserDTO } from './dto/createUserDTO';

export interface ApiResponse<T> {
	status: number;
	data: T;
}

class UserApi {
	private apiUrl: string;

	constructor(apiUrl: string) {
		this.apiUrl = apiUrl;
	}

	private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
		const url = `${this.apiUrl}${endpoint}`;

		const config: RequestInit = {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...options.headers
			}
		};

		try {
			const response = await fetch(url, config);
			const data = await response.json();

			return {
				status: response.status,
				data
			};
		} catch (error) {
			console.error('Request error:', error);
			throw error;
		}
	}

	async createUser<T>(endpoint: string, body: CreateUserDTO): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	async getUser<T>(endpoint: string): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { method: 'GET' });
	}

	async listUsers<T>(endpoint: string): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { method: 'GET' });
	}
}

export const userApi = new UserApi(PUBLIC_API_URL);
