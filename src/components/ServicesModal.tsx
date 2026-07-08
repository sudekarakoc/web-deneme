"use client";
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

const renderIcon = (iconName?: string) => {
  const Svg = ({ children }: { children: React.ReactNode }) => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      {children}
    </svg>
  );

  switch (iconName) {
    case "wallet": return <Svg><rect x="2" y="7" width="20" height="12" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/></Svg>;
    case "droplet": return <Svg><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-8c-.5 4-2 6.5-4 8s-3 3.5-3 5.5a7 7 0 0 0 7 7z"/></Svg>;
    case "gavel": return <Svg><path d="m14.5 14.5-8-8"/><path d="m18.5 10.5-8-8"/><path d="m18.5 10.5 4 4"/><path d="m14.5 14.5 4 4"/><path d="m10.5 18.5 4-4"/></Svg>;
    case "building-2": return <Svg><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></Svg>;
    case "map-pinned": return <Svg><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></Svg>;
    case "trending-up": return <Svg><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></Svg>;
    case "bus": return <Svg><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M8 19h8"/><path d="M12 3v8"/></Svg>;
    case "drill": return <Svg><path d="M10 22v-3.5a5 5 0 0 1 5-5H22"/><path d="M22 13.5V17a3 3 0 0 1-3 3h-2"/><path d="M10 2l4 4"/><path d="M18 10l-4 4"/></Svg>;
    case "tv": return <Svg><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></Svg>;
    case "compass": return <Svg><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></Svg>;
    case "flower": return <Svg><circle cx="12" cy="12" r="3"/><path d="M12 16v4"/><path d="M12 8V4"/><path d="M16 12h4"/><path d="M8 12H4"/><path d="m14.8 14.8 2.8 2.8"/><path d="m9.2 9.2 2.8 2.8"/></Svg>;
    case "shield-check": return <Svg><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></Svg>;
    case "heart-handshake": return <Svg><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-6 2-3-1.5-4.24-2-6-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5L12 22l7-8Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0a2.17 2.17 0 0 0 3.08 0L15 8.16"/></Svg>;
    case "dog": return <Svg><path d="M2 12s3-4 7-4 7 4 7 4"/><path d="M9 12v6"/><path d="M15 12v6"/><path d="M20 16v4"/><path d="M21 8.5V6a2 2 0 0 0-2-2h-5"/><path d="M12 8.5V6a2 2 0 0 1 2-2h5"/></Svg>;
    case "graduation-cap": return <Svg><path d="M21.42 10.22A2 2 0 0 0 20 9H4a2 2 0 0 0-1.42 1.22l8 2.67a1 1 0 0 0 .84 0l8-2.67Z"/><path d="m18 12-4.14 1.38"/><path d="M12 12v6"/><path d="M8 15.5 4 17"/><path d="M20 15.5V9"/><path d="m20 15.5-4 1.5"/></Svg>;
    case "clipboard-list": return <Svg><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></Svg>;
    case "palette": return <Svg><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.437-.15-.815-.366-1.127-.197-.282-.366-.563-.366-.845 0-1.127.93-2.056 2.056-2.056H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z"/></Svg>;
    case "theater": return <Svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10h4v4h-4z"/></Svg>;
    case "recycle": return <Svg><path d="M7 19H4.5a2.5 2.5 0 0 1 0-5H8"/><path d="M17 5h2.5a2.5 2.5 0 0 1 0 5H16"/><path d="M19 19H17"/><path d="M5 5h2"/><path d="M10 19l-3-3m0 0 3-3m-3 3h14M14 5l3 3m0 0l-3 3m3-3H4"/></Svg>;
    case "coins": return <Svg><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/></Svg>;
    case "truck": return <Svg><rect width="18" height="12" x="1" y="3" rx="2"/><path d="M19 15h2l2-4V9c0-1.1-.9-2-2-2h-2"/><path d="M4 15v4a2 2 0 0 0 2 2h2"/><path d="M14 15v4a2 2 0 0 0 2 2h2"/></Svg>;
    case "waves": return <Svg><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></Svg>;
    case "shield-alert": return <Svg><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Svg>;
    case "users": return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case "train-front": return <Svg><path d="M21 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4"/><path d="M3 15h18"/><path d="M5 21V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12"/><path d="M12 15v4"/></Svg>;
    case "sprout": return <Svg><path d="M7 20h10"/><path d="M10 20c5.5-2.5 2.5-8 0-13-2.5 5-5.5 10.5 0 13Z"/><path d="M10 20c-5.5-2.5-2.5-8 0-13 2.5 5 5.5 10.5 0 13Z"/></Svg>;
    case "package": return <Svg><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></Svg>;
    case "newspaper": return <Svg><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M12 6h6"/><path d="M12 10h6"/><path d="M12 14h6"/><path d="M12 18h6"/></Svg>;
    case "file-text": return <Svg><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></Svg>;
    case "scale": return <Svg><path d="m16 16 3-8 3 8"/><path d="M7 16V8"/><path d="M2 16h10"/><path d="M12 18h6"/><path d="M12 18v2"/><path d="M12 20H8"/><path d="M12 20h4"/></Svg>;
    case "bar-chart-3": return <Svg><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></Svg>;
    case "target": return <Svg><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></Svg>;
    case "pie-chart": return <Svg><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></Svg>;
    case "book-open": return <Svg><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Svg>;
    case "smile": return <Svg><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></Svg>;
    case "receipt": return <Svg><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6"/><path d="M16 12H10"/><path d="M16 16H10"/></Svg>;
    case "trash-2": return <Svg><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></Svg>;
    case "plane": return <Svg><path d="M2 12h20"/><path d="M17.5 12 12 6.5"/><path d="M17.5 12 12 17.5"/></Svg>;
    case "parking-square": return <Svg><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a2 2 0 0 1 0 4H9"/></Svg>;
    case "database": return <Svg><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></Svg>;
    case "check-square": return <Svg><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></Svg>;
    case "microscope": return <Svg><path d="M6 18h8"/><path d="M10 22v-4"/><path d="M8 22h4"/><path d="M18 22l-4-4"/><path d="M12 11l4 4"/><path d="M12 11V3l-3 3"/><path d="M12 6h3"/></Svg>;
    default: return <Svg><circle cx="12" cy="12" r="1"/></Svg>; 
  }
};

export default function ServicesModal({ 
  isOpen, 
  onClose, 
  activeTab = "Hizmetler" // Varsayılan değer "Hizmetler"
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  activeTab?: string
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ENTEGRASYON: Sadece activeTab prop'una göre veriyi filtrele
  const groupedServices = useMemo(() => {
    const category = NAV_ITEMS.find((item) => item.label === activeTab);
    const dataToProcess = category?.sub || [];

    return dataToProcess.reduce((acc, service) => {
      const groupName = service.group || "Diğer";
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(service);
      return acc;
    }, {} as Record<string, typeof dataToProcess>);
  }, [activeTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.95, y: 20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.05 }
      );
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, { opacity: 0, scale: 0.95, y: -10, duration: 0.2 });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, onComplete: onClose });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      

      {/* Modal - KOYU CAM EFEKTİ (Siyah/Lacivert tonlarında şeffaf) */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl bg-slate-900/70 backdrop-blur-3xl rounded-3xl shadow-[0_30px_60px_rgb(0,0,0,0.5)] p-8 md:p-10 max-h-[85vh] flex flex-col border border-white/10"
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 shrink-0">
          <h2 className="text-2xl font-regular text-white tracking-wide">
            Tüm {activeTab}
          </h2>
          
          <button 
            onClick={handleClose}
            aria-label="Kapat"
            title="Kapat"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white border border-white/5 hover:bg-white/20 hover:rotate-90 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 pb-4 space-y-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors">
          {Object.entries(groupedServices).map(([groupName, services], index) => (
            <div key={index}>
              
              <div className="flex items-center gap-3 mb-5">
                {/* Kategori Başlığı rengini belirginleştirdik */}
                <h3 className="text-[15px] font-medium text-gray-300 tracking-wider">
                  {groupName.toLocaleUpperCase('tr-TR')}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, sIndex) => (
                  // Butonlar hala beyaz DEĞİL. İçi çok hafif şeffaf beyaz (bg-white/5).
                  <Link
                    key={sIndex}
                    href={service.href || "#"}
                    onClick={handleClose}
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:bg-white/10 hover:shadow-lg hover:border-white/20 backdrop-blur-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {/* İkon Kutusu */}
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center group-hover:bg-[#009FE3] group-hover:text-white transition-all shrink-0">
                        {renderIcon(service.icon)}
                      </div>
                      
                      {/* Metin Rengi: Artık bu koyu zemin üzerinde gayet net okunacak */}
                      <span className="font-medium text-[13px] text-gray-200 group-hover:text-white transition-colors leading-tight">
                        {service.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}