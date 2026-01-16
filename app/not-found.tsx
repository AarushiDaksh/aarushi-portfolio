import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center px-6 text-center">
      <div>
        <p className="text-xs font-bold tracking-[0.28em] text-neutral-500">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="rounded-full px-5 py-2.5 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            Go Home
          </Link>
          <Link href="/#works" className="rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-black/15 dark:ring-white/15">
            See Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
