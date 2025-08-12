import { Globe, GraduationCap } from "lucide-react";

export const AboutMe = () => {
  const skills = [
    {
      icon: GraduationCap,
      title: "Education",
      description: {
        degree: "Bachelor of Engineering",
        specialization: "Electronics and Communication Engineering",
        institution: "Arunai Engineering College, Thiruvannamalai",
        duration: "2021-2025",
        cgpa: "CGPA: 7.8/10",
      },
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description:
        "Developing robust end-to-end web applications with seamless integration between frontend and backend, ensuring high performance and scalability.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/60 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="w-12 xs:w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6 sm:space-y-8 opacity-0 animate-fade-in-delay-1">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Passionate{" "}
                <span className="text-primary">Full Stack Developer</span> &
                Technology Explorer
              </h3>

              <div className="space-y-3 sm:space-y-4 text-sm xs:text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a dedicated software developer with a passion for creating
                  elegant solutions to complex problems. With expertise spanning
                  both frontend and backend technologies, I bring ideas to life
                  through clean, efficient code and intuitive user experiences.
                </p>

                <p>
                  My journey in tech is driven by continuous learning and
                  staying at the forefront of emerging technologies. I believe
                  in writing code that not only works but is maintainable,
                  scalable, and makes a difference.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 items-center justify-center">
              <a
                href="#contact"
                className="cosmic-button group relative overflow-hidden items-center w-full sm:w-auto text-center px-4 xs:px-6 py-2 xs:py-3 text-sm xs:text-base"
              >
                <span className="relative z-10 items-center">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Right Column - Skills and Education */}
          <div className="space-y-4 sm:space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`gradient-border p-4 sm:p-6 card-hover group opacity-0 animate-fade-in-delay-${
                  index + 2
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-grow text-left min-w-0">
                    <h4 className="font-semibold text-base xs:text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </h4>
                    {skill.title === "Education" ? (
                      <div className="space-y-2">
                        <p className="font-semibold text-xs xs:text-sm sm:text-base">
                          {skill.description.degree}
                        </p>
                        <p className="text-primary font-medium text-xs sm:text-sm break-words">
                          {skill.description.specialization}
                        </p>
                        <p className="text-muted-foreground text-xs sm:text-sm break-words">
                          {skill.description.institution}
                        </p>
                        <div className="flex items-center justify-between pt-2 flex-wrap gap-1">
                          <span className="text-muted-foreground text-xs sm:text-sm">
                            {skill.description.duration}
                          </span>
                          <span className="text-primary font-semibold text-xs sm:text-sm">
                            {skill.description.cgpa}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed text-xs xs:text-sm sm:text-base">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
