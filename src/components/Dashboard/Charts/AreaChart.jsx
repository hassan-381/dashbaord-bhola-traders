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
  Filler,
} from "chart.js";
import {
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "User Growth",
        data: [120, 190, 170, 220, 300, 280, 350],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Progress Target",
        data: [100, 150, 200, 250, 300, 350, 400],
        borderColor: "rgba(16, 185, 129, 0.8)",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " users";
            }
            return label;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: 400,
            yMax: 400,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              content: "Yearly Target",
              enabled: true,
              position: "right",
            },
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Users",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  return (
    <div className="bg-white hover:shadow-lg transition ease-in dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          User Growth with Progress Target
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
      <div className="h-80">
        <Line data={data} options={options} />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Actual Growth
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Target Progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
