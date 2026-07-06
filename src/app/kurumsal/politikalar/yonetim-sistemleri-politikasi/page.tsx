import Link from "next/link";
import { SITE_DATA } from "@/lib/data";

export default function YonetimSistemleriPolitikasiPage() {
  const kategori = "kurumsal";
  const sidebarActiveSlug = "politikalar"; 
  const categoryData = SITE_DATA[kategori];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[115px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">{categoryData?.title || "Kurumsal"}</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}/politikalar`} className="hover:text-[#1B4F8A] transition-colors duration-200">Politikalar</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">Yönetim Sistemleri Politikamız</span>
          </div>
        </div>
      </div>
          
      {/* --- ANA İÇERİK --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ */}
        <aside className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
              <Link href={`/${kategori}`}>
                <h3 className="font-bold text-[18px] text-[#009FE3]">{categoryData?.title}</h3>
              </Link>
            </div>
            <ul className="flex flex-col py-2">
              {categoryData?.pages.map((p: any) => (
                <li key={p.slug}>
                  <Link href={`/${kategori}/${p.slug}`} className={`block px-6 py-3 text-[15px] transition-colors border-l-4 ${p.slug === sidebarActiveSlug ? "font-medium text-[#009FE3] bg-[#EAF4E2]/30 border-[#73B646]" : "text-gray-600 hover:text-[#009FE3] hover:bg-gray-50 border-transparent"}`}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* İÇERİK */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">Yönetim Sistemleri Politikamız</h1>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full w-1/3 bg-[#009FE3] rounded-full"></div></div>
            </header>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Tekirdağ Büyükşehir Belediyesi olarak, misyon, vizyon, ilkelerimiz ve temel değerlerimiz doğrultusunda, gelişen ve güncel teknolojileri kullanarak sürekli iyileşmeyi ve faaliyet gösterdiğimiz her alanda sunmuş olduğumuz hizmetleri güvenilir, zamanında, çağdaş ve özgün çözümler geliştirerek sunmayı ve bu doğrultuda vatandaş/paydaş memnuniyetini sürdürerek artırmayı amaçlamaktayız.
            </p>

            {/* Maddeler Gruplandırılmış Şekilde */}
            <div className="space-y-8">
              <PolicyGroup title="Kurumsal Anlayış ve Sosyal Sorumluluk" items={[
                "Değer ve inançlara saygılı, şeffaf, adil, güler yüzlü, hesap verilebilir, katılımcılığı, eşitliği ve sosyal belediyeciliği öne çıkaran bir yerel yönetim anlayışıyla hareket etmeyi ve bu kurumsal kimlik etrafında birleşmeyi,",
                "Gelenek ve göreneklerimize saygılı olmayı, dürüstlüğü ve etik davranmayı erdem olarak benimsemeyi,",
                "İnsan odaklı bir TEKİRDAĞ oluşturmayı ve bunu sürdürülebilir kılmayı,"
              ]} />

              <PolicyGroup title="Çevre, Sürdürülebilirlik ve Enerji" items={[
                "Doğaya, çevreye, biyoçeşitliliğe, kültürel ve tarihi mirasa sahip çıkarak sürdürülebilirlik ilkesi çerçevesinde gelecek nesillere yaşanabilir bir kent bırakmayı,",
                "Doğal afet ve deprem kaynaklı riskleri azaltmayı,",
                "Faaliyetlerimizden kaynaklanan olumsuz çevresel kirliliği önlemeyi ve ilimizde sağlıklı bir çevrede yaşanmasına katkı sunmayı,",
                "Enerjinin etkin kullanımı, enerji verimliliğinin artırılması, sera gazı emisyonlarımızı azaltmayı ve iklim değişikliği ile mücadeleye katkı sağlamayı,"
              ]} />

              <PolicyGroup title="İş Sağlığı, Güvenliği ve İyileştirme" items={[
                "Güvenli ve sağlıklı bir çalışma ortamı oluşturarak iş kazası ve meslek hastalıklarının oluşmasını önleyecek proaktif tedbirleri almayı,",
                "İş Sağlığı ve Güvenliği tehlikelerini ve risklerini azaltmayı, çalışanlarımızın katılımını sağlamayı,",
                "Hizmet kalitesinin sürdürülerek artırılması, çevre ve İSG konularında tüm sistemlerimizi sürekli iyileştirmeyi,"
              ]} />

              <PolicyGroup title="Paydaş Odaklılık ve Şeffaflık" items={[
                "Vatandaşlarımız başta olmak üzere talep, öneri, istek ve şikâyetleri, süreçlerimizi iyileştirmek için birer fırsat olarak görmeyi ve etkin şekilde ele almayı,",
                "Yürürlükteki uygunluk yükümlülüklerini yerine getirmeyi ve kurumumuzda uygulanmakta olan yönetim sistemleri kapsamında ihtiyaç duyulan kaynakları sağlamayı,"
              ]} />
            </div>

            <div className="mt-12 bg-[#1B4F8A] p-6 rounded-xl text-white shadow-sm">
              <p className="text-lg font-medium mb-4">Tüm vatandaşlarımıza, paydaşlarımıza, ilgili taraflarımıza ve çalışanlarımıza taahhüt ederiz.</p>
              <div className="flex justify-between items-end border-t border-white/20 pt-4">
                <span className="text-sm opacity-80">KYS.FR.027-11.08.2025-03</span>
                <div className="text-right">
                  <p className="font-bold">Dr. Candan YÜCEER</p>
                  <p className="text-sm opacity-90">TEKİRDAĞ BÜYÜKŞEHİR BELEDİYE BAŞKANI</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

// Yardımcı Bileşen
function PolicyGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#009FE3] mb-4 border-b pb-2">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-gray-700">
            <span className="text-[#73B646] font-bold">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}