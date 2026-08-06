import React from 'react';
import { BUSINESS_SECTORS } from '../data/companyData';
import { Layers, ArrowUpRight, ShieldCheck, Building2, Anchor, Wheat, Flame, Fish, Plane, ShoppingBag } from 'lucide-react';

interface BusinessSectorsProps {
  onOpenQuoteModal: (sectorName?: string) => void;
}

export const BusinessSectorsSection: React.FC<BusinessSectorsProps> = ({ onOpenQuoteModal }) => {
  const getSectorIcon = (iconName: string) => {
    switch(iconName) {
      case 'Building': return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'Truck': return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Wheat': return <Wheat className="w-5 h-5 text-amber-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Fish': return <Fish className="w-5 h-5 text-amber-400" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-amber-400" />;
      case 'Plane': return <Plane className="w-5 h-5 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      default: return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="sectors" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Core Industry Verticals
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            Diversified <span className="gold-gradient-text">Business Sectors</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Operating across key economic pillars driving West African industrial expansion, food security, infrastructure, and international trade.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-amber-500/60 shadow-2xl h-80 flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={sector.bgImage}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  {getSectorIcon(sector.iconName)}
                </div>
                {sector.stats && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {sector.stats}
                  </span>
                )}
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg font-bold font-serif text-slate-100 group-hover:text-amber-400 transition-colors">
                  {sector.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {sector.description}
                </p>

                <button
                  onClick={() => onOpenQuoteModal(sector.name)}
                  className="pt-2 text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Inquire Sector Supply</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
