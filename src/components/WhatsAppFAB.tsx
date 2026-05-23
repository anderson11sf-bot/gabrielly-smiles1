import { useState, useEffect } from "react";

const PHONE = "5512997100919";
const MSG = "Olá Drª Gabrielly, gostaria de agendar uma consulta.";

export function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds to grab attention
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    // Hide it after another 5 seconds
    const timer2 = setTimeout(() => setShowTooltip(false), 10000);
    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      {/* Tooltip */}
      <div 
        className={`bg-white text-[#1A1A1A] px-4 py-2 rounded-2xl shadow-lg border border-[#E8E3DC] transition-all duration-500 origin-right ${showTooltip ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'}`}
      >
        <p className="text-sm font-bold">Emergência? <span className="text-primary">Fale agora!</span></p>
        {/* Triângulo do balão */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-[#E8E3DC] rotate-45"></div>
      </div>

      <a
        href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        
        <svg viewBox="0 0 24 24" className="h-7 w-7 relative z-10" fill="currentColor" aria-hidden="true">
          <path d="M19.05 4.91A10.04 10.04 0 0 0 12 2C6.5 2 2 6.48 2 12c0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38A10.02 10.02 0 0 0 12 22c5.5 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09Zm-7.05 15.4c-1.57 0-3.11-.42-4.45-1.21l-.32-.19-3.12.82.83-3.04-.21-.32A8.16 8.16 0 0 1 3.83 12c0-4.51 3.67-8.17 8.17-8.17 2.18 0 4.23.85 5.77 2.39a8.13 8.13 0 0 1 2.4 5.78c0 4.5-3.67 8.17-8.17 8.17Zm4.47-6.12c-.24-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/>
        </svg>
      </a>
    </div>
  );
}