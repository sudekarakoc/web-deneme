import { Metadata } from 'next';
import SayistayContent from './SayistayContent';

export const metadata: Metadata = {
  title: 'Sayıştay Raporları | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi Sayıştay denetim raporları arşivi',
};

export default function SayistayRaporlariPage() {
  return <SayistayContent />;
}
