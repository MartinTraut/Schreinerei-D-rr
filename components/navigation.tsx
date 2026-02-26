"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/use-active-section";

const NAV_ITEMS = [
  { label: "Startseite", href: "#hero", sectionId: "hero" },
  { label: "Leistungen", href: "#leistungen", sectionId: "leistungen" },
  { label: "Projekte", href: "#projekte", sectionId: "projekte" },
  { label: "Über uns", href: "#ueber-uns", sectionId: "ueber-uns" },
  { label: "Kontakt", href: "#kontakt", sectionId: "kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = scrolled || !isHome
    ? "bg-white shadow-sm"
    : "bg-gradient-to-b from-black/40 to-transparent";

  const isDark = !scrolled && isHome;
  const textColor = isDark ? "text-white" : "text-warm-900";

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!isHome) return; // Let normal navigation happen for legal pages
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  }

  function getHref(item: typeof NAV_ITEMS[number]) {
    return isHome ? item.href : `/${item.href}`;
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navBg}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group relative z-50 flex shrink-0 items-center gap-3.5" aria-label="Schreinerei Dürr – Startseite">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg lg:h-14 lg:w-14">
              <Image
                src="/images/logo.png"
                alt=""
                width={112}
                height={112}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-500 lg:text-2xl ${isDark ? "text-white" : "text-warm-950"}`}>
                Schreinerei
              </span>
              <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.25em] transition-colors duration-500 lg:text-xs ${isDark ? "text-wood-300" : "text-wood-500"}`}>
                Stefan Dürr
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.sectionId}
                href={getHref(item)}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${textColor} hover:text-wood-500 ${
                  isHome && activeSection === item.sectionId ? "text-wood-500" : ""
                }`}
              >
                {item.label}
                {isHome && activeSection === item.sectionId && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${isDark ? "bg-white/70" : "bg-wood-500"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+4915782885841"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${textColor} hover:text-wood-500`}
            >
              <Phone className="h-4 w-4" />
              0157 8288 5841
            </a>
            <a
              href={isHome ? "#kontakt" : "/#kontakt"}
              onClick={(e) => isHome && handleNavClick(e, "#kontakt")}
              className="rounded-full bg-wood-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-wood-800 hover:shadow-lg hover:shadow-wood-900/20"
            >
              Projekt anfragen
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 rounded-lg p-2 transition-colors lg:hidden ${mobileOpen ? "text-warm-900" : textColor}`}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.sectionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <a
                    href={getHref(item)}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                    }}
                    className={`font-serif text-3xl font-medium transition-colors ${
                      isHome && activeSection === item.sectionId ? "text-wood-600" : "text-warm-900 hover:text-wood-600"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:+4915782885841"
                  className="flex items-center gap-2 text-lg font-medium text-warm-700"
                >
                  <Phone className="h-5 w-5" />
                  0157 8288 5841
                </a>
                <a
                  href={isHome ? "#kontakt" : "/#kontakt"}
                  onClick={(e) => {
                    if (isHome) handleNavClick(e, "#kontakt");
                  }}
                  className="rounded-full bg-wood-700 px-8 py-3 text-lg font-medium text-white"
                >
                  Projekt anfragen
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
