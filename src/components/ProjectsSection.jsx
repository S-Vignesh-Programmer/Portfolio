import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import ElectricProAi from "../assets/electricProAI.jpg";
import ElectroMart from "../assets/electroMart.jpg";
import ClothEcomm from "../assets/clothEcomm.jpg";
import Panamount from "../assets/panamount.jpg";
import ResumeBuilder from "../assets/resumeBuilder.jpg";
import Management from "../assets/management.jpg";
import Landing from "../assets/SkillUp.png";
import Task from "../assets/TaskApp.png";
import OOPS from "../assets/OOPs.png";

const projects = [
  {
    id: 1,
    title: "ElectroMart",
    description:
      "Built a full stack e-commerce platform with secure JWT authentication, REST APIs using Spring Boot and MongoDB, ensuring smooth and responsive user experience. Boosting backend throughput by 30%.",
    image: ElectroMart,
    tags: [
      "React",
      "TailWindCSS",
      "React Icons",
      "Git",
      "Spring Boot",
      "Spring MVC",
      "Lombok",
      "REST API",
      "Spring Security",
      "Hibernate",
      "MongoDB",
      "Docker",
    ],
    demoUrl: "https://electronics-mobile-website.vercel.app/",
    githubUrl:
      "https://github.com/S-Vignesh-Programmer/Electronics-Mobile-Website.git",
  },
  {
    id: 2,
    title: "ElectriProAI",
    description:
      "Developed a electricity bill platform with React and Spring Boot, offering real time forecasts across India. Integrated AI for query handling and used Docker, reliable performance.",
    image: ElectricProAi,
    tags: [
      "React",
      "TailWindCSS",
      "React Icons",
      "Git",
      "Spring Boot",
      "Spring MVC",
      "Google Gemini API",
      "REST API",
      "Docker",
    ],
    demoUrl: "https://electri-pro-ai.vercel.app/",
    githubUrl: "https://github.com/S-Vignesh-Programmer/ElectriProAI.git",
  },
  {
    id: 3,
    title: "ClothEcomm",
    description:
      "Built a responsive React frontend with optimized performance and TailwindCSS, boosting page load speed by 40%. And enabling real-time cart updates and a seamless checkout process.",
    image: ClothEcomm,
    tags: [
      "React",
      "TailWindCSS",
      "React Icon",
      "Git",
      "GitHub",
      "REST API",
      "Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demoUrl: "https://cloth-ecomm-henna.vercel.app/",
    githubUrl: "https://github.com/S-Vignesh-Programmer/ClothEcomm.git",
  },
  {
    id: 4,
    title: "Panamount",
    description:
      "Panamount is a streaming service application built using React, React Icons, and TailwindCSS. The app offers users an movie browsing experience with multiple genres, watchlist functionality, and a fully responsive design across all devices.",
    image: Panamount,
    tags: ["React", "TailWindCSS", "React Icon", "Git", "TMDB API"],
    demoUrl: "https://s-vignesh-programmer.github.io/panamount/",
    githubUrl: "https://github.com/S-Vignesh-Programmer/panamount.git",
  },
  {
    id: 5,
    title: "Resume Builder",
    description:
      "The ATS Resume Builder is built with React functional components and hooks, enabling dynamic multi-step form management with real-time validation. It uses TailwindCSS for responsive design. It also generates print-ready, ATS-optimized PDFs.",
    image: ResumeBuilder,
    tags: ["React", "TailWindCSS", "React Icon", "Git", "PDF.js"],
    demoUrl: "https://rise-resume-builder.netlify.app/",
    githubUrl:
      "https://github.com/S-Vignesh-Programmer/RISE-Internship-Resume-Builder.git",
  },
  {
    id: 6,
    title: "Student Management System",
    description:
      "The Student Management Dashboard is a React-based application using functional components and hooks to handle complex student data with CRUD operations, real-time filtering, and bulk actions across multiple tabs.",
    image: Management,
    tags: [
      "React",
      "TailWindCSS",
      "React Icon",
      "CRUD Operations",
      "Git",
      "Charts",
    ],
    demoUrl: "https://rise-management.netlify.app/",
    githubUrl:
      "https://github.com/S-Vignesh-Programmer/RISE-Internship-Management.git",
  },
  {
    id: 7,
    title: "Task Manager App",
    description:
      "A responsive and visually appealing Landing Page for 'SkillUp' – India's leading professional training platform. This landing page is designed to attract users, showcase services, and encourage them to sign up.",
    image: Task,
    tags: ["React", "TailWindCSS", "React Icon", "Git", "CRUD Operations"],
    demoUrl: "https://rise-taskapp.netlify.app/",
    githubUrl:
      "https://github.com/S-Vignesh-Programmer/RISE-Internship-TaskApp.git",
  },
  {
    id: 8,
    title: "SkillUp – Landing Page",
    description:
      "A responsive and visually appealing Landing Page for 'SkillUp' – India's leading professional training platform. This landing page is designed to attract users, showcase services, and encourage them to sign up.",
    image: Landing,
    tags: ["React", "TailWindCSS", "React Icon", "Git"],
    demoUrl: "https://riseskillup.netlify.app/",
    githubUrl:
      "https://github.com/S-Vignesh-Programmer/RISE-Internship-Landing-Page.git",
  },
  {
    id: 9,
    title: "AdvancedOOPsCalculator",
    description:
      "This Java calculator application showcases strong OOP design with dedicated classes for each operation, robust exception handling, and a user-friendly console interface featuring input validation and error recovery.",
    image: OOPS,
    tags: ["Java", "OOPs", "Git", "GitHub"],
    demoUrl:
      "https://github.com/S-Vignesh-Programmer/Java-IntermediateProjects.git",
    githubUrl:
      "https://github.com/S-Vignesh-Programmer/Java-IntermediateProjects.git",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden shadow-lg 
      hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border/50 hover:border-border w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
      >
        <div className="absolute inset-[1px] bg-card rounded-xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Image section with overlay */}
        <div className="h-40 sm:h-48 overflow-hidden relative">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} relative`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="text-white font-semibold text-base sm:text-lg z-10 text-center px-4">
                {project.title}
              </div>
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
              </div>
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-4 sm:p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {project.tags.slice(0, 6).map((tag, index) => (
              <span
                key={tag}
                className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 border
                  ${"bg-secondary/80 text-secondary-foreground border-secondary hover:bg-secondary"}
                  group-hover:scale-105 transform`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 6 && (
              <span className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border">
                +{project.tags.length - 6}
              </span>
            )}
          </div>

          {/* Title and description */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
            {project.description}
          </p>

          {/* Bottom action links with tooltips */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 sm:space-x-4">
              {/* Live Demo Link */}
              <div className="relative group/tooltip">
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                    <ExternalLink
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                  </div>
                </a>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
                  <div className="bg-popover text-popover-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg border whitespace-nowrap">
                    Live Demo
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-r border-b border-border rotate-45 -mt-1"></div>
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="relative group/tooltip">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                </a>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
                  <div className="bg-popover text-popover-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg border whitespace-nowrap">
                    Source Code
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-r border-b border-border rotate-45 -mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden"
    >
      {/* Background decorations */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" /> */}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-center text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4 sm:px-0">
            A showcase of recent builds optimized for performance, scalability,
            and seamless UX. Built using technologies like React.js, Spring
            Boot, and MongoDB. Hover to view live demos and key features.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                {projects.length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                100%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Responsive
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                Modern
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Tech Stack
              </div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              className="animate-fade-in-up opacity-0 animation-fill-forwards w-full"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center px-4 sm:px-0">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Want to see more of my work?
          </p>
          <a
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transform text-sm sm:text-base"
            target="_blank"
            href="https://github.com/S-Vignesh-Programmer"
            rel="noopener noreferrer"
          >
            <Github
              size={18}
              className="sm:w-5 sm:h-5 transition-transform group-hover:rotate-12"
            />
            Explore My GitHub
            <ArrowRight
              size={16}
              className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx="true">{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-fill-forwards {
          animation-fill-mode: forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .line-clamp-4 {
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </section>
  );
};
