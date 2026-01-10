import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Achievements from "./components/Sections/Achievements";
import Projects from "./components/Sections/Projects";

const Home = ({ isDark }) => (
  <div className="animate-fade-in-up transition-all duration-500 ease-in-out">
    <Hero isDark={isDark} />
    <Skills isDark={isDark} />
    
  </div>
);

const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center opacity-50 transition-all duration-500 ease-in-out">
    <h2 className="text-3xl font-bold mb-3">{title}</h2>
    <p className="text-lg uppercase tracking-widest">Coming Soon</p>
  </div>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("theme") === "dark" || (!("theme" in localStorage));
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.backgroundColor = ''; 

    if (isDark) { 
      root.classList.add("dark"); 
      localStorage.setItem("theme", "dark"); 
    } else { 
      root.classList.remove("dark"); 
      localStorage.setItem("theme", "light"); 
    }
  }, [isDark]);

  return (
    <Router>
      {/* WRAPPER UTAMA:
         - max-w-7xl & mx-auto: Layout Contained (Tengah).
         - transition-all duration-500 ease-in-out: KUNCI SMOOTH MODE untuk margin kiri-kanan.
      */}
      <div className="w-full max-w-7xl min-h-screen flex flex-col md:flex-row mx-auto relative antialiased selection:bg-green-500 selection:text-black py-0 md:py-8 px-0 md:px-8 gap-0 md:gap-12 transition-all duration-500 ease-in-out">
        
        {/* Mobile Header */}
        <div className={`md:hidden flex items-center justify-between p-4 border-b sticky top-0 z-40 transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#0c0c0c] border-[#27272a]' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold text-sm">SB</div>
                <span className={`font-bold text-base transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sahrul Maulidi</span>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 transition-colors duration-500 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>

        {/* Sidebar Component */}
        <Sidebar isDark={isDark} setIsDark={setIsDark} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main Content Wrapper */}
        <main className="flex-1 relative w-full transition-all duration-500 ease-in-out">
            <div className="w-full h-full max-w-full px-6 py-8 md:px-0 md:py-4">
                
                <Routes>
                    <Route path="/" element={<Home isDark={isDark} />} />
                    <Route path="/about" element={<About isDark={isDark} />} />
                    <Route path="/achievements" element={<Achievements title="Pencapaian" isDark={isDark} />} />
                    <Route path="/projects" element={<Projects title="Proyek" isDark={isDark} />} />
                    <Route path="/dashboard" element={<Placeholder title="Dasbor" />} />
                    <Route path="/chat" element={<Placeholder title="Ruang Obrolan" />} />
                    <Route path="/contact" element={<Contact title="Kontak" isDark={isDark} />} />
                </Routes>

                {/* Footer */}
                <div className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0 transition-colors duration-500 ease-in-out ${isDark ? 'border-[#27272a] text-[#52525b]' : 'border-zinc-200 text-zinc-500'}`}>
                    <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <div className="flex gap-6">
                        <span className="hover:text-green-500 cursor-pointer transition">Privasi</span>
                        <span className="hover:text-green-500 cursor-pointer transition">Syarat</span>
                    </div>
                </div>

            </div>
        </main>

      </div>
    </Router>
  );
}