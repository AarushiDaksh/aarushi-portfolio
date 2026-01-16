import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/": { name: "Home" },
  "/#works": { name: "Projects" },
  "/#highlights": { name: "Highlights" },
};


export function T() {
  return (
    <nav
      className="fixed top-7 left-1/2 -translate-x-1/2 z-50
                 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md
                 border border-black/5 dark:border-white/10
                 rounded-full shadow-lg px-6 py-3"
    >
      <div className="flex items-center gap-7">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="
              text-sm sm:text-base font-semibold
              transition-all duration-300
              text-lime-500 hover:text-pink-600
              dark:text-neutral-200 dark:hover:text-lime-400
            "
          >
            {name}
          </Link>
        ))}

        {/* Theme Switch */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
