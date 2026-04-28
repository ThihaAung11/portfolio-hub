const experiences = [
  {
    role: "AI System Engineer",
    company: "ONOW Ascent",
    location: "Remote · US",
    period: "Jun 2024 — Apr 2026",
    points: [
      "Designed and deployed scalable backend for Daytwo financial app and Loan Management system serving 200+ active users.",
      "Built LLM-powered conversational AI features with OpenAI and LangChain for intelligent financial tracking.",
      "Implemented data pipelines syncing production and analytical databases.",
      "Established CI/CD with GitHub Actions, reducing release time from days to hours.",
      "Built cross-platform mobile apps with React Native.",
    ],
  },
  {
    role: "AI Engineer",
    company: "ONOW",
    location: "On-site · Myanmar",
    period: "Nov 2023 — Jun 2024",
    points: [
      "Designed FastAPI backend for the Learning Assistance Web Platform.",
      "Built LLM-powered conversational AI for real-time learning assistance.",
    ],
  },
  {
    role: "Python Developer",
    company: "XENoptics",
    location: "On-site · Myanmar",
    period: "Mar 2023 — Nov 2023",
    points: [
      "Developed routing algorithms for fiber management systems.",
      "Built backend services and APIs for route calculation and integration.",
      "Created CLI and web tools for tuning station systems.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Partner Associates Int'l",
    location: "On-site · Myanmar",
    period: "Feb 2021 — Feb 2023",
    points: [
      "Built OCR system for Myanmar NRC documents end-to-end.",
      "Developed face detection for document verification using OpenCV.",
      "Built Flask APIs for ML model deployment.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-20 md:py-28 bg-secondary/20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.company + exp.period}
            className="card-elegant border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-smooth"
          >
            <div className="flex flex-wrap justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-primary">{exp.company} · <span className="text-muted-foreground">{exp.location}</span></p>
              </div>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {exp.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
