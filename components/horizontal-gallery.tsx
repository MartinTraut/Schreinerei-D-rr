"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface HorizontalGalleryProps {
  items: GalleryItem[];
}

export function HorizontalGallery({ items }: HorizontalGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  }

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute -top-16 right-0 hidden gap-2 sm:flex">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-300 text-warm-700 transition-all duration-300 hover:border-wood-500 hover:bg-wood-500 hover:text-white disabled:opacity-30 disabled:hover:border-warm-300 disabled:hover:bg-transparent disabled:hover:text-warm-700"
          aria-label="Zurück"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-300 text-warm-700 transition-all duration-300 hover:border-wood-500 hover:bg-wood-500 hover:text-white disabled:opacity-30 disabled:hover:border-warm-300 disabled:hover:bg-transparent disabled:hover:text-warm-700"
          aria-label="Weiter"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Scrollable Gallery */}
      <div
        ref={scrollRef}
        className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:-mx-8 lg:px-8"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="w-[80vw] shrink-0 snap-center sm:w-[55vw] lg:w-[38vw]"
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-warm-200">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 38vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/70" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-wood-300/90">
                  {item.category}
                </span>
                <p className="mt-1 font-serif text-xl font-medium text-white">
                  {item.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="mt-6 flex justify-center gap-1 sm:hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className="h-1 w-6 rounded-full bg-warm-300 transition-colors"
          />
        ))}
      </div>
    </div>
  );
}
