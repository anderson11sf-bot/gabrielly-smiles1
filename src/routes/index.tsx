import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Clock, Heart, Star, ChevronRight, Play, ArrowDown, GraduationCap, ShieldCheck, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/Section";
import { useState } from "react";
// Videos are loaded directly from public folder
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { ScrollVideoBg } from "@/components/ScrollVideoBg";
import { StatsCounter } from "@/components/StatsCounter";
import { GalleryWithFilters } from "@/components/GalleryWithFilters";
import { TiltCard } from "@/components/TiltCard";
import { IntroAnimation } from "@/components/IntroAnimation";
import { LavaHero } from "@/components/LavaHero";
import { LavaAboutProcess } from "@/components/LavaAboutProcess";
import { LavaServices } from "@/components/LavaServices";
import { LavaRevealTestimonials } from "@/components/LavaRevealTestimonials";
import { LavaSmilesGallery } from "@/components/LavaSmilesGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drª Gabrielly Ferreira — Cirurgiã Dentista 24h em Jacareí" },
      { name: "description", content: "Mais leve do que você imagina. Cuidado, carinho e zero medo em cada procedimento. Atendimento odontológico 24h em Jacareí — SP." },
      { property: "og:title", content: "Drª Gabrielly Ferreira — Cirurgiã Dentista 24h" },
      { property: "og:description", content: "Atendimento humanizado 24h em Jacareí — SP." },
      { property: "og:image", content: "/images/2024-10-02.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#07090e] text-[#fffffd] overflow-x-hidden relative min-h-screen selection:bg-[#ccb24c] selection:text-[#07090e]">
      <IntroAnimation />
      <div className="relative z-10">
        <LavaHero />
        <LavaAboutProcess />
        <LavaServices />
        <LavaRevealTestimonials />
        <ValueProps />
        <DoctorBiography />
        <LavaSmilesGallery />
        <FinalCTA />
      </div>
    </div>
  );
}

const valueProps = [
  { icon: Award, title: "Especialista Certificada", text: "Cirurgiã Dentista graduada pela renomada UNESP SJC com aperfeiçoamento contínuo em implantes e harmonização." },
  { icon: Clock, title: "Plantão Emergência 24h", text: "Atendimento imediato e humanizado nas horas mais difíceis. Alívio de dor e cuidado sem que você precise esperar." },
  { icon: Heart, title: "Técnica Sem Dor (Zero Medo)", text: "Ambiente acolhedor e técnicas de anestesia suave que quebram o trauma clínico tradicional com carinho." },
];

function ValueProps() {
  return (
    <section className="bg-transparent py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map(({ icon: Icon, title, text }, i) => (
            <TiltCard
              key={title}
              className="group relative rounded-2xl glass-frosted p-8 cursor-default animate-fade-in-up border border-[#ccb24c]/10 hover:border-[#ccb24c]/30 transition-all duration-500"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="mb-6 text-[#ccb24c] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#f7d683]">
                <Icon className="h-11 w-11 stroke-[1.25]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide font-display relative inline-block">
                {title}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ccb24c] transition-all duration-500 group-hover:w-full" />
              </h3>
              <p className="text-[#e5dec9]/80 text-sm leading-relaxed mt-2 font-body font-normal">{text}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6 Generated images mapped to their exact service positions
// Biographical Introduction Section for the Doctor
function DoctorBiography() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#07090e] to-[#0c0f16] relative z-10 border-t border-b border-[#ccb24c]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <TiltCard className="relative group overflow-hidden rounded-2xl border border-[#ccb24c]/20 shadow-[0_20px_50px_rgba(204,178,76,0.15)]">
            <img 
              src="/images/2024-10-02.jpg" 
              alt="Drª Gabrielly Ferreira no consultório clínico" 
              loading="lazy" 
              className="w-full object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700 brightness-95" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/10 to-transparent pointer-events-none" />
          </TiltCard>
          
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold block mb-3 bg-[#ccb24c]/10 px-4 py-1.5 rounded-full border border-[#ccb24c]/20 w-fit">
              Autoridade Clínica
            </span>
            <h2 className="text-4xl md:text-5xl font-accent font-normal text-white leading-tight">
              Drª Gabrielly <br />
              <span className="italic text-gradient-gold">Ferreira</span>
            </h2>
            <p className="mt-6 text-[#e5dec9]/90 leading-relaxed font-body font-normal text-base md:text-lg">
              Formada pela renomada <strong className="text-white font-bold">UNESP — São José dos Campos</strong>, a Drª Gabrielly Ferreira lidera um novo modelo de atendimento odontológico humanizado e estético em Jacareí.
            </p>
            <p className="mt-4 text-[#e5dec9]/85 leading-relaxed font-body font-normal text-sm md:text-base">
              Com foco em reabilitação oral, implantes e lentes de contato de porcelana premium, sua filosofia de trabalho é baseada na combinação de extrema precisão cirúrgica e conforto psicológico absoluto (técnica de zero medo). Mantém plantão 24h para garantir que você esteja amparado nos momentos emergenciais.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#ccb24c]/10 pt-8">
              <div className="flex gap-2.5 items-start">
                <GraduationCap className="h-5 w-5 text-[#ccb24c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wide">Graduação UNESP</h4>
                  <p className="text-xs text-[#e5dec9]/70 mt-1">Formação acadêmica de excelência.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <ShieldCheck className="h-5 w-5 text-[#ccb24c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wide">Especialista Estética</h4>
                  <p className="text-xs text-[#e5dec9]/70 mt-1">Lentes de contato & implantes.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <Link 
                to="/sobre" 
                className="group inline-flex items-center gap-2 bg-white/5 border border-[#ccb24c]/30 hover:border-[#ccb24c] text-white px-7 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all duration-300 text-xs tracking-widest uppercase"
              >
                Conhecer Trajetória <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-[#07090e] relative overflow-hidden z-10 border-t border-[#ccb24c]/10">
      {/* Dynamic light rays / background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccb24c]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <Clock className="h-11 w-11 mx-auto text-[#ccb24c] mb-6 animate-bounce-subtle" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-accent font-normal text-white mb-6">
          Pronto para sua <br />
          <span className="italic text-gradient-gold">transformação?</span>
        </h2>
        <p className="text-lg text-[#e5dec9]/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          Agende sua consulta hoje. Estamos abertos 24 horas para devolver a confiança ao seu sorriso de forma leve e humanizada.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <Link to="/contato" className="inline-flex items-center justify-center px-9 py-4.5 rounded-full bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] font-bold text-sm tracking-widest uppercase hover:scale-105 hover:shadow-[0_15px_35px_rgba(204,178,76,0.4)] transition-all duration-300">
            Agendar Agora
          </Link>
          <Link to="/contato" className="inline-flex items-center justify-center px-9 py-4.5 rounded-full border border-[#ccb24c]/30 bg-white/5 text-white font-bold text-sm tracking-widest uppercase hover:border-[#ccb24c] hover:bg-white/10 hover:scale-105 transition-all duration-300">
            Enviar Mensagem
          </Link>
        </div>
      </div>
    </section>
  );
}
