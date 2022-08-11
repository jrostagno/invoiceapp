import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import React, { FC } from "react";
import { InvoiceGraphicsProps } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { ChartData, ScatterDataPoint } from "chart.js";

const InvoiceGraphics: FC<InvoiceGraphicsProps> = ({ invoices, labels }) => {
  const data: ChartData<"line", (number | ScatterDataPoint | null)[], unknown> =
    {
      labels,
      datasets: [
        {
          label: "Invoices",
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: invoices,
        },
      ],
    };

  return <Line data={data}></Line>;
};

export default InvoiceGraphics;
