"use client";

import React from "react";
import { ImarChange } from "../types/imarChange";
import ImarRow from "./ImarRow";

interface Props {
  changes: ImarChange[];
  expandedRowId: number | null;
  onToggle: (id: number) => void;
}

export default function ImarTable({ changes, expandedRowId, onToggle }: Props) {
  if (changes.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-20 text-center">
        <svg
          className="w-12 h-12 mx-auto text-gray-200 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7"
          />
        </svg>
        <p className="text-gray-400 text-[15px] font-medium">Arama kriterlerinize uygun kayıt bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-x-auto">
      <table className="w-full border-collapse min-w-[720px]">
        <thead>
          <tr className="border-b bg-gray-50/80">
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">Ada / Parsel</th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">Plan Türü</th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">Yeni Kullanım</th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">Karar Tarihi</th>
            <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600">Durum</th>
            <th className="px-6 py-5 text-right text-sm font-semibold text-gray-600">Detay</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {changes.map((item) => (
            <ImarRow
              key={item.id}
              change={item}
              expanded={expandedRowId === item.id}
              onToggle={onToggle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
