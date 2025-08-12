import { useState } from "react";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      category: "programming",
      color: "text-blue-500",
      skills: [
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
      ],
    },
    {
      title: "Frontend Development",
      category: "frontend",
      color: "text-blue-500",
      skills: [
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
      ],
    },
    {
      title: "Backend Development",
      category: "backend",
      color: "text-blue-500",
      skills: [
        {
          name: "Spring Boot",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXC-0HS2tdzQQ04VZSFvaE8qX_sjqaJXiOxQ&s",
        },
        {
          name: "Hibernate",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
        },
        {
          name: "Spring MVC",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Spring Data JPA",
          logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///9ssz5qsjqBvlqNxGxlsDJnsTZiry1msDNhrirG4LhpsjiLw2nS5se01qPZ68+12KGTx3VztklwtUR3uE/2+/NdrSPQ5sO/3a7m8t/g79eu1Zmo0ZDw+Oz8/vrr9eWYynyhzoeDvmC72qt/vVeWyHijz4qC3lD9AAAFEElEQVR4nO2d6XayPBSFSyBhiMgsEGYc7v8SvwSwtdPb9mtpWHU/v9RW4CEnRJd7HR4eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8BfIulIEfu4V+7Cqh76PImt3xYrOfT/UVXj08twPRNllug/302SdCIqqt8w0TgzCHSpxHMa4hDyinjHGHPlnmzJOjCROTWuovGDDrm3W5eFgmYljU0fZGMT4CtKbOdTm8Rhd9n6TtbqFntEGRW3Ftu2o4fguhDNq22lUeaVurxnh1SfXlaX2bbUXng516VjlWjWbYG8RRtn3x+09uONw4+wJTXOzjxldT+5Gk5K01mJ4+uHC/Adsp8XQ/I0BnCEWDGEIQ92G/M8b/v0xhCEMYQhDGMLwY7DiwxCGMIQhDGF4D4ZY8WEIQxjCEIYwvAdDrPgwXMuQTCkZMqeDVD7oBvXCNUX0cfJma4YqEUMdbiRJnKbmqCJew6WuK0moUA/q+jL0kbUbT2ms0lPqHYy8u8WNGE6hpsOBm+f6qNJqXfOplEirEnB+7oWDFbsHV0WqXm1ZuyHhju2Scdh7QfPy8JuuLIUIgsC/QT4NhCjL7mW8qy39oopS26W3I6rVUMmRsa+8rl2ONWtKEXhh3VtzCSbqn9RcfDYL+TRQspDj1NxFQyVPjiibZRNtJoo6Sqm9xMh0GXLCbOMUVcGSJ8wy4VWDNaYGlaXG5quI8c/ryHwxkvqyvm2WpGN0CfNyGdem8y67lFOuaz08Oekgj2Z63IqiOp+oS78V3lOnhFHbNcw+9Lp5L40oooTqSQwtU64V3kVl915fH/4/07x2do+5vdLXYijpgspcL7vHHVmg1lE0Hx/IOuTDGFNn7Q82hLLUqoQWw/RXkolKktujFkN8LoUhDO/KEN/xYQhDGMIQhjC8B0Os+DCEIQxhCEMY3oMhVnwYwhCGMIQhDO/BUNOKn67+++8VoukX0qJP7TXb78xwZjvjJddiqBp7FcOY2M46jWoI4ZTGuzpvdHXFmnecdUG1iw1Kf1RTBTyS9HwU3bSTVk+3qNg47/359LalH0aGSt29ny/8pBqf0n/pUARLZCjLwx3VlFTgXB5MPHjBEkFshbevrZRN+cIpufYp22vsi9quSkNVhb+4PTTBMSIHOQu0fnuS9UTicSjEtVle2zYiL8J6iKzxFCfEkQfu2gr6xPRcvi5rO1ER1P5ShZ5fZo/pvzII+1PCltrXvx6qNFpiRrU8/dlTnLLNsqbpuq4Uwvfz3JMUCvVgbpdYdl3TNM/f0uX7i3UybHpTAvoNlyk0p+4sFaX0xZeugG0ncm9f9bsTd+dOis/Y1nf8uf+h7R4OtqGio/2lrvbH4zRyTxTFce6JGe3MmLsHWch06rf49jY3ZfjcdonO0rdYemJ+4nK0XcOfAoYwhCEMYfh9trXir8HfH0MYwhCGMIQhDD8GKz4MYQhDGMIQhvdgiBUfhjCEIQxhuFnDX7yjlaOnP02VcrpSHOoWThkxCy2GDw+NH45Tz6qV5FRShURFoPdeiK0oLiNzX+cnvqVGCLPdxKquvZR0kzXBcbBS/kZO5Ktqc2bFMKPaKzd2H0tZs6Uf9mOayJmz3KfzK2pT7osb8SmqC1Fu9makiqYM8kJlf4h7OBzmwNebYRO6JL9U8iYxoyH0/GDbam8wNafzc88rjpL9E8c5QjT3HtxaMQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvxH6Wyg+Wg30g5AAAAAElFTkSuQmCC",
        },
        {
          name: "Node.js",
          logo: "data:image/png;base64,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",
        },
        {
          name: "REST API",
          logo: "data:image/png;base64,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",
        },
      ],
    },
    {
      title: "Database & Cloud",
      category: "database",
      color: "text-blue-500",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "AWS (EC2, S3)",
          logo: "data:image/png;base64,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",
        },
      ],
    },
    {
      title: "Deployment & Hosting",
      category: "deployment",
      color: "text-blue-500",
      skills: [
        {
          name: "Netlify",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        },
        {
          name: "Vercel",
          logo: "data:image/png;base64,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",
        },
        {
          name: "Render",
          logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAflBMVEX///8AAABnZ2c6Ojqurq7d3d3Ly8ulpaXOzs7Dw8OVlZX29vbt7e29vb23t7cODg5hYWHz8/Pe3t7V1dVOTk5ERER/f39bW1uenp5wcHBTU1Pm5uaKioqwsLAbGxttbW0mJiYvLy93d3eAgIAMDAwWFhZHR0eQkJAqKio2NjZSC/MxAAAESklEQVR4nO3aa3uiOhSGYRBFBbQqWq3WY4/z///gZq0QDinbuaZOx9Nzf6mGBPA1CQHreQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BL0H7fbqHPus7hSgzdfzZNzn8k1WvjW6+rc53J9Qr+0O/fJXJ+HSnz+4gcP9Hg4/OTuz6Pa+Xz/wdl6GBVaj+vT5sZs96OTdnCJolp8vjP7/apvPYxPOFLWzVsnneolGtUDSutbA99xwsXlFuOLnXicxZ/Et5yqvRnd8bcPdYvxrZ34nM1BtUhXONG3D3WL8e3q6c2dzbX4vO5Ja5sbjO/J6XzO1OfEp4ucb19+by++Zye9Z7eCE997mfBqMQpmra4Nc9Vtd1devJgHs6d1dX5cRfNZVm9cjy+NahWTrPXESw+z2eF6bnzG89+l58YX2ItLUjR9MVtk+dgvJtK1bZAUF/aPSnyTmS2NytaDqLH/X5rFKNQvveN2vXnDmdfjG0s1Wfr1Ks0C3ZsEUFkDdU2DtFLv8GnjG1ZKzUK6V7a+9N4n838wnZX3ao+9NNNpXBHX45OZ8j37O9F220W01NhlU37zshu1ZmUKib5cRt2XT7O5VVR9PSyid01VivKvY/lyCL6/MPo3uk6n6x+rLPHFxjhc2upSutW4OxsZdp6NT155qZTpmJYG+4nuqF3G9+rbaSK0o1Xj201+6BP/VU58xy+GX+46nrLCvl+ucKSDBV4lCS/vnJ4Zuhvbm0J7sK5fTJhaQ8p61zBsDSe+4dHKbnySntfyzQyons0Hl3S2tkx6XWw2lX37JY8q2+VbUdgyNXu//R4vhhPf4GjlenzTUAtlSIZ9I5TrZWjiK663klu2oslmwU25q4mJaKz7sa0fs3cTE1/7Zz7u3/bH8Q3FQK4IH1o2dge09OCw2tMiE9+mfhdj4ut8ad0z8R0fBhfjj+Mzr9Jiekr+L75iV3l8b/URaeJLv7RO7yE+XbUs5YUOv2HbWrfbSXN8n2aZk4tNfDqG10Xb7FV8F/HpmNXxmfWqX27FpvhkIVyuJvsmPknxy0PnO4hPQ9FLgcz3YVFlpAk1xSdH+ijqzUx8elku1ijJky5s7iE+6XX6W5LM/q/2WcHcdMmm+PRRrM1ZbxElPumF9t4iDvydXTbffHwD38RiHnPJQxRvIHdjU685PvM7iv66tjJ3tHolkXu1h2EWYKyPGGQpeRfx6QfXhbP5BelhY/5Ijo3xeVOtMFvmt7wmvnzhszH/27CXovuITxcdMtjiabmDQINqjs+rPBJb7+w6JtmXpctrm/vK/8lQx896V4tPR+2nvlrnT/k3+S/ftfg+ivi89SYPOZR1n11FL/LnPfth2bq4Z7lsSafm+C+3k6xG5W2cvbVPBTvtKGqn1S3FrpJqqzSrt+6YfZVPBXrSutPYGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Gv/AUaJLNpGIou0AAAAAElFTkSuQmCC",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      title: "Development Tools",
      category: "tools",
      color: "text-blue-500",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "IntelliJ IDEA",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        },
        {
          name: "Eclipse",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
        },
        {
          name: "PyCharm",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
        },
        {
          name: "Postman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "NPM",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        },
        {
          name: "Maven",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-primary/60 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            My <span className="text-primary text-glow">Technical Skills</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Proficient in modern technologies and frameworks to design, develop,
            and optimize high-performance digital solutions.
          </p>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* Skills Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 opacity-0 animate-fade-in-delay-1">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="group bg-card/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 relative overflow-hidden"
              style={{
                animationDelay: "4s",
              }}
            >
              {/* Category Header */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-1.5 sm:gap-2 bg-gray-100 hover:bg-gray-200 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full transition-all duration-200 cursor-default"
                  >
                    {/* Skill Logo */}
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-4 h-4 xs:w-5 xs:h-5 object-contain flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    {/* Skill Name */}
                    <span
                      className={cn(
                        "text-xs xs:text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                        category.color
                      )}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
