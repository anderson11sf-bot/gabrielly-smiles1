import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Como faço para agendar uma consulta?", a: "Você pode agendar pelo formulário na página de Contato, pelo WhatsApp (12) 99710-0919 ou ligando para o consultório." },
  { q: "Vocês atendem emergências?", a: "Sim. Mantemos plantão odontológico 24 horas, todos os dias. Em caso de emergência, ligue ou envie mensagem no WhatsApp imediatamente." },
  { q: "Qual é o horário de atendimento?", a: "Atendimento de rotina em horário comercial e plantão de emergências 24 horas, 7 dias por semana." },
  { q: "Como funciona o clareamento dental?", a: "Avaliamos a saúde do esmalte e indicamos a técnica (a laser no consultório ou caseira supervisionada). Os resultados são visíveis em poucas sessões." },
  { q: "Quanto custa um implante?", a: "O valor depende do caso clínico. Após a avaliação inicial elaboramos um orçamento detalhado e transparente." },
  { q: "Há dor durante os procedimentos?", a: "Utilizamos anestesia local e técnicas modernas para garantir o máximo de conforto. A maioria dos pacientes relata pouco ou nenhum desconforto." },
  { q: "Aceitam convênio?", a: "Trabalhamos com pagamento particular e parcelamento. Consulte na hora do agendamento as condições disponíveis." },
  { q: "Como funciona o pós-procedimento?", a: "Você recebe orientações detalhadas por escrito e contato direto com a Drª para qualquer dúvida no pós-operatório." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Perguntas Frequentes | Drª Gabrielly" },
      { name: "description", content: "Tire suas dúvidas sobre procedimentos, emergências, agendamento e pagamento." },
      { property: "og:title", content: "Perguntas frequentes" },
      { property: "og:description", content: "Respostas para as dúvidas mais comuns." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden relative min-h-screen">
      {/* Immersive background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7d683]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <PageHero eyebrow="FAQ" title="Perguntas frequentes." subtitle="Respostas para o que você precisa saber antes da consulta." />
      
      <Section>
        <div className="max-w-3xl mx-auto glass-frosted p-8 md:p-12 rounded-2xl border border-[#ccb24c]/10 shadow-2xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem value={`item-${i}`} key={i} className="border-b border-[#ccb24c]/10 last:border-b-0 pb-2">
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-white hover:text-[#f7d683] hover:no-underline transition-all duration-300 py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#a5b5c1] text-sm md:text-base leading-relaxed font-medium pt-2 pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </div>
  );
}