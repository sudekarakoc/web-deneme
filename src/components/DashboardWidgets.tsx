"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Megaphone, FileText, Calendar } from "lucide-react";

// Verilere link property'si eklendi
const data = {
  ilanlar: [
    { id: 1, title: "5. Etap Kent Merkezi 1/1000 Ölçek...", date: "18 Şub 2026", url: "#" },
    { id: 2, title: "2026 Ocak - Metruk Yapılar", date: "02 Şub 2026", url: "#" },
    { id: 3, title: "Aşkarbeyli Mıntıkası 5486, 22388 ...", date: "21 Oca 2026", url: "#" },
    { id: 4, title: "Metruk Yapılar Hk.", date: "13 Oca 2026", url: "#" },
    { id: 5, title: "Numune Mah. Metruk Yapı Hk", date: "06 Oca 2026", url: "#" },
  ],
  ihaleler: [
    { id: 1, title: "T.C. İSKENDERUN İCRA DAİRESİ", date: "08 Eyl 2026", url: "#" },
    { id: 2, title: "Yatırım ve Emlak Şube Müdürlüğü İ...", date: "24 Tem 2026", url: "#" },
    { id: 3, title: "ASFALT BİTÜMÜ NAKLİ HİZMET A...", date: "13 Tem 2026", url: "#" },
    { id: 4, title: "KIRMATAŞ VE PLENT-MİKS(PMT) ...", date: "10 Tem 2026", url: "#" },
    { id: 5, title: "SAHİL SOSYAL TESİSLER TEFRİŞA...", date: "03 Tem 2026", url: "#" },
  ],
  etkinlikler: [
    { id: 1, title: 'Türk Sanat Müziği Korosu "Gönüld...', date: "17 Haz 2025", url: "#" },
    { id: 2, title: "Açık Hava Sinema Etkinliği Kral Şa...", date: "14 Haz 2025", url: "#" },
    { id: 3, title: "Kurban Bayramı Bayramlaşma Pr...", date: "05 Haz 2025", url: "#" },
    { id: 4, title: "Neşeli Günler Açık Hava Sinema E...", date: "04 Haz 2025", url: "#" },
    { id: 5, title: "İskenderun belediyesi musiki dern...", date: "14 May 2025", url: "#" },
  ],
};

function Column({ title, items, Icon }: { title: string; items: any[]; Icon: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)", duration: 0.3 });
  };
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)", duration: 0.3 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full transition-all"
    >
      <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-slate-50">
        {title}
      </h2>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="group flex items-start gap-3 transition-transform active:scale-[0.98]"
          >
            <div className="mt-0.5 text-slate-400 group-hover:text-blue-600 transition-colors">
              <Icon size={16} strokeWidth={2} />
            </div>
            <div>
              <span className="block text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors leading-snug">
                {item.title}
              </span>
              <span className="block text-[11px] text-slate-400 mt-1 font-medium tracking-wide uppercase">
                {item.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function DashboardWidgets() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".widget-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-slate-50 p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="widget-card"><Column title="İlanlar" items={data.ilanlar} Icon={Megaphone} /></div>
        <div className="widget-card"><Column title="İhaleler" items={data.ihaleler} Icon={FileText} /></div>
        <div className="widget-card"><Column title="Etkinlikler" items={data.etkinlikler} Icon={Calendar} /></div>
      </div>
    </div>
  );
}