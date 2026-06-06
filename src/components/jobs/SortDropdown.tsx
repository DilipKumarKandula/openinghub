"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SORT_OPTIONS } from "@/constants/sort-options";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("sort", e.target.value);

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      value={searchParams.get("sort") || "newest"}
      className="
        rounded-xl
        border
        border-zinc-300
        bg-white
        px-4
        py-3
        text-black
      "
    >
      {SORT_OPTIONS.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}