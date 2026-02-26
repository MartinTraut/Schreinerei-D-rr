import { ClipboardList, Pencil, Hammer, PackageCheck } from "lucide-react";
import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

const PROCESS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Beratung",
    description: "In einem persönlichen Gespräch besprechen wir Ihre Wünsche, Anforderungen und die Gegebenheiten vor Ort.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Planung",
    description: "Wir erstellen einen detaillierten Entwurf, der Ihre Vorstellungen mit handwerklicher Expertise verbindet.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Fertigung",
    description: "In unserer Werkstatt in Talheim fertigen wir Ihr Projekt in Meisterqualität – Stück für Stück von Hand.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Montage",
    description: "Die fachgerechte Montage und Einpassung vor Ort bilden den perfekten Abschluss Ihres Projekts.",
  },
];

export function ProcessSection() {
  return (
    <section className="grain relative bg-warm-950 py-28 text-white lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <AnimatedLine>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-400">
              Zusammenarbeit
            </span>
          </AnimatedLine>
          <AnimatedText
            text="Ihr Weg zum Wunschmöbel"
            as="h2"
            delay={0.1}
            className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl"
          />
        </div>

        <StaggerContainer className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
          {PROCESS.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-wood-500/20 hover:bg-white/[0.06]">
                <span className="font-serif text-6xl font-light text-wood-600/25 transition-colors duration-500 group-hover:text-wood-500/40">
                  {step.step}
                </span>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-wood-700/20 text-wood-400 transition-all duration-500 group-hover:bg-wood-600/30 group-hover:text-wood-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-400">
                  {step.description}
                </p>
                {i < PROCESS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-wood-700/40 to-transparent lg:block" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
