import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton' // Yukarı çık butonunu import ettik
import CookieBanner from '@/components/CookieBanner';
import MobileBottomNav from '@/components/MobileBottomNav';

export const metadata: Metadata = {
  title: 'T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi resmi web sitesi. Hizmetler, duyurular, haberler ve e-belediye.',
  keywords: 'Tekirdağ, büyükşehir belediyesi, e-belediye, hizmetler',
  openGraph: {
    title: 'Tekirdağ Büyükşehir Belediyesi',
    description: 'Mavi Gözlü Kent Tekirdağ resmi belediye sitesi',
    url: 'https://www.tekirdag.bel.tr',
    siteName: 'Tekirdağ Büyükşehir Belediyesi',
    locale: 'tr_TR',
    type: 'website',
  },
}

const sfPro = localFont({
  src: [
    {
      path: './fonts/sf-pro-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sf-pro-display-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/sf-pro-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${sfPro.variable} font-sans`}>
        
        <Header />
        
        <div id="app-content">{children}</div>
        
        <Footer />
        
        {/* İstemci tarafında çalışan butonumuzu en alta ekliyoruz */}
        <ScrollToTopButton />
        
        {/* Mobilde kaydırınca çıkan alt menü */}
        <MobileBottomNav />

        {/* Çerez banner'ını ekliyoruz */}
        <CookieBanner />
        
      </body>
    </html>
  )
}