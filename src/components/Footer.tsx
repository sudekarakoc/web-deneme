"use client";

import Link from "next/link";
import Image from "next/image";

// Görseldeki link verilerini diziler halinde tutuyoruz
const KURUMSAL = [
  "Temel Değerler", "Misyon / Vizyon", "Politikalar", "Eski Başkanlarımız", 
  "Belediye Meclisi", "Belediye Encümeni", "Arabuluculuk Komisyonu", 
  "Etik Komisyonu", "KVKK", "İletişim Bilgileri", "Banka Hesap Numaraları"
];

const HIZMETLERIMIZ = [
  "İhale ve Doğrudan Teminler", "İmar Değişiklikleri", "18.Madde İmar Uygulaması", 
  "Güncel Hal Fiyatları", "Ukome", "Aykome", "Kent Estetik Kurulu", 
  "Büyükşehir Tv", "Kent Rehberi"
];

const E_ISLEM = [
  "Hızlı Borç Öde", "Su Faturası Öde", "Kent Rehberi", "E-Mezarlık", 
  "Kariyer Merkezi", "Afet Bilgilendirme Haritası", "E-Devlet Kapısı Hizmetleri", 
  "Ulaşım Ruhsat Başvuru Sistemi"
];

const DIGER_BAGLANTILAR = [
  "Cimer", "Marmara Belediyeler Birliği", "Trakya Belediyeler Birliği", 
  "Türkiye Belediyeler Birliği", "Yerel Yönetimler Genel Müdürlüğü", 
  "İçişleri Bakanlığı", "Trakya Kalkınma Ajansı", "Kamu Denetçiliği Kurumu", 
  "Resmi İlan Portalı"
];

export default function Footer() {
  // Sayfayı en yukarı kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-zinc-200 pt-16">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* ÜST KISIM: LİNKLER VE LOGO (Grid Yapısı) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-16">
          
          {/* 1. SÜTUN */}
          <div>
            <h3 className="text-[#1B4F8A] font-bold text-lg mb-6 tracking-wide">KURUMSAL</h3>
            <ul className="space-y-3">
              {KURUMSAL.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="group flex items-center text-[14px] text-zinc-600 hover:text-[#1B4F8A] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1B4F8A] mr-3 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. SÜTUN */}
          <div>
            <h3 className="text-[#1B4F8A] font-bold text-lg mb-6 tracking-wide">HİZMETLERİMİZ</h3>
            <ul className="space-y-3">
              {HIZMETLERIMIZ.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="group flex items-center text-[14px] text-zinc-600 hover:text-[#1B4F8A] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1B4F8A] mr-3 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SÜTUN */}
          <div>
            <h3 className="text-[#1B4F8A] font-bold text-lg mb-6 tracking-wide">E-İŞLEM</h3>
            <ul className="space-y-3">
              {E_ISLEM.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="group flex items-center text-[14px] text-zinc-600 hover:text-[#1B4F8A] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1B4F8A] mr-3 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SÜTUN */}
          <div>
            <h3 className="text-[#1B4F8A] font-bold text-lg mb-6 tracking-wide">DİĞER BAĞLANTILAR</h3>
            <ul className="space-y-3">
              {DIGER_BAGLANTILAR.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="group flex items-center text-[14px] text-zinc-600 hover:text-[#1B4F8A] transition-colors line-clamp-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1B4F8A] mr-3 transition-colors shrink-0"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. SÜTUN: LOGO VE SERTİFİKALAR */}
          <div className="flex flex-col items-center lg:items-end justify-start pt-4 lg:pt-0">
            {/* Logo Placeholder (Kendi logonu eklediğinde Image src kısmını değiştirebilirsin) */}
            <div className="relative w-48 h-48 mb-6 flex flex-col items-center justify-center bg-zinc-50 rounded-full border border-zinc-100 shadow-inner">
              <span className="text-[#1B4F8A] text-6xl font-black mb-2">TBB</span>
              <span className="text-[10px] text-center font-bold text-zinc-600 px-4">T.C. TEKİRDAĞ BÜYÜKŞEHİR BELEDİYESİ</span>
            </div>
            
            {/* Alt Sertifika İkonları (Görseldeki sağ alt köşe) */}
            <div className="flex gap-4 opacity-60">
              <div className="w-10 h-10 rounded-full border border-zinc-400 flex items-center justify-center text-[8px] text-zinc-400 font-bold">ISO</div>
              <div className="w-10 h-10 rounded border border-zinc-400 flex items-center justify-center text-[8px] text-zinc-400 font-bold">TSE</div>
            </div>
          </div>

        </div>
      </div>

      {/* ALT ÇUBUK (Dark Blue Bar) */}
      <div className="bg-[#1B4F8A]/90 py-5 relative">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white/90 text-sm">
          
          {/* Telif Hakkı */}
          <div className="mb-4 md:mb-0">
            © Tekirdağ Büyükşehir Belediyesi | {new Date().getFullYear()}
          </div>
          
          {/* Bilgi İşlem Dairesi */}
          <div className="pr-25 md:pr-16">
            Bilgi İşlem Dairesi Başkanlığı
          </div>

        </div>
      </div>

    </footer>
  );
}