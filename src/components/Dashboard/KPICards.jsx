import Card from "../UI/Card";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  UserIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import ProgressBar from "./ProgressBar";

const KPICards = () => {
  const kpiData = [
    {
      title: "Total Customers",
      value: "$48,568",
      change: "+12.5%",
      trend: "up",
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-blue-500" />,
      progress: 75,
      progressMax: 100,
      progressLabel: "Annual Target",
    },
    {
      title: "Total Vendors",
      value: "1,258",
      change: "+8.2%",
      trend: "up",
      icon: <UserIcon className="h-6 w-6 text-green-500" />,
      progress: 1580,
      progressMax: 2000,
      progressColor: "green",
      progressLabel: "Monthly Goal",
    },
    {
      title: "Avg Commission",
      value: "24,893",
      change: "-2.3%",
      trend: "down",
      icon: <UserIcon className="h-6 w-6 text-purple-500" />,
      progress: 83,
      progressColor: "purple",
      progressLabel: "Capacity",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpiData.map((kpi, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition ease-in  p-6"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {kpi.title}
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                {kpi.value}
              </p>
              <div className="flex items-center mt-2">
                <span
                  className={`inline-flex items-center text-sm font-medium ${
                    kpi.trend === "up"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {kpi.change}
                  {kpi.trend === "up" ? (
                    <ArrowTrendingUpIcon className="h-4 w-4 ml-1" />
                  ) : (
                    <ArrowTrendingDownIcon className="h-4 w-4 ml-1" />
                  )}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  vs last week
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-700">
              {kpi.icon}
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar
              value={kpi.progress}
              max={kpi.progressMax || 100}
              color={kpi.progressColor || "blue"}
              label={kpi.progressLabel}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
