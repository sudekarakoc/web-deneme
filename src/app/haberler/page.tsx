import News from '@/components/News';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
// Sayfanın tarayıcı sekmesindeki başlığı (SEO için faydalı)
export const metadata = {
  title: 'Tüm Haberler | Belediyemiz',
  description: 'Belediyemizden en güncel haberler ve duyurular.',
};

export default function HaberlerPage() {
  return (
    <main className="min-h-auto bg-zinc-50 font-sans font-normal antialiased pb-10 md:pb-16">    
      {/* Az önce hazırladığımız ana haber bileşenini buraya çağırıyoruz */}
      <News />
    </main>
  );
}