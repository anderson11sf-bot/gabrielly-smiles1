import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VideoTestimonial } from "@/components/VideoTestimonial";

gsap.registerPlugin(ScrollTrigger);

export function LavaRevealTestimonials() {
  const container = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Reveal block animation: clip-path expanding from center
    gsap.fromTo(revealRef.current, 
      { clipPath: "polygon(45% 45%, 55% 45%, 55% 55%, 45% 55%)" },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: true,
        }
      }
    );

    // Title fade out
    gsap.to(titleRef.current, {
      opacity: 0,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "center center",
        scrub: true,
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[150vh] bg-[#07090e]">
      {/* Background Title (visible before reveal) */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
         <h2 ref={titleRef} className="text-5xl md:text-7xl font-accent text-[#ccb24c] text-center px-4">
           Veja a transformação<br/>
           <span className="italic text-white">com seus próprios olhos.</span>
         </h2>
      </div>

      {/* Reveal Block (clips in over the title) */}
      <div 
        ref={revealRef} 
        className="absolute top-0 left-0 w-full min-h-[150vh] bg-[#0c0f16] pt-[50vh] z-10"
        style={{ clipPath: "polygon(45% 45%, 55% 45%, 55% 55%, 45% 55%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 pb-32">
           <div className="text-center mb-16">
             <span className="text-xs uppercase tracking-[0.25em] text-[#a88931] font-bold">Histórias de Sucesso</span>
             <h3 className="mt-3 text-4xl md:text-5xl font-accent font-normal text-white">Pacientes <span className="italic text-gradient-gold">Reais</span></h3>
           </div>

           <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
             <VideoTestimonial 
               videoSrc="/videos/snapinsta.com.br-6a10ceca6b633.mp4" 
               thumbnail="/images/2024-07-25.jpg" 
               patientName="Juliana Santos" 
               procedure="Lente de Contato e Clareamento" 
             />
             <VideoTestimonial 
               videoSrc="/videos/snapinsta.com.br-6a10cf9163143.mp4" 
               thumbnail="/images/unnamed.webp" 
               patientName="Marcos Oliveira" 
               procedure="Emergência 24h & Extração"
             />
           </div>
        </div>
      </div>
    </section>
  );
}
