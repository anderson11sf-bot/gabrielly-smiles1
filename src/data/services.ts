export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  emergency?: boolean;
}

export const services: Service[] = [
  { slug: "clareamento", name: "Clareamento Dental", short: "Transforme seu sorriso em poucos dias.", description: "Técnicas modernas de clareamento, com resultado natural e duradouro." },
  { slug: "implantes", name: "Implantes Dentários", short: "Solução permanente, resultado natural.", description: "Implantes osseointegrados com planejamento digital e altíssima taxa de sucesso." },
  { slug: "canal", name: "Tratamento de Canal", short: "Preserve seu dente natural sem dor.", description: "Endodontia com tecnologia rotatória e protocolos modernos para máximo conforto." },
  { slug: "facetas", name: "Facetas Dentárias", short: "Estética refinada e alta resistência.", description: "Facetas em porcelana ou resina, planejadas para harmonizar seu sorriso." },
  { slug: "limpeza", name: "Limpeza Dentária", short: "Prevenção é o melhor tratamento.", description: "Profilaxia profissional, remoção de tártaro e orientação personalizada." },
  { slug: "restauracao", name: "Restauração Dentária", short: "Devolva forma e função ao seu dente.", description: "Restaurações estéticas com resinas de alta performance." },
  { slug: "emergencia", name: "Emergências 24h", short: "Atendimento imediato, sempre disponível.", description: "Plantão odontológico 24 horas para dor, trauma, sangramento e inchaço.", emergency: true },
];