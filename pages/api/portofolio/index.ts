/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { portofolio } from '../../../data/porto';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(portofolio);
}
