const groups = [
  { title: "AI Engineering", items: ["LLMs", "RAG", "LangChain", "LangGraph", "OpenAI API", "Agentic AI"] },
  { title: "Backend", items: ["Python", "FastAPI", "Flask", "REST APIs", "Async Processing", "Background Jobs"] },
  { title: "Data & Cloud", items: ["PostgreSQL", "Query Optimization", "Data Pipelines", "Docker", "AWS", "GitHub Actions"] },
  { title: "Computer Vision", items: ["OCR", "Document Processing", "OpenCV", "TensorFlow", "Model Deployment"] },
];

export const Skills = () => (
  <section id="skills" className="section-divider py-20 md:py-28">
    <div className="container">
      <div className="mb-12">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Skills & Tools</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Technologies I use to build, deploy, and maintain production AI systems.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="sketch-card p-5">
              <h3 className="mb-4 border-b border-border pb-3 font-display text-xl font-bold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="retro-chip bg-card text-[11px]">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  </section>
);
