import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export default function Header() {
  const navLinks = [
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-6 py-6 transition-all duration-300 md:px-10">
      <nav className="glass-panel flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 shadow-2xl shadow-black/20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground shadow-lg shadow-primary/20">
            HR
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-white/10 bg-white/5 px-5 text-[11px] font-semibold tracking-wide backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
          onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
        >
          Conversar
        </Button>
      </nav>
    </header>
  );
}

