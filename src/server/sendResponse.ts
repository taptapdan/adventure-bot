import type { NextApiRequest, NextApiResponse } from 'next';
import { log } from '@/server';

export type Response = {
  message: string;
};

export function sendResponse(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
  message: string,
) {
  const logMessage = log(req, message);
  return res.status(200).json({ message: logMessage });
}
