import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Chart = ({ type, data }) => {
  let chartComponent = null;

  // Check the type prop to determine which chart to render
  if (type === "column") {
    // Render a column chart
    chartComponent = <Bar data={data} />;
  } else if (type === "round") {
    // Render a round chart
    chartComponent = <Pie data={data} />;
  }

  return <div className="Chart">{chartComponent}</div>;
};

export default Chart;
