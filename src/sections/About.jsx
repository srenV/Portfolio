import { CircleQuestionMark, Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, maintainable, and well-documented code that scales and stays readable.",
  },
  {
    icon: CircleQuestionMark,
    title: "Curiosity",
    description:
      "Continuously exploring new technologies and questioning how things work under the hood.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating effectively with teams to turn ideas into reliable, real-world solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Keeping up with modern technologies and applying them to solve real problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-(--color-secondary-foreground) text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-(--color-secondary-foreground)">
              Building our future,
              <span className="font-serif italic font-normal text-white">
                <br />
                step by step.
              </span>
            </h2>

            {/* Some info paragraphs */}
            <div className="space-y-4 text-(--color-muted-foreground) animate-fade-in animation-delay-200">
              <p>
                I am currently reinventing my professional path as a trainee in
                Application Development (Fachinformatiker
                Anwendungsentwicklung). Driven by a genuine curiosity for how
                things work under the hood, I turned my fascination for
                technology into a career. I don't just write code; I solve
                problems.
              </p>
              <p>
                My journey into tech wasn’t linear, which I consider my greatest
                asset. Making the conscious decision to retrain has taught me
                resilience, adaptability, and the importance of continuous
                learning. I bring a mature perspective to development, combining
                fresh technical skills with professional discipline.
              </p>
              <p>
                Currently, my focus is sharpening my skills in the modern web
                stack—specifically React and the wider JavaScript ecosystem,
                ranging from complex frameworks to pure Vanilla builds. However,
                my curiosity extends beyond the browser. I enjoy exploring
                languages like Java and Python, using them to broaden my
                technical horizon and understand different programming
                paradigms.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-(--color-foreground)">
                My goal is to create digital experiences that are not just
                functional but stand out through modern, pleasing interfaces. I
                strive to build software that users use with joy—and developers
                understand in the blink of an eye.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-4 hover:bg-(--color-primary)/20">
                  <item.icon className="w-6 h-6 text-(--color-primary)" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-(--color-muted-foreground)">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
