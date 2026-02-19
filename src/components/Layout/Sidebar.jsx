import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData, navItems } from "../../data";

export default function Sidebar({ isDark, setIsDark, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [showLetter, setShowLetter] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleOpenModal = () => {
    setShowLetter(true);
    setIsLetterOpen(false); 
    setMobileMenuOpen(false); 
  };
  
  return (
    <>
      {mobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm transition-opacity duration-500"></div>
      )}

      <AnimatePresence>
        {showLetter && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowLetter(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <AnimatePresence mode="wait">
              {!isLetterOpen ? (
                <motion.div
                  key="envelope"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.2, opacity: 0, rotateX: 90 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setIsLetterOpen(true)}
                  className="relative z-10 cursor-pointer group perspective-1000"
                >
                  <div className={`w-72 h-48 md:w-80 md:h-52 rounded-lg shadow-2xl relative flex flex-col items-center justify-center overflow-hidden border-2 transition-colors duration-300 ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-amber-100 border-amber-200'}`}>
                    
                    <div className={`absolute top-0 left-0 w-0 h-0 border-l-[144px] md:border-l-[160px] border-r-[144px] md:border-r-[160px] border-t-[96px] md:border-t-[104px] border-transparent origin-top transition-transform duration-500 group-hover:-rotate-x-12 z-30 ${isDark ? 'border-t-zinc-700' : 'border-t-amber-200'}`}></div>
                    
                    <div className={`absolute bottom-0 left-0 w-0 h-0 border-l-[144px] md:border-l-[160px] border-r-[144px] md:border-r-[160px] border-b-[96px] md:border-b-[104px] border-transparent z-20 ${isDark ? 'border-b-zinc-900' : 'border-b-amber-300'}`}></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-40 transform transition-transform duration-300 group-hover:scale-110">
                      <div className={`p-3 rounded-full mb-2 shadow-lg animate-pulse ${isDark ? 'bg-zinc-700 text-zinc-300' : 'bg-amber-50 text-amber-600'}`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <span className={`font-bold text-xs tracking-widest ${isDark ? 'text-zinc-300' : 'text-amber-700'}`}>BUKA SURAT</span>
                    </div>

                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="letter"
                  initial={{ scale: 0.8, opacity: 0, y: 100 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className={`relative z-10 w-full max-w-lg p-6 md:p-8 rounded-2xl shadow-2xl border ${isDark ? 'bg-[#18181b] border-[#27272a] text-gray-300' : 'bg-[#fdfbf7] border-gray-200 text-gray-700'}`}
                >
                  <button 
                    onClick={() => setShowLetter(false)} 
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isDark ? 'bg-[#27272a] hover:bg-[#3f3f46] text-gray-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Mari Terhubung 🤝
                  </h3>

                  <div className="space-y-3 text-sm md:text-base leading-relaxed mb-8">
                      <p>Terima kasih sudah mengunjungi profil saya.</p>
                      <p>Saya terbuka untuk diskusi, kolaborasi, maupun peluang kerja sama dalam bidang teknologi dan pengembangan web.</p>
                      <p>Apabila Anda ingin berdiskusi lebih lanjut, jangan ragu untuk menghubungi saya melalui WhatsApp.</p>
                      <p>Silakan klik tombol di bawah untuk langsung terhubung dengan saya.<br/>Saya akan dengan senang hati merespons pesan Anda.</p>
                      <p className="pt-4">Salam hangat,<br/><strong className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>Sahrul Maulidi</strong></p>
                  </div>

                  <a 
                      href="https://wa.me/6285212867574?text=Halo%20Sahrul%2C%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowLetter(false)}
                      className="w-full py-3.5 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-[#25D366] hover:bg-[#1ebd57] text-white shadow-green-500/30"
                  >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Kirim Pesan WhatsApp
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>

      <aside className={`
            fixed inset-y-0 left-0 z-50 w-[280px] border-r flex flex-col overflow-hidden
            md:translate-x-0 md:static md:w-[280px] md:h-[calc(100vh-4rem)] md:sticky md:top-8 md:shadow-none md:border-none md:overflow-visible
            transition-all duration-500 ease-in-out
            ${isDark 
                ? 'bg-[#0c0c0c] border-[#27272a] text-[#a1a1aa]' 
                : 'bg-white border-gray-200 text-gray-600'}
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
          
          <button onClick={() => setMobileMenuOpen(false)} className={`absolute top-4 right-4 md:hidden z-50 transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="p-6 md:p-0 md:pr-4 flex flex-col h-full">
              
              <div className="flex flex-col items-center text-center mt-2 mb-6">
                  <div className="relative w-28 h-28 mb-3"> 
                      <img src={profileData.img} alt="Profile" className={`rounded-full border-4 shadow-lg w-full h-full object-cover grayscale-[0.1] transition-all duration-500 ease-in-out ${isDark ? 'border-[#27272a]' : 'border-white shadow-gray-200'}`} />
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-1">
                      <h2 className={`text-xl font-bold tracking-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.name}</h2>
                      <img className="w-5 h-5" src="/img/verified.png" alt="Verified" />
                  </div>
                  <p className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'text-[#71717a]' : 'text-gray-500'}`}>{profileData.username}</p>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                  <div className={`p-1 rounded-full border flex items-center gap-1 transition-colors duration-500 ${isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-[#f4f4f5] border-transparent'}`}>
                      <button className="w-8 h-8 rounded-full flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity text-sm">🇺🇸</button>
                      <button className="w-8 h-8 rounded-full bg-[#4ade80] flex items-center justify-center shadow-md text-white text-sm">🇮🇩</button>
                  </div>

                  <div className={`p-1 rounded-full border flex items-center gap-1 transition-colors duration-500 ${isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-[#f4f4f5] border-transparent'}`}>
                      <button onClick={() => setIsDark(false)} className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${!isDark ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-400 hover:text-white'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707M12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      </button>
                      <button onClick={() => setIsDark(true)} className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-[#27272a] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                      </button>
                  </div>
              </div>

              <div className={`h-px w-full mb-4 transition-colors duration-500 ${isDark ? 'bg-[#27272a]' : 'bg-gray-200'}`}></div>

              <nav className="space-y-1 flex-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link 
                        to={item.path} 
                        key={item.path}
                        onClick={() => setMobileMenuOpen(false)} 
                        className={`group flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md
                        ${active 
                            ? (isDark ? 'bg-[#1f1f22] text-white' : 'bg-[#e4e4e7] text-gray-900 font-bold')
                            : (isDark ? 'text-[#a1a1aa] hover:text-white hover:bg-[#18181b]' : 'text-[#52525b] hover:text-gray-900 hover:bg-[#f4f4f5]')
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <svg className={`w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-rotate-12 ${active ? (isDark ? 'text-white' : 'text-gray-900') : (isDark ? 'text-[#71717a] group-hover:text-white' : 'text-[#71717a] group-hover:text-gray-900')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath}></path></svg>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        {active && (
                             <svg className={`w-4 h-4 transition-colors duration-500 ${isDark ? 'text-[#52525b]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        )}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6">
                <button 
                  onClick={handleOpenModal}
                  className={`w-full py-3 border font-bold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer
                      ${isDark 
                          ? 'border-[#4ade80] text-[#4ade80] bg-[#4ade80]/5 hover:bg-[#4ade80]/10' 
                          : 'border-[#16a34a] text-[#16a34a] bg-[#16a34a]/5 hover:bg-[#16a34a]/10'
                      }`}
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Ayo Terhubung 😊
                </button>
                <div className={`h-px w-full my-4 transition-colors duration-500 ${isDark ? 'bg-[#27272a]' : 'bg-gray-200'}`}></div>
                <div className="text-center">
                    <p className={`text-[10px] uppercase font-bold tracking-widest transition-colors duration-500 ${isDark ? 'text-[#52525b]' : 'text-[#71717a]'}`}>HAK CIPTA © 2026</p>
                    <p className={`text-[10px] mt-1 transition-colors duration-500 ${isDark ? 'text-[#71717a]' : 'text-[#a1a1aa]'}`}>Sahrul Maulidi. Seluruh hak dilindungi.</p>
                </div>
              </div>

          </div>
      </aside>
    </>
  );
}