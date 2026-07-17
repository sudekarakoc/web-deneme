import Image from "next/image";

export default function CozumMerkeziBanner() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full bg-[#0F2D52] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">

      {/* SOL TARAF: Metin ve Butonlar */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
        {/* Dekoratif Işık: Lacivert arka planı hareketlendirmek için ufak bir blur efekti */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <span className="inline-block px-3 py-1.5 mb-4 text-[10px] md:text-xs font-bold tracking-wider text-[#0F2D52] uppercase bg-white rounded-lg shadow-sm">
            7/24 İletişim
          </span>

          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 font-sans text-white">
            Çözüm Merkezi: <span className="text-blue-400 whitespace-nowrap">ALO 153</span>
          </h3>

          <p className="text-blue-50/90 text-sm md:text-base mb-8 leading-relaxed font-light max-w-md">
            Şehrimizle ilgili tüm istek, şikayet ve önerileriniz için buradayız. Çevrimiçi form doldurarak da taleplerinizi iletebilirsiniz.
          </p>

          {/* Buton Alanı */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button className="flex justify-center items-center gap-2 bg-white text-[#0F2D52] px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Hemen Ara
            </button>
            
            <button className="flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              Talep Formu
            </button>
          </div>
        </div>
      </div>

      {/* SAĞ TARAF: Görsel */}
      {/* Görselin arka planı beyaz yapıldı ki içindeki kırmızı "ALO 153" yazıları patlasın ve net okunsun */}
      <div className="relative w-full md:w-1/2 min-h-[200px] sm:min-h-[250px] md:min-h-full overflow-hidden bg-white flex items-center justify-center p-4 md:p-8">
        <Image
          src="/images/cozum.png"
          alt="Tekirdağ Çözüm Merkezi"
          fill
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 p-6"
          unoptimized
        />
      </div>

    </div>
  );
}