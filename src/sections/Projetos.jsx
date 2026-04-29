import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Projetos() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Entrance Animation for Section Title
    gsap.fromTo(".projetos-title",
      { filter: "blur(15px)", y: 40, opacity: 0 },
      {
        filter: "blur(0px)", y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    // 2. Entrance Animation for Projects (Staggered as they enter the screen)
    const projects = gsap.utils.toArray(".projeto-item");
    projects.forEach((proj) => {
      gsap.fromTo(proj,
        { filter: "blur(20px)", y: 80, opacity: 0 },
        {
          filter: "blur(0px)", y: 0, opacity: 1, duration: 1.4, ease: "power3.out",
          scrollTrigger: {
            trigger: proj,
            start: "top 85%", // Dispara quando o topo do projeto atinge 85% da tela
            toggleActions: "play none none none",
          }
        }
      );
    });

    // 3. Exit Animation (Scrub)
    gsap.fromTo(".projetos-wrapper",
      { filter: "blur(0px)", y: 0, opacity: 1 },
      {
        filter: "blur(15px)", y: -60, opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 80%", // Só começa a sair quando o final da seção estiver subindo
          end: "bottom 20%",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="projetos" ref={containerRef} className="relative z-10 flex min-h-fit w-full flex-col items-center justify-start px-6 py-10 md:px-10 lg:pt-24 lg:pb-32">
      <div className="projetos-wrapper mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:gap-24">
        
        <h2 className="projetos-title text-balance text-4xl font-semibold tracking-tighter-custom text-white md:text-5xl lg:text-6xl text-center mb-6">
          Projetos em <span className="font-bold text-shine-blue">Destaque</span>
        </h2>

        <div className="flex w-full flex-col space-y-24 lg:space-y-32">
          
          {/* Project 1 (Image Left, Card Right) */}
          <div className="projeto-item group relative grid items-center gap-8 md:grid-cols-12">
            <div className="relative z-10 md:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 aspect-[16/10] bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Projeto 1" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                {/* Overlay hover action */}
                <a href="#" className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                   <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 rounded-full bg-white text-black px-6 py-3 font-bold text-sm shadow-xl">Ver Projeto</div>
                </a>
              </div>
            </div>
            {/* O card fica sobreposto na margem da imagem nas telas maiores (-ml-16) */}
            <div className="pointer-events-none z-20 md:col-span-5 md:-ml-16">
              <div className="pointer-events-auto rounded-[2rem] bg-zinc-200/95 p-8 shadow-2xl shadow-black/20 border border-white/40 md:p-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">Web App / UI UX</div>
                <h3 className="mb-4 text-2xl font-bold text-black md:text-3xl">Plataforma E-Learning</h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-zinc-800 md:text-base">
                  Sistema completo para gestão de cursos e alunos, com interface moderna e focada na retenção do usuário. Construído com foco absoluto em experiência de usuário e acessibilidade.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm border border-black/5">React</span>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm border border-black/5">Tailwind</span>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm border border-black/5">GSAP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 (Card Left, Image Right) */}
          <div className="projeto-item group relative grid items-center gap-8 md:grid-cols-12">
            <div className="pointer-events-none z-20 order-2 md:order-1 md:col-span-5 md:-mr-16">
              <div className="pointer-events-auto rounded-[2rem] bg-zinc-200/95 p-8 shadow-2xl shadow-black/20 border border-white/40 md:p-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">Mobile App / Design</div>
                <h3 className="mb-4 text-2xl font-bold text-black md:text-3xl">Finance Dashboard</h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-zinc-800 md:text-base">
                  Aplicativo de finanças pessoais focado em usabilidade e gamificação. Permite o controle inteligente de gastos com gráficos dinâmicos e leitura de comprovantes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm border border-black/5">Figma</span>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm border border-black/5">React Native</span>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm border border-black/5">Node.js</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 order-1 md:order-2 md:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 aspect-[16/10] bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1974&auto=format&fit=crop" alt="Projeto 2" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <a href="#" className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/20">
                   <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 rounded-full bg-white text-black px-6 py-3 font-bold text-sm shadow-xl">Ver Projeto</div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
