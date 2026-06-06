"use client";

import { useTransition } from "react";
import { activateJob } from "@/actions/job-actions";

interface ActivateButtonProps {
  jobId: string;
}

export default function ActivateButton({
  jobId,
}: ActivateButtonProps) {
  const [isPending, startTransition] =
    useTransition();

  return (
    <button
      onClick={() =>
        startTransition(() =>
          activateJob(jobId)
        )
      }
      disabled={isPending}
      className="
        rounded-lg
        bg-green-500
        px-3
        py-2
        text-sm
        font-medium
        text-white
        transition

        hover:bg-green-600

        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {isPending
        ? "Updating..."
        : "Activate"}
    </button>
  );
}