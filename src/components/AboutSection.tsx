import React from 'react';
import { CORE_VALUES, COMPANY_INFO } from '../data/companyData';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle, 
  TrendingUp, Users, Truck, Globe, Building, Scale
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            About Our Corporate Enterprise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            A Diversified Pillar of <span className="gold-gradient-text">International Commerce</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Registered under Business Name <strong>{COMPANY_INFO.registrationNumber}</strong>, Muslim and Brothers General Enterprises operates as a leading corporate entity spanning West Africa and global trade hubs.
          </p>
        </div>

        {/* Story & Overview Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-100">Our Corporate Profile</h3>
                  <span className="text-xs text-amber-400 font-semibold">Registered ID: {COMPANY_INFO.registrationNumber}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>Muslim and Brothers General Enterprises</strong> is a premier multi-sector commercial enterprise engaged in importation, wholesale distribution, marketing, building materials supply, real estate development, property agency, agricultural commodity distribution, travel consultancy, and corporate procurement services.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Operating with dual strategic headquarters in <strong>Kano, Nigeria</strong> and <strong>Greater Accra, Ghana</strong>, we maintain robust international business relationships connecting Africa with partners across the United States, Europe, and Asia.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Integrity & Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Quality Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Reliable Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Customer Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Global Networks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Innovation</span>
              </div>
            </div>
          </div>

          {/* Mission & Vision Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Mission Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg gold-gradient-bg text-slate-950 font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-serif text-slate-100">Our Corporate Mission</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To deliver world-class commercial solutions in importation, real estate, construction materials, and commodity trading by prioritizing uncompromising quality, supply chain integrity, and long-term customer relationships.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-serif text-slate-100">Our Corporate Vision</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To be West Africa's most trusted international commerce partner and multi-sector enterprise, recognized globally for ethical business practices, operational excellence, and transformative commercial value.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-serif text-slate-100">
              Guiding <span className="gold-gradient-text">Core Values</span> & Principles
            </h3>
            <p className="text-slate-400 text-sm mt-1">The foundational pillars behind every transaction and partnership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 group-hover:border-amber-500/50 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
