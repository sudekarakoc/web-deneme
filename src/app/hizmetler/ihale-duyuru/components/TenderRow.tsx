"use client";

import React from "react";
import { Tender } from "../types/tender";
import TenderDetail from "./TenderDetail";

interface Props {
  tender: Tender;
  expanded: boolean;
  onToggle: (id: number) => void;
}

export default function TenderRow({
  tender,
  expanded,
  onToggle,
}: Props) {

  const badgeColor = () => {

    switch (tender.durum) {

      case "Devam Ediyor":
        return "bg-[#EAF4E2] text-[#73B646] border-[#73B646]/20";

      case "Yaklaşıyor":
        return "bg-blue-50 text-[#009FE3] border-[#009FE3]/20";

      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }

  };

  return (
    <>
      <tr className="group transition hover:bg-[#EAF4E2]/40">

        <td className="px-6 py-5">

          <div className="font-semibold text-gray-800 group-hover:text-[#009FE3]">

            {tender.baslik}

          </div>

          <div className="mt-1 text-sm text-gray-500">

            {tender.birim}

          </div>

        </td>

        <td className="px-6 py-5">

          <div>{tender.tarih}</div>

          <div className="mt-1 text-sm text-gray-500">

            {tender.saat}

          </div>

        </td>

        <td className="px-6 py-5 text-center">

          <span
            className={`inline-flex rounded-lg border px-3 py-1.5 text-sm font-semibold ${badgeColor()}`}
          >
            {tender.durum}
          </span>

        </td>

        <td className="px-6 py-5 text-right">

          <button
            onClick={() => onToggle(tender.id)}
            className="inline-flex items-center gap-2 font-semibold text-[#009FE3]"
          >

            {expanded ? "Kapat" : "İncele"}

            <svg
              className={`h-4 w-4 transition ${
                expanded ? "rotate-90" : ""
              }`}
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

      {expanded && <TenderDetail tender={tender} />}
    </>
  );
}