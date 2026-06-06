import Link from "next/link";
import { prisma } from "@/lib/prisma";

interface JobDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({
  params,
}: JobDetailsPageProps) {
  const { id } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  if (!job) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold text-zinc-900">
          Job Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/jobs"
        className="
          text-sm
          font-medium
          text-zinc-500
          transition

          hover:text-zinc-900
        "
      >
        ← Back to Jobs
      </Link>

      <div
        className="
          mt-6
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <h1
          className="
            text-4xl
            font-bold
            text-zinc-900
          "
        >
          {job.title}
        </h1>

        <p
          className="
            mt-3
            text-lg
            font-medium
            text-zinc-600
          "
        >
          {job.companyName}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span
            className="
              rounded-full
              bg-zinc-100
              px-4
              py-2
              text-sm
              font-medium
              text-zinc-700
            "
          >
            {job.jobType}
          </span>

          <span
            className="
              rounded-full
              bg-zinc-100
              px-4
              py-2
              text-sm
              font-medium
              text-zinc-700
            "
          >
            {job.workMode}
          </span>

          <span
            className="
              rounded-full
              bg-zinc-100
              px-4
              py-2
              text-sm
              font-medium
              text-zinc-700
            "
          >
            {job.experience}
          </span>
        </div>

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-6
            text-sm
            text-zinc-500
          "
        >
          <span>📍 {job.location}</span>
        </div>

        <div className="mt-10">
          <h2
            className="
              mb-4
              text-2xl
              font-semibold
              text-zinc-900
            "
          >
            Job Description
          </h2>

          <p
            className="
              leading-8
              text-zinc-600
            "
          >
            {job.description}
          </p>
        </div>

        <div className="mt-10">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              rounded-xl
              bg-zinc-900
              px-6
              py-3
              font-medium
              text-white
              transition

              hover:bg-zinc-700
            "
          >
            Apply Now →
          </a>
        </div>
      </div>
    </main>
  );
}