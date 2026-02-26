import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText, AnimatedLine } from "@/components/animated-text";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-warm-100 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <AnimatedLine>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-wood-500">
              Kontakt
            </span>
          </AnimatedLine>
          <AnimatedText
            text="Lassen Sie uns ins Gespräch kommen"
            as="h2"
            delay={0.1}
            className="mt-4 text-3xl font-semibold text-warm-950 sm:text-4xl lg:text-5xl"
          />
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-warm-600">
              Erzählen Sie uns von Ihrem Projekt. Wir beraten Sie gerne
              persönlich und unverbindlich.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-2" staggerDelay={0.1} delay={0.2}>
              <StaggerItem>
                <a
                  href="tel:+4915782885841"
                  className="flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-warm-500">Telefon</p>
                    <p className="mt-0.5 text-lg font-medium text-warm-900">
                      0157 8288 5841
                    </p>
                  </div>
                </a>
              </StaggerItem>

              <StaggerItem>
                <a
                  href="mailto:stefan@schreinerei-duerr.de"
                  className="flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-warm-500">E-Mail</p>
                    <p className="mt-0.5 text-lg font-medium text-warm-900">
                      stefan@schreinerei-duerr.de
                    </p>
                  </div>
                </a>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start gap-4 rounded-xl p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-warm-500">Adresse</p>
                    <p className="mt-0.5 text-lg font-medium text-warm-900">
                      Schreinerei Stefan Dürr
                    </p>
                    <p className="text-warm-600">Frankenstraße 31</p>
                    <p className="text-warm-600">74388 Talheim</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start gap-4 rounded-xl p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-warm-500">Terminvereinbarung</p>
                    <p className="mt-0.5 text-warm-600">
                      Termine nach Vereinbarung.
                      <br />
                      Rufen Sie uns an oder schreiben Sie uns.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-semibold text-warm-950 sm:text-3xl">
                  Projekt anfragen
                </h3>
                <p className="mt-2 text-warm-600">
                  Füllen Sie das Formular aus und wir melden uns zeitnah bei
                  Ihnen.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Map */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.8!2d9.1903!3d49.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA1JzAxLjAiTiA5wrAxMScyNS4xIkU!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Schreinerei Dürr – Frankenstraße 31, 74388 Talheim"
              className="w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
