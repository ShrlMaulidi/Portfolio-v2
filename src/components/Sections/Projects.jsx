import React from 'react';
import { projectsData, skillsData } from '../../data'; 

export default function Projects({ isDark }) {
  const getTechIcon = (techName) => {
    const skill = skillsData.find(s => s.name === techName);
    return skill ? skill.icon : null;
  };

  return (
    <div className="mb-10 animate-fade-in-up transition-colors duration-500 ease-in-out">
        <div className="mb-8">
             <h1 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-[#18181b]'}`}>
                Proyek
            </h1>
            <p className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
                Pameran proyek pribadi dan open-source yang telah saya buat atau kontribusikan.
            </p>
        </div>

        <div className={`h-px w-full my-8 border-dashed border-b transition-colors duration-500 ease-in-out ${isDark ? 'border-[#27272a]' : 'border-gray-300'}`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
                <div 
                    key={project.id} 
                    className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col
                    ${isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-gray-200 shadow-sm'}`}
                >
                    <div className="relative w-full h-56 overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay Gelap saat Hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white font-semibold text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                            >
                                Lihat Proyek 
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>

                        {project.featured && (
                            <div className="absolute top-4 right-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                Featured
                            </div>
                        )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {project.title}
                        </h3>
                        <p className={`text-sm mb-6 line-clamp-3 leading-relaxed transition-colors duration-300 flex-1 ${isDark ? 'text-[#a1a1aa]' : 'text-gray-600'}`}>
                            {project.desc}
                        </p>

                        {/* Tech Stack Icons */}
                        <div className="flex items-center gap-3 mt-auto">
                            {project.tech.map((techName, idx) => {
                                const iconPath = getTechIcon(techName);
                                return (
                                    <div key={idx} className="relative group/tooltip">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isDark ? 'bg-[#27272a] border-[#3f3f46]' : 'bg-gray-50 border-gray-200'}`}>
                                            {iconPath ? (
                                                <img src={iconPath} alt={techName} className="w-8 h-8 object-contain" />
                                            ) : (
                                                <span className="text-[10px] font-bold">{techName[0]}</span>
                                            )}
                                        </div>
                                        {/* Tooltip Nama Tech */}
                                        <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                            {techName}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  );
}