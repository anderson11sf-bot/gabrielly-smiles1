import { createFileRoute } from "@tanstack/react-router";
import { GalleryWithFilters } from "@/components/GalleryWithFilters";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Transformações Reais | Drª Gabrielly Ferreira" },
      { name: "description", content: "Galeria de casos antes e depois de pacientes da Drª Gabrielly Ferreira em Jacareí." },
      { property: "og:title", content: "Portfólio — Transformações Reais" },
      { property: "og:description", content: "Casos verdadeiros e reabilitações estéticas de sucesso." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <GalleryWithFilters />
    </div>
  );
}