import { useEffect, useState, useRef } from "react";
import { Star, Award, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ComponentType<any>;
  target: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

function StatItem({ icon: Icon, target, label, suffix = "", decimals = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  return (
    <div 
      ref={elementRef}
      className="text-center p-8 rounded-2xl glass-frosted hover-glow-gold transition-all duration-500"
    >
      <div className="inline-flex p-4 rounded-full bg-[#ccb24c]/10 text-[#ccb24c] mb-4 border border-[#ccb24c]/20">
        <Icon className="h-8 w-8 stroke-[1.5]" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toFixed(decimals)}
        {suffix}
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[#a5b5c1]">{label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0c0f16] to-[#07090e] border-y border-[#ccb24c]/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem icon={Award} target={42} label="Avaliações de Pacientes" suffix="+" />
          <StatItem icon={Star} target={5.0} label="Estrelas no Google" decimals={1} suffix="/5" />
          <StatItem icon={Users} target={1703} label="Seguidores Ativos" suffix="+" />
        </div>
      </div>
    </section>
  );
}
