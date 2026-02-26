"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="grain relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/werkstatt.jpg"
          alt="Werkstatt der Schreinerei Dürr in Talheim"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8"
      >
        <div className="max-w-2xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 h-px bg-wood-400"
          />

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-sm font-medium uppercase tracking-[0.3em] text-wood-300"
          >
            Schreinerei Stefan Dürr · Talheim
          </motion.span>

          {/* Headline - staggered word reveal */}
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {["Meisterhafte", "Schreinerei"].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.12,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  {word}
                </motion.span>
                {i === 0 && <br />}
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block text-wood-300"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.74,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                in Talheim
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-warm-300 sm:text-xl"
          >
            Individuelle Möbel &amp; Innenausbau – handgefertigt mit
            Leidenschaft für Qualität und Nachhaltigkeit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#kontakt"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-wood-600 px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:bg-wood-700 hover:shadow-xl hover:shadow-wood-900/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Projekt anfragen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#projekte"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10"
            >
              Unsere Arbeiten
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40">
          Entdecken
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>

    </section>
  );
}
