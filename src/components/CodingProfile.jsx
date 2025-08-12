import { useState, useEffect } from "react";
import { Calendar, TrendingUp, ExternalLink } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LeetCode from "../assets/leetcode.png";
import GeeksForGeeks from "../assets/geeksforgeeks.png";
import HackerRank from "../assets/hackerRank.png";

const CodingProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("leetcode");

  // Sync with theme toggle
  useEffect(() => {
    const checkTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      setIsDarkMode(storedTheme === "dark");
    };

    checkTheme();

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const platforms = {
    leetcode: {
      name: "LeetCode",
      color: "from-yellow-500 to-orange-500",
      darkColor: "from-yellow-400 to-orange-400",
      screenshot: LeetCode,
      link: "https://leetcode.com/u/mxwSF408rY/",
    },
    geeksforgeeks: {
      name: "GeeksforGeeks",
      color: "from-green-500 to-emerald-500",
      darkColor: "from-green-400 to-emerald-400",
      screenshot: GeeksForGeeks,
      link: "https://www.geeksforgeeks.org/user/vigneshktfh/",
    },
    hackerrank: {
      name: "HackerRank",
      color: "from-green-600 to-teal-600",
      darkColor: "from-green-400 to-teal-400",
      screenshot: HackerRank,
      link: "https://www.hackerrank.com/profile/vigneshgithub69",
    },
    // codeforces: {
    //   name: "CodeForces",
    //   color: "from-red-500 to-pink-500",
    //   darkColor: "from-red-400 to-pink-400",
    //   screenshot:
    //     "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    //   achievements: ["Contest Regular", "Div 2 Winner", "Problem Solver"],
    // },
  };

  const currentPlatform = platforms[activeTab];

  const cardBaseClasses = `
    relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 ease-in-out
    backdrop-blur-md border
    ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700/50"
        : "bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200/50"
    }
  `;

  const textClasses = {
    primary: isDarkMode ? "text-white" : "text-gray-900",
    secondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    muted: isDarkMode ? "text-gray-500" : "text-gray-400",
  };

  const tabClasses = (platform) => `
    flex items-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer text-xs sm:text-sm lg:text-base
    ${
      activeTab === platform
        ? `bg-gradient-to-r ${
            isDarkMode ? currentPlatform.darkColor : currentPlatform.color
          } text-white shadow-lg transform scale-105`
        : `${
            isDarkMode
              ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          } hover:scale-102`
    }
  `;

  const statCardClasses = `
    p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105
    ${
      isDarkMode
        ? "bg-gray-800/50 border border-gray-700/30"
        : "bg-white/70 border border-gray-200/30"
    }
  `;

  return (
    <div
      id="coding"
      className="min-h-screen p-2 sm:p-4 lg:p-6 transition-colors duration-500"
      style={{
        background: isDarkMode
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      <ThemeToggle />

      <div className="max-w-6xl mx-auto pt-16 sm:pt-20">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 px-2">
          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 ${textClasses.primary}`}
          >
            Competitive Programming Profile
          </h1>
          <p
            className={`text-sm sm:text-lg lg:text-xl ${textClasses.secondary} leading-relaxed`}
          >
            Showcasing my coding journey and achievements across multiple
            platforms.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 px-2">
          {Object.entries(platforms).map(([key, platform]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={tabClasses(key)}
            >
              <span className="font-medium sm:font-semibold truncate">
                {platform.name}
              </span>
            </button>
          ))}
        </div>

        {/* Main Profile Card */}
        <div className={cardBaseClasses}>
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Platform Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${
                    isDarkMode
                      ? currentPlatform.darkColor
                      : currentPlatform.color
                  } flex-shrink-0`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm lg:text-base">
                      {currentPlatform.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2
                    className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold ${textClasses.primary} leading-tight`}
                  >
                    {currentPlatform.name}
                  </h2>
                  <p
                    className={`text-sm sm:text-base lg:text-lg xl:text-xl ${textClasses.secondary} leading-relaxed`}
                  >
                    Coding Platform Profile
                  </p>
                </div>
              </div>

              <div
                className={`text-left sm:text-right ${textClasses.secondary} flex-shrink-0`}
              >
                <div className="flex items-center gap-2 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                  <Calendar size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span>Updated Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp
                    size={14}
                    className="sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                  />
                  <span>Active Streak</span>
                </div>
              </div>
            </div>

            {/* Screenshot Section */}
            <div className="w-full">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg">
                  <img
                    src={currentPlatform.screenshot}
                    alt={`${currentPlatform.name} Profile Screenshot`}
                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover object-top transition-all duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDarkMode
                        ? "from-gray-900/40 to-transparent"
                        : "from-black/40 to-transparent"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Live Link Overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <a
                      href={currentPlatform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-2 text-white text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-black/80 transition-all duration-300 group/link"
                    >
                      <ExternalLink
                        size={12}
                        className="sm:w-4 sm:h-4 group-hover/link:rotate-12 transition-transform duration-200"
                      />
                      <span>View Profile</span>
                    </a>
                  </div>

                  {/* Mobile tap indicator */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 sm:hidden">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-1.5">
                      <ExternalLink size={12} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Mobile: Full screen overlay for better mobile experience */}
                <div
                  className="sm:hidden absolute inset-0 bg-transparent"
                  onClick={() => window.open(currentPlatform.link, "_blank")}
                ></div>
              </div>

              {/* Mobile: Additional info below image */}
              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                <div className={`text-xs sm:text-sm ${textClasses.secondary}`}>
                  <span className="font-medium">Platform:</span>{" "}
                  {currentPlatform.name}
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                      isDarkMode
                        ? currentPlatform.darkColor
                        : currentPlatform.color
                    }`}
                  ></div>
                  <span
                    className={`text-xs sm:text-sm ${textClasses.secondary}`}
                  >
                    Active Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Quick Actions */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 sm:hidden">
          {Object.entries(platforms).map(([key, platform]) => (
            <a
              key={key}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  : "bg-white/70 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-xs font-medium">{platform.name}</span>
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>

      {/* Custom CSS for mobile optimizations */}
      <style jsx="true">{`
        /* Mobile touch improvements */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          /* Better button touch targets */
          button {
            min-height: 44px;
          }

          /* Prevent zoom on input focus */
          input,
          select,
          textarea {
            font-size: 16px;
          }

          /* Better image loading on mobile */
          img {
            image-rendering: optimizeQuality;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 640px) and (max-width: 1024px) {
          .grid {
            gap: 1rem;
          }
        }

        /* Hover states only on devices that support hover */
        @media (hover: hover) {
          .hover\:scale-\[1\.02\]:hover {
            transform: scale(1.02);
          }

          .hover\:scale-102:hover {
            transform: scale(1.02);
          }
        }

        /* Reduce animations on mobile for better performance */
        @media (max-width: 640px) {
          .transition-all {
            transition-duration: 200ms;
          }

          .duration-300 {
            transition-duration: 200ms;
          }

          .duration-500 {
            transition-duration: 300ms;
          }
        }
      `}</style>
    </div>
  );
};

export default CodingProfile;
