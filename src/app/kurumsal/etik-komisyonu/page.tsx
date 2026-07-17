import Link from "next/link";
import { SITE_DATA } from "@/lib/data";
import Sidebar from "@/components/Sidebar";

export default function EtikKomisyonuStaticPage() {
  const kategori = "kurumsal";
  const slug = "etik-komisyonu";
  
  type Page = { slug: string; title: string };
  type CategoryData = { title: string; pages: Page[] };
  const categoryData = SITE_DATA[kategori] as CategoryData | undefined;
  const currentPage = categoryData?.pages.find((p) => p.slug === slug);

  // Etik İlkeler Verisi (JSX'i temiz tutmak için diziye alındı)
  const etikIlkeler = [
    { title: "Görevin yerine getirilmesinde kamu hizmeti bilinci", desc: "Kamu görevlileri, kamu hizmetlerinin yerine getirilmesinde; sürekli gelişimi, katılımcılığı, saydamlığı, tarafsızlığı, dürüstlüğü, kamu yararını gözetmeyi, hesap verebilirliği, öngörülebilirliği, hizmette yerindeliği ve beyana güveni esas alırlar." },
    { title: "Halka Hizmet Bilinci", desc: "Kamu görevlileri, kamu hizmetlerinin yerine getirilmesinde; halkın günlük yaşamını kolaylaştırmayı, ihtiyaçlarını en etkin, hızlı ve verimli biçimde karşılamayı, hizmet kalitesini yükseltmeyi, halkın memnuniyetini artırmayı, hizmetten yararlananların ihtiyacına ve hizmetlerin sonucuna odaklı olmayı hedeflerler." },
    { title: "Hizmet standartlarına uyma", desc: "Kamu kurum ve kuruluşlarının yöneticileri ve diğer personeli, kamu hizmetlerini belirlenen standartlara ve süreçlere uygun şekilde yürütürler, hizmetten yararlananlara iş ve işlemlerle ilgili gerekli açıklayıcı bilgileri vererek onları hizmet süreci boyunca aydınlatırlar." },
    { title: "Amaç ve misyona bağlılık", desc: "Kamu görevlileri, çalıştıkları kurum veya kuruluşun amaçlarına ve misyonuna uygun davranırlar. Ülkenin çıkarları, toplumun refahı ve kurumlarının hizmet idealleri doğrultusunda hareket ederler." },
    { title: "Dürüstlük ve tarafsızlık", desc: "Kamu görevlileri; tüm eylem ve işlemlerinde yasallık, adalet, eşitlik ve dürüstlük ilkeleri doğrultusunda hareket ederler, görevlerini yerine getirirken ve hizmetlerden yararlandırmada dil, din, felsefi inanç, siyasi düşünce, ırk, cinsiyet ve benzeri sebeplerle ayrım yapamazlar, insan hak ve özgürlüklerine aykırı veya kısıtlayıcı muamelede ve fırsat eşitliğini engelleyici davranış ve uygulamalarda bulunamazlar." },
    { title: "Saygınlık ve güven", desc: "Kamu görevlileri, kamu yönetimine güveni sağlayacak şekilde davranırlar ve görevin gerektirdiği itibar ve güvene layık olduklarını davranışlarıyla gösterirler. Halkın kamu hizmetine güven duygusunu zedeleyen, şüphe yaratan ve adalet ilkesine zarar veren davranışlarda bulunmaktan kaçınırlar." },
    { title: "Nezaket ve saygı", desc: "Kamu görevlileri, üstleri, meslektaşları, astları, diğer personel ile hizmetten yararlananlara karşı nazik ve saygılı davranırlar ve gerekli ilgiyi gösterirler, konu yetkilerinin dışındaysa ilgili birime veya yetkiliye yönlendirirler." },
    { title: "Yetkili makamlara bildirim", desc: "Kamu görevlileri, bu Yönetmelikte belirlenen etik davranış ilkeleriyle bağdaşmayan veya yasadışı iş ve eylemlerde bulunmalarının talep edilmesi halinde veya hizmetlerini yürütürken bu tür bir eylem veya işlemden haberdar olduklarında ya da gördüklerinde durumu yetkili makamlara bildirirler." },
    { title: "Çıkar çatışmasından kaçınma", desc: "Kamu görevlileri, çıkar çatışmasında şahsi sorumluluğa sahiptir ve çıkar çatışmasının doğabileceği durumu genellikle şahsen bilen kişiler oldukları için, herhangi bir potansiyel ya da gerçek çıkar çatışması konusunda dikkatli davranır, çıkar çatışmasından kaçınmak için gerekli adımları atar, çıkar çatışmasının farkına varır varmaz durumu üstlerine bildirir ve çıkar çatışması kapsamına giren menfaatlerden kendilerini uzak tutarlar." },
    { title: "Görev ve yetkilerin menfaat sağlamak amacıyla kullanılmaması", desc: "Kamu görevlileri; görev, unvan ve yetkilerini kullanarak kendileri, yakınları veya üçüncü kişiler lehine menfaat sağlayamaz ve aracılıkta bulunamazlar, akraba, eş, dost ve hemşeri kayırmacılığı, siyasal kayırmacılık veya herhangi bir nedenle ayrımcılık veya kayırmacılık yapamazlar." },
    { title: "Hediye alma ve menfaat sağlama yasağı", desc: "Kamu görevlileri, yürüttükleri görevle ilgili bir iş, hizmet veya menfaat ilişkisi olan gerçek veya tüzel kişilerden kendileri, yakınları veya üçüncü kişi veya kuruluşlar için doğrudan doğruya veya aracı eliyle herhangi bir hediye alamazlar ve menfaat sağlayamazlar." },
    { title: "Kamu malları ve kaynaklarının kullanımı", desc: "Kamu görevlileri, kamu bina ve taşıtları ile diğer kamu malları ve kaynaklarını kamusal amaçlar ve hizmet gerekleri dışında kullanamaz ve kullandıramazlar, bunları korur ve her an hizmete hazır halde bulundurmak için gerekli tedbirleri alırlar." },
    { title: "Savurganlıktan kaçınma", desc: "Kamu görevlileri, kamu bina ve taşıtları ile diğer kamu malları ve kaynaklarının kullanımında israf ve savurganlıktan kaçınır; mesai süresini, kamu mallarını, kaynaklarını, işgücünü ve imkânlarını kullanırken etkin, verimli ve tutumlu davranırlar." },
    { title: "Bağlayıcı açıklamalar ve gerçek dışı beyan", desc: "Kamu görevlileri, görevlerini yerine getirirken yetkilerini aşarak çalıştıkları kurumlarını bağlayıcı açıklama, taahhüt, vaat veya girişimlerde bulunamazlar, aldatıcı ve gerçek dışı beyanat veremezler." },
    { title: "Bilgi verme, saydamlık ve katılımcılık", desc: "Kamu görevlileri, halkın bilgi edinme hakkını kullanmasına yardımcı olurlar. Gerçek ve tüzel kişilerin talep etmesi halinde istenen bilgi veya belgeleri, 4982 sayılı Bilgi Edinme Hakkı Kanununda belirlenen istisnalar dışında, usulüne uygun olarak verirler." },
    { title: "Yöneticilerin hesap verme sorumluluğu", desc: "Yönetici kamu görevlileri, personeline etik davranış ilkeleri konusunda uygun eğitimi sağlamak, bu ilkelere uyulup uyulmadığını gözetlemek, geliriyle bağdaşmayan yaşantısını izlemek ve etik davranış konusunda rehberlik etmekle yükümlüdür." },
    { title: "Eski kamu görevlileriyle ilişkiler", desc: "Kamu görevlileri, eski kamu görevlilerini kamu hizmetlerinden ayrıcalıklı bir şekilde faydalandıramaz, onlara imtiyazlı muamelede bulunamaz." },
    { title: "Mal bildiriminde bulunma", desc: "Kamu görevlileri, kendileriyle eşlerine ve velayeti altındaki çocuklarına ait taşınır ve taşınmazları, alacak ve borçları hakkında, 3628 sayılı Mal Bildiriminde Bulunulması, Rüşvet ve Yolsuzluklarla Mücadele Kanunu hükümleri uyarınca, yetkili makama mal bildiriminde bulunurlar." }
  ];

  // Eğitim Tablosu Verisi
  const egitimVerileri = [
    { egitmen: "Doç. Dr. Kaan GAYTANCIOĞLU", kisi: "900", tarih: "04.11.2015" },
    { egitmen: "Hafize ÖZHAN", kisi: "66", tarih: "25.05.2016" },
    { egitmen: "Doç. Dr. Kaan GAYTANCIOĞLU", kisi: "65", tarih: "25.05.2017" },
    { egitmen: "Hafize ÖZHAN", kisi: "46", tarih: "22.05.2018" },
    { egitmen: "Dursun ÖZTÜRK", kisi: "58", tarih: "21.05.2019" },
    { egitmen: "Günnur GÜNGÖR", kisi: "774", tarih: "16.02.2022 - 25.03.2022" },
    { egitmen: "Günnur GÜNGÖR", kisi: "1.330", tarih: "23.05.2023 - 09.06.2023" },
    { egitmen: "Erkan ILGAZ", kisi: "1.467", tarih: "15.05.2024 - 31.05.2024" },
    { egitmen: "Erkan ILGAZ", kisi: "1.259", tarih: "26.05.2025 - 28.05.2025" }
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      
      {/* --- İÇ SAYFA BAŞLIK ALANI --- */}
      <div className="w-full bg-[#EAF4E2] pt-[150px] pb-5 px-6 lg:px-8 border-b border-[#73B646]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#1B4F8A] transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${kategori}`} className="hover:text-[#1B4F8A] transition-colors duration-200">
              {categoryData?.title || "Kurumsal"}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#009FE3] font-bold">
              {currentPage?.title || "Etik Komisyonu"}
            </span>
          </div>

        </div>
      </div>
          
      {/* --- İÇERİK VE YAN MENÜ ALANI --- */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* YAN MENÜ (Sidebar) */}
        <Sidebar
          kategori={kategori}
          categoryTitle={categoryData?.title || ""}
          pages={categoryData?.pages || []}
          activeSlug={slug}
        />

        {/* ANA İÇERİK ALANI */}
        <article className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
            
            {/* İçerik Başlığı */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
                Etik Komisyonu
              </h1>
              {/* Dekoratif Kurumsal Çizgi */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#009FE3] rounded-full"></div>
              </div>
            </header>

            {/* Bölüm 1: Etik Günü ve Haftası */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#73B646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Etik Günü ve Haftası (25-31 Mayıs)
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p>
                  25 Mayıs 2004 tarihinde Kamu Görevlileri Etik Kurulu’nun kuruluşuna ilişkin 5176 sayılı Kanun Türkiye Büyük Millet Meclisinde kabul edilmiştir. Kamu Görevlileri Etik Kurulu kamuda etik kültürünü yerleştirmek üzere çalışmalar yapmak veya yaptırmak, bu konuda yapılacak çalışmalara destek olmak ve etik uygulamayı gözetlemek görev ve yetkilerine sahiptir.
                </p>
                <p>
                  2008 yılından itibaren ise her yıl <strong>25 Mayıs gününün ülke genelinde “Etik Günü”</strong>, 25 Mayıs gününün içinde bulunduğu <strong>(25 – 31 Mayıs) haftanın da “Etik Haftası”</strong> olarak kutlanılmasını kararlaştırmıştır. Bu kapsamda, kurum ve kuruluşlarda etik kültürünü yerleştirmek ve geliştirmek amacıyla, her yıl 25 Mayıs tarihinde Etik Günü ve 25 – 31 Mayıs tarihlerinde Etik Haftası çerçevesinde çeşitli etkinlikler gerçekleştirilmektedir.
                </p>
              </div>
            </section>

            {/* Bölüm 2: Etik Davranış İlkeleri */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#009FE3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Kamu Görevlileri Etik Davranış İlkeleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {etikIlkeler.map((ilke, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#009FE3]/50 hover:shadow-md transition-all duration-300">
                    <h3 className="font-bold text-[#1B4F8A] mb-2 text-lg leading-tight">{ilke.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{ilke.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bölüm 3: Etik Eğiticileri & Eğitim Tablosu */}
            <section className="mb-10">
              <div className="bg-[#1B4F8A] rounded-t-xl px-6 py-4">
                <h2 className="text-xl font-bold text-white">Tekirdağ Büyükşehir Belediyesi Etik Eğitimleri</h2>
              </div>
              
              <div className="border-x border-b border-gray-200 rounded-b-xl overflow-hidden bg-white">
                {/* Eğitmenler */}
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-6">
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Etik Eğiticisi</span>
                    <strong className="text-gray-900">Günnur GÜNGÖR</strong>
                    <span className="block text-sm text-gray-600">Turizm ve Tanıtım Şube Müdürü</span>
                  </div>
                  <div className="hidden sm:block w-px bg-gray-200"></div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Etik Eğiticisi</span>
                    <strong className="text-gray-900">Erkan ILGAZ</strong>
                    <span className="block text-sm text-gray-600">Eğitim Şube Müdür V.</span>
                  </div>
                </div>

                {/* Eğitim Verileri Tablosu */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Kamuda Etik Kültürü Eğitimi Verilen Personel Sayılarımız</h3>
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="py-3 px-5 text-sm font-semibold text-gray-600 uppercase">Eğitmen</th>
                          <th className="py-3 px-5 text-sm font-semibold text-gray-600 uppercase">Kişi Sayısı</th>
                          <th className="py-3 px-5 text-sm font-semibold text-gray-600 uppercase">Tarih</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {egitimVerileri.map((veri, index) => (
                          <tr key={index} className="hover:bg-[#EAF4E2]/30 transition-colors">
                            <td className="py-3 px-5 text-sm font-medium text-gray-900">{veri.egitmen}</td>
                            <td className="py-3 px-5 text-sm font-bold text-[#009FE3]">{veri.kisi}</td>
                            <td className="py-3 px-5 text-sm text-gray-600 whitespace-nowrap">{veri.tarih}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Bilgi Kutusu: Etik Rehberi Dağıtımı */}
            <div className="bg-[#EAF4E2]/50 border-l-4 border-[#73B646] p-5 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <svg className="h-6 w-6 text-[#73B646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed m-0 text-sm md:text-base">
                  Tekirdağ Büyükşehir Belediyesi Etik Komisyonu tarafından 17.06.2020 tarih ve E.15563 sayılı yazı ile Kamu Görevlileri Etik Kurulu Başkanlığından 2000 adet Etik Kurulu Rehberi istenmiş ve gelen Etik Rehberler Büyükşehir Belediyemizde çalışan tüm personele dağıtılmıştır.
                </p>
              </div>
            </div>

          </div>
        </article>

      </section>
    </main>
  );
}