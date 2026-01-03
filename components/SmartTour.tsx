
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { TOUR_STATIONS } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

const SmartTour: React.FC<Props> = ({ lang, isOpen, onClose }) => {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const station = TOUR_STATIONS[current];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#1e1b4b]/95 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-premium grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <img 
            key={station.id}
            src={station.image} 
            className="w-full h-full object-cover animate-in zoom-in-95 duration-700"
            alt={station.id}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="p-8 lg:p-16 flex flex-col justify-center space-y-8 relative">
          <button onClick={onClose} className="absolute top-8 right-8 p-3 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} className="text-slate-400" />
          </button>

          <div className="space-y-4">
            <span className="text-[#f97316] font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
              <Info size={14} />
              {t(lang, 'جولة ذكية', 'Smart Tour')}
            </span>
            <h3 className="text-4xl lg:text-5xl font-black text-[#1e1b4b]">
              {t(lang, station.title.ar, station.title.fr)}
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              {t(lang, station.description.ar, station.description.fr)}
            </p>
          </div>

          <div className="flex items-center justify-between pt-10 border-t border-slate-100">
             <div className="flex gap-2">
               {TOUR_STATIONS.map((_, i) => (
                 <div key={i} className={`h-2 transition-all rounded-full ${i === current ? 'w-8 bg-[#f97316]' : 'w-2 bg-slate-200'}`} />
               ))}
             </div>
             
             <div className="flex gap-3">
               <button 
                 disabled={current === 0}
                 onClick={() => setCurrent(prev => prev - 1)}
                 className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-[#1e1b4b] disabled:opacity-30 hover:bg-slate-50 transition-all"
               >
                 <ChevronLeft className={lang === 'ar' ? 'rotate-180' : ''} />
               </button>
               <button 
                 disabled={current === TOUR_STATIONS.length - 1}
                 onClick={() => setCurrent(prev => prev + 1)}
                 className="w-14 h-14 rounded-2xl bg-[#1e1b4b] text-white flex items-center justify-center shadow-lg hover:bg-indigo-900 transition-all disabled:opacity-30"
               >
                 <ChevronRight className={lang === 'ar' ? 'rotate-180' : ''} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function t(lang: Language, ar: string, fr: string) {
  return lang === 'ar' ? ar : fr;
}

export default SmartTour;
