import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function LavaHero() {
  const container = useRef<HTMLDivElement>(null);
  const videoWrapper = useRef<HTMLDivElement>(null);
  const heroCopy = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=75%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        heroCopy.current,
        {
          opacity: 0.15,
          y: -24,
          ease: "power2.out",
        },
        0,
      ).to(
        videoWrapper.current,
        {
          width: "92vw",
          maxWidth: "1360px",
          height: "68vh",
          borderRadius: "1.25rem",
          ease: "power2.inOut",
        },
        0,
      );
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[calc(100vh-4rem)] bg-[#07090e] pt-10 pb-12 md:pt-12 md:pb-14 overflow-hidden flex flex-col justify-center"
    >
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
        <div className="absolute inset-0 bg-[#07090e]/85 backdrop-blur-[4px]" />
      </div>

      <div ref={heroCopy} className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center z-10 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-normal text-white leading-[0.98] tracking-tight mb-4">
          Odontologia que vai fazer <br />
          <span className="italic text-gradient-gold">você sorrir.</span>
        </h1>

        <p className="max-w-xl text-base md:text-lg text-[#e5dec9]/85 font-body font-normal tracking-wide leading-relaxed">
          Cuidado humanizado e estético, 24 horas por dia.
        </p>
      </div>

      <div className="w-full flex flex-col items-center mt-8 md:mt-10 relative z-20 px-4">
        <div
          ref={videoWrapper}
          className="w-full max-w-[640px] h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden relative border border-[#ccb24c]/30 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#07090e]/30 z-10 pointer-events-none mix-blend-multiply" />

          <video
            src="/videos/Man_smiling_after_dental_treatment_202605222107.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-t from-[#07090e]/80 via-[#07090e]/20 to-transparent">
            <Link
              to="/contato"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] px-7 py-3.5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_4px_30px_rgba(204,178,76,0.35)] text-xs tracking-widest uppercase"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#ccb24c]/80">
          <span>Role para explorar</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
