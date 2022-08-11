// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Invoice from "../../../models/Invoice";
import conectarDB from "../../../lib/dbConnect";
import { InvoiceProps, Invoices } from "../../../types";

type Data = {
  name?: string;
  success: boolean;
  invoice?: InvoiceProps;
  error?: any;
  data?: Invoices;
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
        const invoices = await Invoice.find({ userId: userid });

        if (!invoices) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: invoices });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res
        .status(500)
        .json({ success: false, error: "falla del servicor" });
  }
}
