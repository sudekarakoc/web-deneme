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
    <main className="min-h-screen bg-zinc-50 font-sans font-normal antialiased pb-10 md:pb-16">
      {/* 2. TAM EKRAN RENKLİ SLAYT */}
      <HeroSlider />

      {/* 4. DİĞER İÇERİKLER */}
      {/* Mobilde px-4, tablet ve sonrasında px-6/px-8 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        
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
        {/* Not: Bu bileşenlerin kendi içlerinde responsive olduğundan emin olmalısın */}
        <div className="flex flex-col gap-12 md:gap-20 mb-12 md:mb-20">
          <HizmetlerDuyurularBolumu />
          <PromoBanner />
          <DashboardWidgets />
          <CardSection />
        </div>

        {/* ÇÖZÜM MERKEZİ BANNER'I */}
        <CozumMerkeziBanner />
      </div>
    </main>
  );
}