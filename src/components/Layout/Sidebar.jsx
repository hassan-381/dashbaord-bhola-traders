import { NavLink } from "react-router-dom";
import {
  ChartBarIcon,
  UsersIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
}) => {
  const navItems = [
    { name: "Dashboard", icon: ChartBarIcon, path: "/" },
    { name: "Users", icon: UsersIcon, path: "/users" },
    { name: "Products", icon: ShoppingBagIcon, path: "/products" },
    { name: "Reports", icon: DocumentTextIcon, path: "/reports" },
    { name: "Settings", icon: CogIcon, path: "/settings" },
  ];

  const handleCollapseClick = () => {
    setSidebarOpen(!sidebarOpen);
    setMobileSidebarOpen(false);
  };

  return (
    <aside
      className={`fixed inset-y-0 z-40 flex flex-col bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 
      ${sidebarOpen ? "w-64" : "w-20"} 
      ${mobileSidebarOpen ? "left-0 w-64" : "-left-full md:left-0"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        {sidebarOpen ? (
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            IT BEAM
          </span>
        ) : (
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            IB
          </span>
        )}
      </div>

      {/* User Profile */}
      <div
        className={`flex items-center p-4 border-b border-gray-200 dark:border-gray-700 ${
          !sidebarOpen && "justify-center"
        }`}
      >
        <UserCircleIcon className="h-8 w-8 text-gray-600 dark:text-gray-300" />
        {sidebarOpen && (
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Ali
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile Links */}
      <div className="p-2 border-t border-gray-200 dark:border-gray-700">
        <ul>
          <li>
            <NavLink
              to="/profile"
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <UserCircleIcon className="h-5 w-5" />
              {sidebarOpen && <span className="ml-3">Your Profile</span>}
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => alert("Sign out")}
              className="w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              {sidebarOpen && <span className="ml-3">Sign Out</span>}
            </button>
          </li>
        </ul>
      </div>

      {/* Collapse Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleCollapseClick}
          className="flex items-center justify-center w-full p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {sidebarOpen ? (
            <>
              <ChevronLeftIcon className="h-5 w-5" />
              <span className="ml-3">Collapse</span>
            </>
          ) : (
            <ChevronRightIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
