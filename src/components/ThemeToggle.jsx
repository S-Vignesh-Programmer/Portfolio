import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="fixed max-sm:hidden top-14 right-8 z-50">
      <button
        onClick={toggleTheme}
        className={cn(
          "group relative p-3 rounded-full transition-all duration-500 ease-in-out",
          "backdrop-blur-md border shadow-lg hover:shadow-xl",
          "hover:scale-105 active:scale-95 transform",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          isDarkMode
            ? "bg-gray-900/80 border-gray-700/50 hover:bg-gray-800/90 focus:ring-yellow-400/50"
            : "bg-white/80 border-gray-200/50 hover:bg-white/90 focus:ring-blue-500/50"
        )}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Background gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            isDarkMode
              ? "bg-gradient-to-br from-yellow-400/20 to-orange-500/20"
              : "bg-gradient-to-br from-blue-400/20 to-purple-500/20"
          )}
        />

        {/* Icon container with rotation animation */}
        <div className="relative z-10 transition-transform duration-500 ease-in-out group-hover:rotate-12">
          {isDarkMode ? (
            <Sun
              className={cn(
                "h-6 w-6 transition-all duration-300",
                "text-yellow-400 group-hover:text-yellow-300",
                "drop-shadow-sm"
              )}
            />
          ) : (
            <Moon
              className={cn(
                "h-6 w-6 transition-all duration-300",
                "text-slate-600 group-hover:text-blue-600",
                "drop-shadow-sm"
              )}
            />
          )}
        </div>

        {/* Pulse effect on click */}
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-0 group-active:opacity-75 group-active:animate-ping",
            isDarkMode ? "bg-yellow-400" : "bg-blue-500"
          )}
        />
      </button>

      {/* Tooltip */}
      <div
        className={cn(
          "absolute top-full right-0 mt-2 px-3 py-1 rounded-md text-xs font-medium",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
          "backdrop-blur-md shadow-lg whitespace-nowrap",
          isDarkMode
            ? "bg-gray-900/90 text-gray-100 border border-gray-700/50"
            : "bg-white/90 text-gray-900 border border-gray-200/50"
        )}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        <div
          className={cn(
            "absolute bottom-full right-4 w-2 h-2 rotate-45",
            isDarkMode
              ? "bg-gray-900/90 border-l border-t border-gray-700/50"
              : "bg-white/90 border-l border-t border-gray-200/50"
          )}
        />
      </div>
    </div>
  );
};
