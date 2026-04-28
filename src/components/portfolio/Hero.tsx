import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
      <div className="container max-w-4xl">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
            Thiha Aung —{" "}
            <span className="text-gradient">AI Engineer</span> building
            production-ready systems.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            5+ years of experience in computer vision, LLM-powered apps, and scalable backend
            services. Built across fintech, edtech, and telecom — from architecture to CI/CD.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-smooth"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-smooth"
            >
              <Mail className="h-4 w-4" /> Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
