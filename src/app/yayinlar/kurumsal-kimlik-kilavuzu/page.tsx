import { Metadata } from 'next';
import KurumsalKimlikContent from './KurumsalKimlikContent';

export const metadata: Metadata = {
  title: 'Kurumsal Kimlik Kılavuzu | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi kurumsal kimlik kılavuzu ve sunum şablonu',
};

export default function KurumsalKimlikPage() {
  return <KurumsalKimlikContent />;
}
