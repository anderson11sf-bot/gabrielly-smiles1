import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Aventura Dental Arts style:
    // Wait a bit, then slide/fade up the intro mask
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1200); // Wait for the transition to finish before unmounting
    }, 1500); // Initial delay to show the logo

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#07090e] transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isFading ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={`flex flex-col items-center gap-4 transition-opacity duration-700 ${isFading ? "opacity-0" : "opacity-100"}`}>
        <Sparkles className="h-10 w-10 text-[#ccb24c] animate-pulse" />
        <h1 className="text-3xl md:text-5xl font-accent font-normal text-white tracking-widest text-center">
          Drª Gabrielly <br />
          <span className="italic text-gradient-gold">Ferreira</span>
        </h1>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#e5dec9]/70 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          A Dental Experience Unlike Any Other
        </p>
      </div>
    </div>
  );
}
