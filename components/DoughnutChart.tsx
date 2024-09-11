"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({
  accounts,
}: {
  accounts: DoughnutChartProps;
}) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1230, 2214, 123],
        backgroundColor: ["#0737b6", "#2265d8", "#2F91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: "40%",
      }}
    />
  );
};
