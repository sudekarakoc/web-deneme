import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

export default function ArabuluculukKomisyonuPage() {
  const kategori = "kurumsal";
  const slug = "arabuluculuk-komisyonu";
  
  const categoryData = SITE_DATA[kategori];
  const currentPage = categoryData?.pages.find((p: any) => p.slug === slug);

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[115px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              {categoryData?.title || "Kurumsal"}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">
              {currentPage?.title || "Arabuluculuk Komisyonu"}
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
              {categoryData?.pages.map((p: any) => {
                const isActive = p.slug === slug;
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
                Arabuluculuk Komisyonları
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Mevzuat Metinleri */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-10 space-y-5">
              <p>
                <strong>22.06.2012 tarih ve 28331 sayılı Resmi Gazetede</strong> yayımlanarak yürürlüğe giren 6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu ile hukuk uyuşmazlıklarının arabuluculuk yoluyla çözümlenmesinde uygulanacak usul ve esaslar düzenlenmiştir.
              </p>
              <p>
                <strong>12.10.2017 tarih ve 7036 sayılı İş Mahkemeleri Kanunu</strong> ile idarelerin taraf olduğu ve kanuna, bireysel veya toplu iş sözleşmesine dayanan işçi veya işveren alacakları ile işe iade taleplerine dair uyuşmazlıklarda arabulucuya başvurulmuş olması dava şartı haline getirilmiştir.
              </p>
              <p>
                <strong>14.02.2011 tarih ve 27846 sayılı Resmi Gazetede</strong> yayımlanarak yürürlüğe giren 6102 sayılı Türk Ticaret Kanununa eklenen 5/A maddesi uyarınca; 01.01.2019 tarihi itibarıyla bu Kanunun 4 üncü maddesinde ve diğer kanunlarda belirtilen ticari davalardan, konusu bir miktar paranın ödenmesi olan alacak ve tazminat talepleri hakkında dava açılmadan önce arabuluculuğa başvurulmuş olması dava şartı olarak belirlenmiştir.
              </p>
              <p>
                6325 sayılı Kanunun 15 inci maddesinin sekizinci fıkrasına istinaden Başkanlık Makamından alınan onay ile arabuluculuk müzakerelerinde idareyi temsil etmek üzere <strong>Arabuluculuk Komisyonları</strong> oluşturulmuştur.
              </p>
              <p>
                02.06.2018 tarih ve 30439 sayılı Resmi Gazetede yayımlanarak yürürlüğe giren Hukuk Uyuşmazlıklarında Arabuluculuk Kanun Yönetmeliğinin 18 inci maddesinin 2 nci fıkrası <em>"İdare, arabuluculuk davetlerinin yapılacağı adres, kayıtlı elektronik posta adresi ve telefon numarasını, bu Yönetmeliğin yürürlüğe girdiği tarihten itibaren bir ay içerisinde internet sitesinde yayınlar. Arabulucular görüşmeler kapsamında yapacakları davetlerde öncelikle bu bilgileri esas alır."</em> düzenlemesini içermektedir.
              </p>
              <p>
                Zorunlu Arabuluculuk Komisyonlarının sekretarya hizmetleri; <strong>1. HUKUK MÜŞAVİRLİĞİ</strong> tarafından yürütülmektedir. Yukarıda açıklanan mevzuat hükümleri doğrultusunda internet sitesinde bulunan bilgilerin güncellenme zorunluluğu doğmuştur.
              </p>
            </div>

            {/* Uyarı / Bilgilendirme Kutusu */}
            <div className="bg-[#FFF8E1] border-l-4 border-[#FFC107] p-5 rounded-r-xl mb-10 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#FFB300] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Önemli Bilgilendirme</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Davet taleplerinin öncelikle telefon ile irtibat kurularak <strong className="text-gray-900">en az 7 gün öncesinden</strong> oluşturulması ve başvurucunun taleplerinin başvuru mektubunda detaylı olarak sunulması sürecin sağlıklı yürütülebilmesi açısından önem arz etmektedir.
                  </p>
                </div>
              </div>
            </div>

            {/* İrtibat Bilgileri Kartı */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#1B4F8A] px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#009FE3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Komisyon İrtibat Bilgileri
                </h2>
              </div>
              
              <div className="p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Sekreterya</dt>
                    <dd className="text-base font-semibold text-gray-900">1. HUKUK MÜŞAVİRLİĞİ</dd>
                  </div>
                  
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 mb-1">İrtibat Kişisi</dt>
                    <dd className="text-base font-semibold text-gray-900">Furkan AYDIN</dd>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Adres
                    </dt>
                    <dd className="text-base text-gray-900 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                      ATATÜRK MAHALLESİ 57. ALAY CADDESİ NO:6 <br />
                      <span className="font-medium">Süleymanpaşa / TEKİRDAĞ</span>
                    </dd>
                  </div>
                  
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      E-Mail
                    </dt>
                    <dd className="text-base font-medium text-[#009FE3] hover:text-[#1B4F8A] transition-colors">
                      <a href="mailto:arabuluculuk@tekirdag.bel.tr">arabuluculuk@tekirdag.bel.tr</a>
                    </dd>
                  </div>
                  
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Telefon
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      <a href="tel:08504592070" className="hover:text-[#009FE3] transition-colors">0850 459 20 70</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}