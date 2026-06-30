// src/components/NewsSection.tsx

export default async function NewsSection() {
  // Veriyi sunucu tarafında çekiyoruz
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 } // 1 saatlik önbellekleme
  });

  if (!res.ok) {
    // 404 gibi bir hata dönerse ekranda zarif bir uyarı gösterelim
    return (
      <div className="py-12 text-center text-zinc-500">
        Haberler şu an yüklenemiyor.
      </div>
    );
  }

  const data = await res.json();
  const newsItems = data.slice(0, 6); // Ekranda çok yer kaplamaması için 6 tane gösterelim

  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <header className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-light tracking-wide text-zinc-900 mb-4">
            Güncel Haberler
          </h2>
          <div className="h-px w-16 bg-zinc-300 md:mx-0 mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item: any) => (
            <article 
              key={item.id} 
              className="group bg-white border border-zinc-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 flex flex-col"
            >
              <h3 className="text-lg font-medium text-zinc-900 mb-3 capitalize line-clamp-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mt-auto">
                {item.body}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}