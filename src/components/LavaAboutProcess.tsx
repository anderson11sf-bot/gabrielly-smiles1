import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LavaAboutProcess() {
  const container = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides) return;

    // Get total scroll width
    const scrollWidth = slides.scrollWidth - window.innerWidth;

    gsap.to(slides, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#07090e] h-screen overflow-hidden flex items-center relative z-20 border-y border-[#ccb24c]/10">
      <div className="absolute top-12 left-12 z-30">
         <span className="text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold">A Filosofia</span>
      </div>
      
      <div ref={slidesRef} className="flex h-full w-[300vw]">
        {/* Slide 1: Introduction */}
        <div className="w-[100vw] h-full flex flex-col items-center justify-center px-12 relative flex-shrink-0">
          <div className="absolute inset-0 z-0">
             <img src="/images/unnamed.webp" alt="Consultório" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/80 to-[#07090e]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-accent text-white text-center max-w-4xl z-10 leading-tight">
            Nós acreditamos em uma Odontologia que <span className="italic text-gradient-gold">não traumatiza.</span>
          </h2>
          <p className="mt-8 text-[#e5dec9]/80 max-w-2xl text-center text-lg z-10">
            A dor e o medo do dentista são coisas do passado. Criamos um ambiente que se assemelha a um spa luxuoso para o seu completo relaxamento.
          </p>
        </div>

        {/* Slide 2: The Doctor */}
        <div className="w-[100vw] h-full flex items-center justify-center px-12 flex-shrink-0 bg-[#0c0f16]">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl w-full items-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#ccb24c]/20">
               <img src="/images/2024-10-02.jpg" alt="Dra. Gabrielly" className="w-full h-full object-cover grayscale opacity-90" />
               <div className="absolute inset-0 bg-[#ccb24c]/10 mix-blend-color" />
            </div>
            <div>
               <h3 className="text-3xl md:text-5xl font-accent text-white mb-6">A Ciência por trás da <span className="italic text-gradient-gold">Precisão</span></h3>
               <p className="text-[#e5dec9]/80 text-lg leading-relaxed mb-6">
                 Formada pela UNESP — São José dos Campos, a Drª Gabrielly Ferreira lidera um novo modelo de atendimento estético em Jacareí.
               </p>
               <p className="text-[#e5dec9]/70 leading-relaxed">
                 Sua especialidade vai além da execução perfeita de implantes e facetas; trata-se de escutar o paciente, entender a fundo o biotipo facial e devolver a confiança.
               </p>
            </div>
          </div>
        </div>

        {/* Slide 3: The Result */}
        <div className="w-[100vw] h-full flex flex-col items-center justify-center px-12 flex-shrink-0 relative">
          <div className="absolute inset-0 z-0">
             <img src="/images/2024-10-02.png" alt="Resultados" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-[#07090e]/90" />
          </div>
          <h2 className="text-5xl md:text-7xl font-accent text-white text-center max-w-4xl z-10 leading-tight">
            Pronto para transformar a sua <span className="italic text-gradient-gold">autoestima?</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
