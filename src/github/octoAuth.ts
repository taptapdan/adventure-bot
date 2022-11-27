// https://github.com/octokit/core.js

// taptapbot deliveries, include installation.id
// https://github.com/settings/apps/taptapbot/advanced

import { NextApiRequest } from 'next';
import { Octokit } from '@octokit/core';
import { createAppAuth } from '@octokit/auth-app';
import { octoParse } from './octoParse';

export async function octoAuth(req: NextApiRequest) {
  const { installationId, owner, repo, action, issue, comment } =
    octoParse(req);

  const app = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.GITHUB_APP_ID,
      privateKey: process.env.GITHUB_PRIVATE_KEY,
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
