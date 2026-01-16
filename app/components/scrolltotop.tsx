"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={goTop}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 10 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="
  fixed top-1/2 right-4 -translate-y-1/2 z-50
  h-12 w-12 rounded-full
  bg-white/80 dark:bg-neutral-900/80
  backdrop-blur-md
  ring-1 ring-black/10 dark:ring-white/10
  shadow-lg
  grid place-items-center
"

        >
          <ArrowUp className="h-5 w-5 text-neutral-900 dark:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
