"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { TAB_DATA } from "@/lib/servicesData";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ITEMS_PER_PAGE = 12;

// TAB_DATA may be an object with multiple arrays (e.g. { hizmetTabs: [...], duyuruTabs: [...] })
// Use keyof typeof TAB_DATA to index into all possible arrays and get their element type
// Extract only tab entries that contain items so ServiceItem is correctly inferred.
type ServiceTab = Extract<
  (typeof TAB_DATA)[keyof typeof TAB_DATA][number],
  {
    id: string;
    label: string;
    items: {
      title: string;
      icon: ReactNode;
      color?: string;
    }[];
  }
>;
type ServiceItem = ServiceTab["items"][number];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("belediye");
  const [showAll, setShowAll] = useState(false);

  // TAB_DATA is an object with multiple arrays (e.g. { hizmetTabs: [...], duyuruTabs: [...] })
  // Flatten all tab arrays and assert they match ServiceTab[] so items are available
  const allTabs: ServiceTab[] = (Object.values(TAB_DATA) as ServiceTab[][]).flat();
  const activeItems: ServiceItem[] = allTabs.find((tab) => tab.id === activeTab)?.items ?? [];

  const visibleItems = showAll
    ? activeItems
    : activeItems.slice(0, ITEMS_PER_PAGE);

  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TAB */}
        <div className="flex gap-8 border-b border-zinc-200 mb-8 overflow-x-auto pb-3 hide-scrollbar">
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowAll(false);
              }}
              className={`relative font-bold pb-2 text-[15px] whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-[#1B4F8A]"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {tab.label}

              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#1B4F8A] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* GRID (TEK VE TEMİZ) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-zinc-200
                rounded-2xl
                p-4
                h-[170px]
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md
                hover:border-[#1B4F8A]
              "
            >
              <div
                className={`
                  w-12 h-12 mb-3
                  flex items-center justify-center
                  rounded-lg
                  text-xl
                  transition-colors duration-300
                  group-hover:bg-[#1B4F8A]
                  group-hover:text-white
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              <span className="text-[13px] font-semibold text-center text-zinc-600 group-hover:text-[#0F2D52]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* LOAD MORE (SAĞ ALT) */}
        {activeItems.length > ITEMS_PER_PAGE && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                w-52
                h-10
                rounded-full
                border border-[#1B4F8A]
                bg-white
                flex items-center justify-center gap-2
                group
                transition-all duration-300
                hover:bg-[#1B4F8A]
              "
            >
              <span className="text-sm font-semibold text-[#1B4F8A] group-hover:text-white">
                {showAll ? "Daha Az Göster" : "Daha Fazla Göster"}
              </span>

              <ChevronDownIcon
                className={`
                  w-5 h-5
                  text-[#1B4F8A]
                  group-hover:text-white
                  transition-transform duration-300
                  ${showAll ? "rotate-180" : ""}
                `}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}