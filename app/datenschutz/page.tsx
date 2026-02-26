import type { Metadata } from "next";
import { AnimatedText } from "@/components/animated-text";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Schreinerei Stefan Dürr, Talheim.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.schreinerei-duerr.de/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <AnimatedText text="Datenschutzerklärung" as="h1" className="text-3xl font-semibold text-warm-950 sm:text-4xl" />

        <ScrollReveal delay={0.15}>
          <div className="mt-10 space-y-8 text-warm-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-warm-900 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-warm-900 [&_a]:text-wood-600 [&_a]:transition-colors [&_a]:duration-300 hover:[&_a]:text-wood-800">
            <div>
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3 className="mt-4">Allgemeine Hinweise</h3>
              <p className="mt-2">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>
            <div>
              <h2>2. Verantwortliche Stelle</h2>
              <p className="mt-3">Schreinerei Stefan Dürr<br />Frankenstraße 31<br />74388 Talheim<br /><br />Telefon: <a href="tel:+4915782885841">+49 157 8288 5841</a><br />E-Mail: <a href="mailto:stefan@schreinerei-duerr.de">stefan@schreinerei-duerr.de</a></p>
            </div>
            <div>
              <h2>3. Datenerfassung auf dieser Website</h2>
              <h3 className="mt-4">Kontaktformular</h3>
              <p className="mt-2">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p className="mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </div>
            <div>
              <h3>Server-Log-Dateien</h3>
              <p className="mt-2">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            </div>
            <div>
              <h2>4. Ihre Rechte</h2>
              <p className="mt-3">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
              <p className="mt-2">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
            </div>
            {/* TODO: Vollständige Datenschutzerklärung nach DSGVO ggf. durch Rechtsanwalt ergänzen lassen */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
