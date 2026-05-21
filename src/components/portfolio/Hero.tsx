import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="relative animate-fade-up">
            <div className="absolute -left-8 -top-8 hidden h-24 w-24 rotate-[-14deg] rounded-[55%_45%_60%_40%] border-4 border-accent md:block" />
            <h1 className="mb-7 max-w-3xl font-display text-5xl font-bold leading-[0.95] text-foreground md:text-7xl">
              Engineering{" "}
              <span className="scribble-underline text-primary">Intelligence</span>
              <br />
              with a Human Touch.
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I build AI systems that don't just compute, they understand. Exploring the messy,
              wonderful intersection of machine logic and human creativity.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#projects" className="retro-button">
                See Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="retro-button bg-secondary">
                Hire Me <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-secondary" />
            <div className="relative rotate-1 border-2 border-foreground bg-white p-4 hard-shadow-primary">
              <img
                src="/doodles/jumping.svg"
                alt="Open Doodles character jumping"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
