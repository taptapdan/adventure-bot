import { NextApiRequest } from 'next';
import { octoParse } from '@/github/octoParse';

export function log(req: NextApiRequest, message: string) {
  const { owner, repo, issue } = octoParse(req);
  const tag = `(${owner}:${repo}:${issue.number})`;

  const logMessage = `🤖 ${message} ${tag}`;

  // eslint-disable-next-line no-console
  console.log(logMessage);

  return logMessage;
}
