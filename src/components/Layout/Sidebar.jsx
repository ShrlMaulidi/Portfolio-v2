import { Link, useLocation } from "react-router-dom";
import { profileData, navItems } from "../../data";

export default function Sidebar({ isDark, setIsDark, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {mobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm transition-opacity duration-500"></div>
      )}

      <aside className={`
            /* MOBILE: Fixed Full Screen, No Scroll (overflow-hidden) */
            fixed inset-y-0 left-0 z-50 w-[280px] border-r flex flex-col overflow-hidden
            
            /* DESKTOP: Sticky, Contained, & Ukuran Pas (280px) */
            md:translate-x-0 md:static md:w-[280px] md:h-[calc(100vh-4rem)] md:sticky md:top-8 md:shadow-none md:border-none md:overflow-visible

            /* KUNCI SMOOTH: Gunakan transition-all agar semua properti berubah halus */
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
              
              {/* Profile */}
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

              {/* Toggles */}
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

              {/* Navigation Menu */}
              <nav className="space-y-1 flex-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link to={item.path} key={item.path}
                        className={`group flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-0.5
                        /* Hover Shadow & Effect */
                        hover:shadow-md
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

              {/* Bottom Actions */}
              <div className="mt-6">
                  <button className={`w-full py-3 border font-bold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                    ${isDark 
                        ? 'border-[#4ade80] text-[#4ade80] bg-[#4ade80]/5 hover:bg-[#4ade80]/10' 
                        : 'border-[#16a34a] text-[#16a34a] bg-[#16a34a]/5 hover:bg-[#16a34a]/10'
                    }`}>
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