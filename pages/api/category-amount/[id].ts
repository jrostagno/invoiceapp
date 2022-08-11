// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../lib/dbConnect";
import Category from "../../../models/Category";
import { CategoyAmount } from "../../../types";

type Data = {
  name?: string;
  error?: any;
  success: boolean;
  data?: CategoyAmount[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { id },
  } = req;

  await conectarDB();

  switch (method) {
    case "PUT":
      try {
        const amountUpdate = await Category.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!amountUpdate) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: amountUpdate });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res
        .status(500)
        .json({ success: false, error: "falla del servicor" });
  }
}
