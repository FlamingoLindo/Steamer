import { PUBLIC_API_URL } from '$env/static/public';
import type { CreateUserDTO } from './dto/user/CreateUserDTO';

export interface ApiResponse<T> {
	status: number;
	data: T;
}

class UserApi {
	private apiUrl: string;

	constructor(apiUrl: string) {
		this.apiUrl = apiUrl;
	}

	private async request<T>(
		endpoint: string,
		options: RequestInit = {},
		queryParams?: Record<string, string | number>
	): Promise<ApiResponse<T>> {
		let url = `${this.apiUrl}${endpoint}`;

		if (queryParams) {
			const params = new URLSearchParams();
			Object.entries(queryParams).forEach(([key, value]) => {
				params.append(key, String(value));
			});
			url += `?${params.toString()}`;
		}

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

	async listUsers<T>(
		endpoint: string,
		queryParams?: Record<string, string | number>
	): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { method: 'GET' }, queryParams);
	}
}

export const userApi = new UserApi(PUBLIC_API_URL);
