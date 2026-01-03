
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Mic } from 'lucide-react';
import { getAIResponse } from '../services/chatService';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const getInitialMessage = (lang: Language) => ({
  role: 'bot' as const,
  text: lang === 'ar'
    ? 'مرحباً بكم في مجموعة مدارس العمران. كيف يمكنني مساعدتكم؟'
    : 'Bienvenue au Groupe Scolaire Al Oumrane. Comment puis-je vous aider ?'
});

const AIChatBot: React.FC<Props> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([getInitialMessage(lang)]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // إعادة ضبط المحادثة عند إغلاق النافذة
  const handleClose = () => {
    setIsOpen(false);
    setMessages([getInitialMessage(lang)]);
    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-4 ${lang === 'ar' ? 'left-4' : 'right-4'} z-[60]`}>
      {isOpen ? (
        <div className="w-[90vw] sm:w-[380px] h-[450px] sm:h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
          {/* Header - شريط رفيع */}
          <div className="bg-[#1e1b4b] px-3 py-1.5 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium text-xs">{lang === 'ar' ? 'الناطق باسم العمران' : 'Porte-parole Al Omrane'}</span>
            </div>
            <button
              onClick={handleClose}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${m.role === 'user'
                  ? 'bg-[#1e1b4b] text-white rounded-br-sm'
                  : 'bg-white text-slate-700 rounded-bl-sm border border-slate-200 shadow-sm'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-200">
                  <Loader2 className="animate-spin text-[#f97316]" size={16} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'ar' ? 'اكتب سؤالك...' : 'Votre question...'}
                className={`w-full py-2.5 px-3 ${lang === 'ar' ? 'pl-10' : 'pr-10'} rounded-lg bg-slate-50 border border-slate-200 focus:border-[#f97316] outline-none text-sm transition-all`}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`absolute ${lang === 'ar' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 p-2 text-[#1e1b4b] hover:text-[#f97316] transition-colors disabled:opacity-50`}
              >
                <Send size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#1e1b4b] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all border-2 border-white"
        >
          <MessageCircle className="text-[#f97316]" size={24} />
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
