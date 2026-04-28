const groups = [
  { title: "AI / Machine Learning", items: ["LLMs", "Conversational AI", "LangChain", "LangGraph", "OpenCV", "TensorFlow", "Keras", "Scikit-learn"] },
  { title: "Backend Development", items: ["Python", "JavaScript", "FastAPI", "Flask", "Express", "REST API design"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "SQL", "Data Pipelines"] },
  { title: "DevOps & Cloud", items: ["AWS (ECS, RDS, S3)", "Docker", "GitHub Actions", "DigitalOcean"] },
];

export const Skills = () => (
  <section id="skills" className="py-20 md:py-28 bg-secondary/20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & toolbox</h2>
      <div className="grid sm:grid-cols-2 gap-6">
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
