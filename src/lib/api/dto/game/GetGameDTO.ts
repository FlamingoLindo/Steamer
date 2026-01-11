export interface GetGameResponseDTO {
    game: Game;
    status: string;
}

export interface Game {
    appid: string;
    header_image: string;
    name: string;
    screenshots: string[];
    short_description: string;
}
