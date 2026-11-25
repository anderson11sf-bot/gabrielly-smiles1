import { Link } from "@tanstack/react-router";

const services = [
  {
    id: "lentes",
    title: "Lentes de Contato",
    desc: "Redesenhe seu sorriso com finíssimas lâminas de porcelana. Naturalidade extrema e resultados duradouros.",
    img: "/images/2024-10-02.png",
  },
  {
    id: "implantes",
    title: "Implantes Dentários",
    desc: "Recupere a segurança de sorrir e mastigar com implantes de titânio de alta precisão.",
    img: "/images/2024-07-25.jpg",
  },
  {
    id: "estetica",
    title: "Estética & Restauração",
    desc: "Restaurações invisíveis e precisas que devolvem a forma original do seu dente de maneira indolor.",
    img: "/images/2024-10-02 (1).jpg",
  },
  {
    id: "profilaxia",
    title: "Profilaxia Premium",
    desc: "Limpeza profunda e aplicação de flúor em um ambiente que se assemelha a um spa.",
    img: "/images/2024-05-20.webp",
  },
];

export function LavaServices() {
  return (
    <section className="bg-[#0c0f16] relative z-10 border-t border-[#ccb24c]/10">
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col md:hidden w-full">
        <div className="pt-10 px-6 pb-5 bg-[#07090e]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold drop-shadow-md">
            Especialidades
          </span>
        </div>

        {services.map((s, i) => (
          <div
            key={s.id}
            className="relative w-full min-h-[70vh] flex flex-col justify-end p-6 pb-10 border-b border-[#ccb24c]/20"
          >
            <img
              src={s.img}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover object-[center_10%]"
            />
            <div className="absolute inset-0 bg-[#07090e]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-[#07090e]/30 backdrop-blur-[4px]" />

            <div className="relative z-10 p-2">
              <h3 className="text-3xl font-accent text-white mb-3 flex items-center gap-3 drop-shadow-lg">
                <span className="text-xl text-[#ccb24c] font-sans font-black tracking-tighter">0{i + 1}</span>
                <span className="leading-tight">{s.title}</span>
              </h3>
              <p className="text-[#e5dec9]/90 text-base mb-6 font-body leading-relaxed drop-shadow-md">{s.desc}</p>
              <Link
                to="/servicos"
                className="text-xs uppercase tracking-widest text-[#07090e] font-bold bg-[#ccb24c] hover:bg-[#e8ca58] transition-colors inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg"
              >
                Saber Mais →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP LAYOUT - RESPONSIVE ACCORDION WITHOUT CLIPPING */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#ccb24c] font-bold">Especialidades</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-accent text-white">
              Tratamentos <span className="italic text-gradient-gold">Exclusivos</span>
            </h2>
          </div>
          <span className="text-xs text-[#e5dec9]/60">Passe o mouse para explorar</span>
        </div>

        <div className="flex w-full h-[540px] lg:h-[600px] overflow-hidden gap-4 lg:gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="relative flex-1 min-w-0 hover:flex-[2.4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer rounded-3xl overflow-hidden border border-[#ccb24c]/20 shadow-2xl"
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover object-top grayscale-[35%] opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-[#07090e]/40 group-hover:bg-[#07090e]/10 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/75 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-700" />

              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="transition-all duration-500">
                  <div className="flex items-center gap-3.5">
                    <span className="text-lg lg:text-xl text-[#ccb24c] font-sans font-bold bg-[#07090e]/80 backdrop-blur-md px-3 py-2 rounded-xl border border-[#ccb24c]/30 shadow-lg shrink-0">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-accent text-white leading-tight drop-shadow-md">
                      {s.title}
                    </h3>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="overflow-hidden">
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        <p className="text-[#e5dec9]/90 text-sm lg:text-base mb-5 font-body leading-relaxed max-w-md">
                          {s.desc}
                        </p>
                        <Link
                          to="/servicos"
                          className="text-xs uppercase tracking-widest text-[#07090e] font-bold bg-[#ccb24c] hover:bg-[#e8ca58] transition-colors inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(204,178,76,0.3)]"
                        >
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
      </div>
    </section>
  );
}
