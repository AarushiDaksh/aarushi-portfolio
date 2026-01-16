"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BotLauncher() {
  return (
    <Link href="/twin" aria-label="Open AI Twin">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          fixed bottom-5 right-5 z-50
          h-14 w-14 sm:h-16 sm:w-16
          rounded-full
          overflow-hidden
          cursor-pointer
        "
      >
        <Image
          src="/photos/avatar.jpeg"
          alt="AI Twin"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </Link>
  );
}
