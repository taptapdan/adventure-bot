# Choose Your Own Adventure Bot

- adventure-bot is a Choose Your Own Adventure Bot.
- Play within GitHub Issues.
- Runs as a GitHub App, using the GitHub SDK, GitHub Webhooks, and Node.

<p style="text-align: center" align="center">
  <img src="public/taptapbot.jpg" alt="" width="400" />
</p>

## Development

- Copy `.env.example` to `.env.local`.
- Update `.env.local`
  - Update `REPO_URL="..."` with the repository URL.
    - Example: `https://taptapdan.github.com/adventure-bot`.
  - Update `GITHUB_APP_ID="..."` with the GitHub App ID.
    - Grab the ID from Settings > Developer Settings > GitHub Apps > Edit > General > About.
    - Example: https://github.com/settings/apps/taptapbot
  - Update `GITHUB_SECRET_KEY="..."` with the GitHub App private key.
    - Grab the private key from Settings > Developer Settings > GitHub Apps > Edit > General > Private Keys.
    - Example: https://github.com/settings/apps/taptapbot
    - Replace any newlines in the private key with `\n`.
- `yarn dev`
- `yarn ngrok`
  - Update your GitHub App's Webhook URL to `http://{your-ngrok-domain.io}/api/hook`.

## Deploying to Vercel

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/taptapdan/adventure-bot">
    <img src="https://vercel.com/button" alt="Deploy with Vercel">
  </a>
</p>

- You'll need to [Create a GitHub App](https://docs.github.com/en/developers/apps/
  building-github-apps/creating-a-github-app) for your own deploy of adventure-bot.
  - Webhook URL: `https://{your-domain}/api/hook`
- After deploying, add Environment Variables (Project > Settings > Environment Variables).
  - `REPO_URL` is the URL of your cloned adventure-bot repo.
  - `GITHUB_APP_ID` and `GITHUB_SECRET_KEY` from your GitHub App developer settings.
  - When adding `GITHUB_SECRET_KEY` environment variable on Vercel, do not replace newlines.

## Credits

- [Game Icons](https://game-icons.net/) is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
