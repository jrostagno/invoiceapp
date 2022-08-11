// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../lib/dbConnect";
import Invoice from "../../models/Invoice";
import { InvoiceProps } from "../../types";

type Data = {
  name?: string;
  success: boolean;
  invoice?: InvoiceProps;
  error?: any;
  data?: InvoiceProps;
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
    case "DELETE":
      try {
        const invoice = await Invoice.findByIdAndDelete(id);
        if (!invoice) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: invoice });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    case "GET":
      try {
        const invoice = await Invoice.findById(id);
        if (!invoice) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: invoice });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    case "PUT":
      try {
        const invoiceUpdate = await Invoice.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!invoiceUpdate) {
          return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, data: invoiceUpdate });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res
        .status(500)
        .json({ success: false, error: "falla del servicor" });
  }
}
