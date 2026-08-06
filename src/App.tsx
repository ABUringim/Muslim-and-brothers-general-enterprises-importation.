import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BusinessSectorsSection } from './components/BusinessSectorsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StrengthsSection } from './components/StrengthsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { OfficeLocationsSection } from './components/OfficeLocationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [preselectedSector, setPreselectedSector] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (sector?: string) => {
    setPreselectedSector(sector);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative">
      {/* Navigation Bar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Main Single Page Content */}
      <main>
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <AboutSection />
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
        <BusinessSectorsSection onOpenQuoteModal={handleOpenQuoteModal} />
        <WhyChooseUs />
        <StrengthsSection />
        <LeadershipSection />
        <OfficeLocationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities & Modals */}
      <FloatingWhatsApp />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedSector={preselectedSector}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}
