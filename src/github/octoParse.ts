import { NextApiRequest } from 'next';

export function octoParse(req: NextApiRequest) {
  const { action, repository, issue, comment, installation } = req.body;
  const owner = repository.owner.login;
  const repo = repository.name;
  const installationId = installation.id;

  return {
    /**
     * Request Body `action`.
     */
    action,
    /**
     * Request Body `repository`.
     */
    repository,
    /**
     * Request Body `issue`.
     */
    issue,
    /**
     * Request Body `comment`.
     */
    comment,
    /**
     * Resposity's owner's Github username.
     */
    owner,
    /**
     * Resposity's name.
     */
    repo,
    /**
     * Github installationId of installed app.
     */
    installationId,
  };
}
