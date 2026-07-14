import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import HizmetlerDuyurularBolumu from "../components/hizmet-duyuru";
import DashboardWidgets from "@/components/DashboardWidgets";
import CardSection from "@/components/CardSection";
import NewsSection from "@/components/NewsSection";
import PromoBanner from "@/components/PromoBanner";
import CozumMerkeziBanner from "@/components/CozumMerkezi";

export default async function Home() {
  // Haberler ve renkli görseller için API'den eşzamanlı veri çekiyoruz

  return (
    // @apply hatası düzeltildi, standart Tailwind sınıfları eklendi
    <main className="min-h-screen bg-zinc-50 font-sans font-normal antialiased pb-10 md:pb-16 overflow-x-hidden">
      {/* 2. TAM EKRAN RENKLİ SLAYT */}
      <HeroSlider />

      {/* 4. DİĞER İÇERİKLER */}
      {/* Mobilde px-4, tablet ve sonrasında px-6/px-8 */}
      <div className="mx-auto sm:px-6 lg:px-8 pt-12 md:pt-20">
        
        {/* HABERLER BÖLÜMÜ */}
        <section className="mb-12 md:mb-20">
          <NewsSection />
          {/* Mobil İçin Tüm Haberler Butonu */}
          <div className="mt-6 md:mt-8 flex justify-center sm:hidden">
            <Link
              href="/guncel/haberler"
              className="w-full text-center py-3.5 rounded-xl bg-zinc-100 text-zinc-900 font-bold hover:bg-zinc-200 transition-colors"
            >
              Tüm Haberleri Gör
            </Link>
          </div>
        </section>

        {/* BİLEŞENLER */}
        <div className="flex flex-col gap-12 md:gap-20 mb-12 md:mb-20"> 
          
          {/* 
            PROMO BANNER
            Yeri değiştirilmedi. Üstteki div'den gelen sm:px-6 ve lg:px-8 boşluklarını
            kırmak ve ekranın kenarlarına tam yapışmak (0 boşluk) için negatif margin eklendi.
          */}
          <div className="sm:-mx-6 lg:-mx-8">
            <PromoBanner />
          </div>

          <HizmetlerDuyurularBolumu />
          <DashboardWidgets />
          <CardSection />
        </div>

        {/* ÇÖZÜM MERKEZİ BANNER'I */}
        <CozumMerkeziBanner />
      </div>
    </main>
  );
}