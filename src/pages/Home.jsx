import { useState, useEffect } from "react"; // Add useEffect
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import InternshipExperience from "../components/InternshipExperience";
import CodingProfile from "../components/CodingProfile";
import { Sun, Moon } from "lucide-react"; // Add this import

// Add this Mobile Theme Toggle component
const MobileThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const storedTheme = localStorage?.getItem("theme") || "light";
      const isDark = storedTheme === "dark";
      setIsDarkMode(isDark);
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

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage?.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-19 right-4 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:shadow-xl transition-all duration-300 sm:hidden"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
};

export const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Render different pages based on current page state
  if (currentPage === "coding") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <MobileThemeToggle /> {/* Add mobile theme toggle for coding page */}
        {/* Back button for CodingProfile page */}
        <button
          onClick={() => setCurrentPage("home")}
          className="fixed top-5 left-4 z-50 px-2 md:px-4 py-1 md:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          ← Back to Home
        </button>
        <CodingProfile />
      </div>
    );
  }

  // Default home page
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <MobileThemeToggle /> {/* Add mobile theme toggle for home page */}
      <StarBackground />
      {/* Pass navigation function to Navbar */}
      <Navbar onNavigate={setCurrentPage} />
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <InternshipExperience />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};
