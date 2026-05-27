import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => (
  <section id="about" className="section-divider bg-muted/40 py-16 md:py-20">
    <div className="page-shell grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="order-2 max-w-3xl lg:order-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          About
        </p>
        <h2 className="mb-5 font-display text-3xl font-bold leading-tight md:text-4xl">
          Practical AI systems, built for real product teams.
        </h2>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          I build practical AI and backend systems that turn complex ideas into{" "}
          <span className="font-medium text-primary">reliable products.</span>
        </p>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          I'm an AI Engineer with production experience across fintech, edtech, and
          telecommunications. My work spans backend services, LLM applications, RAG and
          conversational AI products, OCR/document-processing tools, data pipelines, cloud APIs,
          database design, deployment, and CI/CD.
        </p>
      </div>

      <aside className="order-1 sketch-card w-full p-5 lg:order-2">
        <div className="flex items-center gap-4">
          <img
            src="/images/thiha-aung-headshot.png"
            alt="Thiha Aung"
            className="aspect-square w-28 rounded-xl border border-border object-cover shadow-sm"
          />
          <div>
            <h3 className="font-display text-xl font-bold leading-tight">Thiha Aung</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">AI Engineer</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { icon: MapPin, label: "Chiang Mai" },
            { icon: Briefcase, label: "5+ years" },
            { icon: GraduationCap, label: "First Class Honours" },
          ].map((item) => (
            <span key={item.label} className="retro-chip bg-secondary">
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </span>
          ))}
        </div>
      </aside>
    </div>
  </section>
);
