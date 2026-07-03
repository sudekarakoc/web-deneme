import React from "react";
import NewsClient from "./NewsClient"; // Oluşturduğumuz istemci bileşenini içe aktar

// JSONPlaceholder'dan verileri çeken fonksiyon (Değiştirilmedi)
async function getNewsItems() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", {
    next: { revalidate: 3600 } 
  });

  if (!res.ok) {
    throw new Error("Haberler getirilemedi!");
  }

  const posts = await res.json();

  const brandColors = ["1B4F8A", "2E8B57", "D97706", "4B5563", "0F766E", "B45309"];

  return posts.map((post: any, index: number) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    hexColor: brandColors[index % brandColors.length]
  }));
}

export default async function HaberlerPage() {
  // Veriyi sunucuda çek
  const newsItems = await getNewsItems();

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Sayfa Başlığı */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#1B4F8A] mb-2">
            Tüm Haberler
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Büyükşehir Belediyesi ile ilgili en güncel gelişmeleri, projeleri ve duyuruları buradan takip edebilirsiniz.
          </p>
          <div className="h-1.5 w-24 bg-[#1B4F8A] mt-6 mx-auto rounded-full"></div>
        </div>

        {/* Veriyi istemci bileşenine prop olarak gönder */}
        <NewsClient initialNewsItems={newsItems} />

      </div>
    </main>
  );
}