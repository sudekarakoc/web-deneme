import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton' // Yukarı çık butonunu import ettik
import CookieBanner from '@/components/CookieBanner';

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
  src: './fonts/sf-pro-display-regular.woff2', // İndirdiğin dosyanın adıyla birebir aynı olmalı
  variable: '--font-sf-pro', // Tailwind için özel bir değişken oluşturuyoruz
  weight: '400',
  style: 'normal',
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
        
        <main>{children}</main>
        
        <Footer />
        
        {/* İstemci tarafında çalışan butonumuzu en alta ekliyoruz */}
        <ScrollToTopButton />

        {/* Çerez banner'ını ekliyoruz */}
        <CookieBanner />
        
      </body>
    </html>
  )
}