import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => (
  <section id="about" className="section-divider bg-muted/40 py-20 md:py-28">
    <div className="container grid items-start gap-12 md:grid-cols-[0.65fr_1fr]">
      <div>
        <img
          src="/images/thiha-aung-headshot.png"
          alt="Thiha Aung"
          className="mb-8 aspect-square w-44 rounded-2xl border border-border object-cover shadow-sm md:w-52"
        />
        <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
          Who is Thiha Aung?
        </h2>
        <p className="max-w-md text-xl leading-relaxed text-muted-foreground">
          AI Engineer building practical systems that turn complex ideas into{" "}
          <span className="text-primary">reliable products.</span>
        </p>
      </div>
      <div>
        <p className="mb-8 max-w-2xl leading-relaxed text-muted-foreground">
          AI Engineer with production experience across fintech, edtech, and telecommunications. I
          build reliable backend systems, LLM applications, RAG and conversational AI products,
          OCR/document-processing tools, data pipelines, and cloud APIs with ownership from
          architecture and database design through deployment and CI/CD.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: MapPin, label: "Chiang Mai" },
            { icon: Briefcase, label: "5+ years" },
            { icon: GraduationCap, label: "First Class Honours" },
          ].map((item) => (
            <span key={item.label} className="retro-chip bg-card">
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
