import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Download,
  Mouse,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Fixed Cycling typing effect component
  const CyclingTypingText = ({
    texts = [],
    delay = 0,
    typingSpeed = 80,
    pauseDuration = 2500,
    deletingSpeed = 40,
    className = "",
  }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (texts.length === 0) return;

      let timeoutId;
      let intervalId;

      const startCycle = () => {
        setHasStarted(true);
        setShowCursor(true);
        typeCurrentText();
      };

      const typeCurrentText = () => {
        setIsTyping(true);
        setIsDeleting(false);
        const currentText = texts[currentTextIndex];
        let charIndex = 0;

        intervalId = setInterval(() => {
          if (charIndex <= currentText.length) {
            setDisplayText(currentText.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(intervalId);
            setIsTyping(false);

            // Wait before starting to delete
            timeoutId = setTimeout(() => {
              deleteCurrentText();
            }, pauseDuration);
          }
        }, typingSpeed);
      };

      const deleteCurrentText = () => {
        setIsDeleting(true);
        const currentText = texts[currentTextIndex];
        let charIndex = currentText.length;

        intervalId = setInterval(() => {
          if (charIndex >= 0) {
            setDisplayText(currentText.slice(0, charIndex));
            charIndex--;
          } else {
            clearInterval(intervalId);
            setIsDeleting(false);

            // Move to next text
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);

            // Wait before typing next text
            timeoutId = setTimeout(() => {
              typeCurrentText();
            }, 500);
          }
        }, deletingSpeed);
      };

      if (!hasStarted) {
        // Initial delay before starting
        timeoutId = setTimeout(startCycle, delay);
      } else {
        // Continue the cycle
        typeCurrentText();
      }

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (intervalId) clearInterval(intervalId);
      };
    }, [
      currentTextIndex,
      texts,
      delay,
      typingSpeed,
      pauseDuration,
      deletingSpeed,
      hasStarted,
    ]);

    return (
      <span className={className}>
        {displayText}
        {showCursor && (
          <span className="animate-pulse text-current ml-1">|</span>
        )}
      </span>
    );
  };

  // Inside HeroSection, replace AnimatedText definition with this:
  const AnimatedText = ({
    text,
    delay = 0,
    letterDelay = 0.05,
    wordDelay = 0.22,
    mode = "letter",
    className = "",
  }) => {
    const tokens = mode === "word" ? text.split(/(\s+)/) : Array.from(text);

    return (
      <span className={className}>
        {tokens.map((tok, index) => {
          const isSpace = /^\s+$/.test(tok);
          const animDelay =
            delay + index * (mode === "word" ? wordDelay : letterDelay);

          if (isSpace) {
            return <span key={index}>{tok}</span>;
          }

          return (
            <span
              key={index}
              className="inline-block animate-letter-reveal opacity-0"
              style={{
                animationDelay: `${animDelay}s`,
                animationFillMode: "forwards",
              }}
            >
              {tok}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Name and Title */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <AnimatedText
                text="Hi,"
                delay={0}
                className={cn(
                  "mr-2 sm:mr-4",
                  isDarkMode ? "text-blue-800" : "text-purple-600"
                )}
              />
              <AnimatedText
                text="I'm"
                delay={0.3}
                className={isDarkMode ? "text-white" : "text-indigo-700"}
              />
              <AnimatedText
                text="Vignesh"
                delay={0.5}
                className={cn(
                  "ml-1 sm:ml-3",
                  isDarkMode ? "text-indigo-700" : "text-blue-600"
                )}
              />
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl relative">
              <div className="relative inline-flex items-center justify-center">
                {/* Enhanced background glow effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-lg blur-xl opacity-30 animate-pulse",
                    isDarkMode
                      ? "bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20"
                      : "bg-gradient-to-r from-indigo-300/30 via-purple-300/30 to-pink-300/30"
                  )}
                />

                {/* Main text with enhanced styling */}
                <span
                  className={cn(
                    "relative px-6 py-2 rounded-lg font-medium tracking-wide",
                    "bg-gradient-to-r bg-clip-text text-transparent",
                    "shadow-lg backdrop-blur-sm border border-opacity-20",
                    isDarkMode
                      ? "from-emerald-300 via-cyan-300 to-blue-300 border-cyan-400/30"
                      : "from-indigo-600 via-purple-600 to-pink-600 border-purple-300/30",
                    "before:absolute before:inset-0 before:rounded-lg before:opacity-10",
                    isDarkMode
                      ? "before:bg-gradient-to-r before:from-emerald-400 before:via-cyan-400 before:to-blue-400"
                      : "before:bg-gradient-to-r before:from-indigo-400 before:via-purple-400 before:to-pink-400"
                  )}
                  style={{
                    textShadow: isDarkMode
                      ? "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)"
                      : "0 0 20px rgba(99, 102, 241, 0.2), 0 0 40px rgba(147, 51, 234, 0.1)",
                  }}
                >
                  I'm a
                </span>

                {/* Floating decorative elements */}
                <div
                  className={cn(
                    "absolute -top-2 -right-2 w-3 h-3 rounded-full animate-ping",
                    isDarkMode ? "bg-cyan-400" : "bg-purple-500"
                  )}
                />
                <div
                  className={cn(
                    "absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-pulse delay-500",
                    isDarkMode ? "bg-blue-900" : "bg-indigo-500"
                  )}
                />
              </div>
            </div>
            <div className="min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] xl:min-h-[5rem] flex items-center justify-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                <CyclingTypingText
                  texts={[
                    "Software Developer",
                    "Full Stack Developer",
                    "Java Developer",
                    "Java & React Enthusiast",
                  ]}
                  delay={1000}
                  typingSpeed={80}
                  pauseDuration={2500}
                  deletingSpeed={40}
                  className={cn(
                    "bg-gradient-to-r bg-clip-text text-transparent",
                    isDarkMode
                      ? "from-purple-400 via-pink-400 to-red-400"
                      : "from-purple-600 via-pink-600 to-red-600"
                  )}
                />
              </h2>
            </div>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-3 opacity-0 px-2"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Turning ideas into fast, reliable, and beautiful web applications
              blending pixel-perfect, responsive designs with robust, scalable
              backend systems to deliver seamless, enjoyable experiences for
              users.
            </span>
          </p>

          {/* Social Media Links and Action Buttons */}
          <div
            className="flex flex-col gap-4 sm:gap-6 pt-3 sm:pt-5 animate-fade-in-delay-4 opacity-0"
            style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
          >
            {/* Social Media Links */}
            <div className="flex justify-center items-center space-x-3 sm:space-x-4">
              <a
                href="mailto:vigneshprogrammer01@gmail.com"
                className={cn(
                  "group relative p-2 sm:p-3 rounded-full transition-all duration-300",
                  "border-2 hover:scale-110 transform hover:shadow-lg",
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-red-900/20 hover:border-red-400"
                    : "bg-white border-gray-200 hover:bg-red-50 hover:border-red-300"
                )}
                aria-label="Email"
              >
                <Mail
                  className={cn(
                    "h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300",
                    isDarkMode
                      ? "text-gray-300 group-hover:text-red-400"
                      : "text-gray-600 group-hover:text-red-500"
                  )}
                />
                <div className="absolute inset-0 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/vignesh-s-java/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative p-2 sm:p-3 rounded-full transition-all duration-300",
                  "border-2 hover:scale-110 transform hover:shadow-lg",
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-blue-900/20 hover:border-blue-400"
                    : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin
                  className={cn(
                    "h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300",
                    isDarkMode
                      ? "text-gray-300 group-hover:text-blue-400"
                      : "text-gray-600 group-hover:text-blue-600"
                  )}
                />
                <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://github.com/S-Vignesh-Programmer"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative p-2 sm:p-3 rounded-full transition-all duration-300",
                  "border-2 hover:scale-110 transform hover:shadow-lg",
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-500"
                    : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-400"
                )}
                aria-label="GitHub"
              >
                <Github
                  className={cn(
                    "h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300",
                    isDarkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-gray-900"
                  )}
                />
                <div className="absolute inset-0 rounded-full bg-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://x.com/vigneshjava69"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative p-2 sm:p-3 rounded-full transition-all duration-300",
                  "border-2 hover:scale-110 transform hover:shadow-lg",
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-500"
                    : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-400"
                )}
                aria-label="X (Twitter)"
              >
                <svg
                  className={cn(
                    "h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300",
                    isDarkMode
                      ? "fill-gray-300 group-hover:fill-white"
                      : "fill-gray-600 group-hover:fill-gray-900"
                  )}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a
                href="#projects"
                className={cn(
                  "group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg w-full sm:w-auto text-center",
                  "text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl",
                  "focus:outline-none focus:ring-4",
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:ring-emerald-500/50"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500/50"
                )}
              >
                <span className="relative z-10">View My Work</span>
                <div
                  className={cn(
                    "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400/50 to-blue-400/50"
                      : "bg-gradient-to-r from-blue-400/50 to-purple-400/50"
                  )}
                />
              </a>

              <a
                href="https://drive.google.com/file/d/1YxX0bzWJ8pI06sJNdhGNF9qvjy_C-MqC/view?usp=drivesdk"
                target="_blank"
                download
                className={cn(
                  "group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-full sm:w-auto",
                  "border-2 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg text-sm sm:text-base",
                  "focus:outline-none focus:ring-4",
                  isDarkMode
                    ? "border-indigo-600 text-indigo-400 hover:bg-indigo-500 hover:text-white focus:ring-indigo-500/50"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500/50"
                )}
              >
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Hidden on small mobile screens */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex-col items-center animate-fade-in-delay-5 opacity-0"
        style={{ animationDelay: "2s", animationFillMode: "forwards" }}
      >
        <span
          className={cn(
            "text-xs md:hidden sm:text-sm mb-2 font-medium",
            isDarkMode ? "text-gray-400" : "text-gray-500"
          )}
        >
          Scroll
        </span>
        <div className="flex flex-col items-center space-y-1">
          <a href="#about">
            <Mouse
              className={cn(
                "h-10 w-7 sm:h-12 sm:w-9",
                isDarkMode ? "text-white" : "text-blue-600"
              )}
            />
          </a>
          <ArrowDown
            className={cn(
              "h-5 w-3 sm:h-6 sm:w-4 animate-bounce",
              isDarkMode ? "text-white" : "text-blue-600"
            )}
          />
        </div>
      </div>

      {/* Dynamic Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full blur-3xl animate-pulse",
            isDarkMode ? "bg-emerald-400/10" : "bg-blue-500/5"
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/4 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full blur-3xl animate-pulse delay-1000",
            isDarkMode ? "bg-purple-400/10" : "bg-purple-500/5"
          )}
        />
        <div
          className={cn(
            "absolute top-3/4 left-1/3 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 rounded-full blur-2xl animate-pulse delay-500",
            isDarkMode ? "bg-blue-400/8" : "bg-emerald-500/4"
          )}
        />
      </div>

      <style jsx="true">{`
        @keyframes letter-reveal {
          from {
            opacity: 0;
            transform: translateY(20px) rotateX(-90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes typing-cursor {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .animate-letter-reveal {
          animation: letter-reveal 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay-5 {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-typing-cursor {
          animation: typing-cursor 1s infinite;
        }

        /* Enhanced dark mode support */
        .dark .bg-grid-slate-700\/25 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
        }

        .bg-grid-slate-100\/25 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
        }

        /* Smooth transitions for theme changes */
        * {
          transition: color 0.3s ease, background-color 0.3s ease,
            border-color 0.3s ease;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
