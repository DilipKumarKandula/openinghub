"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-zinc-900
        px-6
        py-3
        font-medium
        text-white
        transition

        hover:bg-zinc-700

        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {pending
        ? "Submitting..."
        : "Submit Opening"}
    </button>
  );
}