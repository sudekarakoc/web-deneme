"use client";

import React from "react";
import { Madde18Application } from "../types/madde18";
import Madde18Detail from "./Madde18Detail";

interface Props {
  app: Madde18Application;
  expanded: boolean;
  onToggle: (id: number) => void;
}

const durumConfig: Record<
  Madde18Application["durum"],
  { cls: string; dot: string }
> = {
  "Tamamlandı":   { cls: "bg-[#EAF4E2] text-[#3a7d1e] border-[#73B646]/20", dot: "bg-[#73B646]" },
  "Devam Ediyor": { cls: "bg-blue-50 text-[#009FE3] border-[#009FE3]/20",    dot: "bg-[#009FE3]" },
  "Askıda":       { cls: "bg-amber-50 text-amber-700 border-amber-200",       dot: "bg-amber-400" },
  "İptal":        { cls: "bg-red-50 text-red-600 border-red-200",             dot: "bg-red-400"   },
};

export default function Madde18Row({ app, expanded, onToggle }: Props) {
  const durum = durumConfig[app.durum];

  return (
    <>
      <tr className="group transition hover:bg-[#EAF4E2]/30">
        {/* Açıklama / Uygulama Konusu */}
        <td className="px-6 py-5 max-w-[320px]">
          <div className="font-semibold text-gray-800 line-clamp-2 text-[14px]" title={app.konu}>
            {app.konu}
          </div>
          <div className="mt-1 text-xs text-gray-400">Dosya: {app.dosyaNo}</div>
        </td>

        {/* İlçe / Mahalle */}
        <td className="px-6 py-5">
          <div className="text-sm font-semibold text-[#1B4F8A]">{app.ilce}</div>
          <div className="mt-0.5 text-xs text-gray-500">{app.mahalle}</div>
        </td>

        {/* Ada / Parsel */}
        <td className="px-6 py-5">
          <div className="text-sm text-gray-700">Ada: <span className="font-semibold">{app.ada}</span></div>
          <div className="mt-0.5 text-xs text-gray-500">Parsel: {app.parselNo}</div>
        </td>

        {/* Encümen Kararı */}
        <td className="px-6 py-5">
          <div className="text-sm text-gray-700 font-semibold">{app.encumenKararTarihi}</div>
          <div className="mt-0.5 text-xs text-gray-400">Karar No: {app.encumenKararNo}</div>
        </td>

        {/* Askı Süresi */}
        <td className="px-6 py-5">
          {app.askiBaslangicTarihi !== "—" ? (
            <>
              <div className="text-sm text-gray-700 font-medium">
                {app.askiBaslangicTarihi}
              </div>
              <div className="text-xs text-gray-400">
                {app.askiBitisTarihi}
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-400">—</div>
          )}
        </td>

        {/* Durum */}
        <td className="px-6 py-5 text-center">
          <span className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold ${durum.cls}`}>
            <span className={`w-2 h-2 rounded-full ${durum.dot}`} />
            {app.durum}
          </span>
        </td>

        {/* Detay */}
        <td className="px-6 py-5 text-right">
          <button
            onClick={() => onToggle(app.id)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#009FE3] hover:text-[#1B4F8A] transition-colors"
          >
            {expanded ? "Kapat" : "İncele"}
            <svg
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </td>
      </tr>

      {expanded && <Madde18Detail app={app} />}
    </>
  );
}
