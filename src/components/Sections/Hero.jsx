import { profileData } from "../../data";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero({ isDark }) {
  const { lang } = useLanguage();

  return (
    <div className="mb-10 animate-fade-in-up transition-colors duration-500 ease-in-out">
        
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-[#18181b]'}`}>
            {lang === 'en' ? 'Hi, I am' : 'Hai, saya'} {profileData.name}
        </h1>
        
        <div className={`flex flex-wrap items-center gap-4 text-sm font-medium mb-6 transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
            <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-zinc-500"></span>
                {lang === 'en' && profileData.statusEn ? profileData.statusEn : profileData.status}
            </span>
            <span className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                {lang === 'en' && profileData.jobEn ? profileData.jobEn : profileData.job}
            </span>
        </div>

        <p className={`leading-relaxed text-[15px] md:text-base max-w-3xl transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
            {lang === 'en' ? (
                <>
                    An Informatics student with a strong interest in technology, specifically software design and development. I enjoy exploring interface design <span className={`font-semibold transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>(UI/UX)</span> and <span className={`font-semibold transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Coding</span> to create functional and creative solutions. I believe technology is a tool for innovation, and I continuously hone my skills to contribute to the IT industry. Let's connect for discussions or collaborations!
                </>
            ) : (
                <>
                    Seorang mahasiswa Informatika yang memiliki minat besar dalam dunia teknologi, khususnya desain dan pengembangan perangkat lunak. Saya gemar mengeksplorasi desain antarmuka <span className={`font-semibold transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>(UI/UX)</span> dan <span className={`font-semibold transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Coding</span> untuk menciptakan solusi kreatif yang fungsional. Saya percaya teknologi adalah alat untuk inovasi, dan saya terus mengasah keterampilan untuk berkontribusi di industri IT. Mari terhubung untuk berdiskusi atau berkolaborasi!
                </>
            )}
        </p>

        <div className={`h-px w-full my-8 transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#27272a]' : 'bg-gray-200'}`}></div>
    </div>
  );
}