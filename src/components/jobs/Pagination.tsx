"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", page.toString());

    router.push(`/jobs?${params.toString()}`);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() =>
          goToPage(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="
          rounded-lg
          border
          border-zinc-300
          px-4
          py-2
          text-sm
          font-medium

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map((page) => (
        <button
          key={page}
          onClick={() =>
            goToPage(page)
          }
          className={`
            rounded-lg
            px-4
            py-2
            text-sm
            font-medium

            ${
              currentPage === page
                ? "bg-zinc-900 text-white"
                : "border border-zinc-300 bg-white"
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() =>
          goToPage(currentPage + 1)
        }
        disabled={
          currentPage === totalPages
        }
        className="
          rounded-lg
          border
          border-zinc-300
          px-4
          py-2
          text-sm
          font-medium

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Next
      </button>
    </div>
  );
}