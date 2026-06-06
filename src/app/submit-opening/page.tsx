import { createJob } from "@/actions/job-actions";
import SubmitButton from "@/components/forms/SubmitButton";

export default function SubmitOpeningPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900">
          Submit Job Opening
        </h1>

        <p className="mt-2 text-zinc-600">
          Add a new opportunity to OpeningHub.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <form
          action={createJob}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Job Title
            </label>

            <input
              name="title"
              type="text"
              placeholder="Java Developer"
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-zinc-900
                outline-none

                focus:border-zinc-400
                focus:ring-2
                focus:ring-zinc-200
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Company Name
            </label>

            <input
              name="companyName"
              type="text"
              placeholder="ABC Technologies"
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-zinc-900
                outline-none

                focus:border-zinc-400
                focus:ring-2
                focus:ring-zinc-200
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Location
            </label>

            <input
              name="location"
              type="text"
              placeholder="Hyderabad"
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-zinc-900
                outline-none

                focus:border-zinc-400
                focus:ring-2
                focus:ring-zinc-200
              "
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Experience
              </label>

              <select
                name="experience"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-200
                  bg-white
                  px-4
                  py-3
                  text-zinc-900
                "
              >
                <option value="Fresher">Fresher</option>
                <option value="0-2 Years">0-2 Years</option>
                <option value="2-5 Years">2-5 Years</option>
                <option value="5-8 Years">5-8 Years</option>
                <option value="8+ Years">8+ Years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Job Type
              </label>

              <select
                name="jobType"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-200
                  bg-white
                  px-4
                  py-3
                  text-zinc-900
                "
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Work Mode
            </label>

            <select
              name="workMode"
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-zinc-900
              "
            >
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On Site">On Site</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Apply URL
            </label>

            <input
              name="applyUrl"
              type="url"
              placeholder="https://company.com/careers"
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-zinc-900
                outline-none

                focus:border-zinc-400
                focus:ring-2
                focus:ring-zinc-200
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Job Description
            </label>

            <textarea
              name="description"
              rows={8}
              placeholder="Enter job description..."
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-zinc-900
                outline-none

                focus:border-zinc-400
                focus:ring-2
                focus:ring-zinc-200
              "
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </main>
  );
}