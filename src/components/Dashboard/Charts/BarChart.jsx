import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import Card from "../../UI/Card";
import {
  EllipsisHorizontalIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const BarChart = () => {
  const data = {
    labels: ["North America", "Europe", "Asia", "South America", "Africa"],
    datasets: [
      {
        label: "Users by Region",
        data: [450, 320, 580, 210, 150],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(236, 72, 153, 0.7)",
          "rgba(139, 92, 246, 0.7)",
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(16, 185, 129)",
          "rgb(255, 0, 0)",
          "rgb(236, 72, 153)",
          "rgb(139, 92, 246)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card className="hover:shadow-lg transition ease-in">
      <div className="flex  items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Top Regions
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
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default BarChart;
