import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Vendor from "./pages/Vender";
import { useState, useEffect } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900`}>
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
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/vendor" element={<Vendor />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
