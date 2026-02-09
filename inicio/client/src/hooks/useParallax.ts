/**
 * Hook customizado para efeito parallax discreto
 * Movimento suave de elementos ao scroll
 */

import { useEffect, useRef, useState } from 'react';

export function useParallax(intensity: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const elementCenter = elementRect.top + elementRect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const distance = elementCenter - windowCenter;

      // Parallax effect: movimento baseado na distância do centro da tela
      const parallaxOffset = distance * intensity * 0.1;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return {
    ref,
    style: {
      transform: `translateY(${offset}px)`,
      transition: 'transform 0.1s ease-out',
    },
  };
}
