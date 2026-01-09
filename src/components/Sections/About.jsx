import { useState } from "react";
import { profileData } from "../../data";

const careerHistory = [
  {
    id: 1,
    role: "Web Developer",
    company: "Balai Besar Pelatihan Kesehatan Ciloto",
    location: "Cianjur, Indonesia 🇮🇩",
    logo: "/img/career/bbpk.jpg",
    period: "Jul 2025 - Nov 2025",
    duration: "5 Months",
    type: "Internship",
    work_mode: "Remote",
    responsibilities: [
      "Mengembangkan website menejemen tugas.",
      "Melakukan optimasi query database MySql untuk meningkatkan performa backend.",
      "Menggunakan teknologi React JS & Laravel 11",
      "Menyusun laporan dan membuat E-Book Panduan Penggunaan."
    ]
  },
  {
    id: 2,
    role: "Staff Administration",
    company: "PT. Media Solusi Sukses",
    location: "Karawang, Indonesia 🇮🇩",
    logo: "/img/career/mss.png", 
    period: "Mar 2025 - Now",
    duration: "until now",
    type: "Full Time",
    work_mode: "Onsite",
    responsibilities: [
      "Mempersiapkan dan mengelola dokumen administrasi bisnis, termasuk Purchase Order (PO), Berita Acara, dan surat konfirmasi.",
      "Bertanggung jawab atas siklus penagihan (billing) dengan menerbitkan dan memproses invoice pelanggan.",
      "Mengelola administrasi database pelanggan serta melakukan rekapitulasi data dan absensi karyawan."
    ]
  },
  
];

// Komponen Card Karier (Internal Component)
function CareerCard({ job, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl p-5 mb-4 transition-all duration-500 ease-in-out hover:border-opacity-80
        ${isDark ? 'border-[#27272a] bg-transparent hover:border-[#3f3f46]' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      
      <div className="flex gap-4 items-start">
        {/* Logo Perusahaan */}
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden ${isDark ? 'bg-white' : 'bg-gray-50 border border-gray-100'}`}>
           {/* Fallback jika gambar error/tidak ada */}
           {job.logo ? (
             <img src={job.logo} alt={job.company} className="w-full h-full object-contain" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
           ) : null}
           <span className="text-xs font-bold text-black hidden" style={{display: job.logo ? 'none' : 'block'}}>{job.company.charAt(0)}</span>
        </div>

        <div className="flex-1 min-w-0">
            {/* Judul Role */}
            <h3 className={`text-base md:text-lg font-bold leading-tight mb-1 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {job.role}
            </h3>

            {/* Nama Perusahaan & Lokasi */}
            <p className={`text-sm mb-2 transition-colors duration-500 ${isDark ? 'text-[#a1a1aa]' : 'text-gray-600'}`}>
              {job.company} • <span className={`${isDark ? 'text-[#71717a]' : 'text-gray-500'}`}>{job.location}</span>
            </p>

            {/* Detail Waktu & Tipe */}
            <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm mb-4 transition-colors duration-500 ${isDark ? 'text-[#71717a]' : 'text-gray-500'}`}>
                <span>{job.period}</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                <span>{job.duration}</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                <span>{job.type}</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                <span>{job.work_mode}</span>
            </div>

            {/* Toggle Tanggung Jawab */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`group flex items-center gap-2 text-sm font-medium transition-colors duration-300
                ${isDark ? 'text-[#a1a1aa] hover:text-white' : 'text-gray-500 hover:text-black'}`}
            >
                {isOpen ? (
                    <svg className="w-4 h-4 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                ) : (
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                )}
                <span>{isOpen ? 'Sembunyikan tanggung jawab' : 'Tampilkan tanggung jawab'}</span>
            </button>

            {/* List Tanggung Jawab (Accordion) */}
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <ul className={`list-disc pl-5 space-y-1.5 text-sm md:text-[15px] leading-relaxed transition-colors duration-500 ${isDark ? 'text-[#a1a1aa] marker:text-[#52525b]' : 'text-gray-600 marker:text-gray-400'}`}>
                        {job.responsibilities.map((task, idx) => (
                            <li key={idx}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default function About({ isDark }) {
  return (
    <div className="animate-fade-in-up transition-colors duration-500 ease-in-out">
      
      {/* --- HEADER TENTANG --- */}
      <div className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#18181b]'}`}>
          Tentang
        </h1>
        <p className={`text-base md:text-lg transition-colors duration-500 ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
          Perkenalan singkat tentang siapa saya.
        </p>
      </div>

      <div className={`w-full border-t border-dashed my-8 transition-colors duration-500 ${isDark ? 'border-[#27272a]' : 'border-gray-300'}`}></div>

      {/* --- CONTENT PARAGRAPH --- */}
      <div className={`prose max-w-none text-base md:text-lg leading-relaxed space-y-6 transition-colors duration-500 ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
        
        <p>
          Halo! Terima kasih telah mengunjungi situs pribadi saya. Saya <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.name}</span>, 
          seorang mahasiswa Informatika di <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Horizon University Indonesia</span>. 
          Saya adalah seorang Web Developer dengan minat besar dalam membangun produk perangkat lunak yang berdampak. 
          Stack teknologi saya meliputi teknologi frontend modern seperti <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>React.js, Tailwind CSS</span>, 
          serta pengembangan backend menggunakan <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Laravel (PHP)</span>.
        </p>

        <p>
          Saya menikmati menciptakan solusi yang ramah pengguna dan memiliki performa tinggi. 
          Baik saat membangun antarmuka yang intuitif maupun merancang layanan backend, saya selalu berusaha membawa efisiensi dan kejelasan pada setiap lapisan aplikasi. 
          Saya pembelajar cepat yang tumbuh dalam lingkungan dinamis dan senang menyelesaikan masalah kompleks secara kolaboratif.
        </p>

        <div className="pt-6">
            <p className="mb-4">Salam hangat,</p>
            <span className={`text-4xl font-bold font-cursive text-green-500`} style={{ fontFamily: '"Brush Script MT", cursive' }}>
                Sahrul
            </span>
        </div>
      </div>

      <div className={`w-full h-px my-12 transition-colors duration-500 ${isDark ? 'bg-[#27272a]' : 'bg-gray-200'}`}></div>

      {/* --- SECTION KARIER --- */}
      <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <svg className={`w-6 h-6 transition-colors duration-500 ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <div className="flex flex-col">
                <h2 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#18181b]'}`}>
                    Karier
                </h2>
                <p className={`text-sm md:text-base mt-1 transition-colors duration-500 ${isDark ? 'text-[#a1a1aa]' : 'text-[#52525b]'}`}>
                    Perjalanan profesional saya.
                </p>
            </div>
          </div>

          {/* LIST CARD KARIER */}
          <div className="flex flex-col">
            {careerHistory.map((job) => (
                <CareerCard key={job.id} job={job} isDark={isDark} />
            ))}
          </div>
      </div>

    </div>
  );
}