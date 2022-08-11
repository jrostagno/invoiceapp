// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Category from "../../../models/Category";
import conectarDB from "../../../lib/dbConnect";
import { PostcategoryProps } from "../../../types";

type Data = {
  name?: string;
  success: boolean;
  error?: any;
  catAmount?: PostcategoryProps;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await conectarDB();

  switch (method) {
    case "POST":
      try {
        const catAmount = new Category(req.body);
        await catAmount.save();

        return res.status(200).json({ success: true, catAmount });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }

    default:
      return res.status(500).json({ success: false, error: "Server fail" });
  }
}
