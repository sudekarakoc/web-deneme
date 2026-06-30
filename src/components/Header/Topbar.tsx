import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Topbar({ isScrolled, theme }: { isScrolled: boolean; theme: "light" | "dark" }) {
  const textColor = theme === "light" ? "text-white/90" : "text-gray-600";
  const hoverColor = theme === "light" ? "hover:text-white" : "hover:text-[#1B4F8A]";

  return (
    <div className={`hidden lg:flex items-center justify-between px-8 transition-all duration-500 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-[30px] opacity-100 bg-transparent"}`}>
      <div className="flex ml-auto items-center gap-4 lg:gap-6 h-full py-0.5">
        <div className={`flex items-center gap-4 font-bold text-[14px] tracking-wide ${textColor}`}>
          <Link href="#" className={`transition-colors ${hoverColor}`}>E-BÜLTEN</Link>
          <Link href="#" className={`transition-colors ${hoverColor}`}>E-POSTA</Link>
        </div>
        <div className="mt-0.5 flex items-center gap-4 lg:gap-6">
        <SocialIcons theme={theme} />
        </div>
      </div>  
    </div>
  );
}