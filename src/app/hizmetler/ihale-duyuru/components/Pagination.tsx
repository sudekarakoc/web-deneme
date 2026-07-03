"use client";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between mt-6 px-2">

      <div className="flex items-center gap-2">

        <button
          disabled
          title="Previous page"
          aria-label="Previous page"
          className="p-2 rounded-xl border border-gray-200 text-gray-400 disabled:opacity-50"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-1">

          <button className="w-9 h-9 rounded-xl bg-[#009FE3] text-white font-bold">
            1
          </button>

          <button className="w-9 h-9 rounded-xl hover:bg-gray-100">
            2
          </button>

          <button className="w-9 h-9 rounded-xl hover:bg-gray-100">
            3
          </button>

          <span className="px-2 text-gray-400">...</span>

          <button className="w-9 h-9 rounded-xl hover:bg-gray-100">
            6
          </button>

        </div>

        <button
          title="Next page"
          aria-label="Next page"
          className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"
        >
          <svg
            className="w-5 h-5"
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

      </div>

    </div>
  );
}