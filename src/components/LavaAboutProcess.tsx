import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, MoveDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function LavaAboutProcess() {
  const container = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides) return;

    const getScrollWidth = () => Math.max(0, slides.scrollWidth - window.innerWidth);

    gsap.to(slides, {
      x: () => -getScrollWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: () => `+=${getScrollWidth()}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setProgress(self.progress);
          const idx = Math.min(2, Math.floor(self.progress * 3));
          setActiveSlide(idx);
        },
      },
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="bg-[#07090e] h-screen overflow-hidden flex items-center relative z-20 border-y border-[#ccb24c]/15"
    >
      {/* Top Header + Step Counter */}
      <div className="absolute top-6 inset-x-6 md:top-8 md:inset-x-12 z-30 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold">
          A Filosofia
        </span>
        <div className="flex items-center gap-3 rounded-full border border-[#ccb24c]/25 bg-[#07090e]/80 px-3.5 py-1.5 backdrop-blur-md">
          <span className="text-[11px] font-bold tracking-widest text-[#f7d683]">
            0{activeSlide + 1} / 03
          </span>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === dot ? "w-5 bg-[#ccb24c]" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div ref={slidesRef} className="flex h-full w-[300vw]">
        {/* Slide 1: Introduction */}
        <div className="w-[100vw] h-full flex flex-col items-center justify-center px-6 md:px-12 relative flex-shrink-0">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/unnamed.webp"
              alt="Consultório"
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/80 to-[#07090e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-accent text-white text-center max-w-4xl z-10 leading-tight">
            Nós acreditamos em uma Odontologia que <span className="italic text-gradient-gold">não traumatiza.</span>
          </h2>
          <p className="mt-6 text-[#e5dec9]/80 max-w-2xl text-center text-base md:text-lg z-10 leading-relaxed">
            A dor e o medo do dentista são coisas do passado. Criamos um ambiente que se assemelha a um spa luxuoso
            para o seu completo relaxamento.
          </p>
        </div>

        {/* Slide 2: The Doctor */}
        <div className="w-[100vw] h-full flex items-center justify-center px-6 md:px-12 flex-shrink-0 bg-[#0c0f16]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 max-w-5xl w-full items-center">
            <div className="relative aspect-[4/5] max-h-[42vh] md:max-h-[62vh] w-full max-w-xs md:max-w-sm mx-auto overflow-hidden rounded-2xl border border-[#ccb24c]/25 shadow-2xl">
              <img
                src="/images/2024-10-02.jpg"
                alt="Dra. Gabrielly"
                className="w-full h-full object-cover object-top grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-[#ccb24c]/10 mix-blend-color" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-accent text-white mb-4 md:mb-6 leading-tight">
                A Ciência por trás da <span className="italic text-gradient-gold">Precisão</span>
              </h3>
              <p className="text-[#e5dec9]/85 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Formada pela UNESP — São José dos Campos, a Drª Gabrielly Ferreira lidera um novo modelo de atendimento
                estético em Jacareí.
              </p>
              <p className="text-[#e5dec9]/70 text-sm md:text-base leading-relaxed">
                Sua especialidade vai além da execução perfeita de implantes e facetas; trata-se de escutar o paciente,
                entender a fundo o biotipo facial e devolver a confiança.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3: The Result */}
        <div className="w-[100vw] h-full flex flex-col items-center justify-center px-6 md:px-12 flex-shrink-0 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/2024-10-02.png"
              alt="Resultados"
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-[#07090e]/90" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-accent text-white text-center max-w-4xl z-10 leading-tight">
            Pronto para transformar a sua <span className="italic text-gradient-gold">autoestima?</span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-[#e5dec9]/75 text-center max-w-xl z-10">
            Continue rolando para conhecer as especialidades pensadas para o seu sorriso.
          </p>
        </div>
      </div>

      {/* Persistent Scroll-Down Guide while inside horizontal showcase */}
      <div className="pointer-events-none absolute bottom-5 inset-x-0 z-30 flex flex-col items-center gap-2.5 px-4">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ccb24c]/35 bg-[#07090e]/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f7d683] shadow-[0_8px_30px_rgba(0,0,0,0.65)] backdrop-blur-md">
          <MoveDown className="h-3.5 w-3.5 text-[#ccb24c] animate-bounce" />
          <span>
            {activeSlide < 2
              ? "Continue rolando para baixo para avançar"
              : "Continue rolando para ver os serviços"}
          </span>
          <ArrowDown className="h-3.5 w-3.5 text-[#ccb24c] animate-bounce" />
        </div>
        <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#ccb24c] to-[#f7d683] transition-[width] duration-150"
            style={{ width: `${Math.max(8, Math.round(progress * 100))}%` }}
          />
        </div>
      </div>
    </section>
  );
}
