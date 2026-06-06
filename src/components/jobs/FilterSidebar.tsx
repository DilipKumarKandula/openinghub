import { FILTER_SECTIONS } from "@/constants/filters";
import FilterCheckbox from "./FilterCheckbox";

export default function FilterSidebar() {
  return (
    <aside
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <h2
        className="
          mb-6
          text-lg
          font-semibold
          text-zinc-900
        "
      >
        Filters
      </h2>

      {FILTER_SECTIONS.map((section) => (
        <div
          key={section.title}
          className="mt-8 first:mt-0"
        >
          <h3
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-wide
              text-zinc-500
            "
          >
            {section.title}
          </h3>

          <div className="space-y-3">
            {section.options.map((option) => (
     <FilterCheckbox
  key={option}
  label={option}
  queryKey={
    section.title === "Job Type"
      ? "jobType"
      : section.title === "Experience"
      ? "experience"
      : "workMode"
  }
/>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}