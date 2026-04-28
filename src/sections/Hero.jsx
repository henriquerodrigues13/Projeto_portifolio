import { useEffect, useRef } from "react";
import AuraParticleCanvas from "../components/AuraParticleCanvas.jsx";
import { Button } from "../components/ui/button.jsx";
import { cn } from "../lib/utils.js";
import { useMagnetic } from "../hooks/useMagnetic.js";

export default function Hero() {
  const magneticProjects = useMagnetic(0.16);
  const magneticContact = useMagnetic(0.16);
  const heroRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      if (scrolled < 800) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.35}px)`;
        heroRef.current.style.opacity = `${1 - scrolled / 700}`;
        heroRef.current.style.filter = `blur(${scrolled / 50}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative z-10 min-h-screen w-full overflow-hidden">
      <AuraParticleCanvas />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08),_transparent_55%)]" />

      <section
        ref={heroRef}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 md:px-10"
        aria-label="Apresentação principal"
      >
        <div className="hero-aurora" />
        <div className="hero-grid" />

        <div className="absolute left-1/2 top-1/2 z-0 h-[min(520px,70vw)] w-[min(520px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-[18%] top-[22%] z-0 h-40 w-40 rounded-full bg-secondary/10 blur-[80px] md:h-52 md:w-52" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div
            className={cn(
              "hero-enter hero-delay-1 glass-card mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-muted-foreground"
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="hero-content-enter hero-delay-2">Aberto a colaborações pontuais</span>
          </div>

          <h1
            className={cn(
              "hero-enter hero-delay-3 tracking-tighter-custom text-balance text-5xl font-semibold leading-[1.08] text-foreground md:text-7xl lg:text-8xl"
            )}
          >
            Henrique
            <br />
            <span className="text-gradient-hero">Costa Rodrigues</span>
          </h1>

          <p
            className={cn(
              "hero-enter hero-delay-4 mt-7 max-w-2xl text-balance text-lg font-light tracking-tight text-muted-foreground md:text-2xl"
            )}
          >
            Construo experiências web com ritmo, hierarquia impecável e detalhes
            que somam — do layout ao microcopy.
          </p>

          <p
            className={cn(
              "hero-enter hero-delay-5 mt-4 max-w-xl text-sm text-muted-foreground/80 md:text-base"
            )}
          >
            Front-end · Design systems · Prototipagem · Acessibilidade
          </p>

          <div
            className={cn(
              "mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
            )}
          >
            <Button
              size="lg"
              className={cn(
                "hero-enter hero-delay-6 btn-glow-subtle group relative overflow-hidden rounded-full shadow-lg shadow-primary/15 ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.03]"
              )}
              ref={magneticProjects.ref}
              onMouseMove={magneticProjects.onMouseMove}
              onMouseLeave={magneticProjects.onMouseLeave}
              type="button"
              onClick={() => {
                document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="hero-content-enter hero-delay-7 relative z-10 flex items-center gap-2">
                Ver projetos
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={cn(
                "hero-enter hero-delay-6 group relative overflow-hidden rounded-full transition-transform duration-300 hover:scale-[1.03]"
              )}
              ref={magneticContact.ref}
              onMouseMove={magneticContact.onMouseMove}
              onMouseLeave={magneticContact.onMouseLeave}
              type="button"
              style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
              onClick={() => {
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="hero-content-enter hero-delay-7 relative z-10">Entrar em contato</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


