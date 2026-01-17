"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./splashscreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const finish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <SplashScreen onFinish={finish} />}</AnimatePresence>
      {!loading && children}
    </>
  );
}
