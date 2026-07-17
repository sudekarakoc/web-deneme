import { Metadata } from 'next';
import KatiAtikUcretContent from './KatiAtikUcretContent';

export const metadata: Metadata = {
  title: 'Katı Atık Ücret Tarifeleri | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi evsel katı atık toplama, taşıma ve bertaraf ücret tarifeleri arşivleri',
};

export default function KatiAtikUcretPage() {
  return <KatiAtikUcretContent />;
}
