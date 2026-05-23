import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  type: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, type: "Clareamento", description: "Clareamento dental a laser com técnica personalizada para sensibilidade zero.", image: "/images/2024-07-25.jpg" },
  { id: 2, type: "Implantes", description: "Reabilitação oral avançada com implante de titânio e coroa em zircônia translúcida.", image: "/images/2024-10-02.png" },
  { id: 3, type: "Facetas", description: "Lentes de contato dental em porcelana premium, corrigindo formato e cor com naturalidade e perfeição.", image: "/images/2024-10-02 (1).jpg" },
  { id: 4, type: "Limpeza", description: "Profilaxia profunda com jato clínico e polimento estético preventivo de alta performance.", image: "/images/2024-05-20.webp" },
  { id: 5, type: "Restauração", description: "Restauração estética em resina composta de alta resistência imitando perfeitamente o esmalte natural.", image: "/images/2024-10-02.jpg" },
  { id: 6, type: "Clareamento", description: "Sorriso renovado em sessões clínicas combinadas para um branco natural e brilhante.", image: "/images/unnamed.webp" },
];

export function GalleryWithFilters() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filters = ["Todos", "Clareamento", "Implantes", "Facetas", "Restauração", "Limpeza"];

  const filteredItems = activeFilter === "Todos" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.type === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(i => i.id === item.id);
    setSelectedItemIndex(idx >= 0 ? idx : null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null && selectedItemIndex < filteredItems.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    } else {
      setSelectedItemIndex(0); // Loop back
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else {
      setSelectedItemIndex(filteredItems.length - 1); // Loop to end
    }
  };

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section className="py-24 bg-gradient-to-b from-[#07090e] to-[#0c0f16] relative overflow-hidden">
      {/* Decorative blurred gold glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#fffdc0]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#ccb24c] font-bold inline-flex items-center gap-1.5 mb-3 bg-[#ccb24c]/10 px-3.5 py-1 rounded-full border border-[#ccb24c]/20">
            <Sparkles className="h-3 w-3 text-[#ccb24c]" /> Casos Reais
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Transformações <span className="font-accent italic text-gradient-gold">do Sorriso</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#a5b5c1]">
            Explore nossa galeria de transformações estéticas e procedimentos clínicos premium.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-500 border text-sm ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] border-transparent shadow-[0_4px_20px_rgba(204,178,76,0.3)] scale-105"
                  : "bg-white/5 text-[#a5b5c1] border-[#ccb24c]/10 hover:border-[#ccb24c]/30 hover:text-white hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="gallery-item group relative overflow-hidden rounded-2xl glass-frosted cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(204,178,76,0.15)] flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.type}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-95"
                />
                
                {/* Immersive Overlay on Hover */}
                <div className="absolute inset-0 bg-[#07090e]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 text-center z-10">
                  <div className="w-12 h-12 rounded-full bg-[#ccb24c] text-[#07090e] flex items-center justify-center mb-4 transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#f7d683] font-bold mb-2">Ver Detalhes</span>
                  <p className="text-white text-sm max-w-xs">{item.description}</p>
                </div>
              </div>

              {/* Info Bottom Bar */}
              <div className="p-6 bg-gradient-to-b from-transparent to-[#0d121c]/90 relative z-20">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#ccb24c] bg-[#ccb24c]/10 border border-[#ccb24c]/20 mb-3">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#f7d683] transition-colors duration-300">
                  Caso {item.id}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog (Immersive Custom Modal Player) */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div 
            className="relative w-full max-w-4xl rounded-2xl glass-frosted-dark overflow-hidden shadow-[0_0_60px_rgba(204,178,76,0.3)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 text-white hover:text-[#ccb24c] hover:bg-black/90 transition-all duration-300 border border-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Imagem Lightbox */}
            <div className="relative aspect-[16/9] w-full max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.type}
                className="max-w-full max-h-full object-contain"
              />

              {/* Navigation Arrows inside Image container */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:text-[#ccb24c] hover:bg-black/90 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:text-[#ccb24c] hover:bg-black/90 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Info Section */}
            <div className="p-8 bg-[#0d121c]/95 border-t border-[#ccb24c]/20">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#ccb24c] bg-[#ccb24c]/10 border border-[#ccb24c]/20">
                  {currentItem.type}
                </span>
                <span className="text-sm font-semibold text-[#a5b5c1]">
                  Caso {selectedItemIndex !== null ? selectedItemIndex + 1 : 0} de {filteredItems.length}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Caso Clínico — Harmonização do Sorriso</h3>
              <p className="text-lg text-[#fffffd]/80 leading-relaxed mb-6">
                {currentItem.description}
              </p>

              {/* Quick Navigation Footer */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handlePrev}
                  className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Anterior
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] font-bold hover:shadow-[0_4px_15px_rgba(204,178,76,0.3)] transition-all duration-300 text-sm"
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
