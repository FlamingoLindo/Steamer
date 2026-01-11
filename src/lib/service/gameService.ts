import type { Game, GetGameResponseDTO } from "$lib/api/dto/game/GetGameDTO";
import { gameApi } from "$lib/api/games";

export const gameService = {

    async getGame(appid: string): Promise<{ status: number; data: GetGameResponseDTO }> {
        const response = await gameApi.getGame<{ data: { game: Game }, status: string }>(`games/game/${appid}`);
        return {
            status: response.status,
            data: {
                game: response.data.data.game,
                status: response.data.status
            }
        };
    },
};
