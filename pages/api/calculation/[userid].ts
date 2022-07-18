// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Invoice from "../../../models/Invoice";
import conectarDB from "../../../lib/dbConnect";
import moment from "moment";

type Data = {
  name: string;
};

const currentYearlyAmount = (invoices) => {
  let totalAmount = 0;

  for (let i = 0; i < invoices.length; i++) {
    let time = moment(invoices.date, "YYYYMMDD").fromNow().split(" ");

    if (time[1] !== "year" && time[0] !== "in") {
      totalAmount += invoices[i].amount;
    }
  }
  return totalAmount;
};

const currentMonthAmount = (invoices) => {
  let totalAmount = 0;

  const today = new Date();
  const currentMonth = today.getMonth();

  for (let i = 0; i < invoices.length; i++) {
    let dateInvoice = new Date(invoices[i].date);
    let monthInvoice = dateInvoice.getMonth();
    if (currentMonth === monthInvoice) {
      totalAmount += invoices[i].amount;
    }
  }

  return totalAmount;
};

const lastMonthAmount = (invoices) => {
  let totalAmount = 0;

  const today = new Date();
  const currentMonth = today.getMonth();

  for (let i = 0; i < invoices.length; i++) {
    let dateInvoice = new Date(invoices[i].date);

    let monthInvoice = dateInvoice.getMonth();

    if (currentMonth - 1 === monthInvoice) {
      totalAmount += invoices[i].amount;
    }
  }

  return totalAmount;
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

        const calculations = {
          yearly: currentYearlyAmount(invoices),
          currentMonth: currentMonthAmount(invoices),
          lastMonthAmount: lastMonthAmount(invoices),
        };

        if (!invoices) {
          return res
            .status(200)
            .json({ success: false, data: "load invoices first" });
        }
        return res.status(200).json({ success: true, data: calculations });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }

    default:
      return res
        .status(500)
        .json({ success: false, error: "falla del servicor" });
  }
}
