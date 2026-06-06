"use client";

import { useTransition } from "react";
import { deactivateJob } from "@/actions/job-actions";

interface DeactivateButtonProps {
  jobId: string;
}

export default function DeactivateButton({
  jobId,
}: DeactivateButtonProps) {
  const [isPending, startTransition] =
    useTransition();

  return (
    <button
      onClick={() =>
        startTransition(() =>
          deactivateJob(jobId)
        )
      }
      disabled={isPending}
      className="
        rounded-lg
        bg-red-500
        px-3
        py-2
        text-sm
        font-medium
        text-white
        transition

        hover:bg-red-600

        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {isPending
        ? "Updating..."
        : "Deactivate"}
    </button>
  );
}