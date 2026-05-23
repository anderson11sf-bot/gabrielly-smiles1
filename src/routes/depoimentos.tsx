import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageSquare, Play, Sparkles, MapPin } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { StatsCounter } from "@/components/StatsCounter";

// Videos are in the public folder

// Thumbnail imports
// using public folder for images

const videoCases = [
  {
    videoSrc: "/videos/snapinsta.com.br-6a10ceca6b633.mp4",
    thumbnail: "/images/2024-07-25.jpg",
    patientName: "Reabilitação Oral & Estética",
    procedure: "Caso Clínico Real",
    description: "Reabilitação oral completa focada em naturalidade, devolvendo a harmonia facial e a segurança de sorrir."
  },
  {
    videoSrc: "/videos/snapinsta.com.br-6a10cf9163143.mp4",
    thumbnail: "/images/unnamed.webp",
    patientName: "Estética Avançada",
    procedure: "Procedimento Clínico",
    description: "Procedimentos modernos e minimamente invasivos com precisão milimétrica e anestesia humanizada sem dor."
  },
  {
    videoSrc: "/videos/SnapInsta-Ai_3485447366466057521.mp4",
    thumbnail: "/images/2024-10-02.png",
    patientName: "Transformação do Sorriso",
    procedure: "Depoimento de Paciente",
    description: "O relato emocionante de um sorriso transformado e o impacto direto na confiança pessoal da paciente."
  },
  {
    videoSrc: "/videos/Man_smiling_after_dental_treatment_202605222107.mp4",
    thumbnail: "/images/2024-10-02 (1).jpg",
    patientName: "Imersão no Consultório",
    procedure: "Tour & Experiência Humanizada",
    description: "Uma imersão no espaço exclusivo da clínica, projetado para o máximo conforto, acolhimento e biossegurança."
  }
];

const testimonials = [
  { 
    name: "Juliana Santos", 
    proc: "Clareamento & Facetas", 
    text: "Atendimento sensacional! A Dra. Gabrielly é extremamente atenciosa, cuidadosa e me deixou super calma durante todo o procedimento. O resultado das minhas facetas ficou incrivelmente natural. Super recomendo!",
    link: "https://maps.app.goo.gl/rWFZdSv8Pna8NrwT8"
  },
  { 
    name: "Marcos Oliveira", 
    proc: "Emergência 24h & Extração", 
    text: "Precisei de atendimento emergencial no meio da noite e a Dra. Gabrielly me acolheu com total profissionalismo e rapidez. Sem dor, com um cuidado fora do comum. Melhor experiência odontológica que já tive!",
    link: "https://maps.app.goo.gl/1CaF3Uh7oDg7mzoA8"
  },
  { 
    name: "Fernanda Lima", 
    proc: "Reabilitação Oral & Implante", 
    text: "Excelente profissional! Fiz meu implante com ela e o processo foi muito mais leve do que eu imaginava. Muito carinhosa, explica cada etapa detalhadamente e passa muita segurança. Nota mil!",
    link: "https://maps.app.goo.gl/d1RoYuStfehqJLTG9"
  },
  { 
    name: "Rodrigo Costa", 
    proc: "Estética do Sorriso", 
    text: "Uma profissional de excelência que realmente ama o que faz. O consultório é super acolhedor e ela faz você se sentir em casa. Recomendo de olhos fechados para quem tem medo de dentista.",
    link: "https://maps.app.goo.gl/JscCbLs1qW3TXfAp9"
  },
  { 
    name: "Amanda Rezende", 
    proc: "Profilaxia & Restauração Estética", 
    text: "A Dra. Gabrielly é incrível! Super delicada, atenta a cada detalhe e super humana. A limpeza e a restauração que fiz ficaram impecáveis. Uma profissional rara e de confiança.",
    link: "https://maps.app.goo.gl/rHJkMjLsrsusuJEW7"
  },
];

const googleMapsLink = "https://www.google.com/maps/place/Dra+Gabrielly+Ferreira/@-23.305304,-45.9741613,17z/data=!4m14!1m5!8m4!1e1!2s116063907706905899113!3m1!1e1!3m7!1s0x94cdcb30a8e10611:0xf600d577ab9e661c!8m2!3d-23.3053089!4d-45.9715864!9m1!1b1!16s%2Fg%2F11vzxsbvt1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos Reais — Drª Gabrielly Ferreira" },
      { name: "description", content: "5,0 estrelas no Google. Veja os depoimentos reais de pacientes da Drª Gabrielly Ferreira em Jacareí." },
      { property: "og:title", content: "Depoimentos reais de pacientes" },
      { property: "og:description", content: "5,0 estrelas no Google." },
    ],
  }),
  component: DepoimentosPage,
});

function DepoimentosPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Dynamic ambient background glows for luxury look */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7d683]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <PageHero 
        eyebrow="Depoimentos Reais" 
        title="Histórias reais por trás de cada novo sorriso." 
      />
      
      {/* Grid of 4 Real Video Testimonials */}
      <Section eyebrow="Transformações em Foco" title="Mural de Casos Clínicos & Vídeos">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#a5b5c1] text-lg font-medium leading-relaxed">
            Assista aos registros reais produzidos em consultório e aos depoimentos de quem vivenciou a experiência Odontológica Premium da Drª Gabrielly Ferreira.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {videoCases.map((vc, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <VideoTestimonial 
                videoSrc={vc.videoSrc}
                thumbnail={vc.thumbnail}
                patientName={vc.patientName}
                procedure={vc.procedure}
              />
              <div className="px-1">
                <p className="text-sm text-[#a5b5c1] font-medium leading-relaxed mt-2">
                  {vc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        {/* Statistics Blocks */}
        <div className="mb-24">
          <StatsCounter />
        </div>

        {/* Header for Text Testimonials */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#ccb24c]/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ccb24c] font-bold block mb-2">Avaliações Escritas</span>
            <h3 className="text-3xl font-bold text-white leading-tight">Experiências no Google Maps</h3>
          </div>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#ccb24c] hover:bg-[#f7d683] text-[#07090e] font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(204,178,76,0.25)] hover:scale-105"
          >
            <MapPin className="h-4 w-4" /> Deixar uma Avaliação →
          </a>
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass-frosted hover:hover-glow-gold transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#ccb24c] text-[#ccb24c] animate-star-pop group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <span className="text-[10px] bg-[#ccb24c]/15 text-[#ccb24c] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase border border-[#ccb24c]/20">Google</span>
                </div>
                <blockquote className="leading-relaxed text-[#fffffd]/85 font-medium italic">"{t.text}"</blockquote>
              </div>
              <figcaption className="mt-6 pt-4 border-t border-[#ccb24c]/10 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white group-hover:text-[#f7d683] transition-colors">{t.name}</div>
                    <div className="text-[#ccb24c] text-xs font-semibold mt-0.5">{t.proc}</div>
                  </div>
                </div>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f7d683] hover:text-[#fffdc0] transition-colors mt-1"
                >
                  Ver Avaliação Original →
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}