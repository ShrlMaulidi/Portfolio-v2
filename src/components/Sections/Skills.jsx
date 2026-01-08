import { skillsData } from "../../data";
import SkillBadge from "../UI/SkillBadge";

export default function Skills({ isDark }) {
  return (
    <div className="mb-8 transition-colors duration-500 ease-in-out">
        {/* ... Header Tech Stack ... */}
        <div className="flex items-center gap-3 mb-6">
            <svg className={`w-7 h-7 transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-zinc-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <h3 className={`text-2xl font-bold transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Tech Stack
            </h3>
        </div>

        <div className={`rounded-3xl border p-8 relative overflow-hidden transition-all duration-500 ease-in-out ${isDark ? 'bg-[#1f1f22] border-[#27272a]' : 'bg-white border-zinc-200 shadow-sm'}`}>
            <p className={`text-base mb-8 transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-zinc-500'}`}>
                Teknologi yang saya gunakan untuk membangun aplikasi.
            </p>
            
            <div className="flex flex-wrap gap-5 md:gap-8 justify-start">
                {skillsData.map((skill, idx) => (
                    // 👇 OPER PROPS ICON DI SINI
                    <SkillBadge 
                        key={idx} 
                        name={skill.name} 
                        icon={skill.icon} 
                        color={skill.color} 
                        isDark={isDark} 
                    />
                ))}
            </div>
        </div>
    </div>
  );
}