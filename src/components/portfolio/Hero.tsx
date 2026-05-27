import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  const focusAreas = [
    ["Production AI", "LLM apps, RAG, agents"],
    ["Backend Architecture", "FastAPI, PostgreSQL, AWS"],
    ["Product Delivery", "Schema to deployed features"],
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="page-shell">
        <div className="relative max-w-4xl animate-fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary md:text-sm">
            AI Engineer · Backend Systems · LLM Applications
          </p>
          <h1 className="mb-6 max-w-3xl font-display text-4xl font-bold leading-[1.06] text-foreground md:text-5xl lg:text-6xl">
            Building production-ready AI systems.
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I design reliable backend services, RAG workflows, conversational AI features, data
            pipelines, and cloud APIs for real products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="retro-button">
              See Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="retro-button border-border bg-card text-foreground hover:bg-muted">
              Hire Me <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {focusAreas.map(([title, text]) => (
            <div key={title} className="border-l-2 border-primary bg-card px-4 py-3">
              <h2 className="text-sm font-semibold text-foreground">{title}</h2>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
