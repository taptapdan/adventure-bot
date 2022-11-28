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

## Deploying to Vercel

- When adding `GITHUB_SECRET_KEY` environment variable on Vercel, do not replace newlines.

## Credits

- [Game Icons](https://game-icons.net/) is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
