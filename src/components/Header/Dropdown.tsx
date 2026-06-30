import Link from "next/link";

interface DropdownProps {
  subItems: { label: string; href: string }[];
  onClose: () => void;
}

export default function Dropdown({ subItems, onClose }: DropdownProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
        {subItems.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="block px-5 py-2.5 text-[14px] text-white/90 hover:bg-white/10 hover:text-white transition-all font-medium"
            onClick={onClose}
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}