import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";

export default async function Home() {
  // Haberler ve renkli görseller için API'den eşzamanlı veri çekiyoruz
  const [postsRes, photosRes] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } }),
    fetch('https://jsonplaceholder.typicode.com/photos', { next: { revalidate: 3600 } })
  ]);

  const postsData = postsRes.ok ? await postsRes.json() : [];
  const photosData = photosRes.ok ? await photosRes.json() : [];

  // 5'ten sonrasını alıp içlerine renk kodlarını dahil ediyoruz
  const newsItems = postsData.slice(5, 8).map((post: any, index: number) => {
    const hexColor = photosData[index + 5]?.url.split('/').pop() || '1B4F8A';
    return { ...post, hexColor };
  });

  return (
    <main className="min-h-screen bg-zinc-50 @apply font-sans font-normal; antialiased pb-16">


      {/* 2. TAM EKRAN RENKLİ SLAYT */}
      <HeroSlider />


      {/* 4. DİĞER İÇERİKLER */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        
        {/* HABERLER BÖLÜMÜ */}
        <section className="mb-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
                Güncel Haberler
              </h2>
              <div className="h-1.5 w-16 bg-[#1B4F8A] mt-4 rounded-full"></div>
            </div>
            <Link href="/haberler" className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#1B4F8A] hover:text-[#0F2D52] hover:underline transition-colors">
              Tüm Haberler
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
            {newsItems.map((item: any) => (
              <article key={item.id} className="group flex flex-col bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#1B4F8A]/10 transition-all duration-300 hover:-translate-y-2">
                
                {/* Haber Görseli (API'den gelen renk kodu) */}
                <div
                  className={`h-48 w-full relative overflow-hidden bg-[#${item.hexColor}]`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Haber İçeriği */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#F0F6FD] text-[#1B4F8A] text-xs font-bold rounded-md">
                      Gündem
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">Haziran 2026</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 line-clamp-2 capitalize group-hover:text-[#1B4F8A] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm line-clamp-3 mb-6 flex-1">
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
          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/haberler" className="w-full text-center py-4 rounded-xl bg-zinc-100 text-zinc-900 font-bold hover:bg-zinc-200 transition-colors">
              Tüm Haberleri Gör
            </Link>
          </div>
        </section>

         <Services />

        {/* DUYURULAR & İLANLAR BÖLÜMÜ */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Duyurular Kartı */}
          <div className="p-8 md:p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-extrabold text-zinc-900 mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600 text-xl">📢</span>
              Duyurular
            </h3>
            
            <ul className="space-y-6">
              {[
                { day: "26", month: "Haz", title: "Büyükşehir Belediyesi Haziran Ayı Meclis Toplantısı" },
                { day: "28", month: "Haz", title: "Su Kesintisi Uyarısı (Süleymanpaşa İlçesi)" },
                { day: "01", month: "Tem", title: "Yaz Dönemi Ücretsiz Meslek Edindirme Kursları Kayıtları" }
              ].map((duyuru, idx) => (
                <li key={idx} className="group flex gap-5 items-start p-3 -mx-3 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center justify-center w-14 h-14 shrink-0 rounded-xl bg-[#F0F6FD] text-[#1B4F8A] border border-blue-100 group-hover:bg-[#1B4F8A] group-hover:text-white transition-colors">
                    <span className="text-lg font-black leading-none">{duyuru.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{duyuru.month}</span>
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="text-[15px] font-bold text-zinc-800 group-hover:text-[#1B4F8A] transition-colors leading-snug">
                      {duyuru.title}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Çözüm Merkezi Banner'ı */}
          <div className="relative p-8 md:p-12 bg-[#0F2D52] text-white rounded-3xl overflow-hidden flex flex-col justify-center shadow-2xl shadow-[#0F2D52]/20">
            {/* Arka Plan Dekoratif Elementleri */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-[#0F2D52] uppercase bg-white rounded-lg">
                7/24 İletişim
              </span>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 font-sans">
                Çözüm Merkezi: <span className="text-blue-300">ALO 153</span>
              </h3>
              
              <p className="text-blue-100 text-[15px] md:text-lg mb-8 leading-relaxed max-w-md font-light">
                Şehrimizle ilgili tüm istek, şikayet ve önerileriniz için buradayız. Çevrimiçi form doldurarak da taleplerinizi iletebilirsiniz.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 bg-white text-[#0F2D52] px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Hemen Ara
                </button>
                <button className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors">
                  Talep Formu
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}