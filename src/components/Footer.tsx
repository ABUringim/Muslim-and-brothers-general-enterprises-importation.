import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Building2, Phone, Mail, MapPin, ArrowUp, ShieldCheck, 
  Facebook, Instagram, Linkedin, Twitter, MessageSquare, Globe 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Reg Number */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center font-bold font-serif text-slate-950 text-xl shadow-lg">
                MB
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-slate-100">
                  Muslim & Brothers
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  General Enterprises
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Diversified international trading, importation, dealers of all phones, materials, and textiles, real estate, building materials, rice, spices, sardine distribution, and corporate consultancy serving clients across Nigeria, Ghana, and globally.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Business Reg ID: {COMPANY_INFO.registrationNumber}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors" title="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/2349073407583" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:bg-emerald-500/20 transition-colors" title="WhatsApp">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-serif text-slate-100 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Enterprise</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Core Services</a></li>
              <li><a href="#sectors" className="hover:text-amber-400 transition-colors">Business Sectors</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#leadership" className="hover:text-amber-400 transition-colors">Leadership Team</a></li>
              <li><a href="#locations" className="hover:text-amber-400 transition-colors">Office Locations</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Hub</a></li>
            </ul>
          </div>

          {/* Column 3: Industry Divisions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-serif text-slate-100 uppercase tracking-wider">Core Divisions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Dealers of All Mobile Phones & Devices</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Dealers of All Textiles & Quality Fabrics</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Dealers of All Commercial Materials</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Import & Freight Shipping</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Building Materials & Steel Rebar</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Real Estate & Title Acquisition</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Grade-A Rice Supply (50kg)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Spices & Culinary Commodities</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Canned Sardines Distribution</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Travel & Visa Consultancy</a></li>
            </ul>
          </div>

          {/* Column 4: Key Locations & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-serif text-slate-100 uppercase tracking-wider">Contact & Offices</h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-amber-400 font-semibold">Nigeria Head Office:</div>
                <p className="text-slate-400">Royal Plaza Suite 14–15, Zoo Road, Kano, Nigeria</p>
              </div>

              <div>
                <div className="text-amber-400 font-semibold">Ghana Office:</div>
                <p className="text-slate-400">Abokobi, Greater Accra, Ghana</p>
              </div>

              <div className="pt-1 space-y-1">
                <a href="tel:+2349073407583" className="block text-slate-200 hover:text-amber-400 font-semibold">+234 9073407583</a>
                <a href={`mailto:${COMPANY_INFO.mainEmail}`} className="block text-amber-400 hover:underline truncate">{COMPANY_INFO.mainEmail}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Muslim and Brothers General Enterprises ({COMPANY_INFO.registrationNumber}). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">Nigeria • Ghana • International</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 transition-colors flex items-center gap-1 font-bold"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
