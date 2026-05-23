import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header 
      className="absolute top-0 inset-x-0 z-50 bg-transparent py-4 border-b border-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group relative h-16 w-64">
          <img 
            src="/images/logo.png" 
            alt="Logo Dra. Gabrielly Ferreira" 
            className="absolute inset-0 w-full h-full object-contain object-left group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(204,178,76,0.2)]"
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors hover:text-[#f7d683] text-[#a5b5c1]`}
              activeProps={{ className: "text-[#ccb24c] font-bold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/emergencia"
            className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider bg-[#c94f4f]/15 text-[#c94f4f] border border-[#c94f4f]/30 hover:bg-[#c94f4f] hover:text-white transition-all duration-300 shadow-md animate-pulse"
          >
            EMERGÊNCIA 24h
          </Link>
        </nav>
        
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 transition-colors text-white hover:text-[#f7d683]"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#07090e]/95 border-b border-[#ccb24c]/25 shadow-2xl transition-all duration-300 overflow-hidden ${open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 py-6 flex flex-col gap-4 text-base font-bold">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-[#a5b5c1] hover:text-[#f7d683] py-2.5 border-b border-[#ccb24c]/10"
              activeProps={{ className: "text-[#ccb24c] font-bold border-b border-[#ccb24c]/30" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/emergencia"
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-3.5 rounded-full text-sm font-bold tracking-wider bg-[#c94f4f] text-white text-center shadow-lg hover:bg-[#b03f3f] transition-all duration-300"
          >
            PLANTÃO EMERGÊNCIA 24h
          </Link>
        </nav>
      </div>
    </header>
  );
}