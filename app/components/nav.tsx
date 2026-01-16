import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/": { name: "Home" },
  "/#about": { name: "About" },
  "/#works": { name: "Projects" },
  "/#highlights": { name: "Highlights" },
};

export function Navbar() {
  return (
    <nav
 className="
    fixed left-1/2 z-50 -translate-x-1/2
    top-[calc(env(safe-area-inset-top)+10px)]
    w-[min(55vw,420px)]
    bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md
    border border-black/5 dark:border-white/10
    rounded-full shadow-lg
    px-4 py-2 sm:px-6 sm:py-3
  "
    >
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="
              flex items-center
              text-sm sm:text-base font-semibold
              transition-all duration-300
              text-lime-400 hover:text-pink-600
              dark:text-neutral-200 dark:hover:text-lime-400
            "
          >
            <span>{name}</span>
          </Link>
        ))}

        {/* Theme Switch */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
