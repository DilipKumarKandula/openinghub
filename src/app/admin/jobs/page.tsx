import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeactivateButton from "@/components/admin/DeactivateButton";
import ActivateButton from "@/components/admin/ActivateButton";

export default async function AdminJobsPage() {
  const jobs = await prisma.job.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Manage Jobs
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          View and manage all job openings.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full">
          <thead className="bg-zinc-100 dark:bg-zinc-900">
            <tr>
              <th className="px-4 py-3 text-left">
                Title
              </th>

              <th className="px-4 py-3 text-left">
                Company
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>
              <th className="px-4 py-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job: {
              id: string;
              title: string;
              companyName: string;
              status: string;
            }) => (
              <tr
                key={job.id}
                className="border-t border-zinc-200 dark:border-zinc-800"
              >
                <td className="px-4 py-4">
                  {job.title}
                </td>

                <td className="px-4 py-4">
                  {job.companyName}
                </td>

                <td className="px-4 py-4">
                  {job.status}
                </td>

              <td className="px-4 py-4">
  <div className="flex items-center gap-2">
    {job.status === "ACTIVE" ? (
      <DeactivateButton jobId={job.id} />
    ) : (
      <ActivateButton jobId={job.id} />
    )}

    <Link
      href={`/admin/jobs/${job.id}/edit`}
      className="
        rounded-lg
        bg-blue-500
        px-3
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-blue-600
      "
    >
      Edit
    </Link>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}