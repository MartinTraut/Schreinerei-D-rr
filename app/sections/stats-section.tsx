import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { Counter } from "@/components/counter";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

const STATS = [
  { value: 100, suffix: "%", label: "Meisterhand", description: "Jedes Stück von Hand gefertigt" },
  { value: 10, suffix: "+", label: "Leistungsbereiche", description: "Vom Möbelbau bis Hausmeisterservice" },
  { value: 51115, prefix: "#", label: "HWK Heilbronn", description: "Registriert in der Handwerksrolle" },
  { value: 74388, label: "Talheim", description: "Unsere Heimat in Baden-Württemberg" },
];

export function StatsSection() {
  return (
    <section className="grain relative bg-warm-950 py-28 text-white lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <AnimatedLine>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-400">
              Zahlen & Fakten
            </span>
          </AnimatedLine>
          <AnimatedText
            text="Das macht uns aus"
            as="h2"
            delay={0.1}
            className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl"
          />
        </div>

        <StaggerContainer className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.12}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group text-center">
                <p className="font-serif text-5xl font-semibold text-wood-400 sm:text-6xl lg:text-7xl">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix ?? ""}
                    prefix={stat.prefix ?? ""}
                  />
                </p>
                <p className="mt-4 font-serif text-lg font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-warm-400">
                  {stat.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
