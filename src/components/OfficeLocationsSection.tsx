import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/companyData';
import { OfficeLocation } from '../types';
import { 
  MapPin, Phone, Mail, Clock, ExternalLink, Globe, 
  Building2, Navigation, CheckCircle2 
} from 'lucide-react';

export const OfficeLocationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('kano-head-office');

  return (
    <section id="locations" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            Regional Operating Hubs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            Our Corporate <span className="gold-gradient-text">Office Locations</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Visit or contact our primary headquarters in Kano, Nigeria, or our regional branch in Greater Accra, Ghana.
          </p>
        </div>

        {/* Office Toggle Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {OFFICE_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === loc.id
                  ? 'gold-gradient-bg text-slate-950 shadow-xl shadow-amber-500/20 scale-105'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/30'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{loc.type} ({loc.country})</span>
            </button>
          ))}
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className={`p-6 sm:p-8 rounded-2xl bg-slate-950 border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xl ${
                activeTab === loc.id ? 'border-amber-500/60 ring-2 ring-amber-500/20' : 'border-slate-800 opacity-90'
              }`}
            >
              <div className="space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">{loc.type}</span>
                      <h3 className="text-xl font-bold font-serif text-slate-100">{loc.country} Regional Headquarters</h3>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Open for Business
                  </span>
                </div>

                {/* Address Details */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Physical Address:</div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                    {loc.address.map((line, lIdx) => (
                      <p key={lIdx} className="text-sm font-semibold text-slate-200">
                        {line}
                      </p>
                    ))}
                  </div>
                  {loc.landmark && (
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                      <Navigation className="w-3.5 h-3.5 shrink-0" />
                      <span><strong>Landmark:</strong> {loc.landmark}</span>
                    </div>
                  )}
                </div>

                {/* Hours & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase text-[10px]">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Working Hours</span>
                    </div>
                    <div className="text-slate-200 font-medium">{loc.hours}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase text-[10px]">
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Office Email</span>
                    </div>
                    <a href={`mailto:${loc.email}`} className="text-amber-400 font-medium truncate block hover:underline">
                      {loc.email}
                    </a>
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Telephone Lines:</div>
                  <div className="flex flex-wrap gap-2">
                    {loc.phones.map((phone, pIdx) => (
                      <a
                        key={pIdx}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-xs font-bold text-amber-400 flex items-center gap-1.5 hover:bg-slate-800 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Google Maps Visual Embed Frame */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 h-44 relative">
                  <iframe
                    title={`${loc.type} Map`}
                    src={loc.embedMapUrl}
                    className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={loc.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span>Open in Google Maps ({loc.country})</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
