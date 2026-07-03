import Link from "next/link";
import News from "./News"; // Dosya yolunu kendi yapına göre güncelle

interface NewsSectionProps {
  newsItems: any[]; // Daha spesifik bir tipin varsa onu verebilirsin
}

export default function NewsSection({ newsItems }: NewsSectionProps) {
  return (
    <section className="mb-12 md:mb-20 mt-8 md:mt-0">
      {/* Üst Kısım: Başlık ve Link */}
      <div className="mb-8 md:mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
            Güncel Haberler
          </h2>
          <div className="h-1.5 w-16 bg-[#1B4F8A] mt-3 md:mt-4 rounded-full"></div>
        </div>
        <Link
          href="/guncel/haberler"
          className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#1B4F8A] hover:text-[#0F2D52] hover:underline transition-colors"
        >
          Tüm Haberler
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Alt Kısım: Haber Kartları Izgarası */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {newsItems.map((item) => (
          <News key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}