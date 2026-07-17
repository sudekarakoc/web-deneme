import { Metadata } from 'next';
import PerformansContent from './PerformansContent';

export const metadata: Metadata = {
  title: 'Performans Programları | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi idare performans programları arşivi',
};

export default function PerformansProgramlariPage() {
  return <PerformansContent />;
}
