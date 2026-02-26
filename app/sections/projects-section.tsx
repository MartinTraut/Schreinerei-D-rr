import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { HorizontalGallery } from "@/components/horizontal-gallery";

const PROJECTS = [
  {
    src: "https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.Bild_K%C3%BCche_1.png/picture-1200",
    alt: "Individuelle Küche aus Massivholz – Schreinerei Dürr Talheim",
    title: "Individuelle Küche",
    category: "Küchen",
  },
  {
    src: "/images/kueche-2.jpg",
    alt: "Maßgefertigte Küche mit hochwertigen Details – Schreinerei Dürr",
    title: "Küche nach Maß",
    category: "Küchen",
  },
  {
    src: "/images/bett-nussbaum.png",
    alt: "Bett aus Nussbaum – handgefertigt von Schreinerei Dürr",
    title: "Bett aus Nussbaum",
    category: "Schlafzimmer",
  },
  {
    src: "/images/anrichte-erle.png",
    alt: "Anrichte aus Erle – maßgefertigt von Schreinerei Dürr Talheim",
    title: "Anrichte aus Erle",
    category: "Möbel",
  },
  {
    src: "/images/esszimmer-erle.png",
    alt: "Esszimmermöbel aus Erle – Schreinerei Dürr",
    title: "Esszimmer aus Erle",
    category: "Möbel",
  },
  {
    src: "/images/corian-waschtisch.png",
    alt: "Waschtisch aus Corian® – Schreinerei Dürr Talheim",
    title: "Corian® Waschtisch",
    category: "Bad",
  },
  {
    src: "/images/gartenbank.png",
    alt: "Holz-Gartenbank – handgefertigt von Schreinerei Dürr",
    title: "Holz-Gartenbank",
    category: "Garten",
  },
  {
    src: "https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.Holzk%C3%BCchenwandmitlogo.png/picture-1200",
    alt: "Holz-Küchenwand mit individuellem Design – Schreinerei Dürr",
    title: "Holz-Küchenwand",
    category: "Küchen",
  },
  {
    src: "/images/kerzen.png",
    alt: "Gefräste Kerzen aus Holz – Geschenkidee von Schreinerei Dürr",
    title: "Gefräste Kerzen",
    category: "Geschenkideen",
  },
];

export function ProjectsSection() {
  return (
    <section id="projekte" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <AnimatedLine>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
                Referenzen
              </span>
            </AnimatedLine>
            <AnimatedText
              text="Ausgewählte Projekte"
              as="h2"
              delay={0.1}
              className="mt-4 text-3xl font-semibold text-warm-950 sm:text-4xl lg:text-5xl"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-4 max-w-lg text-lg text-warm-600">
                Jedes Projekt ist ein Unikat – gefertigt mit Präzision und
                Leidenschaft in unserer Werkstatt in Talheim.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-14">
          <HorizontalGallery items={PROJECTS} />
        </div>
      </div>
    </section>
  );
}
