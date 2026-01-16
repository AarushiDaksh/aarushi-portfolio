import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BotLauncher() {
  return (
    <Link href="/twin">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          fixed bottom-6 right-6 z-50
          h-16 w-16 rounded-full
          bg-neutral-900 dark:bg-white
          shadow-xl ring-1 ring-black/10 dark:ring-white/10
          flex items-center justify-center
          cursor-pointer
        "
        aria-label="Open AI Assistant"
      >
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/photos/avatar.jpeg"
            alt="AI Bot"
            fill
            className="object-cover"
            priority
          />
        </div>

        <span className="absolute top-1.5 right-1.5 h-3 w-3 rounded-full bg-lime-500 ring-2 ring-white dark:ring-neutral-900" />
      </motion.button>
    </Link>
  );
}
