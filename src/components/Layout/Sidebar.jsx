import { Link, useLocation } from "react-router-dom";
import { profileData, navItems } from "../../data";

export default function Sidebar({ isDark, setIsDark, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {mobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"></div>
      )}

      <aside className={`
            fixed inset-y-0 left-0 z-50 w-[320px] border-r flex flex-col overflow-y-auto
            
            /* Lebar Desktop 480px */
            md:translate-x-0 md:static md:w-[480px] md:h-screen md:sticky md:top-0 md:shadow-none md:border-none

            transition-all duration-500 ease-in-out

            ${isDark 
                ? 'bg-[#0c0c0c] border-[#27272a] text-[#a1a1aa]' 
                : 'bg-white border-gray-200 text-gray-600'}

            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
          
          <button onClick={() => setMobileMenuOpen(false)} className={`absolute top-5 right-5 md:hidden z-50 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="p-8 flex flex-col h-full">
              {/* Profile */}
              <div className="flex flex-col items-center text-center mt-4 mb-8">
                  <div className="relative w-40 h-40 mb-5">
                      <img src={profileData.img} alt="Profile" className={`rounded-full border-4 shadow-2xl w-full h-full object-cover grayscale-[0.1] ${isDark ? 'border-[#27272a]' : 'border-gray-100'}`} />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                      <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.name}</h2>
                      {/* Pastikan path gambar verified benar */}
                      <img className="w-7 h-7" src="/img/verified.png" alt="Verified" /> 
                  </div>
                  <p className={`text-lg font-medium ${isDark ? 'text-[#71717a]' : 'text-gray-500'}`}>{profileData.username}</p>
              </div>

              {/* Toggles */}
              <div className="flex justify-center gap-6 mb-10">
                  <div className={`p-2.5 rounded-full border flex items-center gap-3 transition-colors ${isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-gray-100 border-gray-200'}`}>
                      <button className="w-11 h-11 rounded-full flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity text-2xl">🇺🇸</button>
                      <button className="w-11 h-11 rounded-full bg-[#4ade80] flex items-center justify-center shadow-lg text-white text-2xl">🇮🇩</button>
                  </div>

                  <div className={`p-2.5 rounded-full border flex items-center gap-3 transition-colors ${isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-gray-100 border-gray-200'}`}>
                      <button onClick={() => setIsDark(false)} className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${!isDark ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-500 hover:text-white'}`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707M12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      </button>
                      <button onClick={() => setIsDark(true)} className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-[#27272a] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                      </button>
                  </div>
              </div>

              <div className={`h-px w-full mb-8 ${isDark ? 'bg-[#27272a]' : 'bg-gray-200'}`}></div>

              {/* Navigation Menu */}
              <nav className="space-y-2 flex-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link to={item.path} key={item.path}
                        className={`group flex items-center justify-between px-7 py-5 rounded-2xl transition-all duration-300 ease-out
                        
                        /* 👇 EFEK HOVER MENONJOL (Pop-out) 👇 */
                        hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg
                        
                        ${active 
                            ? (isDark ? 'bg-[#1f1f22] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]' : 'bg-gray-100 text-gray-900 font-bold')
                            : (isDark ? 'text-[#a1a1aa] hover:text-white hover:bg-[#18181b]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50')
                        }`}
                    >
                        <div className="flex items-center gap-6">
                            <svg 
                                className={`w-7 h-7 
                                /* 👇 EFEK ICON MIRING KIRI (-rotate-12) SAAT HOVER 👇 */
                                transition-transform duration-300 ease-in-out group-hover:-rotate-12
                                ${active 
                                    ? (isDark ? 'text-white' : 'text-gray-900') 
                                    : (isDark ? 'text-[#71717a] group-hover:text-white' : 'text-gray-400 group-hover:text-gray-600')
                                }`} 
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath}></path>
                            </svg>
                            <span className="text-xl tracking-wide">{item.label}</span>
                        </div>
                        {active && (
                             <svg className={`w-6 h-6 ${isDark ? 'text-[#52525b]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        )}
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="mt-8">
                  <button className={`group w-full py-5 border font-bold text-xl rounded-full flex items-center justify-center gap-3 transition-all duration-300
                    hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg
                    ${isDark 
                        ? 'border-[#4ade80] text-[#4ade80] bg-[#4ade80]/5 hover:bg-[#4ade80]/10 shadow-[0_0_15px_-5px_rgba(74,222,128,0.3)]' 
                        : 'border-green-600 text-green-600 hover:bg-green-50'
                    }`}>
                    <svg className="w-7 h-7 transition-transform duration-300 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    Smart Talk
                  </button>
                  
                  <div className={`h-px w-full my-6 ${isDark ? 'bg-[#27272a]' : 'bg-gray-200'}`}></div>

                  <div className="text-center">
                      <p className={`text-sm uppercase font-bold tracking-widest ${isDark ? 'text-[#52525b]' : 'text-gray-400'}`}>HAK CIPTA © 2026</p>
                      <p className={`text-sm mt-1.5 ${isDark ? 'text-[#71717a]' : 'text-gray-500'}`}>Satria Bahari. Seluruh hak dilindungi.</p>
                  </div>
              </div>

          </div>
      </aside>
    </>
  );
}