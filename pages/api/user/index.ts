// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import conectarDB from "../../../lib/dbConnect";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await conectarDB();

  switch (method) {
    case "GET":
      try {
        const user = await User.find();

        if (!user) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: user });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res.status(500).json({ success: false, error: "Server fail" });
  }
}
