/**
 * DESIGN PHILOSOPHY: Modernismo Jurídico Minimalista
 * - Geometria precisa e assimetria controlada
 * - Minimalismo funcional que prioriza conteúdo
 * - Grid assimétrico com espaço negativo generoso
 * - Animações suaves e parallax discreto
 * 
 * PALETA: Deep Navy Blue (#1a2332) + Matte Champagne Gold (#c9a961)
 * TIPOGRAFIA: Cinzel (títulos) + Source Serif Pro (corpo)
 */

import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import NationalPresenceSection from '@/components/sections/NationalPresenceSection';
import ImpactCountersSection from '@/components/sections/ImpactCountersSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-navy via-deep-navy to-deep-navy-dark text-white">
      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - A Face da Autoridade */}
        <HeroSection />

        {/* Expertise Comprovada */}
        <ExpertiseSection />

        {/* Impact Counters */}
        <ImpactCountersSection />

        {/* Áreas de Atuação - Boutique Jurídica */}
        <PracticeAreasSection />

        {/* Presença Nacional */}
        <NationalPresenceSection />

        {/* Call to Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
