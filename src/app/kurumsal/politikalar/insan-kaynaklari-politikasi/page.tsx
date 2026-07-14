import Link from "next/link";
import Image from "next/image";
import { SITE_DATA } from "@/lib/data";

export default function InsanKaynaklariPolitikasiPage() {
  const kategori = "kurumsal";
  // Menüde "Politikalar" sekmesinin aktif görünmesi için:
  const sidebarActiveSlug = "politikalar"; 
  
  const categoryData = SITE_DATA[kategori];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb - Hiyerarşiye 'Politikalar' Eklendi */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              {categoryData?.title || "Kurumsal"}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}/politikalar`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              Politikalar
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">
              İnsan Kaynakları Politikası
            </span>
          </div>

        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (Sidebar) */}
        <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
              <Link href={`/${kategori}`}>
                <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData?.title}</h3>
              </Link>
            </div>
            <ul className="flex flex-col py-2">
              {categoryData?.pages.map((p: { slug: string; title: string }) => {
                const isActive = p.slug === sidebarActiveSlug; // Politikalar sekmesi aktif görünecek
                return (
                  <li key={p.slug}>
                    <Link 
                      href={`/${kategori}/${p.slug}`} 
                      className={`block px-6 py-3 text-[15px] transition-colors border-l-4 ${
                        isActive 
                          ? "font-medium text-[#009FE3] bg-[#EAF4E2]/30 border-[#73B646]" 
                          : "text-gray-600 hover:text-[#009FE3] hover:bg-gray-50 border-transparent hover:border-[#73B646]/30"
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* ANA İÇERİK ALANI */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            
            {/* İçerik Başlığı */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                İnsan Kaynakları Politikası
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* İnsan Kaynakları Görseli */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="https://www.tekirdag.bel.tr/assets/img/sayfa/ik_politikamiz.jpg"
                alt="İnsan Kaynakları Politikamız"
                width={1200}
                height={700}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Temel Hedefimiz İçeriği */}
            <div className="relative bg-[#F9FAFB] rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm overflow-hidden">
              
              {/* Arka Plan Dekoratif İkon */}
              <div className="absolute -right-8 -bottom-8 opacity-5 text-[#73B646]">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              <div className="relative">
                <h2 className="text-2xl font-bold text-[#73B646] mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-[#009FE3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TEMEL HEDEFİMİZ
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                  <p>
                    Kurumumuzun başarısındaki en önemli etkenin; 
                    <strong className="text-gray-900 font-semibold"> Katılımcı, Girişimci, Etik değerleri benimsemiş, değişme ve gelişime açık çalışanlarımız </strong> 
                    olduğu bilinciyle, organizasyonumuzun ihtiyaçlarına yönelik çözüm ve uygulamalarla, bireysel ve ekip performansını geliştirerek sürekli iyileştirmeyi destekleyen bir İnsan Kaynakları kültürü oluşturmak temel hedefimizdir.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border-l-4 border-[#009FE3] shadow-sm mt-6">
                    <p className="m-0 italic text-gray-800">
                      Karşılıklı güvenin sağlandığı, sorumlulukların sahiplenildiği, başarının takdir edildiği, çeşitliliğe saygı duyulan, iş ve özel yaşam dengesinin gözetildiği, beklentilerin dikkate alındığı bir çalışma ortamı sağlamayı taahhüt ederiz.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </article>

      </section>
    </main>
  );
}