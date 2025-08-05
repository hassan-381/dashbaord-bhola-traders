import { useState } from "react";
import {
  ChevronDownIcon,
  XMarkIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "../UI/Dropdown";
import { Menu } from "@headlessui/react";

const Filters = () => {
  const [timeframe, setTimeframe] = useState("Last 7 days");
  const [industry, setIndustry] = useState("All Industries");
  const [region, setRegion] = useState("All Regions");

  const timeframes = ["Last 7 days", "Last 30 days", "Last 90 days"];
  const industries = [
    "All Industries",
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
  ];
  const regions = [
    "All Regions",
    "North America",
    "Europe",
    "Asia",
    "South America",
  ];

  const clearFilters = () => {
    setTimeframe("Last 7 days");
    setIndustry("All Industries");
    setRegion("All Regions");
  };

  const menuButtonClass =
    "inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600";

  const menuItemClass = (active, selected) =>
    `${
      active
        ? "bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300"
    }
     ${selected ? "font-semibold" : ""}
     block w-full px-4 py-2 text-sm text-left`;

  return (
    <div className=" px-4 bg-white dark:bg-gray-800 py-4 border-b rounded-md hover:shadow-lg transition ease-in border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <FunnelIcon className="h-5 w-5  text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filters
            </span>
          </div>

          <Dropdown
            buttonContent={
              <div className={menuButtonClass}>
                {timeframe}
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </div>
            }
          >
            {timeframes.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    onClick={() => setTimeframe(item)}
                    className={menuItemClass(active, timeframe === item)}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Dropdown>

          <Dropdown
            buttonContent={
              <div className={menuButtonClass}>
                {industry}
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </div>
            }
          >
            {industries.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    onClick={() => setIndustry(item)}
                    className={menuItemClass(active, industry === item)}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Dropdown>

          {/* Region Dropdown */}
          <Dropdown
            buttonContent={
              <div className={menuButtonClass}>
                {region}
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </div>
            }
          >
            {regions.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    onClick={() => setRegion(item)}
                    className={menuItemClass(active, region === item)}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Dropdown>
        </div>
        {/* Clear Button */}
        <button
          onClick={clearFilters}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <XMarkIcon className="h-4 w-4 mr-1" />
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Filters;
