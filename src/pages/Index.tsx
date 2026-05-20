import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { PortfolioChat } from "@/components/portfolio/PortfolioChat";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Thiha Aung — AI Engineer Portfolio";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Thiha Aung — AI Engineer with 5+ years building backend systems, LLM applications, RAG and conversational AI, OCR tools, data pipelines, and cloud APIs.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <PortfolioChat />
    </main>
  );
};

export default Index;
