import Link from "next/link";
import SearchBar from "./SearchBar";

export default function HeaderActions({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <div className="hidden lg:flex items-center gap-3 shrink-0">
      <SearchBar theme={theme} />
      <Link 
        href="#" 
        className={`px-6 py-2.5 rounded-full font-bold backdrop-blur-md transition-all whitespace-nowrap border ${
          theme === "light"
            ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#1B4F8A]"
            : "bg-[#1B4F8A] border-[#1B4F8A] text-white hover:bg-[#1B4F8A]/90 hover:shadow-md"
        }`}
      >
        E-İşlemler
      </Link>
    </div>
  );
}