import { useState } from "react";
import {
  BellIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "../UI/Dropdown";
import Badge from "../UI/Badge";

const Navbar = ({
  setSidebarOpen,
  sidebarOpen,
  setMobileSidebarOpen,
  darkMode,
  setDarkMode,
}) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 shadow-sm">
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="p-2 rounded-lg md:hidden text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Bars3Icon className="h-5 w-5" />
      </button>

      <div className="flex-1 max-w-md ml-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-none rounded-lg dark:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center py-4 space-x-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>

        <button className="relative flex items-center justify-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <BellIcon className="h-5 w-5" />
        </button>

        <Dropdown
          button={
            <button className="flex items-center space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/40"
                alt="User"
              />
              <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                John Doe
              </span>
            </button>
          }
          className="right-0 mt-2 w-48"
        ></Dropdown>
      </div>
    </header>
  );
};

export default Navbar;
