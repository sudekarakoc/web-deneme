import { Metadata } from 'next';
import SahipsizHayvanContent from './SahipsizHayvanContent';

export const metadata: Metadata = {
  title: 'Sahipsiz Hayvan Geçici Bakımevi Hizmetleri | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi sahipsiz hayvan geçici bakımevi, kedi-köpek tedavi, yoğun bakım, laboratuvar ve ameliyathane rehabilitasyon hizmetleri',
};

export default function SahipsizHayvanPage() {
  return <SahipsizHayvanContent />;
}
