import Link from "next/link";
import { ArrowRight, Award, Leaf, Fingerprint } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { ImageReveal } from "@/components/image-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

const VALUES = [
  {
    icon: Award,
    title: "Meisterqualität",
    text: "Jedes Möbelstück wird von Schreinermeister Stefan Dürr persönlich gefertigt und geprüft.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    text: "Wir setzen auf regionale Materialien und nachhaltige Verarbeitung für langlebige Ergebnisse.",
  },
  {
    icon: Fingerprint,
    title: "Individualität",
    text: "Keine Massenware – jedes Projekt wird individuell nach Ihren Wünschen gestaltet und umgesetzt.",
  },
];

export function IntroSection() {
  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <AnimatedLine>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
                Willkommen bei Schreinerei Dürr
              </span>
            </AnimatedLine>

            <AnimatedText
              text="Hochwertige Möbel in Meisterhand"
              as="h2"
              delay={0.15}
              className="mt-5 text-3xl font-semibold text-warm-950 sm:text-4xl lg:text-5xl xl:text-6xl"
            />

            <ScrollReveal delay={0.3}>
              <p className="mt-8 text-lg leading-relaxed text-warm-600 lg:text-xl lg:leading-relaxed">
                Hochwertige Möbel werden bei uns in Meisterhand angefertigt und
                sind einzigartige Unikate. Jedes Stück durchläuft die erfahrenen
                Hände von Schreinermeister Stefan Dürr – von der ersten Idee bis
                zum letzten Schliff.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-warm-600 lg:text-xl lg:leading-relaxed">
                Nachhaltigkeit und Regionalität sind dabei keine Schlagworte,
                sondern gelebte Überzeugung. Wir verarbeiten ausgewählte
                Materialien und schaffen Möbel, die Generationen überdauern.
              </p>
              <div className="mt-10">
                <Link
                  href="#ueber-uns"
                  className="group inline-flex items-center gap-2 text-base font-medium text-wood-700 transition-colors duration-300 hover:text-wood-800"
                >
                  Mehr über uns erfahren
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ImageReveal
            src="https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.Bild_K%C3%BCche_1.png/picture-1200"
            alt="Maßgefertigte Küche aus der Schreinerei Dürr in Talheim"
            containerClassName="aspect-[4/3] rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            delay={0.2}
            direction="right"
          />
        </div>

        {/* Values */}
        <StaggerContainer className="mt-24 grid gap-8 sm:grid-cols-3 lg:mt-32" delay={0.1}>
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-wood-50 text-wood-600 transition-all duration-500 group-hover:bg-wood-100 group-hover:shadow-lg group-hover:shadow-wood-200/50">
                  <value.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-warm-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-600">
                  {value.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
