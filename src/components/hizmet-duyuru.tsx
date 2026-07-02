"use client";

import { useEffect, useState } from "react";
import { ChevronUp, type LucideIcon } from "lucide-react";
import { TAB_DATA } from "@/lib/servicesData";

// ---------- Renkler ----------
const COLORS = {
  navyDeep: "#0A2540",
  navyText: "#1A3A57",
  tabActiveBg: "#5E7A93",
  tabInactiveBg: "#C7D4DE",
  accentBar: "#1D5C8A",
  dateMuted: "#94A0AC",
  border: "#E3E9EE",
  cardBg: "#FFFFFF",
};

const ICON_PALETTE = [
  { bg: "#FCEFE3", fg: "#E8732C" },
  { bg: "#E6F2FB", fg: "#2E86AB" },
  { bg: "#F1F3F5", fg: "#5B6B79" },
  { bg: "#E9F7EF", fg: "#3F9142" },
  { bg: "#E7ECF3", fg: "#1D3C5C" },
  { bg: "#FDEDEE", fg: "#D9534F" },
];

// ---------- Tipler ----------
interface HizmetItem {
  id: string;
  label: string;
  Icon: LucideIcon;
}

interface HizmetTab {
  id: string;
  label: string;
  items: HizmetItem[];
}

interface DuyuruItem {
  id: string;
  title: string;
  date: string;
}

interface DuyuruTab {
  id: string;
  label: string;
  items: DuyuruItem[];
}

const { hizmetTabs = [], duyuruTabs = [] } = TAB_DATA as {
  hizmetTabs: HizmetTab[];
  duyuruTabs: DuyuruTab[];
};

// ---------- Tab Bar ----------
function TabBar({
  tabs,
  activeId,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex">
      {tabs.map((tab) => {
        const active = tab.id === activeId;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`flex-1 px-3 py-4 text-center text-[13px] font-bold transition ${active ? "bg-[#5E7A93] text-white" : "bg-[#C7D4DE] text-[#1A3A57]"}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

// ---------- Hizmetler ----------
function HizmetlerWidget() {
  const [activeTab, setActiveTab] = useState(hizmetTabs[0]?.id ?? "");
  const current =
    hizmetTabs.find((t) => t.id === activeTab) ?? hizmetTabs[0];

  if (!current) return null;

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border"
      style={{ borderColor: COLORS.border, background: COLORS.cardBg }}
    >
      <TabBar
        tabs={hizmetTabs}
        activeId={activeTab}
        onChange={setActiveTab}
      />

      <div className="max-h-[360px] overflow-y-auto p-6">
        {current.items?.length ? (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {current.items.map((item, i) => {
              const palette = ICON_PALETTE[i % ICON_PALETTE.length];

              return (
                <a
                  key={item.id}
                  href="#"
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:scale-105"
                    style={{
                      background: palette.bg,
                      color: palette.fg,
                    }}
                  >
                    <item.Icon size={24} strokeWidth={1.8} />
                  </span>

                  <span
                    className="text-[11px] font-bold uppercase leading-tight"
                    style={{ color: COLORS.navyText }}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        ) : (
          <p className="py-8 text-center text-sm text-gray-400">
            İçerik bulunamadı
          </p>
        )}
      </div>
    </div>
  );
}

// ---------- Duyurular ----------
function DuyurularWidget() {
  const [activeTab, setActiveTab] = useState(duyuruTabs[0]?.id ?? "");
  const current =
    duyuruTabs.find((t) => t.id === activeTab) ?? duyuruTabs[0];

  if (!current) return null;

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl border"
      style={{ borderColor: COLORS.border, background: COLORS.cardBg }}
    >
      <TabBar
        tabs={duyuruTabs}
        activeId={activeTab}
        onChange={setActiveTab}
      />

      <div className="max-h-[360px] overflow-y-auto px-5">
        <ul>
          {current.items?.map((item) => (
            <li
              key={item.id}
              className="flex gap-3 border-b py-3 last:border-0"
              style={{ borderColor: COLORS.border }}
            >
              <span
                className="w-1 rounded-full"
                style={{ background: COLORS.accentBar }}
              />

              <a href="#" className="flex-1">
                <p
                  className="text-[13.5px] font-bold hover:underline"
                  style={{ color: COLORS.navyDeep }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: COLORS.dateMuted }}
                >
                  {item.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------- Scroll Top ----------
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Sayfanın üstüne dön"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2540] text-white shadow-lg transition hover:scale-105"
    >
      <ChevronUp size={22} />
    </button>
  );
}

// ---------- Main ----------
export default function HizmetlerDuyurularBolumu() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <HizmetlerWidget />
      </div>

      <div>
        <DuyurularWidget />
      </div>

      <ScrollToTopButton />
    </section>
  );
}