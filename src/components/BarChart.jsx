// src/components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    datasets: [
      {
        data: [1, 5, 3, 8, 4, 25, 7, 9, 18, 2, 4],
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Change the bar color
        borderColor: "rgba(54, 162, 235, 1)", // Change the border color
        borderWidth: 1,
        borderRadius: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Activity",
        align: "start", // Align title to the left
        position: "top",
        color: "white", // Change the title color
        font: {
          size: 20, // Optional: change the font size of the title
          weight: "bold", // Optional: make the title bold
        },
      },
    },
  };

  return (
    <Box height="300px">
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;
