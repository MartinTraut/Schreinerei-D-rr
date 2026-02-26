"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  priority?: boolean;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  overlayColor?: string;
}

export function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  className = "",
  containerClassName = "",
  sizes,
  priority = false,
  delay = 0,
  direction = "left",
  overlayColor = "bg-wood-700",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const overlayOrigin = {
    left: { initial: { x: "0%" }, animate: { x: "101%" } },
    right: { initial: { x: "0%" }, animate: { x: "-101%" } },
    up: { initial: { y: "0%" }, animate: { y: "-101%" } },
    down: { initial: { y: "0%" }, animate: { y: "101%" } },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="h-full w-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover ${className}`}
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            sizes={sizes}
            priority={priority}
          />
        )}
      </motion.div>
      <motion.div
        className={`absolute inset-0 ${overlayColor}`}
        initial={overlayOrigin[direction].initial}
        animate={isInView ? overlayOrigin[direction].animate : overlayOrigin[direction].initial}
        transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}
