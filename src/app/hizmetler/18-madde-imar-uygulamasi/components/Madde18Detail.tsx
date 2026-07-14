"use client";

import React from "react";
import { Madde18Application } from "../types/madde18";

interface Props {
  app: Madde18Application;
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

export default function Madde18Detail({ app }: Props) {
  const durum = durumConfig[app.durum];

  return (
    <tr>
      <td colSpan={7} className="p-0 border-b border-gray-100 bg-[#f8f9fa]">
        <div className="px-6 py-6 animate-fade-in">
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* Başlık bandı */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-[#1B4F8A]/5 to-[#009FE3]/5 px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Detaylı Bilgiler</p>
                <p className="text-[15px] font-bold text-[#1B4F8A] mt-0.5">
                  Dosya No: {app.dosyaNo}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold ${durum.cls}`}>
                <span className={`w-2 h-2 rounded-full ${durum.dot}`} />
                {app.durum}
              </span>
            </div>

            {/* DOP göstergesi */}
            <div className="px-6 py-5 border-b border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Düzenleme Ortaklık Payı (DOP)
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#009FE3] to-[#1B4F8A] transition-all"
                    style={{ width: `${app.yuzdeDOP}%` }}
                  />
                </div>
                <span className="text-lg font-extrabold text-[#1B4F8A] min-w-[48px] text-right">
                  %{app.yuzdeDOP}
                </span>
              </div>
            </div>

            {/* Detay satırları */}
            <div className="flex flex-col divide-y divide-gray-100">
              <DetailRow label="Uygulama Konusu"   value={app.konu} />
              <DetailRow label="Ada / Parsel"      value={`Ada: ${app.ada} — Parsel: ${app.parselNo}`} />
              <DetailRow label="Mahalle / İlçe"    value={`${app.mahalle}, ${app.ilce}`} />
              <DetailRow label="Encümen Kararı"    value={`Tarih: ${app.encumenKararTarihi} — Karar No: ${app.encumenKararNo}`} />
              <DetailRow label="Askı Başlangıç"    value={app.askiBaslangicTarihi} />
              <DetailRow label="Askı Bitiş"        value={app.askiBitisTarihi} />
              <DetailRow label="Sorumlu Mühendis"  value={app.sorumluMuhendis} />
              <DetailRow label="Açıklama"          value={app.aciklama} />
            </div>

            {/* Dökümanlar Listesi */}
            {app.dokumanlar && app.dokumanlar.length > 0 && (
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <h4 className="text-[14px] font-bold text-[#1B4F8A] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  İlgili Dosya ve Dokümanlar
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {app.dokumanlar.map((doc, idx) => (
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

function DetailRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  void last;
  return (
    <div className="flex gap-4 items-start px-6 py-3.5 hover:bg-gray-50 transition">
      <span className="min-w-[160px] text-[13.5px] font-semibold text-gray-500">{label}</span>
      <span className="text-[14px] text-gray-800 flex-1 leading-relaxed">{value}</span>
    </div>
  );
}
