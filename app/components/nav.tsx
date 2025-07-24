import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const navItems = {
  // "/medium": { name: "Medium" },
  // "/projects": { name: "Projects" },
  "/highlights": { name: "Highlights 👽" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          {/* Add logo or title here if needed */}
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all duration-300 text-neutral-500 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-lime-400"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
