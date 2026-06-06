import Link from "next/link";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  workMode: string;
}

export default function JobCard({
  id,
  title,
  company,
  location,
  experience,
  workMode,
}: JobCardProps) {
  return (
    <Link
      href={`/jobs/${id}`}
      className="block"
    >
      <div
        className="
          rounded-2xl
          border
          border-zinc-200
          bg-white
          p-6
          shadow-sm
          transition-all

          hover:-translate-y-0.5
          hover:border-zinc-300
          hover:shadow-md
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            text-zinc-900
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-2
            text-base
            font-medium
            text-zinc-600
          "
        >
          {company}
        </p>

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-x-6
            gap-y-2
            text-sm
            text-zinc-500
          "
        >
          <span>📍 {location}</span>
          <span>🏢 {workMode}</span>
          <span>💼 {experience}</span>
        </div>

        <div className="mt-6">
          <span
            className="
              inline-flex
              items-center
              rounded-xl
              bg-zinc-900
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition

              hover:bg-zinc-700
            "
          >
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}