import { Metadata } from 'next';
import GelirTarifeleriContent from './GelirTarifeleriContent';

export const metadata: Metadata = {
  title: 'Gelir Tarifeleri | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi ücrete tabi işler ve gelir tarifeleri arşivleri',
};

export default function GelirTarifeleriPage() {
  return <GelirTarifeleriContent />;
}
