"use client";

import { Tender } from "../types/tender";
import TenderRow from "./TenderRow";

// TenderTable.tsx içindeki interface tanımı
interface TenderTableProps {
  tenders: Tender[];
  expandedRowId: number | null;
  onToggle: (id: number) => void; // <-- İsimlendirme page.tsx ile aynı olmalı
}

export default function TenderTable({

  tenders,

  expandedRowId,

  onToggle,

}: TenderTableProps) {

  return (

    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

      <table className="w-full border-collapse">

        <thead>

          <tr className="border-b bg-gray-50/80">

            <th className="px-6 py-5 text-left text-sm">

              İhale Adı / Birim

            </th>

            <th className="px-6 py-5 text-left text-sm">

              Tarih & Saat

            </th>

            <th className="px-6 py-5 text-center text-sm">

              Durum

            </th>

            <th className="px-6 py-5 text-right text-sm">

              Detay

            </th>

          </tr>

        </thead>

        <tbody className="divide-y divide-gray-100">

          {tenders.map((item) => (

            <TenderRow
              key={item.id}
              tender={item}
              expanded={expandedRowId === item.id}
              onToggle={onToggle}
            />

          ))}

        </tbody>

      </table>

    </div>

  );

}