import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { FaBookOpen, FaFolderOpen, FaMediumM, FaStar } from "react-icons/fa";
import { FaA, FaD, FaH, FaMedium } from "react-icons/fa6";

const navItems = {
  "/twin": { name: "", icon: FaA },
  "/":{name: "" , icon: FaD},
  "/projects": { name: "", icon: FaFolderOpen },
  "/highlights": { name: "", icon: FaStar }
};

export function T() {
  return (
    <nav
      className="fixed top-7 left-1/2 -translate-x-1/2 z-50
                 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md
                 border border-black/5 dark:border-white/10
                 rounded-full shadow-lg px-6 py-3"
    >
      <div className="flex items-center gap-6">
        {Object.entries(navItems).map(([path, { name, icon: Icon }]) => (
          <Link
            key={path}
            href={path}
            className="flex flex-col items-center gap-1 text-xs font-medium
                       transition-all duration-300 text-[#c5d725] hover:text-pink-600 
                       dark:text-neutral-300 dark:hover:text-lime-400"
          >
            <Icon size={20} />
            <span>{name}</span>
          </Link>
        ))}

        {/* Theme Switch */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
