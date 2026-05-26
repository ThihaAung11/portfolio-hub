import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Download, Send, User, X } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  content: string;
  showResume?: boolean;
};

const resumeUrl = "/thiha-aung-resume.pdf";

const suggestions = [
  "Tell me about Thiha",
  "What AI projects has he built?",
  "What are his strongest skills?",
  "Can I download the resume?",
];

const profileAnswer =
  "Thiha Aung is an AI Engineer based in Chiang Mai with 5+ years of experience building production backend systems, LLM apps, RAG and conversational AI, OCR/document-processing tools, data pipelines, and cloud APIs. He has worked across fintech, edtech, and telecommunications.";

const projectAnswer =
  "Key projects include Daytwo, a production fintech app with RAG-powered financial queries and agentic workflows; an AI Cooking Assistant for recipe planning and guided cooking; and an AI Agent Platform for tool-using workflows, structured outputs, and automation.";

const skillsAnswer =
  "His strongest areas are Python, FastAPI, PostgreSQL, LangChain, LangGraph, OpenAI, RAG, conversational AI, agentic workflows, Docker, AWS, GitHub Actions, OCR, OpenCV, and production backend architecture.";

const experienceAnswer =
  "Most recently, Thiha worked as an AI System Engineer at ONOW Ascent, owning backend architecture for Daytwo and a Loan Management system used by 200+ active users. He also built RAG/conversational finance features, data pipelines, PostgreSQL optimizations, CI/CD, and React Native product features.";

const contactAnswer =
  "You can contact Thiha at thihaa110@gmail.com or +66 935 078 500. He is based in Chiang Mai, Thailand and is open to AI engineering, backend, and consulting opportunities.";

const fallbackAnswer =
  "I can answer questions about Thiha's experience, projects, skills, contact details, education, and resume. Try asking about his AI projects, backend work, Daytwo, or resume download.";

const createResponse = (input: string): Message => {
  const normalized = input.toLowerCase();

  if (/(resume|cv|download|pdf)/.test(normalized)) {
    return {
      role: "assistant",
      content: "Yes. You can download Thiha's resume here.",
      showResume: true,
    };
  }

  if (/(project|daytwo|cooking|agent|platform|built|portfolio)/.test(normalized)) {
    return { role: "assistant", content: projectAnswer };
  }

  if (/(skill|tech|stack|tool|language|langchain|openai|fastapi|python|aws|postgres)/.test(normalized)) {
    return { role: "assistant", content: skillsAnswer };
  }

  if (/(experience|work|job|onow|xenoptics|partner|career)/.test(normalized)) {
    return { role: "assistant", content: experienceAnswer };
  }

  if (/(contact|email|phone|hire|available|location|where)/.test(normalized)) {
    return { role: "assistant", content: contactAnswer };
  }

  if (/(education|degree|greenwich|university|certificate|certification)/.test(normalized)) {
    return {
      role: "assistant",
      content:
        "Thiha earned a B.Sc. (Hons) Computing from the University of Greenwich with First Class Honours. He also holds Google Data Analytics and Stanford Online Machine Learning certificates from Coursera.",
    };
  }

  if (/(about|who|summary|profile|tell me)/.test(normalized)) {
    return { role: "assistant", content: profileAnswer };
  }

  return { role: "assistant", content: fallbackAnswer };
};

export const PortfolioChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I am Thiha's portfolio assistant. Ask me about his experience, projects, skills, or resume.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickActions = useMemo(() => suggestions, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((current) => [...current, { role: "user", content: trimmed }, createResponse(trimmed)]);
    setInput("");
    setOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <section className="sketch-card w-[min(calc(100vw-2.5rem),390px)] overflow-hidden bg-card">
          <header className="flex items-center justify-between border-b-2 border-foreground bg-secondary px-4 py-3 font-label">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current bg-card">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold">Ask Thiha's Agent</h2>
                <p className="text-xs opacity-80">Resume-aware portfolio chat</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border-2 border-current p-1 transition-smooth hover:bg-primary"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={scrollRef} className="max-h-[420px] space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                {message.role === "assistant" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl border-2 px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "border-foreground bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  <p>{message.content}</p>
                  {message.showResume && (
                    <a
                      href={resumeUrl}
                      download
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 font-label text-xs font-semibold text-primary-foreground transition-smooth hover:bg-primary/90"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download resume
                    </a>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickActions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 font-label text-xs font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Thiha..."
                className="retro-input min-w-0 flex-1 py-2"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-smooth hover:bg-primary/90"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-smooth hover:-translate-y-0.5 hover:bg-primary/90"
        aria-label={open ? "Close portfolio chat" : "Open portfolio chat"}
      >
        {open ? <X className="h-5 w-5" /> : ">_"}
      </button>
    </div>
  );
};
