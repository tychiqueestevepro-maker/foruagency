"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { label: "Création de site web", href: "/services/creation-site-web" },
  { label: "Intégrations business", href: "/services/integrations-business" },
  { label: "Agents IA", href: "/services/agents-ia" },
  { label: "Suivi & Optimisation", href: "/services/suivi-optimisation" },
];

export default function Footer() {
  const [year, setYear] = useState<number | string>("");
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer style={{ backgroundColor: "#0A0A0A" }} className="pt-20 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-5">
              <Image src="/icon.png" alt="For U Agency" width={40} height={40} className="rounded-xl" />
            </div>
            <p className="font-body font-light text-white/35 text-sm leading-relaxed max-w-xs">
              Sites web sur mesure, outils business connectés et agents IA pour les entrepreneurs qui veulent performer.
            </p>
            <a
              href="mailto:contact@foruagency.com"
              className="inline-block mt-6 text-sm font-body font-medium text-white/35 hover:text-white transition-colors"
            >
              contact@foruagency.com
            </a>
          </div>

          <div>
            <p className="text-white/20 font-body font-medium text-[10px] mb-6 uppercase tracking-widest">Services</p>
            <ul className="space-y-3.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-body font-light text-white/35 text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/20 font-body font-medium text-[10px] mb-6 uppercase tracking-widest">Agence</p>
            <ul className="space-y-3.5">
              {[
                { label: "Notre méthode", href: "/#process" },
                { label: "Réalisations", href: "/realisations" },
                { label: "Contact", href: "mailto:contact@foruagency.com" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body font-light text-white/35 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-body font-light text-white/18 text-xs">
              © {year} For U Agency. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/mentions-legales" className="font-body font-light text-white/18 text-[10px] hover:text-white transition-colors uppercase tracking-wider">Mentions Légales</Link>
              <Link href="/politique-confidentialite" className="font-body font-light text-white/18 text-[10px] hover:text-white transition-colors uppercase tracking-wider">Politique de Confidentialité</Link>
            </div>
          </div>
          <Link
            href="#booking"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-xs px-5 py-2.5 rounded-full text-white transition-all hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
              boxShadow: "0 0 16px rgba(139,92,246,0.25)",
            }}
          >
            On en parle ? <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
