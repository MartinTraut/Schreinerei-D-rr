import Image from "next/image";
import { MapPin, Award, Leaf, Users } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { ImageReveal } from "@/components/image-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

const VALUES = [
  {
    icon: Award,
    title: "Meisterqualität",
    text: "Jedes Werkstück wird mit der Sorgfalt und Präzision eines Meisterbetriebs gefertigt. Keine Kompromisse bei Material und Verarbeitung.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit & Regionalität",
    text: "Wir verarbeiten bevorzugt regionale Hölzer und setzen auf nachhaltige Materialien. Möbel, die Generationen überdauern, sind der beste Umweltschutz.",
  },
  {
    icon: Users,
    title: "Persönlicher Service",
    text: "Bei uns haben Sie es von Anfang bis Ende mit dem Meister persönlich zu tun. Kurze Wege, direkte Kommunikation und echte Handschlagqualität.",
  },
];

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Portrait & Philosophy */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <ImageReveal
              src="https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.Stefan_D%C3%BCrr%5B1%5D_1.png/picture-1200"
              alt="Schreinermeister Stefan Dürr – Inhaber der Schreinerei Dürr in Talheim"
              containerClassName="aspect-[3/4] rounded-2xl"
              sizes="(max-width: 1024px) 400px, 50vw"
              direction="left"
              overlayColor="bg-wood-600"
            />
            <ScrollReveal delay={0.5}>
              <div className="absolute -bottom-6 -right-4 rounded-xl border border-warm-200 bg-white p-4 shadow-xl lg:-right-8">
                <Image
                  src="/images/generationenfreundlich.jpg"
                  alt="Zertifikat Generationenfreundlicher Betrieb – Schreinerei Dürr"
                  width={100}
                  height={100}
                  className="h-20 w-20 object-contain lg:h-24 lg:w-24"
                />
              </div>
            </ScrollReveal>
          </div>

          <div>
            <AnimatedLine>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
                Ihr Schreinermeister
              </span>
            </AnimatedLine>
            <AnimatedText
              text="Handwerk mit Herz und Verstand"
              as="h2"
              delay={0.15}
              className="mt-4 text-3xl font-semibold text-warm-950 sm:text-4xl lg:text-5xl"
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-7 text-lg leading-relaxed text-warm-600">
                Hochwertige Möbel werden bei uns in Meisterhand angefertigt
                und sind einzigartige Unikate. Als Schreinermeister und
                Inhaber stehe ich persönlich für die Qualität jedes einzelnen
                Werkstücks.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">
                Alle Produkte durchlaufen meine Hände – vom Zuschnitt bis
                zur finalen Oberflächenbehandlung. Der Betrieb ist eingetragen
                in der Handwerksrolle Heilbronn-Franken (Betriebsnummer 51115)
                und als generationenfreundlicher Betrieb zertifiziert.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Values */}
        <StaggerContainer className="mt-24 grid gap-6 sm:grid-cols-3" delay={0.2}>
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group rounded-2xl border border-warm-200/80 bg-warm-50 p-8 transition-all duration-500 hover:border-wood-200 hover:shadow-lg hover:shadow-wood-900/[0.04]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-wood-600 transition-all duration-500 group-hover:bg-wood-600 group-hover:text-white">
                  <value.icon className="h-5 w-5" />
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

        {/* Workshop & Location */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <AnimatedLine>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
                Werkstatt & Standort
              </span>
            </AnimatedLine>
            <AnimatedText
              text="Gefertigt in Talheim"
              as="h3"
              delay={0.15}
              className="mt-4 text-3xl font-semibold text-warm-950 sm:text-4xl"
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-7 text-lg leading-relaxed text-warm-600">
                In unserer Werkstatt in Talheim bei Heilbronn entstehen alle
                unsere Möbelstücke. Hier verbindet sich traditionelles
                Handwerk mit modernen Fertigungsmethoden zu Ergebnissen, die
                überzeugen.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">
                Die Region Heilbronn-Franken ist unsere Heimat. Wir
                bedienen Kunden in Talheim, Heilbronn und der gesamten
                Region mit individuellen Schreinerlösungen.
              </p>
              <div className="mt-8 flex items-start gap-3 text-warm-600">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-wood-500" />
                <div>
                  <p className="font-medium text-warm-900">Schreinerei Stefan Dürr</p>
                  <p>Frankenstraße 31</p>
                  <p>74388 Talheim</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ImageReveal
            src="/images/werkstatt.jpg"
            alt="Werkstatt der Schreinerei Dürr in Talheim bei Heilbronn"
            containerClassName="aspect-[4/3] rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            delay={0.2}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
