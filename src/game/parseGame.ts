import type { NextApiRequest } from 'next';
import { parseGameState, parseGameTurnType } from '@/game';

export function parseGame(req: NextApiRequest) {
  const gameTurn = parseGameTurnType(req.body);
  const gameState = parseGameState(req.body.issue.body);

  const playerAction = req.body.comment?.body
    ? parseInt(req.body.comment.body, 10)
    : null;

  return { gameTurn, gameState, playerAction };
}
