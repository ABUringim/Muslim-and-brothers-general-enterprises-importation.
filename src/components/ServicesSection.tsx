import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';
import { 
  Ship, Share2, HardHat, Building2, Wheat, Flame, Fish, 
  PlaneTakeoff, Briefcase, ShoppingBag, ArrowRight, CheckCircle2,
  FileText, Sparkles, Filter, X
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (sector?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'import_export', label: 'Import & Logistics' },
    { id: 'real_estate', label: 'Real Estate & Construction' },
    { id: 'commodities', label: 'Rice, Spices & Seafood' },
    { id: 'consultancy', label: 'Travel & Consultancy' },
    { id: 'procurement', label: 'Corporate Procurement' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch(iconName) {
      case 'Ship': return <Ship className="w-6 h-6 text-amber-400" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-amber-400" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-amber-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Wheat': return <Wheat className="w-6 h-6 text-amber-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Fish': return <Fish className="w-6 h-6 text-amber-400" />;
      case 'PlaneTakeoff': return <PlaneTakeoff className="w-6 h-6 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      default: return <Briefcase className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Our Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            Comprehensive <span className="gold-gradient-text">Commercial Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Providing end-to-end solutions across international trade, construction supplies, real estate, commodities, and corporate advisory.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-serif text-slate-100 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="pt-2 space-y-1.5">
                    {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/80 mt-4">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-300 hover:text-amber-400 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="px-3.5 py-2 rounded-lg text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl gold-gradient-bg text-slate-950">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold">Service Deep-Dive</span>
                <h3 className="text-2xl font-bold font-serif text-slate-100">{selectedService.title}</h3>
              </div>
            </div>

            <div className="h-48 rounded-xl overflow-hidden relative">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200">Full Description:</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{selectedService.fullDesc}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-200">Key Deliverables & Specifications:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteModal(title);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Inquire & Request Quote</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
