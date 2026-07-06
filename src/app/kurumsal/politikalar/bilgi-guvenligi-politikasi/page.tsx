import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

export default function BilgiGuvenligiPolitikasiPage() {
  const kategori = "kurumsal";
  // Sidebar'da 'Politikalar' sekmesinin seçili kalması için slug'ı politikalar olarak ayarlıyoruz
  const sidebarActiveSlug = "politikalar"; 
  
  const categoryData = SITE_DATA[kategori];

  const politikaMaddeleri = [
    "Kurumun, işlediği, muhafaza ettiği ve diğer kuruluşlar ile paylaştığı bilgi varlıklarını gizlilik, bütünlük ve erişebilirlik ilkelerine göre korumak.",
    "Bilgi varlıklarını yönetmek, varlıkların güvenlik değerlerini, ihtiyaçlarını ve risklerini belirlemek, güvenlik risklerine yönelik kontrolleri uygulamak için kurulmuş yönetim sistemini geliştirmek ve sürekli iyileştirmeyi sağlamak.",
    "Kurum vizyon ve misyonuna uygun olarak faaliyetlerden kaynaklanan risklerin değerlendirilmesi ile sürekli iyileşme ihtiyaçlarını ve fırsatları tayin etmek.",
    "Hizmet verilen kapsam bağlamında teknolojik gelişim ve değişimlere ayak uydurarak takip etmek.",
    "Bilgi güvenliği risklerinin etkisini azaltarak iş sürekliliğini sağlamak.",
    "Tâbi olduğu ulusal ve uluslararası düzenlemelere, yasal ve ilgili mevzuat gereklerine, anlaşmalardan doğan yükümlülüklere, iç ve dış paydaşlara yönelik kurumsal sorumluluklara uyum sağlamak.",
    "Gerçekleşebilecek bilgi güvenliği olaylarına hızla müdahale edebilecek ve olayın etkisini minimize edecek yetkinliğe sahip olmak.",
    "Maliyet etkin bir kontrol altyapısı ile bilgi güvenliği seviyesini zaman içinde korumak ve iyileştirmek.",
    "Kurum itibarını geliştirmek, bilgi güvenliği temelli olumsuz etkilerden korumak.",
    "Kişisel Verilerin Korunması Kanunu kapsamında kişi bilgilerini muhafaza etmek.",
    "Çalışanların bilgi güvenliği farkındalığı ve yetkinliklerini geliştirecek eğitimleri gerçekleştirmek, gerekli desteği sağlayarak diğer yönetim sistemleriyle bütünleşik olarak sektörde örnek bir kuruluş olmak."
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[115px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
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
              Bilgi Güvenliği Politikası
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
                Bilgi Güvenliği Politikası
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Giriş Paragrafı */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-10 leading-relaxed bg-[#F9FAFB] p-6 rounded-xl border border-gray-100">
              <p className="m-0">
                <strong>Tekirdağ Büyükşehir Belediyesi</strong>, kurum itibarının, güvenilirliğinin, bilgi varlıklarının korunması, temel ve destekleyici iş faaliyetlerinin mümkün olan en az kesinti ile devam etmesi amacıyla aşağıdaki hedefleri politika olarak benimsemiştir:
              </p>
            </div>

            {/* Politika Maddeleri Listesi */}
            <ul className="flex flex-col gap-5 mb-12">
              {politikaMaddeleri.map((madde, index) => (
                <li 
                  key={index}
                  className="group flex items-start p-4 rounded-xl border border-transparent hover:border-[#009FE3]/20 hover:bg-[#009FE3]/5 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {/* Güvenlik (Kalkan) İkonu */}
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#EAF4E2] group-hover:bg-[#009FE3] transition-colors duration-300">
                      <svg 
                        className="h-4 w-4 text-[#73B646] group-hover:text-white transition-colors duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {madde}
                  </p>
                </li>
              ))}
            </ul>

            {/* Kapanış / Sorumluluk Kutusu */}
            <div className="bg-[#1B4F8A] p-6 rounded-xl shadow-sm text-white flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <svg className="h-6 w-6 text-[#009FE3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#EAF4E2] leading-relaxed m-0 text-base md:text-lg font-medium">
                Her bir Tekirdağ Büyükşehir Belediyesi çatısı altındaki kurum üyesi belirtilen bu hedefler doğrultusunda hareket etmek ve sisteme katkı sağlamaktan sorumludur.
              </p>
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}