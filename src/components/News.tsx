import Link from 'next/link';

export default async function News() {
  // Veriyi sunucu tarafında çekiyoruz
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // Veriyi 1 saatte bir yenile (ISR)
    next: { revalidate: 3600 } 
  });

  if (!res.ok) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-zinc-500">
        <p>Haber akışına şu an ulaşılamıyor, lütfen daha sonra tekrar deneyin.</p>
      </div>
    );
  }

  const data = await res.json();
  
  // Tüm haberler sayfası olduğu için daha fazla veri (12 adet) gösteriyoruz
  const newsItems = data.slice(0, 12);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-20">
      
      {/* Sayfa Başlığı */}
      <header className="mb-16 text-center md:text-left">
        <h1 className="text-4xl font-light tracking-wide text-zinc-900 mb-4">
          Tüm Haberler ve Duyurular
        </h1>
        <p className="text-zinc-500 max-w-2xl text-lg">
          Belediyemizdeki en güncel gelişmeleri, devam eden projeleri ve önemli duyuruları buradan takip edebilirsiniz.
        </p>
        <div className="h-px w-24 bg-zinc-300 mt-8 md:mx-0 mx-auto"></div>
      </header>

      {/* Haberler Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item: any) => (
          <article 
            key={item.id} 
            className="group flex flex-col justify-between bg-white border border-zinc-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 h-full"
          >
            <div>
              {/* Kurumsal temaya uygun estetik bir kategori/tarih etiketi simülasyonu */}
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Gündem
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {/* JSONPlaceholder'da tarih olmadığı için görsel amaçlı statik/dinamik bir metin eklenebilir */}
                  Güncel
                </span>
              </div>

              <h2 className="text-xl font-medium text-zinc-900 mb-3 capitalize line-clamp-2 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h2>
              
              <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6">
                {item.body}
              </p>
            </div>

            {/* Devamını Oku Bağlantısı */}
            <div className="mt-auto border-t border-zinc-100 pt-4">
              <Link 
                // İleride detay sayfası yaparsan href={`/haberler/${item.id}`} şeklinde güncelleyebilirsin
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Haberi Oku 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}