import { Button } from "@/components/Button";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const skills = [
  "JavaScript",
  "HTML5",
  "CSS",
  "React",
  "Vite",
  "TailwindCSS",
  "Vercel",
  "Appwrite",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-orange.png"
          alt="hero-image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-(--color-background)/20 via-b(--color-background)/80 to-(--color-background)"></div>
      </div>

      {/* Orange Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* creates 30 dot divs,  left and top are percentage values and generated randomly*/}
        {/* each dot gets animated and moves for a random time and with a random delay */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#ff5c00",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0rem 0rem ${Math.random() * 1}rem ${
                Math.random() * 0.2
              }rem orange`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-(--color-primary)">
                <span className="w-2 h-2 bg-(--color-primary) rounded-full animate-pulse" />
                Software Developer | Apprenticeship
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in animation-delay-100">
                Creating{" "}
                <span className="text-(--color-primary) glow-text">great</span>
                <br />
                things with pure
                <br />
                <span className="font-serif italic font-normal text-white">
                  imagination.
                </span>
              </h1>
              <p className="text-lg text-(--color-muted-foreground) max-w-lg animate-fade-in animation-delay-200">
                Hey, I’m{" "}
                <span className="text-(--color-primary) glow-text">Sören </span>{" "}
                - currently completing an IHK-certified apprenticeship as a
                Software Developer, focused on web technologies and real-world
                applications.
              </p>
            </div>

            {/* CTA'*/}
            <div>
              <a href="#contact">
                <Button size="lg">Contact Me →</Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-(--color-muted-foreground)">
                Follow me:{" "}
              </span>
              {[
                { icon: Github, href: "https://github.com/srenV" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/soren-timo-voigt/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5 " />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Img */}
            <div className="relative max-w-md mx-auto ">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-pixel.png"
                  alt="Sören Timo Voigt"
                  className="w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <div className="mt-20 animate-fade-in animation-delay-500">
          <p className="text-sm text-(--color-muted-foreground) mb-6 text-center">
            Technologies I work with
          </p>
          {/* here we map trough the skills array and animate it to create a caroussel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-carousell w-max">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-20 py-4">
                  <span className="text-xl font-semibold text-(--color-muted-foreground)/50 hover:text-(--color-primary) transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-500 z-10">
        <HashLink
          to={"/#about"}
          className="flex flex-col items-center gap-2 text-(--color-muted-foreground)"
        >
          <span>Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </HashLink>
      </div>
    </section>
  );
};
