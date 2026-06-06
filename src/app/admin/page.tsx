import { prisma } from "@/lib/prisma";
import { JobListItem } from "@/types/job";
import JobsChart from "@/components/admin/JobsChart";

export default async function AdminJobsPage() {
  const totalJobs = await prisma.job.count();

  const activeJobs = await prisma.job.count({
    where: {
      status: "ACTIVE",
    },
  });

  const inactiveJobs = await prisma.job.count({
    where: {
      status: "INACTIVE",
    },
  });

  const remoteJobs = await prisma.job.count({
    where: {
      workMode: "Remote",
    },
  });

  const remoteCount = await prisma.job.count({
  where: {
    workMode: "Remote",
  },
});

const hybridCount = await prisma.job.count({
  where: {
    workMode: "Hybrid",
  },
});

const onsiteCount = await prisma.job.count({
  where: {
    workMode: "On Site",
  },
});

const chartData = [
  {
    name: "Remote",
    jobs: remoteCount,
  },
  {
    name: "Hybrid",
    jobs: hybridCount,
  },
  {
    name: "On Site",
    jobs: onsiteCount,
  },
];

  const recentJobs = await prisma.job.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

 return (
  <main className="mx-auto max-w-7xl px-4 py-10">
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-zinc-900">
        OpeningHub Dashboard
      </h1>

      <p className="mt-2 text-zinc-600">
        Monitor and manage job openings.
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">
          Total Jobs
        </p>

        <h2 className="mt-2 text-4xl font-bold text-zinc-900">
          {totalJobs}
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">
          Active Jobs
        </p>

        <h2 className="mt-2 text-4xl font-bold text-zinc-900">
          {activeJobs}
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">
          Inactive Jobs
        </p>

        <h2 className="mt-2 text-4xl font-bold text-zinc-900">
          {inactiveJobs}
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">
          Remote Jobs
        </p>

        <h2 className="mt-2 text-4xl font-bold text-zinc-900">
          {remoteJobs}
        </h2>
      </div>
    </div>

    {/* Chart */}
    <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-zinc-900">
        Jobs by Work Mode
      </h2>

      <JobsChart data={chartData} />
    </div>

    {/* Recent Jobs */}
    <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-zinc-900">
        Recent Jobs
      </h2>

      <div className="space-y-4">
        {recentJobs.map((job: JobListItem) => (
          <div
            key={job.id}
            className="flex items-center justify-between border-b border-zinc-200 pb-4 last:border-b-0"
          >
            <div>
              <p className="font-medium text-zinc-900">
                {job.title}
              </p>

              <p className="text-sm text-zinc-500">
                {job.companyName}
              </p>
            </div>

            <span
              className="
                rounded-full
                bg-green-100
                px-3
                py-1
                text-xs
                font-medium
                text-green-700
              "
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  </main>
);
}