import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";

export const Route = createFileRoute("/politicas")({
  head: () => ({
    meta: [
      { title: "Políticas — Privacidade, Termos e Cancelamento" },
      { name: "description", content: "Políticas de privacidade, termos de serviço e cancelamento do consultório." },
    ],
  }),
  component: PoliticasPage,
});

function PoliticasPage() {
  return (
    <>
      <PageHero eyebrow="Políticas" title="Privacidade, termos e cancelamento." />
      <Section>
        <div className="max-w-3xl space-y-12 text-muted-foreground">
          <article>
            <h2 className="text-2xl font-semibold text-foreground">Privacidade e Proteção de Dados</h2>
            <p className="mt-3">Em conformidade com a LGPD, tratamos seus dados pessoais apenas para finalidades clínicas, de agendamento e comunicação. Você pode solicitar acesso, correção ou exclusão a qualquer momento.</p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-foreground">Termos de Serviço</h2>
            <p className="mt-3">Os serviços odontológicos são prestados conforme as normas do Conselho Federal de Odontologia. Cada plano de tratamento é discutido e aprovado pelo paciente antes da execução.</p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-foreground">Política de Cancelamento</h2>
            <p className="mt-3">Solicitamos cancelamento ou reagendamento com até 24 horas de antecedência. Emergências não se aplicam a essa política.</p>
          </article>
        </div>
      </Section>
    </>
  );
}