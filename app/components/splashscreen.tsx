"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [anim, setAnim] = useState<any>(null);

  useEffect(() => {
    // load from /public (no TS json import config needed)
    fetch("/lottie/cat.json")
      .then((r) => r.json())
      .then(setAnim)
      .catch(() => {
        // even if it fails, don't block the site
        onFinish();
      });

    const timer = setTimeout(onFinish, 5500); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] grid place-items-center bg-white dark:bg-black"
    >
      <div className="flex flex-col items-center">
        <div className="w-[220px] sm:w-[280px] md:w-[320px]">
          {anim ? (
            <Lottie animationData={anim} loop autoplay />
          ) : (
            <div className="h-[220px] sm:h-[280px] md:h-[320px]" />
          )}
        </div>

        <p className="mt-4 text-xs font-semibold tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
          Aarushi Daksh
        </p>
      </div>
    </motion.div>
  );
}
