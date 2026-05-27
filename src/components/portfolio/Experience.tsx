const experiences = [
  {
    role: "AI System Engineer",
    company: "ONOW Ascent",
    location: "Remote · US",
    period: "Jun 2024 — Apr 2026",
    points: [
      "Owned backend architecture for Daytwo and the Loan Management system end-to-end, supporting 200+ active users with improved reliability and performance.",
      "Built LLM-powered RAG and conversational AI features for income and expense recording, financial queries, business summaries, and daily action cards.",
      "Designed agentic workflows for item matching, auto fill, and double-entry classification to reduce manual entry and improve financial data accuracy.",
      "Built data pipelines that kept production and analytics databases in sync for business reporting.",
      "Optimized PostgreSQL schemas, indexes, and queries, and established GitHub Actions CI/CD across development and production.",
    ],
  },
  {
    role: "AI Engineer",
    company: "ONOW",
    location: "On-site · Myanmar",
    period: "Nov 2023 — Jun 2024",
    points: [
      "Owned FastAPI backend and database design for the Learning Assistance Web Platform, including APIs, schema design, data models, lessons, users, quizzes, and progress tracking.",
      "Contributed to a RAG-based lesson PDF pipeline for processing lesson materials and generating multiple-choice quizzes.",
      "Built an AI-assisted coaching CRM for MSME mentors with call notes, follow-up scheduling, and AI-generated guidance based on client data and coaching rules.",
    ],
  },
  {
    role: "Python Developer",
    company: "XENoptics",
    location: "On-site · Myanmar",
    period: "Mar 2023 — Nov 2023",
    points: [
      "Developed and optimized graph-based route calculation algorithms for fiber management systems using BFS, NumPy, and efficient data structures, improving route calculation speed by 5x.",
      "Built backend services and APIs for route calculation and system integration.",
      "Developed frontend and command-line tools for camera tuning workflows and automated sensor data reports.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Partner Associates Int'l",
    location: "On-site · Myanmar",
    period: "Feb 2021 — Feb 2023",
    points: [
      "Developed an OCR system for Myanmar NRC documents, including data collection, preprocessing, model training, image enhancement, segmentation, and post-processing.",
      "Improved OCR accuracy using spell checking and image preprocessing techniques.",
      "Built a face detection system for document verification using OpenCV.",
      "Built Flask APIs for ML model deployment.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="section-divider bg-muted/40 py-16 md:py-20">
    <div className="page-shell">
      <div className="mb-12">
        <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">Experience</h2>
        <p className="max-w-2xl text-muted-foreground">
          Production architecture, RAG workflows, data pipelines, and reliable AI feature delivery.
        </p>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article key={exp.company + exp.period} className="sketch-card bg-card p-6">
            <div className="mb-4 flex flex-wrap justify-between gap-3 border-b border-border pb-3">
              <div>
                <div className="mb-1 font-label text-sm font-semibold text-primary">Role {index + 1}</div>
                <h3 className="font-display text-2xl font-bold text-foreground">{exp.role}</h3>
                <p className="font-label font-bold text-foreground">
                  {exp.company} <span className="font-normal text-muted-foreground">· {exp.location}</span>
                </p>
              </div>
              <span className="h-fit rounded-full bg-secondary px-3 py-1 font-label text-xs font-semibold text-secondary-foreground">
                {exp.period}
              </span>
            </div>
            <ul className="grid gap-2 text-muted-foreground md:grid-cols-2">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
