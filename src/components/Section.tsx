import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-2xl mb-14">
            {eyebrow && (
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-28 pb-20 px-6 border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-balance max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}