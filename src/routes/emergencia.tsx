import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, AlertTriangle, Clock } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/emergencia")({
  head: () => ({
    meta: [
      { title: "Emergência Odontológica 24h em Jacareí | Drª Gabrielly" },
      { name: "description", content: "Plantão odontológico 24 horas em Jacareí. Atendemos dor, trauma, sangramento e inchaço imediatamente." },
      { property: "og:title", content: "Emergência Odontológica 24h" },
      { property: "og:description", content: "Atendimento garantido em até 30 minutos." },
    ],
  }),
  component: EmergenciaPage,
});

function EmergenciaPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c94f4f]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <section className="relative px-6 pt-28 pb-20 border-b border-[#ccb24c]/10 overflow-hidden bg-gradient-to-br from-[#c94f4f]/10 via-[#07090e] to-[#07090e]">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c94f4f]/30 bg-[#c94f4f]/15 px-3 py-1.5 text-xs font-bold text-[#c94f4f] mb-6 animate-pulse">
            <AlertTriangle className="h-3.5 w-3.5" /> ATENDIMENTO IMEDIATO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight">
            Emergência <span className="text-[#c94f4f]">odontológica?</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#a5b5c1] max-w-xl font-medium">
            Estamos aqui 24 horas por dia, 7 dias por semana. Em até 30 minutos você está sendo atendida.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://wa.me/5512997100919" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#c94f4f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b03f3f] hover:scale-105 hover:shadow-[0_10px_25px_rgba(201,79,79,0.35)] transition-all duration-300 shadow-md">
              <MessageCircle className="h-4 w-4" /> WhatsApp agora
            </a>
            <a href="tel:+5512997100919" className="inline-flex items-center gap-2 border border-[#c94f4f]/40 bg-white/5 text-white px-8 py-4 rounded-full font-bold hover:bg-[#c94f4f]/10 hover:border-[#c94f4f] hover:scale-105 transition-all duration-300">
              <Phone className="h-4 w-4" /> (12) 99710-0919
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="Como contatar" title="Três formas de falar conosco agora.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Ligar agora", value: "(12) 99710-0919", href: "tel:+5512997100919" },
            { icon: MessageCircle, title: "WhatsApp", value: "Envie uma mensagem", href: "https://wa.me/5512997100919" },
            { icon: Clock, title: "Tempo de resposta", value: "Até 30 minutos" },
          ].map(({ icon: Icon, title, value, href }) => {
            const body = (
              <div className="rounded-2xl glass-frosted hover:hover-glow-gold p-7 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#ccb24c]/10 grid place-items-center text-[#ccb24c] border border-[#ccb24c]/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#a5b5c1] font-bold">{title}</div>
                </div>
                <div className="mt-4 text-xl font-bold text-white">{value}</div>
              </div>
            );
            return href ? <a key={title} href={href} target="_blank" rel="noreferrer" className="block">{body}</a> : <div key={title}>{body}</div>;
          })}
        </div>
      </Section>

      <Section eyebrow="Primeiros passos" title="O que fazer enquanto chega ao consultório.">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {[
            { t: "Dor aguda", d: "Faça bochecho com água morna e tome o analgésico que costuma usar. Evite alimentos excessivamente quentes ou frios." },
            { t: "Dente quebrado", d: "Guarde o fragmento em leite ou soro fisiológico e venha o quanto antes. O fator tempo é crucial para a colagem." },
            { t: "Sangramento", d: "Pressione o local delicadamente com uma gaze limpa por 10 minutos. Se persistir, entre em contato." },
            { t: "Inchaço", d: "Aplique compressa fria por fora do rosto para conter o edema e ligue para o nosso plantão imediatamente." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl glass-frosted p-6 hover:hover-glow-gold transition-all duration-500">
              <div className="text-[#c94f4f] font-bold text-lg">{c.t}</div>
              <p className="mt-3 text-sm text-[#a5b5c1] leading-relaxed font-medium">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}