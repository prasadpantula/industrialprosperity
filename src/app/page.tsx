'use client';
import React, { useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProofSection from '../components/ProofSection';
import PartnerBar from '../components/PartnerBar';
import PhilosophySection from '../components/PhilosophySection';
import PlatformSection from '../components/PlatformSection';
import KFUPMSection from '../components/KFUPMSection';
import EcosystemSection from '../components/EcosystemSection';
import AICenterSection from '../components/AICenterSection';
import SolutionsSection from '../components/SolutionsSection';
import Vision2030Section from '../components/Vision2030Section';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeSection, setActiveSection] = useState('home');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const handleNavClick = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleCTAClick = useCallback(() => {
    setActiveSection('contact');
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <main>
        {/* 1. Hero — Arabic name primary, Saudi green landscape */}
        <Hero lang={lang} onCTAClick={handleCTAClick} />

        {/* 2. Philosophy — Founding declaration */}
        <PhilosophySection lang={lang} />

        {/* 3. Proof — FMS with KJO */}
        <ProofSection lang={lang} onCTAClick={handleCTAClick} />

        {/* 4. Partner bar */}
        <PartnerBar lang={lang} />

        {/* 5. GreenVue Platform — mechanism framing */}
        <PlatformSection lang={lang} onCTAClick={handleCTAClick} />

        {/* 6. KFUPM Partnership */}
        <KFUPMSection lang={lang} />

        {/* 7. Ecosystem — corrected partner relationships */}
        <EcosystemSection lang={lang} />

        {/* 8. AI Center */}
        <AICenterSection lang={lang} />

        {/* 9. Solutions — Six capability pillars */}
        <SolutionsSection lang={lang} />

        {/* 10. Vision 2030 — Full ministry-facing section */}
        <Vision2030Section lang={lang} onCTAClick={handleCTAClick} />

        {/* 11. Contact */}
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
