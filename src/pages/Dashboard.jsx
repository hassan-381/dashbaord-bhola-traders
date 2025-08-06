import { useEffect, useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
import KPICards from "../components/Dashboard/KPICards";
import UserTable from "../components/Dashboard/UserTable";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${
        darkMode ? "dark" : ""
      }`}
    >
      <main className="flex-1 overflow-y-auto p-6">
        <KPICards />
        {/* <div className="mt-6">
            <Filters />
          </div> */}

        {/* <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-6">
            <div className="lg:col-span-2">
              <AreaChart />
            </div>
            <div>
              <BarChart />
            </div>
            <div>
              <PieChart />
            </div>
          </div> */}

        <div className="mt-6">
          <UserTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
