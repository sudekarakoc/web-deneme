import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
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
      <div className="h-8 w-auto items-center hidden sm:flex">
        <Image 
          src="https://www.tekirdag.bel.tr/assets/2025/img/logo-text.png" 
          alt="Tekirdağ Büyükşehir Belediyesi Yazı" 
          width={140} 
          height={20}  
          priority
          unoptimized
          className="object-contain"
        />
      </div>
    </Link>
  );
}