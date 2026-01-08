import { profileData } from "../../data";

export default function Hero({ isDark }) {
  return (
    <div className=" animate-fade-in-up transition-colors duration-500 ease-in-out">
        <h1 className={`text-5xl md:text-5xl font-bold mb-8 tracking-tight leading-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Hi, I'm {profileData.name}
        </h1>
        
        <div className={`flex flex-wrap items-center gap-6 text-lg md:text-xl font-medium transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-zinc-500'}`}>
            <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-zinc-500"></span>
                {profileData.status}
            </span>
            <span className="hidden md:inline text-zinc-700">•</span>
            <span className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                {profileData.job}
            </span>
        </div>

        <p className={`mt-12 md:mt-16 leading-relaxed text-lg md:text-2xl max-w-6xl transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-zinc-500'}`}>
            Seorang mahasiswa Informatika yang memiliki minat besar dalam dunia teknologi, khususnya desain dan pengembangan perangkat lunak. 
            Saya gemar mengeksplorasi desain antarmuka (UI/UX) dan coding untuk menciptakan solusi kreatif yang fungsional. 
            Saya percaya teknologi adalah alat untuk inovasi, dan saya terus mengasah keterampilan untuk berkontribusi di industri IT. 
            Mari terhubung untuk berdiskusi atau berkolaborasi!
        </p>

        <div className={`h-px w-full my-16 md:my-14 transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#27272a]' : 'bg-zinc-200'}`}></div>
    </div>
  );
}