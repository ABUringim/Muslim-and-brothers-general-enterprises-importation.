import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Building2, Globe, Users, FileCheck, MapPin, Award, ShieldCheck 
} from 'lucide-react';

export const StrengthsSection: React.FC = () => {
  const metrics = [
    {
      value: "BN 2003703",
      label: "Business Registration",
      desc: "Fully verified commercial entity",
      icon: FileCheck
    },
    {
      value: "2 Regional Hubs",
      label: "International Offices",
      desc: "Kano, Nigeria & Accra, Ghana",
      icon: Building2
    },
    {
      value: "11+ Executives",
      label: "Leadership & Advisory",
      desc: "Dedicated corporate directors & managers",
      icon: Users
    },
    {
      value: "10+ Divisions",
      label: "Business Categories",
      desc: "Import, real estate, rice, spices, travel & more",
      icon: Award
    },
    {
      value: "15+ Nations",
      label: "Countries Served",
      desc: "West Africa, USA, Europe & Asia",
      icon: Globe
    },
    {
      value: "1,500+",
      label: "Satisfied Clients",
      desc: "Distributors, contractors & corporate clients",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Verifiable Footprint</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-100">
            Company <span className="gold-gradient-text">Strengths & Capacity</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Backed by registered operational legitimacy, multi-regional presence, and dedicated leadership across all divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 shadow-lg space-y-3 flex items-start gap-4 transition-all"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-serif gold-gradient-text">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {m.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
