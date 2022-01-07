import type { NextApiRequest, NextApiResponse } from "next";
import { experiences } from "../../../data/experiences";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(experiences)
  }