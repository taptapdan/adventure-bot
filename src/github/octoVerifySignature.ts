import * as crypto from 'crypto';
import { NextApiRequest } from 'next';

const GITHUB_WEBHOOK_SECRET: string | undefined =
  process.env.GITHUB_WEBHOOK_SECRET;

export const octoVerifySignature = (req: NextApiRequest) => {
  if (!GITHUB_WEBHOOK_SECRET) {
    // Ensure we've set this environment variable.
    return false;
  }

  const signatureTrusted = crypto
    .createHmac('sha256', GITHUB_WEBHOOK_SECRET)
    .update(JSON.stringify(req.body))
    .digest('hex');

  let trusted = Buffer.from(`sha256=${signatureTrusted}`, 'ascii');

  const signatureUntrusted = Array.isArray(req.headers['x-hub-signature-256'])
    ? req.headers['x-hub-signature-256'][0]
    : req.headers['x-hub-signature-256'];

  if (!signatureUntrusted) {
    // Ensure the GitHub has a secret specified.
    return false;
  }

  let untrusted = Buffer.from(signatureUntrusted, 'ascii');

  return crypto.timingSafeEqual(trusted, untrusted);
};
