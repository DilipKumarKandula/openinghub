import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { NAVIGATION_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-sm dark:bg-zinc-950/95 dark:border-zinc-800">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition hover:opacity-80"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          OpeningHub
        </Link>


        {/* Right side */}
        <div className="flex items-center gap-3">
{/*           
          <Link
            href="/jobs/new"
            className="rounded-full bg-emerald-800 px-4 py-1.5 text-xs font-medium text-emerald-50 transition hover:bg-emerald-900"
          >
            Post a job
          </Link> */}


          
        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative text-sm font-normal text-zinc-500
                transition hover:text-zinc-900
                dark:text-zinc-400 dark:hover:text-zinc-100
                after:absolute after:-bottom-0.5 after:left-0
                after:h-[1.5px] after:w-0 after:bg-emerald-500
                after:transition-all hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
        </div>

      </div>
    </header>
  );
}