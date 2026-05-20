const groups = [
  { title: "AI / LLM Engineering", items: ["LLMs", "RAG", "Conversational AI", "Agentic AI", "LangChain", "LangGraph", "LangSmith", "OpenAI API", "Embeddings", "Vector Search", "Structured Outputs", "Prompt Engineering"] },
  { title: "Backend Development", items: ["Python", "FastAPI", "Flask", "REST APIs", "API Design", "Async Processing", "Background Jobs", "Backend Architecture"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Schema Design", "Data Modeling", "Query Optimization", "Indexing", "Data Pipelines", "ETL"] },
  { title: "DevOps & Cloud", items: ["AWS ECS", "AWS RDS", "AWS S3", "Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Cloud Deployment"] },
  { title: "Machine Learning & Document AI", items: ["OCR", "Document Processing", "Computer Vision", "OpenCV", "TensorFlow", "Keras", "Scikit-learn", "Model Deployment"] },
  { title: "Programming & Tools", items: ["JavaScript", "React Native", "NumPy", "Data Structures", "Graph Algorithms", "BFS", "Git", "Linux", "Codex", "Claude Code"] },
];

export const Skills = () => (
  <section id="skills" className="py-20 md:py-28 bg-secondary/20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & toolbox</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="card-elegant border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-primary">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="text-sm px-3 py-1.5 rounded-md bg-secondary border border-border">
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
