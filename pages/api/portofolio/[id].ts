import type { NextApiRequest, NextApiResponse } from 'next';
import { portofolio } from '../../../data/porto';

type Data = {
    id: string;
    title: string;
    type: string;
    photo: string;
    event: string;
    desc: string;
  };

export default function portofolioHandler({ query: { id } }, res: NextApiResponse<Data>) {
  const filtered = portofolio.filter((p) => p.id === id);

  // Portofolio with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Portofolio with id: ${id} not found.` });
  }
}
