import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/Button";

// this array holds the info for each project
const projects = [
  {
    title: "RPS / RPSLS",
    description:
      "My solution to the Rock Paper Scissors challenge from frontendmentor.io with the ability to choose between two game modes, completely written in Vanilla HTML/CSS/JS.",
    image: "./public/rps.jpg",
    tags: ["Javascript", "CSS", "HTML"],
    link: "https://srenv.github.io/Rock-Paper-Scissor/",
    github: "https://github.com/srenV/Rock-Paper-Scissor",
  },
  {
    title: "Loophole Landing Page",
    description:
      "Single Page Application version of the Loophole Landing Page challenge from frontendmentor.io with dynamic snippet loading and SPA routing. ",
    image: "./public/loophole.jpg",
    tags: ["Javascript", "CSS", "HTML"],
    link: "https://github.com/srenV/Loophole-SPA.git",
    github: "https://srenv.github.io/Loophole-SPA/",
  },
  {
    title: "Room Homepage",
    description: "A simple Homepage built with a small slider.",
    image: "./public/roomHomepage.jpg",
    tags: ["Javascript", "CSS", "HTML"],
    link: "https://srenv.github.io/Room-Homepage/",
    github: "https://github.com/srenV/Room-Homepage",
  },
  {
    title: "Pondfolio",
    description:
      "A blank SPA portfolio that was part of a learning challenge in my apprenticeship.",
    image: "./public/pondfolio.jpg",
    tags: ["Javascript", "CSS", "HTML"],
    link: "https://srenv.github.io/Pondfolio/",
    github: "https://github.com/srenV/Pondfolio",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-(--color-secondary-foreground) text-sm font-md tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
            Proudly presenting,
            <span className="font-serif italic font-normal text-white">
              {" "}
              my latest creations.
            </span>
          </h2>
          <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
            A few projects I made so far, all in Vanilla JS/CSS, representing my
            journey to this point.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* here we map through the projects array and generate a div for each of them */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--color-card) via-(--color-card)/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-(--color-primary) -translate-y-20 "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-(--color-primary)  -translate-y-20"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-(--color-primary) transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 group-hover:text-(--color-primary) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-(--color-muted-foreground) text-sm">
                  {project.description}
                </p>
                <div className=" flex flex-wrap gap-2">
                  {/* here we map through the tag properties and display them under the description */}
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-(--color-surface) text-sm font-medium  text-(--color-muted-foreground)  transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="items-center flex justify-center mt-10 md:mt-20">
          <a href="https://github.com/srenV?tab=repositories">
            <Button size={"lg"}> View all Projects ↗</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
