"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ImageBreakProps {
  src: string;
  alt: string;
  quote?: string;
  attribution?: string;
}

export function ImageBreak({ src, alt, quote, attribution }: ImageBreakProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="grain relative h-[50vh] overflow-hidden lg:h-[65vh]">
      <motion.div className="absolute inset-[-10%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40" />
      {quote && (
        <div className="relative flex h-full items-center justify-center px-8">
          <blockquote className="max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-2xl font-light italic leading-relaxed text-white sm:text-3xl lg:text-4xl"
            >
              &bdquo;{quote}&ldquo;
            </motion.p>
            {attribution && (
              <motion.cite
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-5 block text-sm font-medium uppercase tracking-[0.2em] text-wood-300 not-italic"
              >
                {attribution}
              </motion.cite>
            )}
          </blockquote>
        </div>
      )}
    </section>
  );
}
