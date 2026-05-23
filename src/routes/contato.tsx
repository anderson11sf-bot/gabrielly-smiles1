import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/Section";
import { Phone, MapPin, Clock, Mail, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Agendamento — Drª Gabrielly Ferreira" },
      { name: "description", content: "Agende sua consulta com a Drª Gabrielly Ferreira em Jacareí. Atendimento 24 horas para emergências." },
      { property: "og:title", content: "Contato e Agendamento" },
      { property: "og:description", content: "Estamos disponíveis 24 horas." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7d683]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <PageHero eyebrow="Contato" title="Agende sua consulta." subtitle="Disponível 24 horas para você. Resposta rápida pelo WhatsApp." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name");
              const email = formData.get("email");
              const phone = formData.get("phone");
              const procedure = formData.get("procedure");
              const date = formData.get("date");
              const time = formData.get("time");
              const message = formData.get("message");

              const text = `*Novo Pedido de Agendamento pelo Site!* 🦷✨\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*E-mail:* ${email}\n*Procedimento de Interesse:* ${procedure}\n*Data Preferida:* ${date || "A combinar"}\n*Horário Preferido:* ${time || "A combinar"}\n*Mensagem:* ${message || "Nenhuma"}`;
              
              const encodedText = encodeURIComponent(text);
              window.open(`https://wa.me/5512997100919?text=${encodedText}`, '_blank');
              
              setSent(true);
            }}
            className="glass-frosted p-8 space-y-6 rounded-2xl border border-[#ccb24c]/20"
          >
            {sent ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-[#ccb24c]" />
                <h3 className="mt-6 text-2xl font-bold text-gradient-gold">Enviando para o WhatsApp...</h3>
                <p className="mt-3 text-[#a5b5c1] font-medium">Se a janela do WhatsApp não abriu, por favor, clique no botão de WhatsApp ao lado.</p>
              </div>
            ) : (
              <>
                <Field label="Nome completo" name="name" required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Telefone / WhatsApp" name="phone" type="tel" required />
                </div>
                <div>
                  <label className="text-sm font-bold text-white mb-2 block">Procedimento</label>
                  <select name="procedure" required className="w-full bg-[#0d121c] border border-[#ccb24c]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ccb24c] focus:ring-1 focus:ring-[#ccb24c] text-white">
                    <option>Avaliação</option>
                    <option>Clareamento Dental</option>
                    <option>Implantes</option>
                    <option>Facetas</option>
                    <option>Canal</option>
                    <option>Limpeza</option>
                    <option>Restauração</option>
                    <option>Emergência 24h</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Data preferida" name="date" type="date" />
                  <Field label="Horário" name="time" type="time" />
                </div>
                <div>
                  <label className="text-sm font-bold text-white mb-2 block">Mensagem (opcional)</label>
                  <textarea name="message" rows={4} className="w-full bg-[#0d121c] border border-[#ccb24c]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ccb24c] focus:ring-1 focus:ring-[#ccb24c] text-white" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] py-4 rounded-full font-bold hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(204,178,76,0.35)] transition-all duration-300 shadow-md">
                  Enviar para o WhatsApp
                </button>
              </>
            )}
          </form>

          <div className="space-y-6">
            <InfoCard icon={Phone} title="Telefone / WhatsApp" value="(12) 99710-0919" href="https://wa.me/5512997100919" />
            <InfoCard icon={MapPin} title="Endereço" value="Rua Antônio Afonso, 384 — Centro, Jacareí — SP, 12327-270" href="https://maps.google.com/?q=Rua+Antonio+Afonso+384+Jacarei" />
            <InfoCard icon={Clock} title="Horário" value="24 horas — todos os dias" />
            <InfoCard icon={Mail} title="E-mail" value="contato@dragabrielly.com" href="mailto:contato@dragabrielly.com" />
            <div className="overflow-hidden rounded-2xl border border-[#ccb24c]/20 aspect-[4/3] shadow-2xl">
              <iframe
                title="Localização"
                src="https://www.google.com/maps?q=Rua+Antonio+Afonso+384+Jacarei&output=embed"
                className="w-full h-full grayscale invert opacity-80 contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold text-white mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-[#0d121c] border border-[#ccb24c]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ccb24c] focus:ring-1 focus:ring-[#ccb24c] text-white"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4 rounded-2xl glass-frosted hover:hover-glow-gold p-5 transition-all duration-500">
      <div className="h-11 w-11 rounded-xl bg-[#ccb24c]/10 grid place-items-center text-[#ccb24c] shrink-0 border border-[#ccb24c]/20">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-[#a5b5c1] font-bold">{title}</div>
        <div className="mt-1 font-bold text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{inner}</a> : inner;
}