/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Solutions } from './components/Solutions';
import { Work } from './components/Work';
import { About } from './components/About';
import { WhyDavax } from './components/WhyDavax';
import { TechStack } from './components/TechStack';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>(
    'Custom Business Systems'
  );

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForContact(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus the name input after a short delay
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Top Bar conforming to 3-zone contract */}
      <Navbar onStartProject={() => scrollToContact()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Software Visual */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Trust & Value Strip */}
        <TrustStrip />

        {/* 3. Services: What We Build */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 4. Solutions: Technology That Fits Your Business */}
        <Solutions onSelectSolution={(solution) => scrollToContact(solution)} />

        {/* 5. How We Work: From Idea to Working System */}
        <Process />

        {/* 6. Selected Work: Portfolio Architectures */}
        <Work onStartProject={() => scrollToContact()} />

        {/* 7. About: Technology Built Around People */}
        <About />

        {/* 8. Why Davax Systems */}
        <WhyDavax />

        {/* 9. Technology Foundation */}
        <TechStack />

        {/* 10. High-Impact CTA */}
        <CTASection
          onStartProject={() => scrollToContact()}
          onTalkToUs={() => scrollToContact()}
        />

        {/* 11. Project Request Intake & Contact */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
