import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Logo() {

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
 <Link href="/" className="flex items-center gap-3 shrink-0">
  {/* 1. AMBLEM (Hep aynı renk kalır) */}
  <div className="h-10 w-auto flex items-center">
    <Image 
      src="https://www.tekirdag.bel.tr/assets/2025/img/logo.png" 
      alt="Tekirdağ Büyükşehir Belediyesi Amblem"
      width={50} 
      height={50} 
      priority 
      unoptimized
      className="object-contain"
    />
  </div>

  {/* 2. YAZI (Sadece anasayfada beyaz, iç sayfalarda koyu) */}
  <div className="h-8 w-auto items-center hidden sm:flex">
    <Image 
      src="https://www.tekirdag.bel.tr/assets/2025/img/logo-text.png" 
      alt="Tekirdağ Büyükşehir Belediyesi Yazı" 
      width={140} 
      height={20}  
      priority
      unoptimized
      // isHomePage true ise beyaz yapar, false ise hiçbir şey eklemez (koyu kalır)
      className={`object-contain ${isHomePage ? "brightness-0 invert" : ""}`}
    />
  </div>
</Link>
  );
}