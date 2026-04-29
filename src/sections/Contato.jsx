import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, FileText } from 'lucide-react';
import { Button } from '../components/ui/button.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Contato() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Entrance animation
    gsap.fromTo(".contato-content",
      { filter: "blur(20px)", y: 60, opacity: 0 },
      {
        filter: "blur(0px)", y: 0, opacity: 1, duration: 1.5, ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contato" ref={containerRef} className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32 md:px-10">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="contato-content relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        
        <h2 className="text-balance text-5xl font-semibold tracking-tighter-custom text-white md:text-7xl lg:text-8xl">
          Vamos Construir o <br />
          <span className="text-gradient-hero">Futuro Juntos</span>
        </h2>
        
        <p className="mt-8 max-w-2xl text-balance text-lg font-light tracking-tight text-zinc-400 md:text-2xl">
          Disponível para colaborações, projetos inovadores e soluções que unem design impecável com código sólido.
        </p>

        <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:gap-8">
          
          {/* Email Button */}
          <a href="mailto:seuemail@exemplo.com" className="group relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-30 blur transition duration-500 group-hover:opacity-100"></div>
            <Button size="lg" className="relative h-14 rounded-full bg-white px-8 text-black transition-transform duration-300 hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
                <Mail size={16} />
                Me mande um e-mail
              </span>
            </Button>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            
            {/* Resume Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20"
            >
              <FileText size={18} />
              <span className="text-sm font-medium">Currículo</span>
            </a>
          </div>

        </div>

      </div>

      {/* Subtle bottom border decoration */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
}
