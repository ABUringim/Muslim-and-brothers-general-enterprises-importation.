import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, Search, Menu, X, ShieldCheck, 
  ChevronDown, MessageSquare, Globe, Building2, FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: (sector?: string) => void;
  onOpenSearchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenSearchModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Business Sectors', href: '#sectors' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Office Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar - Visible on desktop */}
      <div className={`bg-slate-950/90 text-slate-300 text-xs border-b border-slate-800 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Reg No: {COMPANY_INFO.registrationNumber}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Nigeria & Ghana Regional Hubs | Serving International Clients
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`mailto:${COMPANY_INFO.mainEmail}`} 
              className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">{COMPANY_INFO.mainEmail}</span>
            </a>

            {/* Direct Phone Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="inline-flex items-center gap-1 text-amber-400 font-medium hover:text-amber-300 transition-colors py-0.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {phoneDropdownOpen && (
                <div className="absolute right-0 mt-1 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl p-3 z-50 text-slate-200">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 pb-1 border-b border-slate-800">
                    Direct Contact Numbers
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-amber-400 font-medium text-[11px]">Nigeria Head Office:</div>
                      <a href="tel:+2349073407583" className="block hover:underline text-slate-200">+234 9073407583</a>
                      <a href="tel:+2348033822068" className="block hover:underline text-slate-200">+234 8033822068</a>
                    </div>
                    <div>
                      <div className="text-amber-400 font-medium text-[11px]">Ghana Branch Office:</div>
                      <a href="tel:+233591841501" className="block hover:underline text-slate-200">+233 591841501</a>
                      <a href="tel:+233599319178" className="block hover:underline text-slate-200">+233 599319178</a>
                    </div>
                    <div>
                      <div className="text-amber-400 font-medium text-[11px]">United States Line:</div>
                      <a href="tel:+19406170970" className="block hover:underline text-slate-200">+1 9406170970</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800/80 py-3' 
          : 'bg-slate-900/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold font-serif text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                MB
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
                  Muslim & Brothers
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
                  General Enterprises • {COMPANY_INFO.registrationNumber}
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={onOpenSearchModal}
                className="p-2.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/80 transition-colors"
                title="Search Site"
                id="search-trigger-btn"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all shadow-md shadow-amber-500/20"
                id="request-quote-nav-btn"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenSearchModal}
                className="p-2 rounded-lg text-slate-300 hover:text-amber-400"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800 focus:outline-none"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
            <div className="py-2 border-b border-slate-800 mb-2">
              <span className="text-xs text-amber-400 font-semibold block">Reg No: {COMPANY_INFO.registrationNumber}</span>
              <span className="text-xs text-slate-400 block">Kano, Nigeria & Greater Accra, Ghana</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-lg text-sm font-bold text-slate-950 gold-gradient-bg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Corporate Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.allPhones.nigeria[0]}`}
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800 flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Nigeria Head Office</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
