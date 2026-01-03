
import React, { useState, useEffect } from 'react';
import {
  Users, Phone, MapPin, Mail, Facebook, Instagram, Sparkles, BookOpen, GraduationCap,
  Baby, Award, Play, ArrowRight, Quote, CheckCircle2, Menu, X, Star, Cpu, Languages,
  Lightbulb, ShieldCheck, Zap, Globe, ArrowUpRight, ChevronDown, Youtube, Linkedin,
  Clock, Send, Code2, Calendar, FileText, UserCheck, Trophy, History, Target, Map,
  ChevronRight, Laptop, Library, Music, Palette, Timer, BadgeCheck, MessageSquareQuote,
  Newspaper, HelpCircle, ChevronUp, Users2
} from 'lucide-react';
import { Language } from './types';
import { NAV_ITEMS, PROGRAMS, TESTIMONIALS, ADVANTAGES, AWARDS } from './constants';
import LanguageToggle from './components/LanguageToggle';
import AIChatBot from './components/AIChatBot';
import SmartTour from './components/SmartTour';

type View = 'home' | 'about' | 'programs' | 'campus' | 'admissions' | 'contact';

const isMaintenanceMode = true; // Set to true to enable maintenance mode

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [currentView, setCurrentView] = useState<View>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll logic for Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Body Scroll Lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const t = (ar: string, fr: string) => (lang === 'ar' ? ar : fr);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // --- Decorative Elements ---
  const Orbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[5%] left-[-5%] w-[45rem] h-[45rem] bg-orange-100/30 rounded-full blur-[130px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-100/30 rounded-full blur-[130px] animate-pulse delay-700" />
    </div>
  );

  // --- View Components ---
  const HomeView = () => (
    <div className="animate-reveal overflow-x-hidden">
      <section className="relative min-h-screen flex items-center pt-32 pb-16 sm:pt-36 lg:pt-44 overflow-hidden">
        <Orbs />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200 text-[#0f172a] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f97316] rounded-full animate-ping" />
                {t('الريادة في التعليم الخاص بالدار البيضاء', 'Leader de l\'Enseignement Privé à Casablanca')}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-[#0f172a]">
                {t('مستقبلهم ', 'Leur Futur ')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ea580c]">{t('يبدأ من هنا', 'Commence Ici')}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium">
                {t('نحن لا نقدم مجرد دروس، بل نصمم تجربة تعليمية فريدة تهدف لبناء قادة الغد بمهارات عالمية وقيم أصيلة.', 'Bien plus qu\'une école, nous forgeons les leaders de demain avec une excellence académique et des valeurs fortes.')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  onClick={() => navigateTo('admissions')}
                  className="group bg-[#0f172a] text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 sm:gap-3 overflow-hidden relative"
                >
                  <span className="relative z-10">{t('سجل الآن', 'S\'inscrire')}</span>
                  <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-[#f97316] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg border-2 border-slate-200 bg-white/50 backdrop-blur-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2 sm:gap-3 group"
                >
                  {t('جولة افتراضية', 'Tour Virtuel')}
                  <Play size={16} className="text-[#f97316] group-hover:scale-125 transition-transform" fill="currentColor" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -top-12 -left-12 bg-white w-52 h-52 rounded-full shadow-luxury z-30 flex flex-col items-center justify-center border-[12px] border-orange-50 animate-reveal">
                <span className="text-7xl font-black text-[#f97316] leading-none">+25</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 text-center px-4">
                  {t('سنة من التميز الأكاديمي', 'Ans d\'Excellence')}
                </span>
                <div className="absolute -inset-1 rounded-full border-2 border-dashed border-[#f97316]/20 animate-[spin_10s_linear_infinite]" />
              </div>

              <div className="relative z-10 rounded-[6rem] overflow-hidden shadow-luxury border-[15px] border-white aspect-[4/5] animate-floating">
                <img src="/images/gsAloumrane.png" className="w-full h-full object-cover" alt={t('مجموعة مدارس العمران', 'Groupe Scolaire Al Oumrane')} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
              </div>

              <div className="absolute -bottom-10 -right-10 bg-[#0f172a] p-10 rounded-[3.5rem] shadow-luxury z-20 border border-white/10 animate-reveal delay-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center text-white">
                    <Trophy size={24} />
                  </div>
                  <span className="text-4xl font-black text-white">100%</span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('نسبة النجاح في الباكالوريا', 'Réussite au BAC')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY STATS SECTION */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#0f172a] rounded-2xl sm:rounded-3xl lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 shadow-luxury relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f97316]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 relative z-10">
              {[
                { label: { ar: 'تلميذ شغوف', fr: 'Élèves Passionnés' }, val: '1200+', icon: <Users size={32} /> },
                { label: { ar: 'أستاذ خبير', fr: 'Corps Enseignant' }, val: '150+', icon: <UserCheck size={32} /> },
                { label: { ar: 'سنة من العطاء', fr: 'Années d\'Expérience' }, val: '25+', icon: <History size={32} /> },
                { label: { ar: 'شريك استراتيجي', fr: 'Partenaires' }, val: '12', icon: <Globe size={32} /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center group/stat">
                  <div className="mb-4 sm:mb-6 lg:mb-8 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/5 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-white/10 flex items-center justify-center text-[#f97316] group-hover/stat:bg-[#f97316] group-hover/stat:text-white group-hover/stat:-translate-y-2 transition-all duration-500">
                      {React.cloneElement(stat.icon, { size: 20 })}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight">
                      {stat.val}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-[#f97316] uppercase tracking-wider">
                      {t(stat.label.ar, stat.label.fr)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#f97316]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ULTRA-PREMIUM TESTIMONIALS SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-0 w-[40%] h-[60%] bg-orange-50/60 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-indigo-50/40 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100 mb-6 animate-reveal">
              <Sparkles size={16} className="text-[#f97316]" />
              <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-[10px]">{t('قصص نجاحنا', 'NOS SUCCÈS')}</span>
            </div>

            {/* TITLE */}
            <div className="relative group w-full text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#0f172a] animate-reveal delay-100 leading-tight">
                {t('قالوا عن لعرعري نت', 'ILS ONT DIT SUR LAARAARI NET')}
              </h2>
              <div className="h-1.5 w-24 group-hover:w-48 bg-gradient-to-r from-[#f97316] to-[#ea580c] transition-all duration-1000 mx-auto rounded-full mt-8" />
            </div>

            <p className="text-sm sm:text-base lg:text-xl text-slate-400 font-medium max-w-2xl mt-6 sm:mt-8 lg:mt-12 animate-reveal delay-200">
              {t('ثقة تعكس التزامنا بجعل كل تلميذ قصة نجاح ملهمة.', 'Une confiance qui témoigne de notre engagement à faire de chaque élève un futur leader.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.slice(0, 4).map((testi, idx) => (
              <div
                key={testi.id}
                className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] p-8 shadow-lg border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl overflow-hidden ${idx % 2 !== 0 ? 'lg:mt-12' : ''}`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#f97316] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Quote size={20} className="text-white" fill="white" />
                </div>

                {/* Avatar at Top */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img src={testi.avatar} className="w-16 h-16 rounded-2xl object-cover shadow-md" alt={testi.author} />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#0f172a]">{testi.author}</h4>
                    <p className="text-xs font-bold text-[#f97316] uppercase tracking-wider">{t(testi.role.ar, testi.role.fr)}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-[#f97316] text-[#f97316]" />)}
                </div>

                {/* Content */}
                <p className="text-[#0f172a] font-semibold leading-relaxed text-base mb-6">
                  "{t(testi.content.ar, testi.content.fr)}"
                </p>

                {/* Achievement Badge */}
                {testi.achievement && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f172a] to-slate-800 text-white rounded-xl shadow-md">
                    <Trophy size={14} className="text-[#f97316]" />
                    <span className="text-[10px] font-black uppercase tracking-wide">{t(testi.achievement.ar, testi.achievement.fr)}</span>
                  </div>
                )}

                {/* Bottom Line Decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] via-orange-400 to-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center animate-reveal delay-500">
            <button
              onClick={() => navigateTo('admissions')}
              className="px-6 py-3 sm:px-10 sm:py-5 lg:px-16 lg:py-8 bg-[#0f172a] text-white rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] font-bold text-sm sm:text-lg lg:text-2xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3 sm:gap-4 lg:gap-6 mx-auto group overflow-hidden relative"
            >
              <span className="relative z-10">{t('سجل ابنك معنا', 'Inscrivez votre enfant')}</span>
              <ArrowUpRight size={20} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#f97316] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-10 sm:py-12 lg:py-16 relative bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-[#f97316] font-bold uppercase tracking-widest text-[10px] sm:text-xs">{t('لماذا تختارنا؟', 'Nos Atouts')}</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0f172a] mt-4 sm:mt-6 tracking-tight leading-tight">
              {t('بيئة تعليمية ذكية تلهم الجيل القادم', 'Une Éducation Pensée pour l\'Avenir')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {ADVANTAGES.map(adv => (
              <div key={adv.id} className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[4rem] group hover:-translate-y-2 lg:hover:-translate-y-4 transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#0f172a] rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center text-[#f97316] mb-4 sm:mb-6 lg:mb-10 group-hover:rotate-6 transition-transform">
                  {adv.id === 1 ? <Cpu size={24} /> : adv.id === 2 ? <Languages size={24} /> : <Lightbulb size={24} />}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-3 sm:mb-4 lg:mb-6 tracking-tight text-[#0f172a]">{t(adv.title.ar, adv.title.fr)}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base lg:text-lg">{t(adv.desc.ar, adv.desc.fr)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE ANNOUNCEMENT BAR */}
      <section className="py-3 sm:py-4 lg:py-6 bg-[#f97316] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10 lg:gap-16 mx-4 sm:mx-6 lg:mx-8">
              <span className="text-white font-bold text-xs sm:text-sm lg:text-lg flex items-center gap-2">
                <Sparkles size={16} />
                {t('التسجيلات مفتوحة 2025-2026', 'Inscriptions 2025-2026')}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white font-bold text-xs sm:text-sm lg:text-lg flex items-center gap-2">
                <Trophy size={16} />
                {t('نسبة نجاح 100%', '100% de réussite au BAC')}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white font-bold text-xs sm:text-sm lg:text-lg flex items-center gap-2">
                <Award size={16} />
                {t('+25 سنة', '+25 ans d\'excellence')}
              </span>
              <span className="text-white/80">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS & EVENTS SECTION */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100 mb-8">
              <Newspaper size={16} className="text-[#f97316]" />
              <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-[10px]">{t('أخبار وفعاليات', 'ACTUALITÉS')}</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tighter">
              {t('آخر أخبار المدرسة', 'Dernières Nouvelles')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: { ar: 'انطلاق التسجيلات للموسم الجديد', fr: 'Ouverture des Inscriptions' },
                date: { ar: '15 يناير 2025', fr: '15 Janvier 2025' },
                desc: { ar: 'نعلن عن فتح باب التسجيل للموسم الدراسي 2025-2026 لجميع المستويات.', fr: 'Les inscriptions pour l\'année scolaire 2025-2026 sont maintenant ouvertes.' },
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: { ar: 'حفل تكريم المتفوقين', fr: 'Cérémonie d\'Excellence' },
                date: { ar: '20 ديسمبر 2024', fr: '20 Décembre 2024' },
                desc: { ar: 'احتفالية لتكريم التلاميذ المتفوقين في مختلف المستويات الدراسية.', fr: 'Célébration des élèves excellents de tous les niveaux.' },
                img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: { ar: 'ورشة الروبوتيك والذكاء الاصطناعي', fr: 'Atelier Robotique & IA' },
                date: { ar: '10 نوفمبر 2024', fr: '10 Novembre 2024' },
                desc: { ar: 'تنظيم ورشة عملية لتعريف التلاميذ بعالم البرمجة والروبوتيك.', fr: 'Initiation des élèves au monde de la programmation et robotique.' },
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
              }
            ].map((news, idx) => (
              <div key={idx} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-luxury transition-all duration-500 hover:-translate-y-4">
                <div className="h-56 overflow-hidden">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={t(news.title.ar, news.title.fr)} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#f97316] mb-4">
                    <Calendar size={14} />
                    <span className="text-xs font-bold">{t(news.date.ar, news.date.fr)}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] mb-4 tracking-tight">{t(news.title.ar, news.title.fr)}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{t(news.desc.ar, news.desc.fr)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100 mb-8">
              <Users2 size={16} className="text-[#f97316]" />
              <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-[10px]">{t('فريقنا', 'NOTRE ÉQUIPE')}</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tighter">
              {t('الفريق التربوي', 'L\'Équipe Pédagogique')}
            </h2>
            <p className="text-xl text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
              {t('نخبة من الأساتذة المؤهلين والمتفانين في تقديم أفضل تعليم لأبنائكم', 'Une équipe d\'enseignants qualifiés et dévoués à l\'excellence de vos enfants')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: { ar: 'أ. محمد العلوي', fr: 'M. Mohamed Alaoui' }, role: { ar: 'مدير المؤسسة', fr: 'Directeur' }, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: { ar: 'أ. فاطمة الزهراء', fr: 'Mme. Fatima Zahra' }, role: { ar: 'مسؤولة السلك الابتدائي', fr: 'Resp. Primaire' }, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
              { name: { ar: 'أ. أحمد بنشريف', fr: 'M. Ahmed Benchrif' }, role: { ar: 'أستاذ الرياضيات', fr: 'Prof. Maths' }, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { name: { ar: 'أ. سناء المنصوري', fr: 'Mme. Sanaa Mansouri' }, role: { ar: 'أستاذة اللغات', fr: 'Prof. Langues' }, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' }
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-[3rem] overflow-hidden shadow-luxury group-hover:-translate-y-4 transition-all duration-500">
                  <img src={member.img} className="w-full h-full object-cover" alt={t(member.name.ar, member.name.fr)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-black text-[#0f172a] mb-2">{t(member.name.ar, member.name.fr)}</h3>
                <p className="text-[#f97316] font-bold text-sm uppercase tracking-wider">{t(member.role.ar, member.role.fr)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100 mb-8">
              <HelpCircle size={16} className="text-[#f97316]" />
              <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-[10px]">{t('أسئلة شائعة', 'FAQ')}</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tighter">
              {t('الأسئلة الأكثر تكراراً', 'Questions Fréquentes')}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: { ar: 'ما هي مواعيد التسجيل؟', fr: 'Quelles sont les dates d\'inscription ?' },
                a: { ar: 'التسجيلات مفتوحة طوال السنة، مع أولوية للتسجيلات المبكرة. ننصح بالتسجيل قبل شهر يونيو للموسم المقبل.', fr: 'Les inscriptions sont ouvertes toute l\'année, avec priorité aux inscriptions anticipées. Nous conseillons de s\'inscrire avant juin.' }
              },
              {
                q: { ar: 'ما هي الوثائق المطلوبة للتسجيل؟', fr: 'Quels documents fournir ?' },
                a: { ar: 'نسخة من عقد الازدياد، صور شمسية، شهادة مدرسية، ونسخة من بطاقة التعريف الوطنية لولي الأمر.', fr: 'Acte de naissance, photos d\'identité, certificat de scolarité, et CIN du parent.' }
              },
              {
                q: { ar: 'هل تتوفر المدرسة على خدمة النقل؟', fr: 'Y a-t-il un service de transport ?' },
                a: { ar: 'نعم، نوفر خدمة النقل المدرسي الآمن لجميع أحياء الدار البيضاء مع مرافقين متخصصين.', fr: 'Oui, nous offrons un transport scolaire sécurisé pour tous les quartiers de Casablanca.' }
              },
              {
                q: { ar: 'ما هي اللغات المُدرَّسة؟', fr: 'Quelles langues sont enseignées ?' },
                a: { ar: 'العربية، الفرنسية، الإنجليزية، والإسبانية كلغة اختيارية في الثانوي.', fr: 'Arabe, Français, Anglais, et Espagnol en option au secondaire.' }
              },
              {
                q: { ar: 'هل تتوفر أنشطة موازية؟', fr: 'Y a-t-il des activités parascolaires ?' },
                a: { ar: 'نعم، نوفر أندية متنوعة: الروبوتيك، الفنون، الموسيقى، الرياضة، والمسرح.', fr: 'Oui: Robotique, Arts, Musique, Sports, et Théâtre.' }
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-black text-xl text-[#0f172a] hover:text-[#f97316] transition-colors">
                  {t(faq.q.ar, faq.q.fr)}
                  <ChevronDown size={24} className="text-[#f97316] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed text-lg">
                  {t(faq.a.ar, faq.a.fr)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <div className="pt-48 animate-reveal pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-32">
          <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-xs">{t('قصتنا', 'Notre Histoire')}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#0f172a] mt-6 tracking-tighter leading-tight">
            {t('أكثر من مجرد مدرسة، نحن عائلة واحدة', 'Plus qu\'une École, une Grande Famille')}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <p className="text-2xl text-slate-500 leading-relaxed font-medium border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#f97316] pl-10 rtl:pr-10">
              {t('منذ تأسيسها، وضعت مجموعة مدارس العمران التميز والابتكار في قلب رؤيتها التربوية، مرافقة آلاف التلاميذ نحو النجاح الجامعي والمهني.', 'Depuis sa création, Al Oumrane place l\'excellence et l\'innovation au cœur de sa vision, accompagnant des milliers d\'élèves vers la réussite.')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: { ar: 'بيداغوجيا نشطة', fr: 'Pédagogية Active' }, icon: <Zap /> },
                { label: { ar: 'قيم مواطنة', fr: 'Valeurs Citoyennes' }, icon: <ShieldCheck /> },
                { label: { ar: 'توجيه جامعي', fr: 'Orientation' }, icon: <Target /> },
                { label: { ar: 'لغات حية', fr: 'Langues' }, icon: <Globe /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                  <div className="text-[#f97316]">{item.icon}</div>
                  <span className="font-black text-sm uppercase tracking-wider text-[#0f172a]">{t(item.label.ar, item.label.fr)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[5rem] overflow-hidden shadow-luxury rotate-2 hover:rotate-0 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="w-full" alt="Collaborative Learning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProgramsView = () => (
    <div className="pt-48 animate-reveal pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-32">
          <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-xs">{t('مساراتنا', 'Nos Cycles')}</span>
          <h2 className="text-6xl font-black text-[#0f172a] mt-6 tracking-tighter">{t('رحلة التعلم من المهد إلى التميز', 'Le Parcours de la Réussite')}</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          {PROGRAMS.map((p, i) => (
            <div key={p.id} className="group flex flex-col bg-white rounded-[4rem] overflow-hidden shadow-luxury border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="h-80 overflow-hidden relative">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={t(p.title.ar, p.title.fr)} />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-[#f97316] shadow-lg">
                  {i === 0 ? <Baby size={32} /> : i === 1 ? <BookOpen size={32} /> : <GraduationCap size={32} />}
                </div>
              </div>
              <div className="p-12 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-black text-[#0f172a] tracking-tight mb-4">{t(p.title.ar, p.title.fr)}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">{t(p.description.ar, p.description.fr)}</p>
                </div>
                <button onClick={() => navigateTo('admissions')} className="flex items-center gap-3 text-[#f97316] font-black uppercase tracking-widest text-[10px] group-hover:gap-6 transition-all">
                  {t('اكتشف المسار التعليمي', 'Cursus')}
                  <ArrowRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CampusView = () => (
    <div className="pt-48 animate-reveal pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
          <div className="max-w-2xl">
            <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-xs">{t('فضاءاتنا', 'Campus')}</span>
            <h2 className="text-6xl font-black text-[#0f172a] mt-6 tracking-tighter leading-tight">{t('بيئة ذكية مصممة للإبداع', 'Infrastructures')}</h2>
          </div>
          <button onClick={() => setIsTourOpen(true)} className="px-10 py-5 bg-[#0f172a] text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#f97316] transition-all flex items-center gap-3">
            <Play size={18} fill="currentColor" />
            {t('جولة 360°', '360°')}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: { ar: 'مكتبة ذكية', fr: 'Library' }, img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800', icon: <Library /> },
            { title: { ar: 'ركن الفنون', fr: 'Art Studio' }, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800', icon: <Palette /> },
            { title: { ar: 'نادي الروبوتيك', fr: 'Robotics' }, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', icon: <Laptop /> }
          ].map((item, i) => (
            <div key={i} className="group relative h-96 rounded-[3.5rem] overflow-hidden shadow-luxury">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={t(item.title.ar, item.title.fr)} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight">{t(item.title.ar, item.title.fr)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AdmissionsView = () => {
    const [formStep, setFormStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
      parentName: '', phone: '', email: '', studentName: '', birthDate: '', level: '', message: ''
    });
    const levels = [
      { ar: 'الروضة', fr: 'Maternelle' },
      { ar: 'الابتدائي', fr: 'Primaire' },
      { ar: 'الإعدادي', fr: 'Collège' },
      { ar: 'الثانوي', fr: 'Lycée' }
    ];

    return (
      <div className="pt-48 animate-reveal pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-[#0f172a] rounded-[5rem] overflow-hidden shadow-premium grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white space-y-8">
              <span className="text-[#f97316] font-black uppercase tracking-[0.4em] text-xs">{t('التسجيل', 'Admissions')}</span>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-tight">{t('انضم إلينا', 'Rejoignez-nous')}</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('املأ النموذج وسنتواصل معك في أقرب وقت.', 'Remplissez le formulaire et nous vous contacterons.')}
              </p>
              <div className="flex items-center gap-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${formStep >= step ? 'bg-[#f97316] text-white' : 'bg-white/10 text-slate-500'}`}>
                      {formStep > step ? <CheckCircle2 size={20} /> : step}
                    </div>
                    {step < 3 && <div className={`w-8 h-1 rounded-full ${formStep > step ? 'bg-[#f97316]' : 'bg-white/10'}`} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 lg:p-16">
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                {formStep === 1 && (
                  <div className="space-y-4 animate-reveal">
                    <h3 className="text-xl font-black text-[#0f172a] mb-4">{t('معلومات ولي الأمر', 'Infos Parent')}</h3>
                    <input type="text" value={formData.parentName} onChange={e => setFormData({ ...formData, parentName: e.target.value })} placeholder={t('الاسم الكامل', 'Nom complet')} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:border-[#f97316] font-bold" />
                    <input type="tel" dir="ltr" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder={t('رقم الهاتف', 'Téléphone')} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:border-[#f97316] font-bold" />
                    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder={t('البريد الإلكتروني', 'Email')} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:border-[#f97316] font-bold" />
                  </div>
                )}
                {formStep === 2 && (
                  <div className="space-y-4 animate-reveal">
                    <h3 className="text-xl font-black text-[#0f172a] mb-4">{t('معلومات التلميذ', 'Infos Élève')}</h3>
                    <input type="text" value={formData.studentName} onChange={e => setFormData({ ...formData, studentName: e.target.value })} placeholder={t('اسم التلميذ', 'Nom élève')} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:border-[#f97316] font-bold" />
                    <div>
                      <label className="text-sm text-slate-500 font-bold mb-2 block">{t('تاريخ الازدياد', 'Date naissance')}</label>
                      <input type="date" value={formData.birthDate} onChange={e => setFormData({ ...formData, birthDate: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:border-[#f97316] font-bold" />
                    </div>
                  </div>
                )}
                {formStep === 3 && (
                  <div className="space-y-4 animate-reveal">
                    <h3 className="text-xl font-black text-[#0f172a] mb-4">{t('المستوى الدراسي', 'Niveau')}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {levels.map((level, idx) => (
                        <button type="button" key={idx} onClick={() => setFormData({ ...formData, level: level.ar })} className={`p-4 rounded-2xl font-black transition-all border-2 ${formData.level === level.ar ? 'bg-[#f97316] text-white border-[#f97316]' : 'bg-slate-50 text-[#0f172a] border-slate-100 hover:border-[#f97316]'}`}>
                          {t(level.ar, level.fr)}
                        </button>
                      ))}
                    </div>
                    <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder={t('رسالة (اختياري)', 'Message (optionnel)')} rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:border-[#f97316] font-bold resize-none" />
                  </div>
                )}
                <div className="flex gap-3 pt-4">
                  {formStep > 1 && <button type="button" onClick={() => setFormStep(formStep - 1)} className="flex-1 py-4 bg-slate-100 text-[#0f172a] rounded-2xl font-black hover:bg-slate-200 transition-all">{t('السابق', 'Précédent')}</button>}
                  {formStep < 3 ? (
                    <button type="button" onClick={() => setFormStep(formStep + 1)} className="flex-1 py-4 bg-[#f97316] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-orange-glow">{t('التالي', 'Suivant')}</button>
                  ) : (
                    <button type="submit" className="flex-1 py-4 bg-[#f97316] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-orange-glow flex items-center justify-center gap-2"><Send size={18} />{t('إرسال', 'Envoyer')}</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactView = () => (
    <div className="pt-48 animate-reveal pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { icon: <Phone />, title: { ar: 'الهاتف', fr: 'Tel' }, value: '05 22 97 25 24' },
            { icon: <Mail />, title: { ar: 'البريد', fr: 'Email' }, value: 'contact@alomrane.ma' },
            { icon: <MapPin />, title: { ar: 'الموقع', fr: 'Adresse' }, value: t('سيدي معروف', 'Sidi Maârouf') }
          ].map((item, i) => (
            <div key={i} className="bg-white p-14 rounded-[4rem] border border-slate-100 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#f97316] mx-auto mb-8">{item.icon}</div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{t(item.title.ar, item.title.fr)}</h4>
              <p className="text-2xl font-black text-[#0f172a]" dir={item.title.ar === 'الهاتف' ? 'ltr' : undefined}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MaintenanceView = () => (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#f97316]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10 space-y-12 animate-reveal">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/10 shadow-2xl group hover:scale-105 transition-transform duration-500">
            {/* Logo Removed */}
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
              {t('لعرعري نت', 'LAARAARI NET')}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#f97316] to-[#ea580c] mx-auto rounded-full" />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f97316] uppercase tracking-[0.2em]">
            {t('الموقع في طور الصيانة', 'Site en Maintenance')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed">
            {t('نحن نعمل على تحسين تجربتكم الرقمية. سنعود قريباً بهوية جديدة وخدمات متميزة.', 'Nous travaillons sur l\'amélioration de votre expérience. Nous reviendrons bientôt avec une nouvelle identité.')}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <div className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce delay-200" />
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest">
            {t('شكراً لتفهمكم', 'Merci de votre compréhension')}
          </p>
        </div>
      </div>
    </div>
  );

  if (isMaintenanceMode) return <MaintenanceView />;

  return (
    <div className={`min-h-screen selection:bg-[#f97316] selection:text-white ${lang === 'ar' ? 'rtl-layout' : 'ltr-layout'}`}>

      {/* 1. TOP BAR */}
      <div className="fixed top-0 w-full z-[110] bg-[#0f172a] text-white py-1.5 px-6 lg:px-16 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* Left Side - Phone */}
          <div className="flex items-center gap-8">
            <a href="tel:0522972524" className="flex items-center gap-2 hover:text-[#f97316] transition-colors group">
              <div className="w-7 h-7 bg-[#f97316] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={14} className="text-white" />
              </div>
              <span dir="ltr" className="font-bold text-xs tracking-wide hidden sm:block">05 22 97 25 24</span>
            </a>
          </div>

          {/* Right Side - Social Icons & Language */}
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1.5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-all group">
                <Facebook size={14} className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all group">
                <Instagram size={14} className="text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-all group">
                <Youtube size={14} className="text-white" />
              </a>
            </div>

            {/* Separator */}
            <div className="w-px h-5 bg-white/20 mx-1" />

            {/* Language Toggle */}
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>


      {/* 2. MAIN NAVBAR */}
      <nav className={`fixed top-10 w-full z-[100] transition-all duration-700 px-4 md:px-8 py-2 ${isScrolled ? 'translate-y-1' : ''}`}>
        <div className={`max-w-[1600px] mx-auto rounded-xl px-4 lg:px-6 py-2 flex items-center bg-white/95 backdrop-blur-2xl shadow-lg border border-slate-200/50 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>

          {/* Logo & Name Section */}
          <div className={`flex items-center gap-3 cursor-pointer ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`} onClick={() => navigateTo('home')}>
            <div className={`flex flex-col ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className="font-black text-lg tracking-tighter text-[#0f172a] leading-none uppercase">{t('لعرعري نت', 'LAARAARI NET')}</h1>
              <span className="text-[8px] font-bold text-[#f97316] uppercase tracking-[0.15em]">{t('لعرعري نت', 'LAARAARI NET')}</span>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center gap-4 px-4 bg-slate-50/50 rounded-lg border border-slate-200/40 py-1.5 mx-auto">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => navigateTo(item.href as View)} className={`text-xs font-bold px-3 py-1.5 rounded-md transition-all ${currentView === item.href ? 'text-[#f97316] bg-white shadow-sm' : 'text-[#0f172a] hover:text-[#f97316]'}`}>
                {t(item.label.ar, item.label.fr)}
              </button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-[#0f172a] hover:bg-slate-200 transition-colors"
            >
              <Menu size={20} />
            </button>
            <button onClick={() => navigateTo('admissions')} className="hidden lg:flex items-center gap-1.5 bg-[#f97316] text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wide hover:bg-[#0f172a] transition-all">
              <ArrowUpRight size={12} />
              <span>{t('سجّل الآن', 'Inscription')}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0f172a] flex flex-col p-8 animate-in fade-in duration-300 overflow-y-auto">
          <div className={`flex justify-between items-center mb-10 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'} flex-shrink-0`}>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all"
            >
              <X size={28} />
            </button>
            <div className={`flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="text-white font-black text-xl tracking-tighter uppercase">{t('لعرعري نت', 'LAARAARI NET')}</div>
                <div className="text-[#f97316] text-[9px] font-bold uppercase tracking-widest">{t('لعرعري نت', 'LAARAARI NET')}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 justify-center py-8">
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.href as View)}
                className="text-3xl font-black text-white hover:text-[#f97316] transition-all text-right rtl:text-right ltr:text-left flex items-center gap-4 group"
              >
                <span className="text-[#f97316] text-sm opacity-30 font-serif italic">0{idx + 1}</span>
                {t(item.label.ar, item.label.fr)}
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-6 text-white/50 flex-shrink-0">
            <div className="flex gap-4 items-center">
              <Phone size={20} className="text-[#f97316]" />
              <span className="font-bold tracking-widest" dir="ltr">05 22 97 25 24</span>
            </div>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      )}

      <main className="relative z-10">
        {currentView === 'home' && <HomeView />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'programs' && <ProgramsView />}
        {currentView === 'campus' && <CampusView />}
        {currentView === 'admissions' && <AdmissionsView />}
        {currentView === 'contact' && <ContactView />}
      </main>

      <footer className="bg-[#0f172a] text-white pt-20 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="font-black text-2xl tracking-tighter uppercase">{t('لعرعري نت', 'LAARAARI NET')}</h3>
                  <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">{t('التميز', 'Excellence')}</span>
                </div>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed text-sm">
                {t('لعرعري نت، أكثر من 25 سنة من التميز في التعليم الخاص.', 'Laaraari Net, plus de 25 ans d\'excellence dans l\'enseignement privé.')}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#f97316] transition-all group">
                  <Facebook size={18} className="text-slate-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#f97316] transition-all group">
                  <Instagram size={18} className="text-slate-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#f97316] transition-all group">
                  <Youtube size={18} className="text-slate-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#f97316] transition-all group">
                  <Linkedin size={18} className="text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-lg mb-6 text-white">{t('روابط سريعة', 'Liens Rapides')}</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}>
                    <button onClick={() => navigateTo(item.href as View)} className="text-slate-400 hover:text-[#f97316] transition-colors font-medium text-sm flex items-center gap-2">
                      <ChevronRight size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
                      {t(item.label.ar, item.label.fr)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-black text-lg mb-6 text-white">{t('تواصل معنا', 'Contact')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#f97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{t('الهاتف', 'Téléphone')}</p>
                    <p className="text-white font-bold" dir="ltr">05 22 97 25 24</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#f97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{t('البريد', 'Email')}</p>
                    <p className="text-white font-bold">contact@alomrane.ma</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#f97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{t('العنوان', 'Adresse')}</p>
                    <p className="text-white font-bold text-sm">{t('سيدي معروف، الدار البيضاء', 'Sidi Maârouf, Casablanca')}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div>
              <h4 className="font-black text-lg mb-6 text-white">{t('موقعنا', 'Notre Localisation')}</h4>
              <div className="rounded-2xl overflow-hidden h-48 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.0!2d-7.6!3d33.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzQ4LjAiTiA3wrAzNicwMC4wIlc!5e0!3m2!1sen!2sma!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-4 text-center">
            <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">
              © 2026 AL OUMRANE SCHOOLS. ALL RIGHTS RESERVED.
            </p>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              <Code2 size={14} className="text-[#f97316]" />
              {t('تصميم: مصطفى لعرعري', 'Designed by: MUSTAPHA LAARAARI')}
            </div>
          </div>
        </div>
      </footer>

      <SmartTour lang={lang} isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
      <AIChatBot lang={lang} />
    </div>
  );
};

export default App;
