import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import HizmetlerDuyurularBolumu from "../components/hizmet-duyuru";
import DashboardWidgets from "@/components/DashboardWidgets";
import CardSection from "@/components/CardSection";

export default async function Home() {
  // Haberler ve renkli görseller için API'den eşzamanlı veri çekiyoruz
  const [postsRes, photosRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 },
    }),
    fetch("https://jsonplaceholder.typicode.com/photos", {
      next: { revalidate: 3600 },
    }),
  ]);

  const postsData = postsRes.ok ? await postsRes.json() : [];
  const photosData = photosRes.ok ? await photosRes.json() : [];

  // 5'ten sonrasını alıp içlerine renk kodlarını dahil ediyoruz
  const newsItems = postsData.slice(5, 8).map((post: any, index: number) => {
    const hexColor = photosData[index + 5]?.url.split("/").pop() || "1B4F8A";
    return { ...post, hexColor };
  });

  return (
    // @apply hatası düzeltildi, standart Tailwind sınıfları eklendi
    <main className="min-h-screen bg-zinc-50 font-sans font-normal antialiased pb-10 md:pb-16">
      {/* 2. TAM EKRAN RENKLİ SLAYT */}
      <HeroSlider />

      {/* 4. DİĞER İÇERİKLER */}
      {/* Mobilde px-4, tablet ve sonrasında px-6/px-8 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        
        {/* HABERLER BÖLÜMÜ */}
        <section className="mb-12 md:mb-20 mt-8 md:mt-0">
          <div className="mb-8 md:mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
                Güncel Haberler
              </h2>
              <div className="h-1.5 w-16 bg-[#1B4F8A] mt-3 md:mt-4 rounded-full"></div>
            </div>
            <Link
              href="/haberler"
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#1B4F8A] hover:text-[#0F2D52] hover:underline transition-colors"
            >
              Tüm Haberler
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((item: any) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white border border-zinc-200 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#1B4F8A]/10 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
              >
                {/* Haber Görseli (API'den gelen renk kodu) */}
                <div className={`h-40 md:h-48 w-full relative overflow-hidden bg-[#${item.hexColor}]`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Haber İçeriği */}
                <div className="p-5 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="px-3 py-1 bg-[#F0F6FD] text-[#1B4F8A] text-[10px] md:text-xs font-bold rounded-md">
                      Gündem
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold text-zinc-400">
                      Haziran 2026
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2 md:mb-3 line-clamp-2 capitalize group-hover:text-[#1B4F8A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-sm line-clamp-3 mb-5 md:mb-6 flex-1">
                    {item.body}
                  </p>

                  <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center font-bold text-sm text-zinc-900 group-hover:text-[#1B4F8A] transition-colors">
                    Devamını Oku <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobil İçin Tüm Haberler Butonu */}
          <div className="mt-6 md:mt-8 flex justify-center sm:hidden">
            <Link
              href="/haberler"
              className="w-full text-center py-3.5 rounded-xl bg-zinc-100 text-zinc-900 font-bold hover:bg-zinc-200 transition-colors"
            >
              Tüm Haberleri Gör
            </Link>
          </div>
        </section>

        {/* BİLEŞENLER */}
        {/* Not: Bu bileşenlerin kendi içlerinde responsive olduğundan emin olmalısın */}
        <div className="flex flex-col gap-12 md:gap-20 mb-12 md:mb-20">
          <HizmetlerDuyurularBolumu />
          <DashboardWidgets />
          <CardSection />
        </div>

        {/* ÇÖZÜM MERKEZİ BANNER'I */}
        {/* Padding değerleri mobilde düşürüldü */}
        <div className="relative p-6 sm:p-8 md:p-12 bg-[#0F2D52] text-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col justify-center shadow-2xl shadow-[#0F2D52]/20 mb-10">
          {/* Arka Plan Dekoratif Elementleri */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 md:w-64 h-48 md:h-64 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-0 right-5 md:right-10 w-32 md:w-40 h-32 md:h-40 rounded-full bg-blue-500/10 blur-xl md:blur-2xl"></div>

          <div className="relative z-10 text-center sm:text-left">
            <span className="inline-block px-3 py-1 mb-4 md:mb-6 text-[10px] md:text-xs font-bold tracking-widest text-[#0F2D52] uppercase bg-white rounded-lg">
              7/24 İletişim
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 font-sans">
              Çözüm Merkezi: <span className="text-blue-300 whitespace-nowrap">ALO 153</span>
            </h3>

            <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md mx-auto sm:mx-0 font-light">
              Şehrimizle ilgili tüm istek, şikayet ve önerileriniz için buradayız. Çevrimiçi form doldurarak da taleplerinizi iletebilirsiniz.
            </p>

            {/* Buton Alanı: Mobilde flex-col (alt alta ve tam genişlik), tablettten itibaren flex-row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
              <button className="flex justify-center items-center gap-2 bg-white text-[#0F2D52] px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Hemen Ara
              </button>
              <button className="flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold hover:bg-white/20 transition-colors w-full sm:w-auto">
                Talep Formu
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}