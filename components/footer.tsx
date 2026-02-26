import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const SERVICES = [
  { label: "Innenausbau & Möbel", href: "#leistungen" },
  { label: "Küchen nach Maß", href: "#leistungen" },
  { label: "Bäder & Corian®", href: "#leistungen" },
  { label: "Gartengestaltung", href: "#leistungen" },
  { label: "Barrierefreiheit", href: "#leistungen" },
  { label: "Reparatur & Service", href: "#leistungen" },
];

const LINKS = [
  { label: "Startseite", href: "#hero" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const LEGAL = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-warm-100">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="Schreinerei Dürr – Startseite">
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold tracking-tight text-warm-950">
                  Schreinerei
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-wood-500">
                  Stefan Dürr
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-600">
              Hochwertige Möbel in Meisterhand – individuell gefertigt in Talheim
              bei Heilbronn. Nachhaltig, regional, einzigartig.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/schreinereiduerr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-200 text-warm-700 transition-all duration-300 hover:bg-wood-700 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/SchreinereiDuerr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-200 text-warm-700 transition-all duration-300 hover:bg-wood-700 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-warm-900">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-warm-600 transition-colors duration-300 hover:text-wood-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-warm-900">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-warm-600 transition-colors duration-300 hover:text-wood-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-warm-900">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+4915782885841"
                  className="flex items-start gap-3 text-sm text-warm-600 transition-colors duration-300 hover:text-wood-600"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  0157 8288 5841
                </a>
              </li>
              <li>
                <a
                  href="mailto:stefan@schreinerei-duerr.de"
                  className="flex items-start gap-3 text-sm text-warm-600 transition-colors duration-300 hover:text-wood-600"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  stefan@schreinerei-duerr.de
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-warm-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Frankenstraße 31
                    <br />
                    74388 Talheim
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-warm-200 pt-8 sm:flex-row">
          <p className="text-xs text-warm-500">
            © {new Date().getFullYear()} Schreinerei Stefan Dürr. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {LEGAL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-warm-500 transition-colors duration-300 hover:text-wood-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
