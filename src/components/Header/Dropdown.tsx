import Link from "next/link";

interface DropdownProps {
  subItems: { label: string; href: string }[];
  onClose: () => void;
}

export default function Dropdown({ subItems, onClose }: DropdownProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50">
      {/* Siyah ve şeffaf arka plan yerine beyaz (bg-white) ve şık gölgeli (shadow-xl) yapı */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
        {subItems.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            // Yazı rengi lacivert yapıldı, hover durumunda arka plan buz mavisi oluyor
            className="block px-5 py-2.5 text-[14px] text-[#1B4F8A] hover:bg-[#F0F6FD] hover:text-[#0F2D52] transition-all font-medium"
            onClick={onClose}
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}