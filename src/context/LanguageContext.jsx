import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

// === KAMUS TERJEMAHAN SEDERHANA ===
export const translations = {
  id: {
    // Sidebar
    beranda: "Beranda",
    tentang: "Tentang",
    pencapaian: "Pencapaian",
    proyek: "Proyek",
    dasbor: "Dasbor",
    kontak: "Kontak",
    ayoTerhubung: "Ayo Terhubung 😊",
    hakCipta: "HAK CIPTA",
    seluruhHak: "Seluruh hak dilindungi.",
    
    // Halaman Projects
    proyekTitle: "Proyek",
    proyekDesc: "Pameran proyek pribadi dan open-source yang telah saya buat atau kontribusikan.",
    lihatDetail: "Lihat Detail",
    tentangProyek: "Tentang Proyek",
    kunjungiWeb: "Kunjungi Situs Web",
    tautanMati: "Tautan Tidak Tersedia"
  },
  en: {
    // Sidebar
    beranda: "Home",
    tentang: "About",
    pencapaian: "Achievements",
    proyek: "Projects",
    dasbor: "Dashboard",
    kontak: "Contact",
    ayoTerhubung: "Let's Connect 😊",
    hakCipta: "COPYRIGHT",
    seluruhHak: "All rights reserved.",
    
    // Halaman Projects
    proyekTitle: "Projects",
    proyekDesc: "Showcase of personal and open-source projects I have built or contributed to.",
    lihatDetail: "View Details",
    tentangProyek: "About Project",
    kunjungiWeb: "Visit Website",
    tautanMati: "Link Unavailable"
  }
};

export const LanguageProvider = ({ children }) => {
  // Ambil bahasa dari LocalStorage (agar saat di-refresh tidak kembali ke default)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'id';
  });

  // Simpan ke LocalStorage setiap kali bahasa berubah
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Fungsi pembantu 't' (translate) untuk memanggil kata dari kamus
  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook kustom agar mudah dipanggil di komponen lain
export const useLanguage = () => useContext(LanguageContext);