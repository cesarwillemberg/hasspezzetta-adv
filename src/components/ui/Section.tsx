import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bgWhite?: boolean;
}

export function Section({ id, className = "", children, bgWhite = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${bgWhite ? 'bg-background' : 'bg-muted'} dark:bg-transparent ${className}`}
    >
      <div className="law-container">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-outfit text-primary dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground dark:text-gray-300">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
