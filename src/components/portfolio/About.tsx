import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => (
  <section id="about" className="doodle-section bg-secondary/55 py-20 md:py-28">
    <div className="container grid items-center gap-12 md:grid-cols-[0.95fr_1fr]">
      <div className="relative">
        <div className="sketch-card rotate-[-2deg] bg-white p-4">
          <img src="/doodles/coffee.svg" alt="Open Doodles character with a giant coffee cup" className="w-full" />
        </div>
        <div className="absolute -bottom-8 -left-4 text-6xl text-primary">☆</div>
      </div>
      <div>
        <h2 className="mb-4 inline-block border-b-4 border-foreground font-display text-3xl font-bold md:text-4xl">
          Who is Thiha?
        </h2>
        <p className="mb-8 max-w-2xl text-xl leading-relaxed">
          AI Engineer building practical systems that turn complex ideas into{" "}
          <span className="scribble-underline text-primary">reliable products.</span>
        </p>
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
