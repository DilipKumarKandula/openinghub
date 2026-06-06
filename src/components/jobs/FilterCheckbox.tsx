"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

interface FilterCheckboxProps {
  label: string;
  queryKey: string;
}

export default function FilterCheckbox({
  label,
  queryKey,
}: FilterCheckboxProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const checked =
    searchParams.get(queryKey) === label;

  const handleChange = () => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (checked) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, label);
    }

    router.push(
      `/jobs?${params.toString()}`
    );
  };

  return (
    <label className="flex items-center gap-3 text-sm text-zinc-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="h-4 w-4 cursor-pointer"
      />

      <span>{label}</span>
    </label>
  );
}