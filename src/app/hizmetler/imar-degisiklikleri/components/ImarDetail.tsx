"use client";

import React from "react";
import { ImarChange } from "../types/imarChange";

interface Props {
  change: ImarChange;
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

const planTuruCls: Record<string, string> = {
  "1/1000 UİP": "bg-blue-50 text-[#009FE3] border-[#009FE3]/20",
  "1/5000 NİP": "bg-indigo-50 text-indigo-600 border-indigo-200",
  Revizyon: "bg-purple-50 text-purple-600 border-purple-200",
  İlave: "bg-teal-50 text-teal-600 border-teal-200",
};

export default function ImarDetail({ change }: Props) {
  const durum = durumConfig[change.durum];
  return (
    <tr>
      <td colSpan={6} className="p-0 border-b border-gray-100 bg-[#f8f9fa]">
        <div className="px-6 py-6 animate-fade-in">
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Başlık Bandı */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#1B4F8A]/5 to-[#009FE3]/5 px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Plan Detayı
                </p>
                <p className="text-[15px] font-bold text-[#1B4F8A] mt-0.5">
                  Ada: {change.ada} — Parsel: {change.parselNo}
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap justify-end">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold ${planTuruCls[change.planTuru] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
                >
                  {change.planTuru}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold ${durum.cls}`}
                >
                  <span className={`w-2 h-2 rounded-full ${durum.dot}`} />
                  {durum.label}
                </span>
              </div>
            </div>

            {/* Değişim Karşılaştırması */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Önceki Durum
                </p>
                <p className="text-[15px] text-gray-700 font-medium">{change.oncekiDurum}</p>
              </div>
              <div className="px-6 py-5 bg-[#EAF4E2]/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#73B646] mb-2">
                  Yeni Durum
                </p>
                <p className="text-[15px] text-gray-800 font-semibold">{change.yeniDurum}</p>
              </div>
            </div>

            {/* Detay Satırları */}
            <div className="flex flex-col divide-y divide-gray-100 border-t border-gray-100">
              <DetailRow label="Mahalle" value={`${change.mahalle}, ${change.ilce}`} />
              <DetailRow label="Karar No" value={change.karar} />
              <DetailRow label="Karar Tarihi" value={change.kararTarih} />
              <DetailRow label="Yürürlük Tarihi" value={change.yururlukTarih} />
              <DetailRow label="Açıklama" value={change.aciklama} last />
            </div>

            {/* Dökümanlar Listesi */}
            {change.dokumanlar && change.dokumanlar.length > 0 && (
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <h4 className="text-[14px] font-bold text-[#1B4F8A] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  İlgili Dosya ve Dokümanlar
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {change.dokumanlar.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-[#009FE3] hover:shadow-sm transition-all group"
                    >
                      <div className="w-10 h-10 shrink-0 bg-[#EAF4E2] text-[#73B646] rounded-lg flex items-center justify-center group-hover:bg-[#009FE3] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-gray-800 truncate group-hover:text-[#009FE3] transition-colors" title={doc.baslik}>
                          {doc.baslik}
                        </p>
                      </div>
                      <div className="shrink-0 text-gray-400 group-hover:text-[#009FE3] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

function DetailRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex gap-4 items-start px-6 py-3.5 hover:bg-gray-50 transition ${
        last ? "" : ""
      }`}
    >
      <span className="min-w-[140px] text-[13.5px] font-semibold text-gray-500">{label}</span>
      <span className="text-[14px] text-gray-800 flex-1">{value}</span>
    </div>
  );
}
