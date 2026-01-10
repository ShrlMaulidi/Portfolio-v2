export const profileData = {
  name: "Sahrul Maulidi",
  username: "@shrlmaulidi",
  // Ganti URL ini dengan foto profil Anda yang sebenarnya
  img: "/img/profile.jpeg",
  status: "Based in Karawang, Indonesia 🇮🇩", 
  job: "Onsite"
};

export const navItems = [
  { path: "/", label: "Beranda", iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { path: "/about", label: "Tentang", iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { path: "/achievements", label: "Pencapaian", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { path: "/projects", label: "Proyek", iconPath: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
  { path: "/dashboard", label: "Dasbor", iconPath: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
  { path: "/chat", label: "Ruang Obrolan", iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { path: "/contact", label: "Kontak", iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export const skillsData = [
  { name: "HTML", icon: "/skill/html.png", color: "from-orange-400 to-orange-600" },
  { name: "CSS", icon: "/skill/css.png", color: "from-blue-400 to-blue-600" },
  { name: "Bootstrap", icon: "/skill/bootstrap.png", color: "from-purple-500 to-purple-700" },
  { name: "Tailwind", icon: "/skill/tailwind.png", color: "from-cyan-400 to-cyan-600" },
  { name: "JS", icon: "/skill/javascript.png", color: "from-yellow-300 to-yellow-500" },
  { name: "Git", icon: "/skill/git.png", color: "from-red-500 to-red-700" },
  { name: "Mysql", icon: "/skill/mysql.png", color: "from-blue-500 to-sky-600" },
  { name: "React", icon: "/skill/react.png", color: "from-cyan-300 to-cyan-500" },
  { name: "Laravel", icon: "/skill/laravel.png", color: "from-red-500 to-red-700" },
  { name: "PHP", icon: "/skill/php.png", color: "from-indigo-400 to-blue-500" },
  { name: "Figma", icon: "/skill/figma.png", color: "from-red-500 to-red-700" },
  { name: "Excel", icon: "/skill/excel.png", color: "from-green-400 to-green-600" },
  { name: "Word", icon: "/skill/word.png", color: "from-indigo-400 to-indigo-600" },
];

export const careerData = [
  {
    id: 1,
    role: "Backend Golang Developer",
    company: "Pt. Affan Technology Indonesia (Parto.id)",
    location: "Jambi, Indonesia 🇮🇩",
    period: "Jul 2025 - Sep 2025",
    duration: "2 Months",
    type: "Internship",
    mode: "Onsite",
    logo: "/img/parto.png", // Pastikan ada gambar placeholder/logo di public/img
    responsibilities: [
      "Mengembangkan RESTful API menggunakan Golang (Gin Framework).",
      "Mengoptimalkan query database PostgreSQL untuk performa tinggi.",
      "Berkolaborasi dengan tim frontend untuk integrasi sistem."
    ]
  },
  {
    id: 2,
    role: "Frontend Web Developer",
    company: "Pt. Eltran Indonesia",
    location: "Bandung, Indonesia 🇮🇩",
    period: "May 2025 - Nov 2025",
    duration: "6 Months",
    type: "Internship",
    mode: "Remote",
    logo: "/img/len.png",
    responsibilities: [
      "Developed a responsive and interactive landing page using Next.js to promote company services and solutions.",
      "Ensured SEO optimization and fast performance by leveraging Next.js features such as static site generation.",
      "Collaborated with design and marketing teams to align web presence with brand identity."
    ]
  },
  {
    id: 3,
    role: "Head of Technology in the Research and Technology Division",
    company: "Himpunan Mahasiswa Sistem Informasi Universitas Jambi (HIMASI UNJA)",
    location: "Jambi, Indonesia 🇮🇩",
    period: "Dec 2024 - Present",
    duration: "1 year 1 Month",
    type: "Part-time",
    mode: "Onsite",
    logo: "/img/himasi.png",
    responsibilities: [
      "Memimpin divisi teknologi dalam pengembangan website organisasi.",
      "Mengadakan workshop dan pelatihan teknologi untuk mahasiswa.",
      "Mengelola infrastruktur IT organisasi."
    ]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Alibaba Cloud Certified Associate",
    issuer: "Alibaba Academy",
    date: "2025 - 2027",
    // Ganti URL ini dengan gambar sertifikat asli Anda nanti
    image: "/achievement/alibaba.png" 
  },
  {
    id: 2,
    title: "Sertifikat Kewirausahaan Digital",
    issuer: "Digitalent",
    date: "Agustur 2023",
    image: "/achievement/dea.jpg"
  },
  {
    id: 3,
    title: "Seminar Cyber Security",
    issuer: "ID-Networkers",
    date: "Agustus 2024",
    image: "/achievement/cyber.png"
  },
  {
    id: 4,
    title: "Certificate Next Generation ECS and OSS",
    issuer: "Alibaba Cloud",
    date: "2025 - 2026",
    image: "/achievement/alibaba2.png"
  },
  {
    id: 5,
    title: "VPC Fundamental",
    issuer: "Alibaba Cloud",
    date: "2025 - 2026",
    image: "/achievement/VPC.png"
  },
  {
    id: 6,
    title: "Secure and Fast - Alibaba Cloud Elastic Compute Service",
    issuer: "Alibaba Cloud",
    date: "2025 - 2026",
    image: "/achievement/alibaba3.png"
  }
];


export const projectsData = [
  {
    id: 1,
    title: "myportfolio-shrlmaulidi",
    desc: "Personal website & portfolio, built from scratch using React JS, and Tailwind CSS. Menampilkan profil, keahlian, dan portofolio secara interaktif.",
    image: "/proyek/portfolio.png", // Ganti dengan screenshot website Anda
    tech: ["Tailwind", "React", "JS"], // Pastikan nama ini cocok dengan nama di skillsData atau siapkan iconnya
    link: "https://myportfolio-shrlmaulidi.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "CilotoTrack",
    desc: "Website untuk pemantauan tugas karyawan.",
    image: "/proyek/bbpk.png",
    tech: ["React", "PHP", "Mysql", "Laravel", "Tailwind", "JS"],
    link: "https://cilotrack.bbpkciloto.or.id/",
    featured: true
  },
  {
    id: 3,
    title: "Sibas (Sistem Pelaporan Bank Sampah)",
    desc: "Website untuk melaporkan Sampah untuk di angkut.",
    image: "/proyek/websibas.png",
    tech: ["PHP", "Mysql", "CSS", "HTML", "JS"],
    link: "https://sibas-landing.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "Sistem Presensi Internal",
    desc: "Sistem absensi pegawai berbasis lokasi (GPS) dan foto selfie untuk instansi pemerintahan.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    tech: ["Laravel", "Vue", "Tailwind"],
    link: "#",
    featured: false
  }
];