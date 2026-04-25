import { cn } from "../lib/utils";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start overflow-hidden px-6 py-16 md:px-10 lg:pt-24 lg:pb-32"
    >
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-left">
          <div className="hero-enter hero-delay-1 mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Sobre Mim
          </div>
          
          <h2 className="hero-enter hero-delay-2 mb-8 text-balance text-4xl font-semibold tracking-tighter-custom text-foreground md:text-5xl lg:text-6xl">
            Onde o código encontra o{" "}
            <span className="text-primary italic">Design</span>
          </h2>
          
          <div className="hero-enter hero-delay-3 space-y-6 text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Olá! Eu sou <span className="font-medium text-foreground">Henrique Rodrigues</span>, 
              um desenvolvedor apaixonado por criar interfaces que não apenas funcionam, mas 
              contam uma história através da clareza e do movimento.
            </p>
            
            <p>
              Minha jornada no desenvolvimento web começou com a curiosidade de como 
              transformar pixels estáticos em experiências vivas. Hoje, foco em construir 
              sistemas escaláveis e design systems que unem estética e performance.
            </p>
          </div>

          <div className="hero-enter hero-delay-4 mt-10 flex flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-foreground">3+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Anos de XP</span>
            </div>
            <div className="mx-6 h-12 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-foreground">50+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Projetos</span>
            </div>
            <div className="mx-6 h-12 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-foreground">UI/UX</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Especialista</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Visual */}
        <div className="hero-enter hero-delay-5 relative flex flex-1 items-center justify-center lg:pt-20">
          <div className="relative z-10 aspect-square w-full max-w-[450px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="/assets/sobre-pixel-art.png"
              alt="Henrique Rodrigues Pixel Art"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay Glass effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          
          {/* Decorative floating elements */}
          <div className="hero-content-enter hero-delay-6 absolute -bottom-6 -right-6 z-20 h-32 w-32 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl md:-bottom-10 md:-right-10">
            <div className="flex flex-col gap-2">
              <div className="h-1.5 w-full rounded-full bg-primary/40" />
              <div className="h-1.5 w-[70%] rounded-full bg-primary/30" />
              <div className="h-1.5 w-[40%] rounded-full bg-primary/20" />
              <div className="mt-2 text-[10px] font-bold text-primary">STATUS: CODING</div>
            </div>
          </div>
          
          <div className="absolute -left-6 -top-6 -z-10 h-64 w-64 animate-pulse rounded-full bg-secondary/10 blur-[60px]" />
        </div>

      </div>
    </section>
  );
}
