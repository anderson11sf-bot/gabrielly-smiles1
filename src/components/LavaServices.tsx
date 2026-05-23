import { Link } from "@tanstack/react-router";
const services = [
  {
    id: "lentes",
    title: "Lentes de Contato",
    desc: "Redesenhe seu sorriso com finíssimas lâminas de porcelana. Naturalidade extrema e resultados duradouros.",
    img: "/images/2024-10-02.png"
  },
  {
    id: "implantes",
    title: "Implantes Dentários",
    desc: "Recupere a segurança de sorrir e mastigar com implantes de titânio de alta precisão.",
    img: "/images/2024-07-25.jpg"
  },
  {
    id: "estetica",
    title: "Estética & Restauração",
    desc: "Restaurações invisíveis e precisas que devolvem a forma original do seu dente de maneira indolor.",
    img: "/images/2024-10-02 (1).jpg"
  },
  {
    id: "profilaxia",
    title: "Profilaxia Premium",
    desc: "Limpeza profunda e aplicação de flúor em um ambiente que se assemelha a um spa.",
    img: "/images/2024-05-20.webp"
  }
];

export function LavaServices() {
  return (
    <section className="bg-[#0c0f16] relative z-10 border-t border-[#ccb24c]/10">
      
      {/* =========================================
          MOBILE LAYOUT
          Navegação nativa, rápida e linda. Sem travar.
          ========================================= */}
      <div className="flex flex-col md:hidden w-full">
        <div className="pt-12 px-8 pb-6 bg-[#07090e]">
           <span className="text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold drop-shadow-md">Especialidades</span>
        </div>
        
        {services.map((s, i) => (
          <div key={s.id} className="relative w-full min-h-[75vh] flex flex-col justify-end p-6 pb-12 border-b border-[#ccb24c]/20">
            {/* Background Image */}
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover object-[center_10%]" />
            
            {/* Vidro Fosco Preto e Transparente */}
            <div className="absolute inset-0 bg-[#07090e]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-[#07090e]/30 backdrop-blur-[4px]" />
            
            {/* Text Content */}
            <div className="relative z-10 p-2">
              <h3 className="text-4xl font-accent text-white mb-3 flex items-center gap-3 drop-shadow-lg">
                 <span className="text-2xl text-[#ccb24c] font-sans font-black tracking-tighter">0{i + 1}</span> 
                 <span className="leading-tight">{s.title}</span>
              </h3>
              <p className="text-[#e5dec9]/90 text-base mb-6 font-body leading-relaxed drop-shadow-md">
                {s.desc}
              </p>
              <Link to="/servicos" className="text-xs uppercase tracking-widest text-[#07090e] font-bold bg-[#ccb24c] hover:bg-[#e8ca58] transition-colors inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg">
                 Saber Mais →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          DESKTOP LAYOUT - HOVER EXPAND ACCORDION
          Premium, interactive, no scroll bugs
          ========================================= */}
      <div className="hidden md:flex w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#0c0f16] p-8 gap-6">
        {services.map((s, i) => (
          <div 
            key={s.id}
            className="relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer rounded-3xl overflow-hidden border border-[#ccb24c]/20 shadow-2xl"
          >
            {/* Background Image */}
            <img 
              src={s.img} 
              alt={s.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[40%] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-[#07090e]/40 group-hover:bg-[#07090e]/10 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-700" />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="transform translate-y-16 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                
                {/* Header (Always Visible) */}
                <div className="flex items-center gap-5 mb-2">
                  <span className="text-2xl text-[#ccb24c] font-sans font-bold bg-[#07090e]/70 backdrop-blur-md px-4 py-3 rounded-xl border border-[#ccb24c]/30 shadow-lg shrink-0">
                    0{i + 1}
                  </span>
                  {/* Rotate text when collapsed if desired, or just wrap/hide. Keeping it simple and clean: */}
                  <h3 className="text-3xl xl:text-4xl font-accent text-white whitespace-nowrap drop-shadow-md origin-left transition-all duration-700 group-hover:scale-100 scale-90 opacity-80 group-hover:opacity-100">
                    {s.title}
                  </h3>
                </div>
                
                {/* Expanded Content (Animated Height) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-[#e5dec9]/90 text-lg mb-8 font-body leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                      <Link to="/servicos" className="text-sm uppercase tracking-widest text-[#07090e] font-bold bg-[#ccb24c] hover:bg-[#e8ca58] transition-colors inline-flex items-center gap-3 px-8 py-4 rounded-full shadow-[0_0_20px_rgba(204,178,76,0.3)] hover:shadow-[0_0_30px_rgba(204,178,76,0.5)]">
                         Saber Mais →
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
