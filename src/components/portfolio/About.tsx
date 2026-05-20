import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
      <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed mb-10">
        AI Engineer with production experience across fintech, edtech, and telecommunications. I
        build reliable backend systems, LLM applications, RAG and conversational AI products,
        OCR/document-processing tools, data pipelines, and cloud APIs with ownership from
        architecture and database design through deployment and CI/CD.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: MapPin, label: "Based in", value: "Chiang Mai, Thailand" },
          { icon: Briefcase, label: "Experience", value: "5+ years" },
          { icon: GraduationCap, label: "Education", value: "BSc Hons Computing, First Class" },
        ].map((item) => (
          <div key={item.label} className="card-elegant border border-border rounded-xl p-6">
            <item.icon className="h-5 w-5 text-primary mb-3" />
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</div>
            <div className="font-medium">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
