export type GameState = {
  room: number;
  inventory: number[];
};

export const gameStatePre = '<!-- GAME_CODE_START:';
export const gameStatePost = ':GAME_CODE_END -->';
export const gameStateRegex = new RegExp(`${gameStatePre}(.*)${gameStatePost}`);
