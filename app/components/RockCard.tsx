"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  title?: string;
  subtitle?: string;
  alt?: string;
  containerClassName?: string;
};

export default function RockCard({
  src,
  title = "",
  subtitle = "",
  alt = "Rock image",
  containerClassName = "",
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `-9999px`);
    el.style.setProperty("--my", `-9999px`);
  };

  return (
    <div
      className={`grid place-items-center min-h-[60vh] py-8 px-4 ${containerClassName}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02, rotate: 0.4 }}
        className={`relative w-[340px] h-[300px] rounded-2xl overflow-hidden
                    bg-white/80 dark:bg-neutral-900/70 backdrop-blur
                    border border-black/[0.06] dark:border-white/10
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                    group`}
        style={
          {
            // @ts-ignore
            "--mx": "-9999px",
            "--my": "-9999px",
          } as React.CSSProperties
        }
      >
        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 opacity-90"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx) var(--my), rgba(59,130,246,0.12), rgba(168,85,247,0.10) 30%, transparent 60%)",
          }}
        />

        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 340px, 340px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4
                        bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-white font-semibold leading-tight">{title}</h3>
          <p className="text-gray-200/90 text-sm">{subtitle}</p>
        </div>

        {/* Soft top glow */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[140%] h-20 bg-gradient-to-b from-black/5 dark:from-white/10 to-transparent blur-2xl" />
      </motion.div>
    </div>
  );
}
