export const profileData = {
  name: "Sahrul Maulidi",
  username: "@shrlmaulidi",
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
  { path: "/gallery", label: "Gallery", iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
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

export const careerHistory = [
  {
    id: 1,
    role: "Web Developer",
    company: "Balai Besar Pelatihan Kesehatan Ciloto",
    location: "Cianjur, Indonesia 🇮🇩",
    logo: "/img/career/bbpk.jpg", // Pastikan file gambar ada di public/img/career/
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

export const educationData = [
  {
    id: 1,
    school: "Horizon University Indonesia",
    degree: "S1 Informatika (Bachelor's Degree)",
    year: "2022 - 2026",
    location: "Karawang, Indonesia 🇮🇩",
    logo: "/img/career/horizon.jpeg"
  },
];

export const achievementsData = [
  {
    id: 1,
    title: "Alibaba Cloud Certified Associate",
    issuer: "Alibaba Academy",
    date: "2025 - 2027",
    image: "/achievement/alibaba.png" 
  },
  {
    id: 2,
    title: "Sertifikat Kewirausahaan Digital",
    issuer: "Digitalent",
    date: "Agustus 2023",
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
  },
  {
    id: 7,
    title: "Sertifikat Magang",
    issuer: "Kemenkes BBPK Ciloto",
    date: "2025 - 2026",
    image: "/achievement/sertifikatmagang.png"
  }
];


export const projectsData = [
  {
    id: 1,
    title: "myportfolio-shrlmaulidi V2",
    desc: "Personal website & portfolio, built from scratch using React JS, and Tailwind CSS. Menampilkan profil, keahlian, dan portofolio secara interaktif.",
    image: "/proyek/portfolio.png", // Ganti dengan screenshot website Anda
    tech: ["Tailwind", "React", "JS"], // Pastikan nama ini cocok dengan nama di skillsData atau siapkan iconnya
    link: "https://myportfolio-shrlmaulidi.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "CilotoTrack",
    desc: "CilotoTrack adalah sebuah website berbasis web yang digunakan untuk memantau, mengelola, dan mengorganisir tugas karyawan secara terpusat. Website ini membantu perusahaan dalam mengatur pembagian tugas, memantau progres pekerjaan secara real-time, serta meningkatkan produktivitas dan koordinasi antar tim dengan tampilan yang modern dan mudah digunakan.",
    image: "/proyek/bbpk.png",
    tech: ["React", "PHP", "Mysql", "Laravel", "Tailwind", "JS"],
    link: "https://cilotrack.bbpkciloto.or.id/",
    featured: true
  },
  {
    id: 3,
    title: "Sibas (Sistem Pelaporan Bank Sampah)",
    desc: "Sibas adalah sebuah website sistem pelaporan bank sampah yang digunakan untuk memudahkan masyarakat dalam melaporkan sampah yang siap untuk diangkut.",
    image: "/proyek/websibas.png",
    tech: ["PHP", "Mysql", "CSS", "HTML", "JS", "Bootstrap"],
    link: "https://sibas-landing.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "My Portfolio V1",
    desc: "Personal website & portfolio, built from scratch using HTML, and Tailwind CSS. Menampilkan profil, keahlian, dan portofolio secara interaktif.",
    image: "/proyek/portfoliov1.png",
    tech: ["HTML", "JS", "Tailwind"],
    link: "https://shrlmaulidi29.netlify.app",
    featured: false
  },
  {
    id: 5,
    title: "Sistem Presensi Siswa SMA",
    desc: "Sistem absensi siswa berbasis lokasi (GPS) dan foto selfie untuk SMAN 3 Cikampek.",
    image: "/proyek/sman.jpg",
    tech: ["Laravel", "PHP", "Tailwind"],
    link: "#",
    featured: false
  },

  {
    id: 6,
    title: "Company Profile PT Aztara Indo",
    desc: "Website Company Profile PT Aztara Indo Contraction.",
    image: "/proyek/aztara.png",
    tech: ["Laravel", "PHP", "Tailwind"],
    link: "https://aztaraindo.co.id/",
    featured: false
  },

  {
    id: 99, // pastikan id unik
    title: "Desain Logo Personal Branding",
    desc: "Kumpulan desain logo dan identitas visual yang saya buat untuk kebutuhan personal branding dan klien. Mengedepankan konsep minimalis dan modern.",
    images: [
      "/proyek/logo1.png",
      "/proyek/logo2.png", // Foto 2
      "/proyek/logo3.png",
      "/proyek/logo4.png",
      "/proyek/logo5.png",
      "/proyek/logo6.png"  // Foto 3
    ],
    tech: ["Figma"],
    link: "",
    featured: false
  }
];

// Sosial Media
export const socialMediaData = [
  {
    id: 1,
    title: 'Tetap Terhubung',
    desc: 'Hubungi saya via email untuk pertanyaan atau kolaborasi.',
    btnText: 'Pergi ke Gmail',
    icon: 'Gmail',
    url: 'mailto:sahrulmaulidi294@gmail.com',
    color: 'bg-gradient-to-br from-[#d94838] to-[#99251a]', 
    span: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'Ikuti Perjalanan Saya',
    desc: 'Ikuti perjalanan kreatif saya.',
    btnText: 'Pergi ke Instagram',
    icon: 'Instagram',
    url: 'https://www.instagram.com/_shrlmaulidi29',
    color: 'bg-gradient-to-br from-[#8a3ab9] via-[#e95950] to-[#fccc63]',
    span: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Mari Terhubung',
    desc: 'Terhubung secara profesional dengan saya.',
    btnText: 'Pergi ke Linkedin',
    icon: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sahrulmaulidi/',
    color: 'bg-gradient-to-br from-[#0077b5] to-[#004182]',
    span: 'md:col-span-1'
  },
  {
    id: 4,
    title: 'Ikut Seru-seruan',
    desc: 'Tonton konten yang seru dan menarik.',
    btnText: 'Pergi ke Tiktok',
    icon: 'TikTok',
    url: 'https://www.tiktok.com/@shrlmaulidi?_r=1&_t=ZS-92xVIcETpXI',
    color: 'bg-gradient-to-br from-[#1f1f1f] to-[#000000]',
    span: 'md:col-span-1'
  },
  {
    id: 5,
    title: 'Jelajahi Kode',
    desc: 'Lihat karya open-source saya.',
    btnText: 'Pergi ke Github',
    icon: 'GitHub',
    url: 'https://github.com/ShrlMaulidi',
    color: 'bg-gradient-to-br from-[#171515] to-[#0d1117]',
    span: 'md:col-span-1'
  }
];


export const dashboardData = {
  // 1. Availability Status (Status Ketersediaan)
  availability: {
    isAvailable: true,
    status: "Open to Work",
    description: "Siap untuk berkontribusi pada proyek inovatif atau posisi Full-time.",
    link: "/contact" 
  },

  // 2. Statistik Angka
  stats: [
    { label: 'Total Komit (2025)', value: '1,240', icon: '🔥', color: 'bg-orange-500/10 text-orange-500' },
    { label: 'Jam Koding', value: '3,500+', icon: '⚡', color: 'bg-yellow-500/10 text-yellow-500' },
    { label: 'Project Selesai', value: '12', icon: '🚀', color: 'bg-green-500/10 text-green-500' },
    { label: 'Kopi Diminum', value: '∞', icon: '☕', color: 'bg-blue-500/10 text-blue-500' },
  ],

  // 3. Bahasa Pemrograman
  topLanguages: [
    { name: 'JavaScript / React', percent: 60, color: 'bg-yellow-400' },
    { name: 'PHP / Laravel', percent: 25, color: 'bg-red-500' },
    { name: 'CSS / Tailwind', percent: 15, color: 'bg-cyan-400' },
  ],

  // 4. Tools & Software
  tools: [
    { name: 'VS Code', icon: '💻', desc: 'Editor Utama' },
    { name: 'Figma', icon: '🎨', desc: 'Desain UI' },
    { name: 'Postman', icon: '🚀', desc: 'API Testing' },
    { name: 'Terminal', icon: '⌨️', desc: 'Git Bash' },
  ],

  // 5. Learning Roadmap (Target Belajar)
  learningGoals: [
    { name: 'React JS', status: 'In Progress', color: 'text-yellow-500' },
    { name: 'Laravel', status: 'Done', color: 'text-green-500' },
    { name: 'Next JS', status: 'Next', color: 'text-gray-500' },
  ]
};


export const galleryPhotos = [
  {
    id: 1,
    src: "/gallery/02.png",
    category: "Kegiatan",
    caption: "My Editor"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1740&auto=format&fit=crop",
    category: "Workspace",
    caption: "Setup Coding Malam Hari 🌙"
  },
  {
    id: 3,
    src: "/gallery/logo v2.png",
    category: "Kegiatan",
    caption: "My Logo Personal Branding"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop",
    category: "Travel",
    caption: "Healing sejenak ke Alam 🌲"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop",
    category: "Sertifikat",
    caption: "Lulus Sertifikasi React Developer"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1740&auto=format&fit=crop",
    category: "Workspace",
    caption: "Menulis Kode Backend Laravel"
  },
];