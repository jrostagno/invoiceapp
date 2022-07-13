// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../lib/dbConnect";
import Invoice from "../../models/Invoice";

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
    case "POST":
      try {
        const invoice = new Invoice(req.body);
        await invoice.save();

        return res.status(200).json({ success: true, invoice });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    case "GET":
      try {
        const invoice = await Invoice.find();
        if (!invoice) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: invoice });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res
        .status(500)
        .json({ success: false, error: "falla del servicor" });
  }
  res.status(200).json({ name: "John Doe" });
}
