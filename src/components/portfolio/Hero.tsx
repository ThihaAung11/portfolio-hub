import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.8fr]">
          <div className="relative animate-fade-up">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">AI Engineer · Backend Systems · LLM Applications</p>
            <h1 className="mb-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-foreground md:text-7xl">
              Building production-ready AI systems.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I design reliable backend services, RAG workflows, conversational AI features, data
              pipelines, and cloud APIs for real products.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#projects" className="retro-button">
                See Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="retro-button border-border bg-card text-foreground hover:bg-muted">
                Hire Me <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="sketch-card p-6 md:p-8">
            <h2 className="mb-6 text-lg font-semibold">Current focus</h2>
            <div className="space-y-5">
              {[
                ["Production AI", "LLM applications, RAG, and agent workflows"],
                ["Backend Architecture", "FastAPI, PostgreSQL, CI/CD, and AWS"],
                ["Product Delivery", "From schema design to deployed user features"],
              ].map(([title, text]) => (
                <div key={title} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
