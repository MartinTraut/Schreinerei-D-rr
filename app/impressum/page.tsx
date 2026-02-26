import type { Metadata } from "next";
import { AnimatedText } from "@/components/animated-text";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Schreinerei Stefan Dürr, Frankenstraße 31, 74388 Talheim.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.schreinerei-duerr.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <AnimatedText text="Impressum" as="h1" className="text-3xl font-semibold text-warm-950 sm:text-4xl" />

        <ScrollReveal delay={0.15}>
          <div className="mt-10 space-y-8 text-warm-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-warm-900 [&_a]:text-wood-600 [&_a]:transition-colors [&_a]:duration-300 hover:[&_a]:text-wood-800">
            <div>
              <h2>Angaben gemäß § 5 TMG</h2>
              <p className="mt-3">Schreinerei Stefan Dürr<br />Frankenstraße 31<br />74388 Talheim</p>
            </div>
            <div>
              <h2>Kontakt</h2>
              <p className="mt-3">Telefon: <a href="tel:+4915782885841">+49 157 8288 5841</a><br />E-Mail: <a href="mailto:stefan@schreinerei-duerr.de">stefan@schreinerei-duerr.de</a></p>
            </div>
            <div>
              <h2>Vertreten durch</h2>
              <p className="mt-3">Stefan Dürr (Inhaber, Schreinermeister)</p>
            </div>
            <div>
              <h2>Registereintrag</h2>
              <p className="mt-3">Eingetragen in der Handwerksrolle Heilbronn-Franken<br />Betriebsnummer: 51115</p>
            </div>
            <div>
              <h2>Umsatzsteuer-ID</h2>
              <p className="mt-3">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />DE319938893</p>
            </div>
            <div>
              <h2>Streitschlichtung</h2>
              <p className="mt-3">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr/</a></p>
              <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
            <div>
              <h2>Haftung für Inhalte</h2>
              <p className="mt-3">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter Umständen verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            </div>
            <div>
              <h2>Haftung für Links</h2>
              <p className="mt-3">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </div>
            <div>
              <h2>Urheberrecht</h2>
              <p className="mt-3">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
