import React, { useState } from 'react';
import { achievementsData } from '../../data'; // 👇 IMPORT DARI FILE DATA

export default function Achievements({ isDark }) {
  const [search, setSearch] = useState('');

  // Filter Data dari Import
  const filteredData = achievementsData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.issuer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-10 animate-fade-in-up transition-colors duration-500 ease-in-out">
        <div className="mb-8">
             <h1 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-[#18181b]'}`}>
                Pencapaian
            </h1>
            <p className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ease-in-out ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
                Kumpulan sertifikat dan badge yang saya peroleh sepanjang perjalanan profesional dan akademik.
            </p>
        </div>
        <div className={`h-px w-full my-8 border-dashed border-b transition-colors duration-500 ease-in-out ${isDark ? 'border-[#27272a]' : 'border-gray-300'}`}></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`h-5 w-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`block w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-1 focus:ring-green-500 transition-colors duration-300
                    ${isDark 
                        ? 'bg-[#18181b] border-[#27272a] text-white placeholder-gray-600 focus:border-green-500' 
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-green-500'}`}
                />
            </div>

            {/* Filter Dropdown (Visual Only) */}
            <div className="relative w-full md:w-auto">
                <button className={`flex items-center justify-between w-full md:w-64 px-4 py-2.5 rounded-lg border text-sm transition-colors duration-300
                    ${isDark 
                        ? 'bg-[#18181b] border-[#27272a] text-gray-300 hover:bg-[#27272a]' 
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    <span>Filter achievements...</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                </button>
            </div>
        </div>

        {/* Total Count */}
        <div className={`text-sm mb-8 font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Total: {filteredData.length}
        </div>

        {/* === GRID CERTIFICATES === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
                <div key={item.id} className={`group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                    ${isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-gray-200 shadow-sm'}`}>
                    
                    {/* Image Container */}
                    <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* Content Container */}
                    <div className="p-5 flex flex-col flex-1">
                        <h3 className={`text-lg font-bold mb-2 line-clamp-2 leading-snug transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.title}
                        </h3>
                        
                        <div className="mt-auto pt-4 space-y-1">
                            <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {item.issuer}
                            </p>
                            
                            <div className="flex flex-col text-xs space-y-0.5">
                                <span className={`${isDark ? 'text-[#52525b]' : 'text-gray-400'}`}>Issued on</span>
                                <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
}