import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ccb24c]/20 bg-[#07090e] text-white mt-32 relative overflow-hidden">
      {/* Footer Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ccb24c]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ccb24c] to-[#f7d683] text-[#07090e] grid place-items-center font-display font-bold shadow-md">G</span>
            <span className="font-display font-bold text-xl text-white">
              Drª Gabrielly <span className="font-accent italic text-gradient-gold font-normal">Ferreira</span>
            </span>
          </div>
          <p className="text-sm text-[#a5b5c1] max-w-sm leading-relaxed font-medium">
            Cirurgiã Dentista em Jacareí. Cuidado, carinho e zero medo —
            atendimento humanizado disponível 24 horas para emergências.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.instagram.com/dra.gabrielly.ferreira/"
              target="_blank"
              rel="noreferrer"
              className="h-11 w-11 grid place-items-center rounded-full border border-[#ccb24c]/20 bg-white/5 hover:border-[#ccb24c] hover:text-[#07090e] hover:bg-gradient-to-r hover:from-[#ccb24c] hover:to-[#f7d683] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-6 text-[#f7d683] uppercase tracking-wider">Contato</h4>
          <ul className="space-y-4 text-sm text-[#a5b5c1] font-medium">
            <li className="flex gap-3 items-center group"><Phone className="h-4 w-4 text-[#ccb24c] shrink-0 group-hover:scale-110 transition-transform" /> <a href="tel:+5512997100919" className="hover:text-[#f7d683] transition-colors">(12) 99710-0919</a></li>
            <li className="flex gap-3 items-start group"><MapPin className="h-4 w-4 text-[#ccb24c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" /> <span className="leading-snug text-white/80">Rua Antônio Afonso, 384<br/>Centro, Jacareí — SP</span></li>
            <li className="flex gap-3 items-center group"><Clock className="h-4 w-4 text-[#ccb24c] shrink-0 group-hover:scale-110 transition-transform" /> <span>24 horas — todos os dias</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-6 text-[#f7d683] uppercase tracking-wider">Navegação</h4>
          <ul className="space-y-3 text-sm text-[#a5b5c1] font-medium">
            <li><Link to="/servicos" className="hover:text-[#f7d683] transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ccb24c]">-</span> Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#f7d683] transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ccb24c]">-</span> Portfólio</Link></li>
            <li><Link to="/depoimentos" className="hover:text-[#f7d683] transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ccb24c]">-</span> Depoimentos</Link></li>
            <li><Link to="/emergencia" className="hover:text-[#f7d683] transition-colors flex items-center gap-1 group font-bold text-[#f7d683]"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ccb24c]">-</span> Emergência 24h</Link></li>
            <li><Link to="/politicas" className="hover:text-[#f7d683] transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#ccb24c]">-</span> Políticas</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 text-center text-xs text-white/40 font-semibold relative z-10">
        © {new Date().getFullYear()} Drª Gabrielly Ferreira — Cirurgiã Dentista. Todos os direitos reservados.
      </div>
    </footer>
  );
}