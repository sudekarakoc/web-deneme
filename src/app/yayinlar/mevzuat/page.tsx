import { Metadata } from 'next';
import MevzuatContent from './MevzuatContent';

export const metadata: Metadata = {
  title: 'Mevzuat | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi mevzuat, yönetmelikler, Resmi Gazete ve ilgili dosya arşivleri',
};

export default function MevzuatPage() {
  return <MevzuatContent />;
}
