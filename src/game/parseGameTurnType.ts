// Need to extend detection?
// - https://github.com/octokit/webhooks
// - https://github.com/doowb/typeof-github-event
// - https://github.com/orta/github-webhook-event-types

export enum Turn {
  UNKNOWN,
  NEW,
  TURN,
  SPY,
  BOT,
}

export function parseGameTurnType(body: any) {
  const { action, issue, comment } = body;

  const isIssueComment = action === 'created' && issue && comment;
  const isIssueOpened = action === 'opened' && issue && !comment;

  // Detect if issue/comment created by bot. Never respond to bots.
  // This can cause an infinite loop if the bot is self (most likely).
  const isUser =
    (isIssueComment && comment?.user.type === 'User') ||
    (isIssueOpened && issue.user.type === 'User');
  const isBot = !isUser;

  // Detect if user commenting is the same as user that created the issue.
  // We don't want other Github users to intefere in an in-progress game.
  const issueUser = issue.user.login;
  const commentUser = comment?.user.login;
  const isUsersGame = issueUser === commentUser;

  if (isBot) return Turn.BOT;
  else if (isIssueComment && !isUsersGame) return Turn.SPY;
  else if (isIssueComment && isUsersGame) return Turn.TURN;
  else if (isIssueOpened) return Turn.NEW;
  else return Turn.UNKNOWN;
}
