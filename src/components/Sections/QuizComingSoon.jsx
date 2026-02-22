import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function QuizComingSoon({ isOpen, onClose, isDark }) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-md p-8 md:p-10 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center text-center z-10 
            ${isDark ? 'bg-[#18181b] border border-[#27272a]' : 'bg-white border border-gray-200'}`}
          >
             <div className="absolute -top-20 -left-20 w-48 h-48 bg-green-500/20 rounded-full blur-[60px] pointer-events-none"></div>
             <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>

             <button 
                onClick={onClose}
                className={`absolute top-4 right-4 z-50 p-2 rounded-full transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-black hover:bg-black/5'}`}
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>

             <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-tr from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(34,197,94,0.4)] animate-pulse">
                    🚀
                </div>
             </div>

             <h2 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {lang === 'en' ? 'Coming Soon!' : 'Segera Hadir!'}
             </h2>
             
             <p className={`text-sm md:text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {lang === 'en' 
                    ? "I'm cooking up some brain-teasing questions. Get ready to test your IT and Web Development knowledge very soon. Stay tuned!"
                    : "Saya sedang meracik pertanyaan-pertanyaan seru. Siapkan dirimu untuk menguji seberapa jauh pengetahuan IT dan Web Development kamu dalam waktu dekat. Ditunggu ya!"}
             </p>

             <button 
                onClick={onClose}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#18181b] text-white hover:bg-black'}`}
             >
                {lang === 'en' ? "I'll be waiting!" : 'Oke, Saya Tunggu!'}
             </button>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}