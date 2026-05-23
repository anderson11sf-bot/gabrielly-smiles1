import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.name ?? "Serviço"} — Drª Gabrielly Ferreira` },
      { name: "description", content: loaderData?.service.description ?? "" },
      { property: "og:title", content: loaderData?.service.name ?? "" },
      { property: "og:description", content: loaderData?.service.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center p-6 text-center">
      <div className="glass-frosted p-12 rounded-3xl border border-[#ccb24c]/20 max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-4">Serviço não encontrado</h1>
        <Link to="/servicos" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] px-6 py-3.5 rounded-full font-bold hover:scale-105 transition-all duration-300">Ver todos os serviços</Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const benefits = [
    "Planejamento personalizado para cada paciente",
    "Materiais de alta performance e durabilidade",
    "Conforto e segurança absoluta durante o procedimento",
    "Acompanhamento pós-tratamento de excelência",
  ];
  const steps = [
    { t: "Avaliação", d: "Diagnóstico completo, exames e plano terapêutico personalizado." },
    { t: "Planejamento", d: "Definição do tratamento ideal, com prazos e custos totalmente transparentes." },
    { t: "Execução", d: "Procedimento realizado com técnica avançada, conforto e biossegurança rigorosa." },
    { t: "Acompanhamento", d: "Retornos periódicos agendados para manter e prolongar os resultados obtidos." },
  ];
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7d683]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <PageHero eyebrow="Serviço" title={service.name} subtitle={service.description} />
      
      <Section eyebrow="Benefícios" title="Por que esse tratamento.">
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {benefits.map((b) => (
            <div key={b} className="flex gap-4 items-start glass-frosted p-5 rounded-xl hover:hover-glow-gold transition-all duration-500">
              <Check className="h-5 w-5 text-[#ccb24c] mt-0.5 shrink-0" />
              <span className="text-[#a5b5c1] text-sm md:text-base font-medium">{b}</span>
            </div>
          ))}
        </div>
      </Section>
      
      <Section eyebrow="Processo" title="Como funciona.">
        <ol className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="glass-frosted p-6 rounded-2xl hover:hover-glow-gold transition-all duration-500 flex flex-col justify-between h-full">
              <div>
                <div className="text-gradient-gold text-3xl font-bold font-display">0{i + 1}</div>
                <div className="mt-4 font-bold text-white text-lg">{s.t}</div>
              </div>
              <p className="mt-3 text-sm text-[#a5b5c1] leading-relaxed font-medium">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>
      
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-[#ccb24c]/20 bg-gradient-to-br from-[#ccb24c]/10 to-[#07090e] p-10 md:p-16 shadow-2xl">
          {/* Internal ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ccb24c]/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-xl">
              Pronta para começar o seu <span className="text-gradient-gold">{service.name.toLowerCase()}</span>?
            </h2>
            <Link to="/contato" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_15px_30px_rgba(204,178,76,0.35)] transition-all duration-300 shadow-md">
              Agendar consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}