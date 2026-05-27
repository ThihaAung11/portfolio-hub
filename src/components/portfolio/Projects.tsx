import { Github, ExternalLink } from "lucide-react";

const githubProfileUrl = "https://github.com/ThihaAung11";

const projects: {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
}[] = [
  {
    title: "Daytwo Financial App",
    description: "Production fintech app with scalable backend architecture, RAG-powered financial queries, action cards, and agentic workflows for item matching and double-entry classification.",
    tags: ["FastAPI", "RAG", "OpenAI", "PostgreSQL", "React Native"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.ascent.daytwo&pcampaignid=web_share",
    liveLabel: "Daytwo Financial App on Google Play",
  },
  {
    title: "AI Cooking Assistant",
    description: "Conversational cooking assistant that helps users plan meals, discover recipes, adapt ingredients, and follow step-by-step guidance with LLM support.",
    tags: ["LLMs", "RAG", "FastAPI", "OpenAI"],
    githubUrl: githubProfileUrl,
  },
  {
    title: "AI Agent Platform",
    description: "Agentic workflow platform for tool-using AI systems, multi-step task execution, structured outputs, automation, and production-ready orchestration patterns.",
    tags: ["Agentic AI", "LangGraph", "Python", "Automation"],
    githubUrl: githubProfileUrl,
  },
];

export const Projects = () => (
  <section id="projects" className="section-divider py-16 md:py-20">
    <div className="page-shell">
      <div className="mb-12 border-b border-border pb-4">
        <div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Selected Projects</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">Production AI systems, agent workflows, and practical backend work.</p>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, index) => (
          <article
            key={p.title}
            className="sketch-card relative p-6 transition-smooth hover:-translate-y-1"
          >
            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
              {index + 1}
            </div>
            <h3 className="mb-4 pr-12 font-display text-2xl font-bold leading-tight">{p.title}</h3>
            <p className="mb-6 min-h-28 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mb-5 border-t border-border pt-4">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="retro-chip text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 font-label text-sm font-bold">
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`} className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" aria-label={p.liveLabel ?? `${p.title} live project`} className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4">
                  <ExternalLink className="h-4 w-4" /> Play Store
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
