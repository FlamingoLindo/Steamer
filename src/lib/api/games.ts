import { PUBLIC_API_URL } from '$env/static/public';

export interface ApiResponse<T> {
    status: number;
    data: T;
}

class GamesApi {
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

    async getGame<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'GET' });
    }
}

export const gameApi = new GamesApi(PUBLIC_API_URL);
