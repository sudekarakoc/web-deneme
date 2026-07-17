import { Metadata } from 'next';
import StratejikPlanContent from './StratejikPlanContent';

export const metadata: Metadata = {
  title: 'Stratejik Plan | T.C. Tekirdağ Büyükşehir Belediyesi',
  description: 'Tekirdağ Büyükşehir Belediyesi kurumsal stratejik planlar arşivi',
};

export default function StratejikPlanPage() {
  return <StratejikPlanContent />;
}
