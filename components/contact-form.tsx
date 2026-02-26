"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

const PROJECT_TYPES = [
  "Küche nach Maß",
  "Innenausbau & Möbel",
  "Badmöbel / Corian®",
  "Gartengestaltung",
  "Barrierefreier Umbau",
  "Reparatur & Service",
  "Sonstiges",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Formular-Backend anbinden (z.B. Formspree, eigene API-Route, o.ä.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center py-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-warm-900">
          Vielen Dank!
        </h3>
        <p className="mt-2 text-warm-600">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns zeitnah bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Vorname */}
        <div>
          <label htmlFor="vorname" className="block text-sm font-medium text-warm-700">
            Vorname <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="vorname"
            name="vorname"
            required
            className="mt-1.5 block w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 placeholder:text-warm-400 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
            placeholder="Ihr Vorname"
          />
        </div>
        {/* Nachname */}
        <div>
          <label htmlFor="nachname" className="block text-sm font-medium text-warm-700">
            Nachname <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nachname"
            name="nachname"
            required
            className="mt-1.5 block w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 placeholder:text-warm-400 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
            placeholder="Ihr Nachname"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Telefon */}
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-warm-700">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            className="mt-1.5 block w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 placeholder:text-warm-400 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
            placeholder="Ihre Telefonnummer"
          />
        </div>
        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-warm-700">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1.5 block w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 placeholder:text-warm-400 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
            placeholder="Ihre E-Mail-Adresse"
          />
        </div>
      </div>

      {/* Projektart */}
      <div>
        <label htmlFor="projektart" className="block text-sm font-medium text-warm-700">
          Projektart <span className="text-red-500">*</span>
        </label>
        <select
          id="projektart"
          name="projektart"
          required
          className="mt-1.5 block w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Bitte wählen…
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Ort */}
      <div>
        <label htmlFor="ort" className="block text-sm font-medium text-warm-700">
          Ort / PLZ
        </label>
        <input
          type="text"
          id="ort"
          name="ort"
          className="mt-1.5 block w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 placeholder:text-warm-400 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
          placeholder="Ihr Standort"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-warm-700">
          Ihre Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          className="mt-1.5 block w-full resize-y rounded-lg border border-warm-300 bg-white px-4 py-3 text-warm-900 placeholder:text-warm-400 transition-colors duration-200 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 focus:outline-none"
          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage…"
        />
      </div>

      {/* Datenschutz */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="datenschutz"
          name="datenschutz"
          required
          className="mt-1 h-4 w-4 rounded border-warm-300 text-wood-600 focus:ring-wood-500"
        />
        <label htmlFor="datenschutz" className="text-sm text-warm-600">
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-wood-600 underline hover:text-wood-800">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-wood-700 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-wood-800 hover:shadow-lg hover:shadow-wood-900/20 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Anfrage absenden
      </button>
    </form>
  );
}
