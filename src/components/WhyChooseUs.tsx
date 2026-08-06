import React from 'react';
import { 
  ShieldCheck, Users, Handshake, DollarSign, Truck, 
  Smile, Globe, Zap, CheckCircle2, Award 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Professional Team",
      desc: "Seasoned directors, market specialists, logistics coordinators, and legal advisors with decades of commercial experience.",
      icon: Users
    },
    {
      title: "Trusted Partnerships",
      desc: "Established relationship networks with global manufacturers, shipping channels, financial institutions, and government bodies.",
      icon: Handshake
    },
    {
      title: "Competitive Pricing",
      desc: "Direct-from-source procurement eliminating unnecessary intermediaries to pass wholesale savings to our clients.",
      icon: DollarSign
    },
    {
      title: "Reliable Logistics",
      desc: "End-to-end container clearance, insured freight transportation, and regional warehousing in Kano and Accra.",
      icon: Truck
    },
    {
      title: "Customer Satisfaction",
      desc: "Dedicated account representatives ensuring transparent updates, tailored orders, and timely delivery fulfillment.",
      icon: Smile
    },
    {
      title: "International Presence",
      desc: "Operational footprints across Nigeria, Ghana, United States, and international commercial trade routes.",
      icon: Globe
    },
    {
      title: "Fast Delivery",
      desc: "Rapid customs clearing protocols and strategic inventory depots minimizing wait times for critical supplies.",
      icon: Zap
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous quality inspection standards applied to building materials, agricultural commodities, and imported goods.",
      icon: Award
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            The Corporate Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            Why Partner With <span className="gold-gradient-text">Muslim & Brothers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Built on trust, speed, regulatory compliance, and a relentless focus on client value across Africa and international markets.
          </p>
        </div>

        {/* 8 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-xl space-y-3 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-100 group-hover:text-amber-400 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
