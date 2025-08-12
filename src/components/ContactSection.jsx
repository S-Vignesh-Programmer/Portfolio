import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // EmailJS Configuration - Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_zoh9wfo"; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_so7qtgo"; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "BRR5cOzzwNG4NiDEQ"; // Replace with your EmailJS public key

  // Load EmailJS script
  useEffect(() => {
    const loadEmailJS = async () => {
      try {
        // Load EmailJS library
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.async = true;

        script.onload = () => {
          console.log("EmailJS loaded successfully");
          // Initialize EmailJS
          if (window.emailjs) {
            window.emailjs.init({
              publicKey: EMAILJS_PUBLIC_KEY,
              // Limit the number of emails per hour to prevent abuse
              limitRate: {
                id: "app",
                throttle: 10000, // 10 seconds between requests
              },
            });
            console.log("EmailJS initialized");
          }
        };

        script.onerror = () => {
          console.error("Failed to load EmailJS");
        };

        document.head.appendChild(script);

        return () => {
          if (document.head.contains(script)) {
            document.head.removeChild(script);
          }
        };
      } catch (error) {
        console.error("Error loading EmailJS:", error);
      }
    };

    loadEmailJS();
  }, [EMAILJS_PUBLIC_KEY]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate form data
    if (!name || !email || !message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      console.error("Missing required fields");
      return;
    }

    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded");
      }

      console.log("Sending email with EmailJS...");

      // Template parameters that match your EmailJS template
      const templateParams = {
        from_name: name.trim(),
        from_email: email.trim(),
        to_email: "vigneshprogrammer01@gmail.com",
        message: message.trim(),
        subject: `Contact Form Message from ${name.trim()}`,
        reply_to: email.trim(),
      };

      console.log("Template params:", templateParams);

      // Send email using EmailJS v4 syntax
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setSubmitStatus("success");
        e.target.reset(); // Clear form
        console.log("Email sent successfully!");
      } else {
        setSubmitStatus("error");
        console.error("EmailJS error - Status:", response.status);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      // Log specific error details
      if (error.text) {
        console.error("EmailJS error text:", error.text);
      }
      if (error.status) {
        console.error("EmailJS error status:", error.status);
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 transition-all duration-500 hover:scale-105">
            Get In{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed opacity-0 animate-fade-in-up-delay-1 px-2">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 opacity-0 animate-fade-in-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-card/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    Email
                  </h4>
                  <a
                    href="mailto:vigneshprogrammer01@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    vigneshprogrammer01@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-card/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    Phone
                  </h4>
                  <a
                    href="tel:+919342462361"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    +91 9342462361
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-card/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    Location
                  </h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs sm:text-sm md:text-base">
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block mt-8 xl:mt-12">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"></div>
              <div className="mt-6 xl:mt-8 text-center">
                <p className="text-sm text-muted-foreground italic">
                  Let's create something amazing together
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-right order-1 lg:order-2">
            <div className="bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center">
                Send a <span className="text-primary">Message</span>
              </h3>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm sm:text-base">
                   Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm sm:text-base">
                   Failed to send message. Please try again or email me
                  directly at vigneshprogrammer01@gmail.com
                </div>
              )}

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4 sm:space-y-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="flex items-start text-sm font-medium mb-2 text-foreground/80 
                      group-focus-within:text-primary transition-colors duration-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50 text-sm md:text-base disabled:opacity-50"
                      placeholder="Vignesh..."
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="flex items-start text-sm font-medium mb-2 text-foreground/80 group-focus-within:text-primary transition-colors duration-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50 text-sm md:text-base disabled:opacity-50"
                      placeholder="vignesh@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="flex items-start text-sm font-medium mb-2 text-foreground/80 group-focus-within:text-primary transition-colors duration-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="4"
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50 resize-none text-sm md:text-base disabled:opacity-50 min-h-[100px] sm:min-h-[120px]"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  )}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send
                    size={16}
                    className={`sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 ${
                      isSubmitting ? "animate-pulse" : ""
                    }`}
                  />
                </button>
              </form>
            </div>
          </div>
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

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 0.6s ease-out 0.2s forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.6s forwards;
        }

        /* Mobile-specific improvements */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          /* Ensure form doesn't overflow */
          .space-y-4 > * {
            min-width: 0;
          }

          /* Better button touch targets on mobile */
          button[type="submit"] {
            min-height: 48px;
          }

          /* Improve input touch targets */
          input,
          textarea {
            min-height: 44px;
          }
        }

        /* Tablet and mobile landscape improvements */
        @media (max-width: 1024px) {
          .grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
