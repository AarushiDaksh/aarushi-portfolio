"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import DigitalTwinChat from "./twinchat";

export default function BotLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // lock scroll on mobile when open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen, isMobile]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={
              isMobile
                ? "fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
                : "fixed inset-0 z-[9999] bg-black/20"
            }
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className={
                isMobile
                  ? "absolute inset-x-0 bottom-0 h-[85vh] rounded-t-3xl border border-white/10 bg-[#0b0b0f]/95 overflow-hidden shadow-2xl"
                  : "absolute bottom-24 right-6 w-[420px] h-[610px] rounded-3xl border border-white/10 bg-[#0b0b0f]/95 overflow-hidden shadow-2xl"
              }
            >
             
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 h-9 w-9 rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition grid place-items-center"
                aria-label="Close chat"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <DigitalTwinChat />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LAUNCHER BUTTON (your avatar) */}
      <motion.button
        aria-label="Open AI Twin"
        onClick={() => setIsOpen((s) => !s)}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          fixed bottom-5 right-5 z-50
          h-14 w-14 sm:h-16 sm:w-16
          rounded-full overflow-hidden cursor-pointer
          ring-1 ring-white/10 shadow-xl
        "
      >
        <Image
          src="/photos/avatar.jpeg"
          alt="AI Twin"
          fill
          priority
          className="object-cover"
        />

        
      </motion.button>
    </>
  );
}
