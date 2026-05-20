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
  <section id="projects" className="py-20 md:py-28">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Selected projects</h2>
          <p className="text-muted-foreground max-w-2xl">A mix of production systems and experiments across AI, backend, and data.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group card-elegant border border-border rounded-xl p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                {p.title[0]}
              </div>
              <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-smooth">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="hover:text-primary transition-smooth"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={p.liveLabel ?? `${p.title} live project`}
                    className="hover:text-primary transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
