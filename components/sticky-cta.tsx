"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
          <a
            href="#kontakt"
            className="group flex items-center gap-2.5 rounded-full bg-wood-700 px-5 py-3.5 text-sm font-medium text-white shadow-xl shadow-wood-950/15 ring-1 ring-wood-600/20 transition-all duration-500 hover:bg-wood-800 hover:shadow-2xl hover:shadow-wood-950/20 hover:ring-wood-500/30 md:px-6 md:py-4 md:text-base"
          >
            <MessageSquare className="h-4 w-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 md:h-5 md:w-5" />
            <span className="hidden sm:inline">Projekt anfragen</span>
            <span className="sm:hidden">Anfragen</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
