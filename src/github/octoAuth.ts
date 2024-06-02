// https://github.com/octokit/core.js

// taptapbot deliveries, include installation.id
// https://github.com/settings/apps/taptapbot/advanced

import { NextApiRequest } from 'next';
import { Octokit } from '@octokit/core';
import { createAppAuth } from '@octokit/auth-app';
import { octoParse } from '@/github';

export async function octoAuth(req: NextApiRequest) {
  const { installationId, owner, repo, action, issue, comment } =
    octoParse(req);

  // https://github.com/octokit/auth-app.js/issues/465
  const privateKey = (process.env.GITHUB_PRIVATE_KEY || '').replace(
    /\\n/g,
    '\n',
  );

  const app = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.GITHUB_APP_ID,
      privateKey,
      installationId,
    },
  });

  async function commentPost(body: any) {
    await app.request(
      'POST /repos/{owner}/{repo}/issues/{issue_number}/comments',
      {
        owner,
        repo,
        issue_number: issue.number,
        body,
      },
    );
  }

  async function issueClose(updatedBody: any) {
    await app.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
      owner,
      repo,
      issue_number: issue.number,
      body: updatedBody,
      state: 'closed',
    });
  }

  async function issueUpdate(updatedBody: any) {
    await app.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
      owner,
      repo,
      issue_number: issue.number,
      body: updatedBody,
    });
  }

  return { issueClose, issueUpdate, commentPost, action, issue, comment };
}
