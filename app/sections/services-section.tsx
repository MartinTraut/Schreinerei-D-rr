import {
  Home,
  ChefHat,
  Bath,
  TreePine,
  Accessibility,
  Wrench,
  Palette,
  Sofa,
  Building2,
  Headset,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { ImageReveal } from "@/components/image-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

const SERVICES = [
  {
    icon: Home,
    title: "Innenausbau & Möbel",
    description: "Maßgenaue Einbauschränke, Schlafzimmermöbel und Wohnraumeinrichtungen – individuell nach Ihren Vorstellungen gefertigt.",
    features: ["Einbauschränke nach Maß", "Schlafzimmermöbel", "Wohnraumeinrichtungen", "Sonderanfertigungen"],
  },
  {
    icon: ChefHat,
    title: "Küchen nach Maß",
    description: "Individuelle Küchen, die Funktionalität und Design perfekt vereinen. Vom Entwurf bis zur Montage.",
    features: ["Individuelle Planung", "Hochwertige Materialien", "Fachgerechte Montage", "Geräteintegration"],
  },
  {
    icon: Bath,
    title: "Bäder & Corian®",
    description: "Hochwertige Badmöbel und fugenlose Waschtische aus dem Mineralstoff Corian® – robust und elegant.",
    features: ["Corian®-Waschtische", "Badmöbel nach Maß", "Fugenlose Oberflächen", "Breite Farbpalette"],
  },
  {
    icon: TreePine,
    title: "Gartengestaltung mit Holz",
    description: "Langlebige Gartenmöbel und Holzkonstruktionen für Ihren Außenbereich. Natürlich und witterungsbeständig.",
    features: ["Gartenmöbel", "Holzkonstruktionen", "Terrassengestaltung", "Witterungsbeständig"],
  },
  {
    icon: Accessibility,
    title: "Barrierefreiheit",
    description: "Zertifizierter generationenfreundlicher Betrieb – altersgerechte Anpassungen für komfortables Wohnen.",
    features: ["Zertifizierter Betrieb", "Altersgerechte Anpassungen", "Schwellenfreie Lösungen", "Individuelle Beratung"],
  },
  {
    icon: Wrench,
    title: "Reparatur & Pflege",
    description: "Professionelle Reparatur, Wartung und Pflege Ihrer Möbel. Wir geben Lieblingsstücken ein zweites Leben.",
    features: ["Möbelreparatur", "Oberflächenaufarbeitung", "Regelmäßige Wartung", "Pflegeberatung"],
  },
  {
    icon: Palette,
    title: "Künstler- & Designanfertigung",
    description: "Individuelle Anfertigungen für Künstler und Designer. Wir setzen kreative Visionen in hochwertige Werkstücke um.",
    features: ["Künstlerische Unikate", "Designermöbel", "Prototypen", "Individuelle Formen"],
  },
  {
    icon: Sofa,
    title: "Industriemöbel-Aufbau",
    description: "Professioneller Aufbau und Zusammenbau von Industriemöbeln. Schnell, fachgerecht und zuverlässig.",
    features: ["Fachgerechter Aufbau", "Schnelle Umsetzung", "Vor-Ort-Service", "Gewerbliche Kunden"],
  },
  {
    icon: Building2,
    title: "Immobilienaufwertung",
    description: "Aufwertung von Immobilien durch hochwertige Schreinerarbeiten. Steigern Sie den Wert Ihres Objekts.",
    features: ["Wertsteigernde Einbauten", "Renovierung", "Objektbetreuung", "Modernisierung"],
  },
  {
    icon: Headset,
    title: "Beratung & Hausmeisterservice",
    description: "Umfassende Beratung rund um Holz, Möbel und Einrichtung, ergänzt durch zuverlässigen Hausmeisterservice.",
    features: ["Materialberatung", "Einrichtungsberatung", "Hausmeisterservice", "Vor-Ort-Besichtigung"],
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="relative bg-warm-100 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <AnimatedLine>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
              Was wir für Sie tun
            </span>
          </AnimatedLine>
          <AnimatedText
            text="Unsere Leistungen"
            as="h2"
            delay={0.1}
            className="mt-4 text-3xl font-semibold text-warm-950 sm:text-4xl lg:text-5xl"
          />
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-warm-600">
              Von der individuellen Küche über maßgefertigte Möbel bis zur
              barrierefreien Wohnraumanpassung – entdecken Sie unser umfassendes
              Leistungsspektrum.
            </p>
          </ScrollReveal>
        </div>

        {/* Primary Services – 6 large cards */}
        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.2}>
          {SERVICES.slice(0, 6).map((service) => (
            <StaggerItem key={service.title}>
              <a
                href="#kontakt"
                className="group flex h-full flex-col rounded-2xl border border-warm-200/80 bg-white p-8 transition-all duration-500 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/[0.04] hover:-translate-y-1.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-wood-600 transition-all duration-500 group-hover:bg-wood-600 group-hover:text-white">
                  <service.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-warm-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-600">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-warm-100 pt-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-warm-500">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-wood-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-wood-600 transition-colors duration-300 group-hover:text-wood-700">
                  Jetzt anfragen
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Services – compact row */}
        <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.3}>
          {SERVICES.slice(6).map((service) => (
            <StaggerItem key={service.title}>
              <a
                href="#kontakt"
                className="group flex items-center gap-4 rounded-xl border border-warm-200/80 bg-white p-5 transition-all duration-500 hover:border-wood-200 hover:shadow-lg hover:shadow-wood-900/[0.03]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-wood-50 text-wood-600 transition-all duration-500 group-hover:bg-wood-600 group-hover:text-white">
                  <service.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-warm-900">
                    {service.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-warm-500">
                    {service.description}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Corian® Highlight */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ImageReveal
            src="/images/corian-waschtisch.png"
            alt="Waschtisch aus Corian® – Mineralstoff-Verarbeitung von Schreinerei Dürr"
            containerClassName="aspect-[4/3] rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            direction="left"
            overlayColor="bg-wood-600"
          />
          <div>
            <AnimatedLine>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
                Spezialisierung
              </span>
            </AnimatedLine>
            <AnimatedText
              text="Corian® Verarbeitung"
              as="h3"
              delay={0.15}
              className="mt-4 text-3xl font-semibold text-warm-950 sm:text-4xl"
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-warm-600">
                Der Mineralstoff Corian® bietet vielfältige Einsatzmöglichkeiten,
                da er von uns in nahezu jede gewünschte Form gebracht werden kann.
                Die Haptik ist dabei stein-ähnlich und robust.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">
                Nebst physikalischer Vorteile steht Ihnen auch eine breite
                Palette an Farben zur Wahl. Waschtische und Arbeitsplatten in
                der Küche stellen typische Einsatzfelder des Materials dar.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
