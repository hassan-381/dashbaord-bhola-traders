import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);
import Card from "../../UI/Card";
import {
  EllipsisHorizontalIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const PieChart = () => {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(16, 185, 129)",
          "rgb(245, 158, 11)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <Card className="hover:shadow-lg transition ease-in">
      <div className="flex  items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Device Types
        </h3>
        <div className="flex space-x-2">
          <button className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <ArrowDownTrayIcon className="h-5 w-5" />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className=" flex justify-center h-[400px]">
        <Pie data={data} options={options} />
      </div>
    </Card>
  );
};

export default PieChart;
