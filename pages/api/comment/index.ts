// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comment";

type Data = {
  id: number;
  name: string;
  text: string;
  time: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const { comment } = req.body;
    const { nama } = req.body;
    const newComment = {
      id: Date.now(),
      name: nama,
      text: comment,
      time: Date.now(),
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
