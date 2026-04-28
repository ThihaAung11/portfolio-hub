import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Thiha Aung —{" "}
            <span className="text-gradient">AI Engineer</span> building
            production-ready systems.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            5+ years of experience in computer vision, LLM-powered apps, and scalable backend
            services. Built across fintech, edtech, and telecom — from architecture to CI/CD.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-smooth glow"
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
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Thiha Aung — AI engineer portrait"
            width={1280}
            height={1280}
            className="relative rounded-2xl border border-border card-elegant animate-float"
          />
        </div>
      </div>
    </section>
  );
};
