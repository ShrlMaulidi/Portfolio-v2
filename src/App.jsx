import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";

const Home = ({ isDark }) => (
  <div className="animate-fade-in-up">
    <Hero isDark={isDark} />
    <Skills isDark={isDark} />
  </div>
);

const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center opacity-50">
    <h2 className="text-5xl font-bold mb-4">{title}</h2>
    <p className="text-2xl uppercase tracking-widest">Coming Soon</p>
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
      <div className="w-full max-w-[1850px] min-h-screen flex flex-col md:flex-row mx-auto relative antialiased selection:bg-green-500 selection:text-black">
        
        {/* Mobile Header */}
        <div className={`md:hidden flex items-center justify-between p-5 border-b sticky top-0 z-40 transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#0c0c0c] border-[#27272a]' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg">SB</div>
                <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Satria Bahari</span>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>

        <Sidebar isDark={isDark} setIsDark={setIsDark} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main Content */}
        <main className="flex-1 relative w-full transition-colors duration-500 ease-in-out">
            <div className="w-full h-full max-w-full mx-auto px-8 py-12 md:px-12 md:py-24">
                <Routes>
                    <Route path="/" element={<Home isDark={isDark} />} />
                    <Route path="/about" element={<Placeholder title="Tentang Saya" />} />
                    <Route path="/achievements" element={<Placeholder title="Pencapaian" />} />
                    <Route path="/projects" element={<Placeholder title="Proyek" />} />
                    <Route path="/dashboard" element={<Placeholder title="Dasbor" />} />
                    <Route path="/chat" element={<Placeholder title="Ruang Obrolan" />} />
                    <Route path="/contact" element={<Placeholder title="Kontak" />} />
                </Routes>
                <div className={`mt-24 md:mt-32 pt-12 border-t flex flex-col md:flex-row justify-between items-center text-base md:text-lg gap-6 md:gap-0 transition-colors duration-500 ease-in-out ${isDark ? 'border-[#27272a] text-[#52525b]' : 'border-zinc-200 text-zinc-500'}`}>
                    <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <div className="flex gap-8">
                        <span className="hover:text-green-500 cursor-pointer transition">Privasi</span>
                        <span className="hover:text-green-500 cursor-pointer transition">Syarat & Ketentuan</span>
                    </div>
                </div>

            </div>
        </main>

      </div>
    </Router>
  );
}