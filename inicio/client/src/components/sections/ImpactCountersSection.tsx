/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Impact Counters Section - Contadores de Impacto
 * Destaca números: 500+ processos, 27 estados, 100% digital
 */

import { useEffect, useState, useRef } from 'react';

interface Counter {
  value: number;
  label: string;
  suffix: string;
}

export default function ImpactCountersSection() {
  const [counters, setCounters] = useState<Counter[]>([
    { value: 0, label: 'Processos com Atuação Comprovada', suffix: '+' },
    { value: 0, label: 'Estados Atendidos', suffix: '' },
    { value: 0, label: 'Digital e Seguro', suffix: '%' },
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const targetValues = [500, 27, 100];
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters((prev) =>
        prev.map((counter, index) => ({
          ...counter,
          value: Math.floor(targetValues[index] * progress),
        }))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters((prev) =>
          prev.map((counter, index) => ({
            ...counter,
            value: targetValues[index],
          }))
        );
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-deep-navy border-y border-champagne-gold/10"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-gold/5 via-transparent to-champagne-gold/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="text-center md:text-left transition-all duration-700"
            >
              {/* Decorative line above */}
              <div className="hidden md:block w-12 h-1 bg-champagne-gold mb-6 mx-auto md:mx-0" />

              {/* Counter value */}
              <div className="mb-4">
                <span className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-champagne-gold tracking-wider">
                  {counter.value}
                  {counter.suffix}
                </span>
              </div>

              {/* Counter label */}
              <p className="font-source-serif text-base md:text-lg text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0">
                {counter.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-champagne-gold/10">
          <p className="font-cinzel text-sm tracking-widest text-champagne-gold text-center uppercase">
            Números que refletem nossa dedicação à excelência
          </p>
        </div>
      </div>
    </section>
  );
}
