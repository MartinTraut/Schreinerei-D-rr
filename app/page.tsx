import { HeroSection } from "./hero-section";
import { IntroSection } from "./sections/intro-section";
import { ServicesSection } from "./sections/services-section";
import { ImageBreak } from "./sections/image-break";
import { ProjectsSection } from "./sections/projects-section";
import { ProcessSection } from "./sections/process-section";
import { AboutSection } from "./sections/about-section";
import { StatsSection } from "./sections/stats-section";
import { ContactSection } from "./sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />

      <ImageBreak
        src="/images/werkstatt.jpg"
        alt="Werkstatt der Schreinerei Dürr in Talheim"
        quote="Jedes Holz erzählt eine Geschichte. Wir geben ihr die passende Form."
        attribution="Stefan Dürr, Schreinermeister"
      />

      <ProjectsSection />
      <ProcessSection />
      <AboutSection />
      <StatsSection />

      <ImageBreak
        src="/images/corian-waschtisch.png"
        alt="Corian® Waschtisch – Schreinerei Dürr"
        quote="Nachhaltigkeit ist keine Entscheidung – sie ist eine Haltung."
        attribution="Stefan Dürr"
      />

      <ContactSection />
    </>
  );
}
