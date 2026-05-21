const groups = [
  { title: "AI / LLM Engineering", items: ["LLMs", "RAG", "Conversational AI", "Agentic AI", "LangChain", "LangGraph", "LangSmith", "OpenAI API", "Embeddings", "Vector Search", "Structured Outputs", "Prompt Engineering"] },
  { title: "Backend Development", items: ["Python", "FastAPI", "Flask", "REST APIs", "API Design", "Async Processing", "Background Jobs", "Backend Architecture"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Schema Design", "Data Modeling", "Query Optimization", "Indexing", "Data Pipelines", "ETL"] },
  { title: "DevOps & Cloud", items: ["AWS ECS", "AWS RDS", "AWS S3", "Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Cloud Deployment"] },
  { title: "Machine Learning & Document AI", items: ["OCR", "Document Processing", "Computer Vision", "OpenCV", "TensorFlow", "Keras", "Scikit-learn", "Model Deployment"] },
  { title: "Programming & Tools", items: ["JavaScript", "React Native", "NumPy", "Data Structures", "Graph Algorithms", "BFS", "Git", "Linux", "Codex", "Claude Code"] },
];

export const Skills = () => (
  <section id="skills" className="doodle-section py-20 md:py-28">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <img src="/doodles/sitting-reading.svg" alt="Open Doodles reading character" className="mx-auto max-h-96 rotate-[-2deg]" />
          <h2 className="mt-8 font-display text-4xl font-bold md:text-5xl">Toolbox Doodles</h2>
          <p className="mt-4 text-muted-foreground">
            The tools I reach for when turning fuzzy ideas into shipped AI products.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {groups.map((g, index) => (
            <div key={g.title} className={`sketch-card p-5 ${index % 2 ? "rotate-1" : "rotate-[-1deg]"}`}>
              <h3 className="mb-4 border-b-2 border-foreground pb-2 font-display text-xl font-bold">{g.title}</h3>
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
    </div>
  </section>
);
