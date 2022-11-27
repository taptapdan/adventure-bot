import type { NextApiRequest, NextApiResponse } from 'next';
import { octoAuth } from '@/github';
import { Response, requireEnv, sendResponse } from '@/server';
import {
  ROOM_INTRO,
  Turn,
  handleTurn,
  parseGame,
  renderGameStateLost,
  renderRoom,
  updateBodyWithGameState,
} from '@/game';

requireEnv(['REPO_URL', 'GITHUB_APP_ID', 'GITHUB_PRIVATE_KEY']);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  /**
   * Authenticate bot.
   */
  const app = await octoAuth(req);

  /**
   * Parse game turn type, game state, player actions.
   */
  const { gameTurn, gameState, playerAction } = parseGame(req);

  /**
   * Handle current turn.
   */
  switch (gameTurn) {
    case Turn.UNKNOWN:
      return sendResponse(req, res, `Bot does not handle turn type.`);

    case Turn.BOT:
      return sendResponse(req, res, 'Bot does not respond to bots.');

    case Turn.SPY:
      return sendResponse(req, res, 'Only the original player can take turns.');

    case Turn.NEW: {
      // Start new players in the introduction room with no items.
      const nextGameState = { room: ROOM_INTRO, inventory: [] };

      // Update original issue with new game state.
      const issueBody = updateBodyWithGameState(app.issue.body, nextGameState);
      await app.issueUpdate(issueBody);

      // Post comment with room message.
      const { room: commentBody } = renderRoom(nextGameState);
      await app.commentPost(commentBody);

      return sendResponse(req, res, '(New) Turn complete.');
    }

    case Turn.TURN: {
      // Handle lost game state. If the game state isn't found in the original
      // issue post we are unable to continue the game.
      if (!gameState) {
        const { room: commentBody } = renderGameStateLost();
        await app.commentPost(commentBody);
        await app.issueClose(app.issue.body);
        return sendResponse(req, res, 'End. Lost game state.');
      }

      // Generate next game state (room and inventory).
      const { gameState: nextGameState, isValidAction } = handleTurn(
        gameState,
        playerAction,
      );

      // Update original issue with new game state.
      const issueBody = updateBodyWithGameState(app.issue.body, nextGameState);
      await app.issueUpdate(issueBody);

      // Post comment with room message.
      const { room: commentBody } = renderRoom(nextGameState, isValidAction);
      await app.commentPost(commentBody);

      return sendResponse(req, res, 'Turn complete.');
    }
  }
}
