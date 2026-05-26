export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-wrap items-center justify-between gap-4 font-label text-sm text-muted-foreground">
      <p className="font-display text-2xl font-bold text-foreground">
        Thiha<span className="text-primary">.</span>
      </p>
      <p>© {new Date().getFullYear()} Thiha Aung. AI Engineer.</p>
      <div className="flex gap-4">
        <a href="#contact" className="hover:text-primary">Connect</a>
        <a href="/thiha-aung-resume.pdf" className="hover:text-primary">Resume</a>
        <a href="https://github.com/ThihaAung11" target="_blank" rel="noreferrer" className="hover:text-primary">Source</a>
      </div>
    </div>
  </footer>
);
