import { GameState, gameStatePre, gameStatePost, gameStateRegex } from '@/game';

function stringifygameState(code: GameState) {
  return `${gameStatePre}${JSON.stringify(code)}${gameStatePost}`;
}

export function updateBodyWithGameState(
  currentIssueBody: string | null,
  newGameState: GameState,
) {
  const body = currentIssueBody || '';

  // Determine if currentIssueBody contains gameState.
  if (gameStateRegex.test(body)) {
    // If it does, then replace existing gameState with newGameState.
    return body.replace(gameStateRegex, stringifygameState(newGameState));
  } else {
    // If it does not, then append newGameState.
    return body + stringifygameState(newGameState);
  }
}
