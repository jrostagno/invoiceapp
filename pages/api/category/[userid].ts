// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import conectarDB from "../../../lib/dbConnect";
import Category from "../../../models/Category";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { userid },
  } = req;

  await conectarDB();

  switch (method) {
    case "GET":
      try {
        const category = await Category.find({ userId: userid });

        if (category.length === 0) {
          return res
            .status(200)
            .json({ success: false, data: "No category load.." });
        }
        return res.status(200).json({ success: true, data: category });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res
        .status(500)
        .json({ success: false, error: "falla del servicor" });
  }
}
