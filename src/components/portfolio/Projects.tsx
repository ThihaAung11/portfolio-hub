import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Daytwo Financial App",
    description: "Scalable backend and LLM-powered conversational features for personalized financial tracking. 200+ active users.",
    tags: ["FastAPI", "LangChain", "OpenAI", "PostgreSQL", "AWS"],
  },
  {
    title: "Loan Management System",
    description: "End-to-end loan management with optimized schemas, data pipelines, and CI/CD on GitHub Actions.",
    tags: ["Python", "PostgreSQL", "Docker", "AWS ECS"],
  },
  {
    title: "Learning Assistance Platform",
    description: "FastAPI backend with LLM-powered conversational AI providing intelligent real-time learning assistance.",
    tags: ["FastAPI", "LangChain", "LLMs"],
  },
  {
    title: "Myanmar NRC OCR System",
    description: "Custom OCR for Myanmar national ID documents with image enhancement, segmentation, and post-processing.",
    tags: ["OpenCV", "TensorFlow", "Flask", "OCR"],
  },
  {
    title: "Fiber Routing Engine",
    description: "Routing algorithms and APIs for fiber management — improved accuracy and operational efficiency.",
    tags: ["Python", "Algorithms", "REST APIs"],
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
            className={`group card-elegant border border-border rounded-xl p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 ${
              p.placeholder ? "border-dashed opacity-70" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                {p.title[0]}
              </div>
              <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-smooth">
                <Github className="h-4 w-4" />
                <ExternalLink className="h-4 w-4" />
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
