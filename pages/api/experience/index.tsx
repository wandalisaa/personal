/* eslint-disable import/no-unresolved */
import type { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line import/extensions
import { experiences } from '../../../data/experiences';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(experiences);
}
