
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageToggle: React.FC<Props> = ({ lang, setLang }) => {
  return (
    <div className="flex items-center p-0.5 bg-white/5 rounded-full border border-white/10">
      <button
        onClick={() => setLang('ar')}
        className={`px-4 py-1 rounded-full text-[9px] font-black transition-all uppercase tracking-tighter ${
          lang === 'ar' ? 'bg-[#f97316] text-white shadow-sm' : 'text-white/60 hover:text-white'
        }`}
      >
        عربي
      </button>
      <button
        onClick={() => setLang('fr')}
        className={`px-4 py-1 rounded-full text-[9px] font-black transition-all uppercase tracking-tighter ${
          lang === 'fr' ? 'bg-[#f97316] text-white shadow-sm' : 'text-white/60 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;
