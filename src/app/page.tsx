import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const latestJobs = await prisma.job.findMany({
    where: { status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <main className="mx-auto max-w-4xl px-0 pb-12">

      {/* Hero */}
      <section className="px-10 py-20 border-b border-zinc-100">
        <p className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Community-powered job board
        </p>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-zinc-900 max-w-2xl mb-5">
          Find your next{" "}
          <em className="italic text-emerald-600">great</em>{" "}
          opportunity
        </h1>

        <p className="text-base font-light text-zinc-500 max-w-md leading-relaxed mb-10">
          Discover remote, hybrid, and on-site roles shared and curated
          by the community — updated daily.
        </p>

        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-emerald-50 text-sm font-medium px-6 py-3 rounded-full transition hover:-translate-y-px"
        >
          Browse openings →
        </Link>

        <div className="flex gap-10 mt-12 pt-8 border-t border-zinc-100">
          {[
            { num: "340+", label: "Active roles" },
            { num: "120", label: "Companies hiring" },
            { num: "48h", label: "Avg. listing age" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-bold leading-none">{s.num}</p>
              <p className="text-xs text-zinc-400 mt-1 font-light">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="px-10 py-14">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold">Latest openings</h2>
          <Link href="/jobs" className="text-sm text-zinc-400 hover:text-zinc-700 transition">
            View all →
          </Link>
        </div>

        <div className="border border-zinc-100 rounded-2xl overflow-hidden divide-y divide-zinc-100">
          {latestJobs.length === 0 ? (
            <p className="p-6 text-zinc-400 text-sm">No openings available yet.</p>
          ) : (
            latestJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-zinc-50 transition group"
              >
                <div>
                  <p className="text-xs text-zinc-400 mb-1">{job.companyName}</p>
                  <p className="text-sm font-medium text-zinc-900 mb-3">{job.title}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className={`text-xs px-3 py-0.5 rounded-full border font-light
                      ${job.workMode === "REMOTE"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-zinc-50 text-zinc-500 border-zinc-200"
                      }`}>
                      {job.workMode}
                    </span>
                    <span className="text-xs px-3 py-0.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 font-light">
                      {job.location}
                    </span>
                  </div>
                </div>
                <span className="text-zinc-300 group-hover:text-zinc-500 transition text-lg">→</span>
              </Link>
            ))
          )}
        </div>
      </section>

      <hr className="border-zinc-100 mx-10" />

      {/* How It Works */}
      <section className="px-10 py-14">
        <h2 className="font-serif text-2xl font-bold mb-8">How it works</h2>
        <div className="grid md:grid-cols-3 divide-x divide-zinc-100 border border-zinc-100 rounded-2xl overflow-hidden">
          {[
            { n: "01", label: "Search", desc: "Explore hundreds of curated roles across industries and experience levels." },
            { n: "02", label: "Filter", desc: "Narrow by work mode, job type, and seniority to surface the roles that fit." },
            { n: "03", label: "Apply", desc: "Click through to apply directly with the employer — no account needed." },
          ].map((step) => (
            <div key={step.n} className="p-8 bg-white">
              <p className="font-serif text-4xl font-bold text-zinc-200 leading-none mb-5">{step.n}</p>
              <p className="text-sm font-medium mb-2">{step.label}</p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-10 border border-zinc-100 rounded-2xl bg-zinc-50 px-10 py-12 flex items-center justify-between gap-8 flex-wrap">
        <div>
          <h2 className="font-serif text-2xl font-bold mb-2">Ready to find your next role?</h2>
          <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
            Browse fresh listings and discover opportunities that match your skills.
          </p>
        </div>
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-emerald-50 text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Get started →
        </Link>
      </div>

    </main>
  );
}