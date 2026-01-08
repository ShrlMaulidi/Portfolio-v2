export default function SkillBadge({ name, icon, color, isDark }) {
  return (
    <div className="group relative flex flex-col items-center justify-center cursor-pointer">
      
      {/* Circle Background */}
      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${color} p-[3px] shadow-xl transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-110`}>
        
        {/* Glass Effect Inner */}
        <div className={`w-full h-full rounded-full backdrop-blur-sm flex items-center justify-center border-t border-white/30 transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#18181b]/90' : 'bg-white/90'}`}>
           
           {/* LOGIKA GAMBAR: Jika ada icon tampilkan gambar, jika tidak tampilkan text */}
           {icon ? (
             <img 
               src={icon} 
               alt={name} 
               className="w-15 h-15 md:w-20 md:h-20 object-contain drop-shadow-md" 
             />
           ) : (
             <span className={`font-bold text-base md:text-xl tracking-tight transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-800'}`}>
               {name}
             </span>
           )}

        </div>
      </div>
      
      {/* Shadow Bawah */}
      <div className="absolute -bottom-3 w-12 h-2 bg-black/50 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Opsional: Tooltip Nama saat Hover */}
      <span className={`absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold px-2 py-1 rounded-md ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        {name}
      </span>

    </div>
  );
}