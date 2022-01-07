// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { portofolio } from "../../../data/porto";

type Data = {
  id: number;
  title: string;
  type: string;
  photo: string;
  event: string;
  desc: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json(portofolio)
  }