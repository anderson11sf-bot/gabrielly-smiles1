import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function LavaHero() {
  const container = useRef<HTMLDivElement>(null);
  const videoWrapper = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll animation for expanding the video
    gsap.to(videoWrapper.current, {
      width: "100%",
      height: "100vh",
      borderRadius: "0",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100vh] bg-[#07090e] pt-32 pb-16 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/videos/download.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Transparent Dark Overlay */}
        <div className="absolute inset-0 bg-[#07090e]/85 backdrop-blur-[4px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-accent font-normal text-white leading-[0.95] tracking-tight mb-8">
          Odontologia que vai fazer <br />
          <span className="italic text-gradient-gold">você sorrir.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-[#e5dec9]/85 font-body font-normal tracking-wide leading-relaxed">
          Cuidado humanizado e estético, 24 horas por dia.
        </p>
      </div>

      <div className="w-full flex justify-center mt-16 relative z-20 pointer-events-none">
        <div 
          ref={videoWrapper} 
          className="w-[90%] md:w-[600px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative border border-[#ccb24c]/30 shadow-2xl pointer-events-auto"
        >
          {/* Glass Overlay on video */}
          <div className="absolute inset-0 bg-[#07090e]/30 z-10 pointer-events-none mix-blend-multiply" />
          
          <video
            src="/videos/Man_smiling_after_dental_treatment_202605222107.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-t from-[#07090e]/80 to-transparent">
             <Link
                to="/contato"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] px-7 py-3.5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_4px_30px_rgba(204,178,76,0.35)] text-xs tracking-widest uppercase"
              >
                Agendar Consulta
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
