import React from "react";
import Link from "next/link";
import { aykomeDocuments } from "./data/aykomeData";

export default function AykomePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* HEADER & HERO */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-12 px-6 lg:px-8 border-b border-[#73B646]/20 relative">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/hizmetler" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Hizmetler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">AYKOME</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#1B4F8A] leading-tight tracking-tight mb-3">
              AYKOME - Altyapı Koordinasyon Merkezi
            </h1>
            <p className="text-[#3a7d1e] text-[16px] md:text-[18px] leading-relaxed font-medium">
              Belediye sınırları ve mücavir alanlar içinde umumi hizmet alanlarında yapılacak kazı işlemleri ile ilgili kural, yönetmelik ve başvuru süreçlerine buradan ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* İÇERİK ALANI (İki Kolonlu Grid) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* SOL KOLON: BİLGİLENDİRME (8 Sütun) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Açıklama Kartı */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-[20px] font-bold text-[#1B4F8A] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Başvuru Süreci ve Şartlar
              </h2>
              <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
                <p>
                  Belediye sınırları ve mücavir alanlar içinde umumi hizmet alanlarında yapılacak kazı işlemleri için ilgili belediyeden altyapı kazı izni belgesi alınmalıdır. Sorumluluk alanları Büyükşehir Belediyesince belirlenmiş olup, yapılacak çalışma Büyükşehir Belediyesi sorumluluğunda ise Tekirdağ Büyükşehir Belediyesine, değilse ilgili İlçe Belediyesine başvuru yapılır.
                </p>
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100/50 mt-6">
                  <h3 className="font-bold text-gray-800 mb-3">Başvuruda İstenen Belgeler:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#009FE3]/10 text-[#009FE3] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-medium text-gray-700">Yapılacak altyapı çalışmasına ait bilgileri (Çalışma yapılacak yerin açık adresi, yapılacak çalışmanın türü, kazı metrajı, zemin türü vb.) içeren dilekçe,</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#009FE3]/10 text-[#009FE3] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-medium text-gray-700">Yapılacak altyapı çalışmasına ait proje (dwg, ncz, kmz, kroki vb.),</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#009FE3]/10 text-[#009FE3] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-medium text-gray-700">Telekomünikasyon altyapı çalışmaları 400 m ve üzerinde ise Bakanlık onaylı proje olmalıdır.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#009FE3]/10 text-[#009FE3] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-medium text-gray-700">Parsel (abone) bağlantıları için ilgili altyapı kurum ve kuruluşlar tarafından başvuru yapılmalıdır.</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  Yukarıda belirtilen dilekçe ve ekleri eksiksiz olarak belediyenin evrak kayıt servisine teslim edilmesinden sonra ilgili belediyesince işlemlere başlanır.
                </p>
              </div>
            </div>

            {/* ALERT BOX: Acil Kazı */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-sm relative overflow-hidden">
               <div className="absolute right-0 top-0 text-amber-500/10 pointer-events-none transform translate-x-4 -translate-y-4">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z"/>
                  </svg>
              </div>
              <h3 className="text-amber-800 font-extrabold text-[18px] mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z"/>
                </svg>
                DİKKAT: Acil Kazı İşlemleri
              </h3>
              <div className="text-amber-900/80 text-[15px] font-medium leading-relaxed">
                <p className="mb-2">
                  Acil kazı yapacak Kurum / Kuruluşlar Tekirdağ Büyükşehir Belediyesi AYKOME Çalışma Yönetmeliğinde belirtilen tanıma uygun nitelikte olmalıdır.
                </p>
                <p className="mb-2">
                  Arızanın yola veya çevreye verdiği zararı gösteren ve arızanın bulunduğu güzergâh açıkça görülebilecek şekilde çekilmiş fotoğraflar ile birlikte Yönetmelik eki olan <strong>Ek:7 Acil Kazı ve Çalışma Bilgilendirme Formunu</strong> tam olarak doldurup, yol ağı sorumluluğuna göre <a href="mailto:altyapism@tekirdag.bel.tr" className="text-amber-600 font-bold hover:underline">altyapism@tekirdag.bel.tr</a> veya ilgili ilçe belediyesinin elektronik posta adresine iletilmesi ve ardından <strong>mutlaka telefon ile bilgilendirme yapılması</strong> gerekmektedir.
                </p>
                <p>
                  Formun başındaki belediye ismi yol ağı sorumluluğuna göre ilgili belediye yazılarak düzenlenmelidir. Çalışma yapılacak adres bilgileri ayrıntılı olarak yerin bulunabileceği şekilde forma yazılmalıdır.
                </p>
              </div>
            </div>

          </div>

          {/* SAĞ KOLON: DOKÜMANLAR (4 Sütun, Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-[180px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-5">
                <h3 className="text-[16px] font-bold text-[#1B4F8A] flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Yönetmelik ve Dokümanlar
                </h3>
              </div>
              
              <div className="p-4 flex flex-col gap-2">
                {aykomeDocuments.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 hover:bg-gray-50 rounded-xl transition-colors group"
                  >
                    <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors ${doc.type === 'pdf' ? 'bg-red-50 text-red-500 group-hover:bg-red-100' : 'bg-blue-50 text-blue-500 group-hover:bg-blue-100'}`}>
                      {doc.type === 'pdf' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 22h16a2 2 0 0 0 2-2V8l-6-6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm13-14.5V9h4.5L17 7.5zM11.5 13c.4 0 .8-.1 1.2-.2v-1c-.3.1-.7.2-1 .2-.5 0-.8-.1-1-.4-.2-.2-.2-.5-.2-1h2.5v-.2c0-1.2-.6-1.9-1.9-1.9-1.3 0-2 1-2 2.3s.7 2.2 2.4 2.2zm-.8-3.1c.4 0 .6.2.7.5H10c.1-.3.3-.5.7-.5zm5.5 1.7h-1.6V13h-1.3v-3.5h1.6c1.1 0 1.6.5 1.6 1.4s-.5 1.4-1.6 1.4v-.7c.4 0 .6-.1.6-.5s-.2-.6-.6-.6zm-5.5 4.5v-3.3H9v3.3h1.7zm3.3 0v-1.1h1.4v-1h-1.4v-1.2h1.6v-1h-2.9v4.3h1.3z" />
                        </svg>
                      ) : (
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-[13px] font-semibold text-gray-700 leading-snug group-hover:text-[#009FE3] transition-colors">
                        {doc.title}
                      </p>
                    </div>
                    <div className="shrink-0 text-gray-300 group-hover:text-[#009FE3] transition-colors self-center">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
