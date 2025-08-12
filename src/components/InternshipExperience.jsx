import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Building2,
  Award,
  ChevronDown,
  Briefcase,
  TrendingUp,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const InternshipExperience = () => {
  const [selectedInternship, setSelectedInternship] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const internships = [
    {
      id: 1,
      company: "Tamizhan Skills",
      role: "Web Development Intern",
      duration: "June 2025 - July 2025",
      description:
        "Collaborated with team members to develop and maintain web applications using React.js, implementing Redux-based state management and code-splitting.",
      achievements: [
        "Built interactive React.js components and integrated Redux for centralized state control, improving rendering efficiency and cutting re-renders by 20%.",
        "Enhanced frontend performance through lazy loading and code splitting, achieving a PageSpeed 90+ score and enhancing overall user experience.",
        "Designed and maintained mobile-first, responsive UIs with Tailwind CSS, ensuring consistent cross-device performance.",
        "Boosted user engagement by 15% by delivering intuitive, accessible UI designs and implementing performance-driven frontend optimizations.",
      ],
    },
    {
      id: 2,
      company: "Eagle-HiTech Softclou Pvt Ltd",
      role: "Software Developer – Full Stack Development Intern",
      duration: "July 2024 - August 2024",
      description:
        "Completed a Full Stack Development internship focused on building scalable web applications by integrating React.js with Java Spring Boot. Gained hands-on experience in RESTful API development, frontend routing, state management, and backend best practices, while ensuring system reliability and maintainability.",
      achievements: [
        "Developed and deployed RESTful APIs using Java Spring Boot with @Autowired, components, interfaces, and Dependency Injection, reducing code redundancy by 20%.",
        "Integrated React Router with Spring Boot APIs to enable seamless client-side navigation and dynamic data rendering, cutting page transition delays by 15% and improving user experience.",
        "Executed thorough API testing using Postman, verifying request-response accuracy, status codes, and edge case handling.",
        "Implemented controller logic with correct HTTP methods, status codes, and JSON serialization for smooth frontend-backend communication.",
      ],
    },
  ];

  const currentInternship = internships[selectedInternship];

  return (
    <div
      id="intern"
      className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      {/* Header Section */}
      <div
        className={cn(
          "container mx-auto px-4 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-bounce">
            <Briefcase size={14} className="sm:w-4 sm:h-4" />
            Professional Experience
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent px-4 sm:px-0">
            Internship Journey
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore my professional growth through hands-on experience at
            leading technology companies, where I've contributed to impactful
            projects and developed cutting-edge solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Internship List */}
          <div
            className={cn(
              "lg:col-span-1 space-y-3 sm:space-y-4 transition-all duration-1000 delay-200 transform",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Building2
                className="text-primary"
                size={18}
              />
              Companies
            </h2>

            {internships.map((internship, index) => (
              <div
                key={internship.id}
                onClick={() => setSelectedInternship(index)}
                className={cn(
                  "group relative p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105",
                  "backdrop-blur-md border shadow-lg hover:shadow-xl",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
                  selectedInternship === index
                    ? "bg-primary/10 border-primary/30 shadow-primary/20"
                    : "bg-card/80 border-border/50 hover:bg-card/90"
                )}
              >
                {/* Selection indicator */}
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 rounded-r-full transition-all duration-300",
                    selectedInternship === index
                      ? "bg-primary"
                      : "bg-transparent"
                  )}
                />

                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="text-xl sm:text-2xl">{internship.logo}</div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={cn(
                        "font-semibold transition-colors duration-300 text-sm sm:text-base truncate",
                        selectedInternship === index
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {internship.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {internship.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <ChevronDown
                    className={cn(
                      "transition-transform duration-300",
                      selectedInternship === index
                        ? "rotate-180 text-primary"
                        : "text-muted-foreground"
                    )}
                    size={14}
                  />
                </div>

                {/* Hover effect overlay */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    selectedInternship === index
                      ? "bg-gradient-to-br from-primary/10 to-primary/5"
                      : "bg-gradient-to-br from-primary/5 to-primary/10"
                  )}
                />
              </div>
            ))}
          </div>

          {/* Internship Details */}
          <div
            className={cn(
              "lg:col-span-3 transition-all duration-1000 delay-400 transform",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <div
              className="bg-card/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl 
            border border-border/50 p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
                    {currentInternship.logo}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 line-clamp-2">
                      {currentInternship.role}
                    </h2>
                    <h3 className="text-base sm:text-lg md:text-xl text-primary font-semibold line-clamp-1">
                      {currentInternship.company}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-background/50 rounded-lg p-3 sm:p-4 hover:bg-background/70 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="font-medium text-sm sm:text-base">
                      Duration
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {currentInternship.duration}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2">
                  <Target
                    className="text-primary"
                    size={18}
                  />
                  Overview
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {currentInternship.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <TrendingUp
                    className="text-primary"
                    size={18}
                  />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {currentInternship.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-2xl"
                    >
                      <div className="p-1 rounded-full bg-primary/20 mt-0.5 sm:mt-1 shrink-0">
                        <Award
                          className="text-primary group-hover:rotate-12 transition-transform duration-300"
                          size={12}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground flex-1 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for line clamping */}
      <style jsx="true">{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default InternshipExperience;
