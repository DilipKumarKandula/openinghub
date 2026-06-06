"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

const handleSearch = (
  e: React.FormEvent
) => {
  e.preventDefault();

  const trimmedSearch = search.trim();

  if (!trimmedSearch) {
    router.push("/jobs");
    return;
  }

  router.push(
    `/jobs?search=${encodeURIComponent(
      trimmedSearch
    )}`
  );
};

  return (
    <form
      onSubmit={handleSearch}
      className="w-full"
    >
      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search by title, company, location..."
        className="
          w-full
          rounded-2xl
          border
          border-zinc-200
          bg-white
          px-5
          py-3.5
          text-base
          text-zinc-900
          shadow-sm
          outline-none
          transition

          placeholder:text-zinc-400

          focus:border-zinc-400
          focus:ring-2
          focus:ring-zinc-200
        "
      />
    </form>
  );
}