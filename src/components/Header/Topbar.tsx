import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Image from "next/image";

export default function Topbar({ isScrolled, theme }: { isScrolled: boolean; theme: "light" | "dark" }) {
  const textColor = theme === "light" ? "text-white/90" : "text-[#1B4F8A]";
  const hoverColor = theme === "light" ? "hover:text-white" : "hover:text-[#1B4F8A]";
  const borderColor = theme === "light" ? "bg-white/20" : "bg-gray-400";

  return (
    <>
    {/* YÜKSEKLİK DÜZELTİLDİ: h-[30px] yerine h-[70px] yapıldı */}
    <div className={`hidden lg:flex items-center justify-between px-8 transition-all duration-500 overflow-hidden ${
      isScrolled ? "h-0 opacity-0" : "h-[70px] opacity-100 bg-transparent"
    }`}>
      
      {/* SOL/ORTA KISIM: E-Bülten, E-Posta ve Sosyal İkonlar */}
      <div className="flex ml-auto items-center gap-4 lg:gap-6 h-full py-0.5">
        <div className={`flex items-center gap-4 font-bold text-[14px] tracking-wide ${textColor}`}>
          <Link href="#" className={`transition-colors ${hoverColor}`}>E-BÜLTEN</Link>
          <Link href="#" className={`transition-colors ${hoverColor}`}>E-POSTA</Link>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <SocialIcons theme={theme} />
        </div>
      </div>

      {/* 3. KURUMSAL LOGOLAR / KAMPANYALAR */}
      {/* MARGIN DÜZELTİLDİ: mt-4 kaldırıldı, böylece logolar flex ile dikeyde tam ortalanacak */}
      <div className="flex items-center gap-4 ml-8">
        
        {/* Kadın Dostu Kentler */}
        <Link href="https://www.kadindostukentler.org/" className="hover:scale-105 transition-transform flex items-center">
          <Image 
            src="https://static.wixstatic.com/media/5c9bb9_d609f239a97e46739f88d9cd7e34c773~mv2.png/v1/crop/x_0,y_419,w_4338,h_2825/fill/w_215,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/wfc%20logo%20sar%C4%B1%20lamba%20final-08.png"
            alt="Kadın Dostu Kentler" 
            width={150}
            height={70} 
            className="h-[38px] md:h-[48px] w-auto object-contain"
            unoptimized
          />
        </Link>

        {/* Söz Verdik Yaptık */}
        <Link href="https://www.tekirdag.bel.tr/candanbelediyecilik/" className="hover:scale-105 transition-transform flex items-center">
          <Image 
            src="https://www.tekirdag.bel.tr/assets/2025/img/sozverdik.png"
            alt="Söz Verdik Yaptık" 
            width={150}
            height={70} 
            className="h-[38px] md:h-[48px] w-auto object-contain"
            unoptimized
          />
        </Link>

        {/* Türk Bayrağı / Atatürk */}
        <div className="flex items-center ml-2">
          <Image 
            src="https://www.tekirdag.bel.tr/assets/2025/img/bayrak.png"
            alt="Türk Bayrağı ve Atatürk" 
            width={150}
            height={80} 
            className="h-[44px] md:h-[56px] w-auto object-contain"
            unoptimized
          />
        </div>
        
      </div>
    </div>
    </>
  );
}