import Link from "next/link";
import Image from "next/image";

// Header'dan gelecek theme prop'unun tipini tanımlıyoruz
interface LogoProps {
  theme?: "light" | "dark";
}

export default function Logo({ theme = "dark" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      {/* 1. AMBLEM (Hep aynı renk kalır) */}
      <div className="h-10 w-auto flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="Tekirdağ Büyükşehir Belediyesi Amblem"
          width={50} 
          height={50} 
          priority 
          unoptimized
          className="object-contain"
        />
      </div>

      {/* 2. YAZI (Tema light ise beyaz, dark ise kendi koyu rengi) */}
      <div className="h-8 w-auto items-center hidden sm:flex">
        <Image 
          src="/images/logo-text.png" 
          alt="Tekirdağ Büyükşehir Belediyesi Yazı" 
          width={140} 
          height={20}  
          priority
          unoptimized
          // theme "light" ise beyaz yapar, değilse hiçbir şey eklemez (orijinal koyu kalır)
          // Animasyonun yumuşak olması için transition-all ve duration-300 eklendi
          className={`object-contain transition-all duration-300 ${
            theme === "light" ? "brightness-0 invert" : ""
          }`}
        />
      </div>
    </Link>
  );
}