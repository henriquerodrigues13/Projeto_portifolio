import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Terminal, Globe, Bot, Settings2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Habilidades() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Fade IN (Entrance) - Smooth, time-based reveal on individual elements
    gsap.fromTo(".skill-fade-element",
      { filter: "blur(15px)", y: 40, opacity: 0 },
      {
        filter: "blur(0px)",
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    // 2. Fade OUT (Exit) - Scrubbed to scroll
    gsap.fromTo(".skill-wrapper",
      { filter: "blur(0px)", y: 0, opacity: 1 },
      {
        filter: "blur(15px)",
        y: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top -15%", 
          end: "bottom 15%", 
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="habilidades" ref={containerRef} className="relative z-10 flex min-h-fit w-full flex-col items-center justify-start bg-black/60 px-6 py-24 md:px-10">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-50"></div>
      
      <div className="skill-wrapper mx-auto flex w-full max-w-6xl flex-col items-center">
        
        <div className="skill-fade-element mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Arsenal Técnico</h2>
          <p className="text-zinc-500">Ferramentas e tecnologias que utilizo para construir o futuro.</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Languages */}
          <div className="skill-fade-element group flex flex-col rounded-2xl bg-zinc-900/40 p-6 border border-white/5 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] hover:border-white/10">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition-transform duration-300 group-hover:scale-110">
              <Terminal size={24} />
            </div>
            <h3 className="mb-3 font-medium text-white">Linguagens</h3>
            <ul className="flex flex-col space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-purple-500"></span>C / C++</li>
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-purple-500"></span>Python</li>
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-purple-500"></span>Java</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="skill-fade-element group flex flex-col rounded-2xl bg-zinc-900/40 p-6 border border-white/5 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)] hover:border-white/10">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-transform duration-300 group-hover:scale-110">
              <Globe size={24} />
            </div>
            <h3 className="mb-3 font-medium text-white">Desenvolvimento Web</h3>
            <ul className="flex flex-col space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-indigo-500"></span>HTML & CSS</li>
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-indigo-500"></span>React.js</li>
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-indigo-500"></span>Tailwind CSS</li>
            </ul>
          </div>

          {/* AI */}
          <div className="skill-fade-element group relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/40 p-6 border border-purple-500/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] hover:border-purple-500/40">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>
            <div className="mb-4 relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/10 text-fuchsia-400 transition-transform duration-300 group-hover:scale-110">
              <Bot size={24} />
            </div>
            <h3 className="mb-3 relative z-10 font-medium text-white">IA</h3>
            <ul className="flex relative z-10 flex-col space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fuchsia-500"></span>Aprendizado de Máquina & Deep Learning</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fuchsia-500"></span>Visão Computacional & PLN</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fuchsia-500"></span>Integração & Implementação de IA</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-fade-element group flex flex-col rounded-2xl bg-zinc-900/40 p-6 border border-white/5 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(148,163,184,0.15)] hover:border-white/10">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-500/10 text-slate-400 transition-transform duration-300 group-hover:scale-110">
              <Settings2 size={24} />
            </div>
            <h3 className="mb-3 font-medium text-white">Ferramentas e Práticas</h3>
            <ul className="flex flex-col space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><span className="h-1 w-1 shrink-0 rounded-full bg-slate-500"></span>Git & GitHub</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500"></span>Fluxos de ML & Desenvolvimento de Modelos</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500"></span>Design UI/UX & Prototipagem</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
