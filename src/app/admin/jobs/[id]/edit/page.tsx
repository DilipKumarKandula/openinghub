import { prisma } from "@/lib/prisma";
import { updateJob } from "@/actions/job-actions";

interface EditJobPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditJobPage({
  params,
}: EditJobPageProps) {
  const { id } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  if (!job) {
    return (
      <main className="p-10">
        Job not found
      </main>
    );
  }

  async function updateJobAction(
    formData: FormData
  ) {
    "use server";

    await updateJob(id, formData);
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Job
      </h1>

      <form
        action={updateJobAction}
        className="space-y-6"
      >
        <input
          name="title"
          defaultValue={job.title}
          className="w-full rounded-xl border p-3"
        />

        <input
          name="companyName"
          defaultValue={job.companyName}
          className="w-full rounded-xl border p-3"
        />

        <input
          name="location"
          defaultValue={job.location}
          className="w-full rounded-xl border p-3"
        />

        <input
          name="experience"
          defaultValue={job.experience}
          className="w-full rounded-xl border p-3"
        />

        <input
          name="jobType"
          defaultValue={job.jobType}
          className="w-full rounded-xl border p-3"
        />

        <input
          name="workMode"
          defaultValue={job.workMode}
          className="w-full rounded-xl border p-3"
        />

        <input
          name="applyUrl"
          defaultValue={job.applyUrl}
          className="w-full rounded-xl border p-3"
        />

        <textarea
          name="description"
          defaultValue={job.description}
          rows={8}
          className="w-full rounded-xl border p-3"
        />

        <button
          type="submit"
          className="
            rounded-xl
            bg-zinc-900
            px-6
            py-3
            text-white
          "
        >
          Update Job
        </button>
      </form>
    </main>
  );
}