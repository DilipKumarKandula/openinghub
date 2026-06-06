export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} OpeningHub. All rights reserved.
      </div>
    </footer>
  );
}