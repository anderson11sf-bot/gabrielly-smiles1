import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Drª Gabrielly Ferreira" },
      { name: "description", content: "Clareamento, implantes, facetas, canal, restauração, limpeza e emergências 24h em Jacareí." },
      { property: "og:title", content: "Serviços odontológicos em Jacareí" },
      { property: "og:description", content: "Soluções completas para o seu sorriso, incluindo plantão 24h." },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7d683]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <PageHero eyebrow="Serviços" title="Soluções completas para o seu sorriso." subtitle="Da rotina à reabilitação estética — com plantão 24 horas para emergências." />
      
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className={`group rounded-2xl p-7 transition-all duration-500 h-full flex flex-col justify-between ${
                s.emergency 
                  ? "border border-[#c94f4f]/30 bg-[#c94f4f]/5 hover:shadow-[0_15px_30px_rgba(201,79,79,0.15)] hover:border-[#c94f4f]/60" 
                  : "glass-frosted hover:hover-glow-gold"
              }`}
            >
              <div>
                {s.emergency && (
                  <span className="inline-flex items-center rounded-full bg-[#c94f4f]/15 text-[#c94f4f] border border-[#c94f4f]/30 px-3 py-1 text-[10px] font-bold tracking-wider mb-4 animate-pulse">
                    24 HORAS
                  </span>
                )}
                <h3 className="text-xl font-bold text-white group-hover:text-[#f7d683] transition-colors duration-300">{s.name}</h3>
                <p className="mt-3 text-sm text-[#a5b5c1] font-medium leading-relaxed">{s.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#ccb24c] font-bold group-hover:text-[#f7d683] transition-colors duration-300">
                Detalhes <ChevronRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}