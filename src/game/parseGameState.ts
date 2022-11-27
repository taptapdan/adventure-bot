import { GameState, gameStateRegex } from '@/game';

export function parseGameState(issueBody: string | null) {
  let gameState: GameState | null;
  const body = issueBody || '';

  try {
    const gameStateMatch = body.match(gameStateRegex) || [];
    const [, gameStateString] = gameStateMatch;

    if (!gameStateString) {
      return null;
    }

    gameState = JSON.parse(gameStateString);
  } catch (err) {
    console.error('Game code could not be parsed.');
    console.error(err);
    return null;
  }

  return gameState as GameState;
}
