import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-smooth ${scrolled ? "shadow-sm" : ""}`}>
      <nav className="container flex min-h-16 items-center justify-between gap-4 py-2">
        <a href="#" className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Thiha<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-6 font-label text-sm font-semibold md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1 text-foreground transition-smooth hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-md bg-primary px-5 py-2 font-label text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary/90 md:inline-flex"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
};
