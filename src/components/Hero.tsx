import React from 'react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/companyData';
import { 
  Building2, Ship, ArrowRight, ShieldCheck, CheckCircle2, 
  PhoneCall, FileText, Globe2, Award
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920"
          alt="International Logistics & Commercial Shipping"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform animate-pulse duration-10000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-lg backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>BN 2003703 • Certified Commercial Enterprise</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-100 font-serif leading-tight">
              Building Strong <span className="gold-gradient-text">Partnerships</span> Across Africa and Beyond
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {COMPANY_INFO.subheadline}
            </p>

            {/* Quick Industry Highlights Pills */}
            <div className="flex flex-wrap gap-2 text-xs text-slate-300 pt-1">
              {['Import & Export Logistics', 'Dealers of Phones & Devices', 'Textiles & Quality Fabrics', 'Commercial & Industrial Materials', 'Real Estate & Properties', 'Building Materials', 'Rice & Spices Supply', 'Travel Consultancy'].map((sector, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  {sector}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 group"
                id="hero-contact-btn"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all inline-flex items-center gap-2"
                id="hero-services-btn"
              >
                <span>Explore Services</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all inline-flex items-center gap-2"
                id="hero-quote-btn"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Request Quotation</span>
              </button>
            </div>

            {/* Dual Location Callout */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Head Office:</strong> Kano, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Ghana Hub:</strong> Abokobi, Accra</span>
              </div>
            </div>
          </div>

          {/* Right Hero Card Showcase */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative border border-slate-700/60 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center font-serif text-slate-950 font-bold text-2xl shadow-lg">
                    MB
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-100 font-serif">Muslim & Brothers</div>
                    <div className="text-xs text-amber-400 font-medium">BN 2003703</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                    Verified Active
                  </span>
                </div>
              </div>

              {/* Core Feature Snippets */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <Ship className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">International Importation</div>
                    <div className="text-[11px] text-slate-400">Containerized shipping, customs clearance, & bulk freight handling.</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">Real Estate & Building Supplies</div>
                    <div className="text-[11px] text-slate-400">Structural steel, cement, rebar & verified property acquisitions.</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">Wholesale Rice, Spices & Sardines</div>
                    <div className="text-[11px] text-slate-400">Bulk supply across Singers and Kwari market depots.</div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Bar */}
              <div className="pt-2">
                <a
                  href="tel:+2349073407583"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-100 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 group transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                  <span>Direct Hotline: +234 9073407583</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Key Statistics Bar */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {COMPANY_STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all text-center space-y-1 group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-serif gold-gradient-text group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
