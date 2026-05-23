import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Sparkles, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Drª Gabrielly Ferreira — Cirurgiã Dentista" },
      { name: "description", content: "Conheça a Drª Gabrielly Ferreira: formação, especialidades e filosofia de atendimento humanizado em Jacareí." },
      { property: "og:title", content: "Sobre a Drª Gabrielly Ferreira" },
      { property: "og:description", content: "Cuidado, carinho e zero medo." },
      { property: "og:image", content: "/images/2024-10-02.jpg" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7d683]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <PageHero eyebrow="Sobre" title="Quem cuida do seu sorriso." />
      
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <TiltCard className="relative group overflow-hidden rounded-2xl border border-[#ccb24c]/20 shadow-2xl">
            <img 
              src="/images/2024-10-02.jpg" 
              alt="Drª Gabrielly Ferreira no consultório" 
              loading="lazy" 
              className="w-full object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-[#07090e]/20 to-transparent pointer-events-none" />
          </TiltCard>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#ccb24c] font-bold block mb-2">Cirurgiã Dentista</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">Drª Gabrielly Ferreira</h2>
            <p className="mt-5 text-[#a5b5c1] leading-relaxed font-medium">
              Cirurgiã Dentista formada pela <strong className="text-white font-bold">UNESP — São José dos Campos</strong>,
              com especialização em implantes e estética. Atende em Jacareí com um propósito simples:
              tornar a experiência odontológica leve, acolhedora e livre de medo.
            </p>
            <p className="mt-4 text-[#a5b5c1] leading-relaxed font-medium">
              Acredita que cada paciente é único. Por isso, mantém um plantão 24 horas para que
              ninguém precise esperar quando o assunto é dor ou emergência.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Trajetória" title="Formação e especialidades">
        <ol className="relative border-l border-[#ccb24c]/25 pl-8 space-y-10 max-w-2xl">
          {[
            { icon: GraduationCap, title: "Graduação em Odontologia", text: "UNESP — São José dos Campos." },
            { icon: Sparkles, title: "Especialização em Estética Dental", text: "Facetas, clareamento e harmonização do sorriso." },
            { icon: ShieldCheck, title: "Especialização em Implantodontia", text: "Planejamento digital e reabilitação oral." },
            { icon: Heart, title: "Atendimento humanizado 24h", text: "Plantão odontológico em Jacareí, todos os dias." },
          ].map(({ icon: Icon, title, text }, idx) => (
            <li key={title} className="relative group">
              <span className="absolute -left-[42px] grid place-items-center h-8 w-8 rounded-full bg-[#0d121c] border border-[#ccb24c]/40 text-[#ccb24c] shadow-md group-hover:bg-[#ccb24c] group-hover:text-[#07090e] transition-all duration-300">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-bold text-lg text-white group-hover:text-[#f7d683] transition-colors">{title}</h3>
              <p className="text-[#a5b5c1] font-medium mt-1">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Filosofia" title="Cuidado, carinho e zero medo.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Cuidado", d: "Atenção integral ao paciente, do diagnóstico ao pós-procedimento com foco absoluto no bem-estar." },
            { t: "Carinho", d: "Você é tratado de forma familiar, com empatia, calor humano e escuta ativa em cada consulta." },
            { t: "Zero medo", d: "Ambiente acolhedor, aromaterapia, música relaxante e técnicas modernas para o máximo conforto." },
          ].map((c) => (
            <TiltCard key={c.t} className="glass-frosted hover:hover-glow-gold transition-all duration-500 rounded-2xl p-8 group">
              <div className="text-[#ccb24c] text-xs font-bold uppercase tracking-wider group-hover:text-[#f7d683] transition-colors">{c.t}</div>
              <p className="mt-4 text-[#a5b5c1] font-medium leading-relaxed">{c.d}</p>
            </TiltCard>
          ))}
        </div>
        <div className="mt-12 text-center md:text-left">
          <Link to="/contato" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_15px_30px_rgba(204,178,76,0.3)] transition-all duration-300 shadow-md">
            Agendar consulta <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}