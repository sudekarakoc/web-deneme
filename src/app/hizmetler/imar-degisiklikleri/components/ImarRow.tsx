"use client";

import React from "react";
import { ImarChange } from "../types/imarChange";
import ImarDetail from "./ImarDetail";

interface Props {
  change: ImarChange;
  expanded: boolean;
  onToggle: (id: number) => void;
}

const durumConfig: Record<ImarChange["durum"], { label: string; cls: string; dot: string }> = {
  Yürürlükte: {
    label: "Yürürlükte",
    cls: "bg-[#EAF4E2] text-[#3a7d1e] border-[#73B646]/20",
    dot: "bg-[#73B646]",
  },
  Askıda: {
    label: "Askıda",
    cls: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-400",
  },
  İptal: {
    label: "İptal",
    cls: "bg-red-50 text-red-600 border-red-200",
    dot: "bg-red-400",
  },
};

export default function ImarRow({ change, expanded, onToggle }: Props) {
  const durum = durumConfig[change.durum];

  return (
    <>
      <tr className="group transition hover:bg-[#EAF4E2]/30">
        {/* Ada / Parsel */}
        <td className="px-6 py-5">
          <div className="font-bold text-[#1B4F8A] group-hover:text-[#009FE3] transition-colors">
            Ada {change.ada} / Parsel {change.parselNo}
          </div>
          <div className="mt-1 text-sm text-gray-500">
            {change.mahalle}, {change.ilce}
          </div>
        </td>

        {/* Plan Türü */}
        <td className="px-6 py-5">
          <span className="inline-block text-sm font-medium text-gray-700 bg-gray-100 rounded-lg px-3 py-1">
            {change.planTuru}
          </span>
        </td>

        {/* Yeni Durum */}
        <td className="px-6 py-5">
          <div className="text-sm text-gray-800 font-medium leading-snug max-w-xs">
            {change.yeniDurum}
          </div>
        </td>

        {/* Karar Tarihi */}
        <td className="px-6 py-5">
          <div className="text-sm text-gray-700">{change.kararTarih}</div>
          <div className="mt-1 text-xs text-gray-400">{change.karar}</div>
        </td>

        {/* Durum */}
        <td className="px-6 py-5 text-center">
          <span
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold ${durum.cls}`}
          >
            <span className={`w-2 h-2 rounded-full ${durum.dot}`} />
            {durum.label}
          </span>
        </td>

        {/* Detay Butonu */}
        <td className="px-6 py-5 text-right">
          <button
            onClick={() => onToggle(change.id)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#009FE3] hover:text-[#1B4F8A] transition-colors"
          >
            {expanded ? "Kapat" : "İncele"}
            <svg
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </td>
      </tr>

      {expanded && <ImarDetail change={change} />}
    </>
  );
}
