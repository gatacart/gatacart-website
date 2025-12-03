'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mockups from './components/Mockups';
import Features from './components/Features';
import AppMenus from './components/AppMenus';
import CTA from './components/CTA';
import Legal from './components/Legal';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';

export default function GataCartWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    setShowPrivacyPolicy(false);
    setShowTerms(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
    setShowTerms(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTerms = () => {
    setShowTerms(true);
    setShowPrivacyPolicy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setShowPrivacyPolicy(false);
    setShowTerms(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <PrivacyModal show={showPrivacyPolicy} onClose={closeModal} />
      <TermsModal show={showTerms} onClose={closeModal} />
      <CookieBanner show={showCookieBanner} onClose={() => setShowCookieBanner(false)} />
      
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <Hero />
      <Mockups />
      <Features />
      <AppMenus />
      <CTA />
      <Legal 
        openPrivacyPolicy={openPrivacyPolicy}
        openTerms={openTerms}
      />
      
      <Footer 
        scrollToSection={scrollToSection}
        openPrivacyPolicy={openPrivacyPolicy}
        openTerms={openTerms}
      />
    </div>
  );
}
