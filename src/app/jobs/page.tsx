// import FilterSidebar from "@/components/jobs/FilterSidebar";
// import JobCard from "@/components/jobs/JobCard";
// import SearchBar from "@/components/jobs/SearchBar";
// import SortDropdown from "@/components/jobs/SortDropdown";
// import { prisma } from "@/lib/prisma";

// type JobCardData = {
//   id: string;
//   title: string;
//   companyName: string;
//   location: string;
//   experience: string;
//   workMode: string;
// };

// interface JobsPageProps {
//   searchParams: Promise<{
//     search?: string;
//     sort?: string;
//     experience?: string;
//     jobType?: string;
//     workMode?: string;
//   }>;
// }

// export default async function JobsPage({
//   searchParams,
// }: JobsPageProps) {
//   const {
//     search,
//     sort,
//     experience,
//     jobType,
//     workMode,
//   } = await searchParams;

//   const orderBy =
//     sort === "oldest"
//       ? { createdAt: "asc" as const }
//       : sort === "company"
//       ? { companyName: "asc" as const }
//       : { createdAt: "desc" as const };

//   const jobs = await prisma.job.findMany({
//     where: {
//       status: "ACTIVE",

//       ...(search
//         ? {
//             OR: [
//               {
//                 title: {
//                   contains: search,
//                   mode: "insensitive",
//                 },
//               },
//               {
//                 companyName: {
//                   contains: search,
//                   mode: "insensitive",
//                 },
//               },
//               {
//                 location: {
//                   contains: search,
//                   mode: "insensitive",
//                 },
//               },
//             ],
//           }
//         : {}),

//       ...(experience
//         ? {
//             experience,
//           }
//         : {}),

//       ...(jobType
//         ? {
//             jobType,
//           }
//         : {}),

//       ...(workMode
//         ? {
//             workMode,
//           }
//         : {}),
//     },

//     orderBy,
//   });

//   return (
//     <main className="mx-auto max-w-7xl px-4 py-8">
//       <div className="mb-6">
//         <h1 className="text-4xl font-bold text-zinc-900">
//           Latest Jobs
//         </h1>

//         <p className="mt-2 text-zinc-600">
//           Discover jobs from companies hiring now.
//         </p>
//       </div>

//       <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
//         <div className="flex-1">
//           <SearchBar />
//         </div>

//         <SortDropdown />
//       </div>

//       <div className="mt-8 grid gap-6 md:grid-cols-[280px_1fr]">
//         <FilterSidebar />

//         <div className="space-y-4">
//           {jobs.length === 0 ? (
//             <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
//               <h3 className="font-semibold text-zinc-900">
//                 No jobs found
//               </h3>

//               <p className="mt-2 text-sm text-zinc-500">
//                 Try a different search term or remove filters.
//               </p>
//             </div>
//           ) : (
//             jobs.map((job: JobCardData) => (
//               <JobCard
//                 key={job.id}
//                 id={job.id}
//                 title={job.title}
//                 company={job.companyName}
//                 location={job.location}
//                 experience={job.experience}
//                 workMode={job.workMode}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }




import FilterSidebar from "@/components/jobs/FilterSidebar";
import JobCard from "@/components/jobs/JobCard";
import Pagination from "@/components/jobs/Pagination";
import SearchBar from "@/components/jobs/SearchBar";
import SortDropdown from "@/components/jobs/SortDropdown";
import { prisma } from "@/lib/prisma";

type JobCardData = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  experience: string;
  workMode: string;
};

interface JobsPageProps {
  searchParams: Promise<{
    search?: string;
    sort?: string;
    experience?: string;
    jobType?: string;
    workMode?: string;
    page?: string;
  }>;
}

export default async function JobsPage({
  searchParams,
}: JobsPageProps) {
  const {
    search,
    sort,
    experience,
    jobType,
    workMode,
    page,
  } = await searchParams;

  const orderBy =
    sort === "oldest"
      ? { createdAt: "asc" as const }
      : sort === "company"
      ? { companyName: "asc" as const }
      : { createdAt: "desc" as const };

  const PAGE_SIZE = 5;

  const currentPage =
    Number(page) || 1;

  const skip =
    (currentPage - 1) * PAGE_SIZE;

  const whereClause = {
    status: "ACTIVE" as const,

    ...(search
      ? {
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
            {
              companyName: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
            {
              location: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
          ],
        }
      : {}),

    ...(experience
      ? {
          experience,
        }
      : {}),

    ...(jobType
      ? {
          jobType,
        }
      : {}),

    ...(workMode
      ? {
          workMode,
        }
      : {}),
  };

  const jobs = await prisma.job.findMany({
    where: whereClause,
    orderBy,
    skip,
    take: PAGE_SIZE,
  });

  const totalJobs =
    await prisma.job.count({
      where: whereClause,
    });

  const totalPages = Math.ceil(
    totalJobs / PAGE_SIZE
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-zinc-900">
          Latest Jobs
        </h1>

        <p className="mt-2 text-zinc-600">
          Discover jobs from companies hiring now.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <SearchBar />
        </div>

        <SortDropdown />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[280px_1fr]">
        <FilterSidebar />

        <div className="space-y-4">
          {jobs.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900">
                No jobs found
              </h3>

              <p className="mt-2 text-zinc-500">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            jobs.map((job: JobCardData) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.companyName}
                location={job.location}
                experience={job.experience}
                workMode={job.workMode}
              />
            ))
          )}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}