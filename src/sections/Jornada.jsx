import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Jornada() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Entrance Animation for Section Title
    gsap.fromTo(".jornada-title",
      { filter: "blur(15px)", y: 40, opacity: 0 },
      {
        filter: "blur(0px)", y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );

    // 2. Entrance Animation for Items (Staggered)
    gsap.fromTo(".jornada-item",
      { filter: "blur(15px)", y: 30, opacity: 0 },
      {
        filter: "blur(0px)", y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    // 3. Exit Animation (Scrub)
    gsap.fromTo(".jornada-wrapper",
      { filter: "blur(0px)", y: 0, opacity: 1 },
      {
        filter: "blur(15px)", y: -40, opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 65%",
          end: "bottom 15%",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="jornada" ref={containerRef} className="relative z-10 flex min-h-fit w-full flex-col items-center justify-start px-6 py-20 md:px-10 lg:py-32">
      <div className="jornada-wrapper mx-auto flex w-full max-w-6xl flex-col items-center">
        
        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2">
          
          {/* Educação */}
          <div className="jornada-item">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Educação</h2>
            </div>

            <div className="relative ml-5 space-y-12 border-l border-white/10 pl-10">
              {/* Item 1 */}
              <div className="relative group">
                <span className="absolute -left-[45px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]"></span>
                <h3 className="text-xl font-medium text-white">Sistemas da Informação</h3>
                <p className="mt-1 text-sm font-medium text-primary/80">Universidade Federal do Pará</p>
              </div>


            </div>
          </div>

          {/* Experiência */}
          <div className="jornada-item">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Experiência</h2>
            </div>

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 p-8 transition-all duration-300 hover:border-primary/20 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-primary/5">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">EXPERIÊNCIA ATUAL</div>
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary">Voluntário do LAPID</h3>
                <p className="mt-2 text-lg font-medium text-zinc-400">Laboratório de Pesquisa de Inteligência de Dados da UFPA</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                  <span className="text-xs text-zinc-500 uppercase tracking-tight">Atuando agora</span>
                </div>
              </div>
              
              {/* Você pode adicionar mais cards de experiência aqui seguindo o mesmo padrão */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
