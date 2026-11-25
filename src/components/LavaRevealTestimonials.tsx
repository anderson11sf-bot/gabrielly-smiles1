import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { VideoTestimonial } from "@/components/VideoTestimonial";

gsap.registerPlugin(ScrollTrigger);

const serviceHighlights = [
  {
    title: "Lentes de Contato & Estética Dental",
    desc: "Facetas ultrafinas desenhadas para o seu biotipo facial, com cor natural e brilho duradouro.",
  },
  {
    title: "Implantes & Reabilitação Oral",
    desc: "Planejamento digital preciso para devolver função mastigatória, segurança e estética definitiva.",
  },
  {
    title: "Odontologia Sem Trauma (Zero Medo)",
    desc: "Anestesia confortável, ambiente acolhedor estilo spa e plantão de emergência 24h em Jacareí.",
  },
];

export function LavaRevealTestimonials() {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0.25, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 35%",
          scrub: 0.6,
        },
      },
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative bg-[#0c0f16] py-20 md:py-24 border-t border-[#ccb24c]/15 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-[#ccb24c]/5 rounded-full blur-[120px]" />

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Persuasive Services & Care Copy */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold bg-[#ccb24c]/10 px-4 py-1.5 rounded-full border border-[#ccb24c]/20">
              <Sparkles className="h-3.5 w-3.5" />
              Histórias &amp; Serviços
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-accent font-normal text-white leading-tight">
              Veja a transformação{" "}
              <span className="italic text-gradient-gold">com seus próprios olhos.</span>
            </h2>

            <p className="mt-5 text-[#e5dec9]/85 text-sm sm:text-base leading-relaxed font-body">
              Cada sorriso entregue no consultório une técnica de precisão e cuidado psicológico real. Dos protocolos
              estéticos completos aos atendimentos de urgência 24h, você sabe exatamente o que esperar antes mesmo de
              sentar na cadeira.
            </p>

            <div className="mt-7 space-y-4 border-t border-[#ccb24c]/15 pt-6">
              {serviceHighlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#ccb24c] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">{item.title}</h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#e5dec9]/75 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ccb24c] to-[#f7d683] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#07090e] hover:scale-105 transition-transform shadow-[0_8px_25px_rgba(204,178,76,0.28)]"
              >
                Conhecer Serviços
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-[#ccb24c]/30 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:border-[#ccb24c] hover:bg-white/10 transition-colors"
              >
                Agendar Avaliação
              </Link>
            </div>
          </div>

          {/* Right Column: Two Real Patient Video Testimonials */}
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#a88931] font-bold">
                  Pacientes Reais
                </span>
                <p className="text-sm text-[#e5dec9]/75">Toque para assistir aos depoimentos com áudio</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <VideoTestimonial
                  videoSrc="/videos/snapinsta.com.br-6a10ceca6b633.mp4"
                  thumbnail="/images/2024-07-25.jpg"
                  patientName="Ana Carolina"
                  procedure="Lente de Contato e Clareamento"
                  comment="Agora vocês vão me ver sorrindo em TODOS os vídeos mesmo 🤭✨"
                />
                <div className="mt-3 px-1">
                  <p className="text-sm font-bold text-white">Ana Carolina</p>
                  <p className="text-xs text-[#ccb24c]">Lente de Contato &amp; Clareamento</p>
                </div>
              </div>

              <div>
                <VideoTestimonial
                  videoSrc="/videos/snapinsta.com.br-6a10cf9163143.mp4"
                  thumbnail="/images/unnamed.webp"
                  patientName="Anna Santos"
                  procedure="Estética & Restauração"
                  comment="perfeito demais!!! Amando meu novo sorriso, trabalho perfeito"
                />
                <div className="mt-3 px-1">
                  <p className="text-sm font-bold text-white">Anna Santos</p>
                  <p className="text-xs text-[#ccb24c]">Estética &amp; Restauração</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
