import { useEffect, useState } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";
import KPICards from "./components/Dashboard/KPICards";
import Filters from "./components/Dashboard/Filters";
import AreaChart from "./components/Dashboard/Charts/AreaChart";
import BarChart from "./components/Dashboard/Charts/BarChart";
import PieChart from "./components/Dashboard/Charts/PieChart";
import UserTable from "./components/Dashboard/UserTable";

function App() {
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
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Navbar
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          setMobileSidebarOpen={setMobileSidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

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
    </div>
  );
}

export default App;
