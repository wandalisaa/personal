import type { NextApiRequest, NextApiResponse } from 'next';
import { portofolio } from '../../../data/porto';


export default function portofolioHandler({ query: { id } }: { query: {id: string}}, res: NextApiResponse) {
  const filtered = portofolio.filter((p) => p.id === id);

  // Portofolio with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Portofolio with id: ${id} not found.` });
  }
}
