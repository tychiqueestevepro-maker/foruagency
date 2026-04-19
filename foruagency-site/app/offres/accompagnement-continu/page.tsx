"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const INCLUS = [
  "Tout le contenu de la Livraison complète",
  "Gestion mensuelle du site",
  "Amélioration continue du contenu",
  "Optimisation des performances (vitesse, SEO)",
  "Tests A/B sur les éléments clés",
  "Évolution des automatisations IA",
  "Suivi des résultats et analytics",
  "Reporting mensuel clair",
  "Accès prioritaire pour les interventions",
];

const MENSUEL = [
  { title: "Analyse des résultats", desc: "On étudie vos données chaque mois : trafic, conversions, comportement utilisateur : pour décider quoi améliorer en priorité." },
  { title: "Mises à jour du contenu", desc: "Textes, offres, nouvelles pages, ajustements visuels. Votre site reste toujours actuel, pertinent et optimisé." },
  { title: "Optimisation des automatisations", desc: "Les agents IA s'améliorent avec le temps. On analyse les conversations et ajuste leur comportement régulièrement." },
  { title: "Rapport mensuel", desc: "Un document clair chaque mois : ce qui a été fait, les résultats obtenus, ce qu'on prévoit pour le mois suivant." },
];

const TOOLS_CONTINU = [
  { name: "Analytics", slug: "googleanalytics", color: "#E37400" },
  { name: "Hotjar", slug: "hotjar", color: "#F8400A" },
  { name: "Notion", slug: "notion", color: "#000000" },
  { name: "Airtable", slug: "airtable", color: "#18BFFF" },
  { name: "Make", slug: "make", color: "#6D00CC" },
  { name: "Zapier", slug: "zapier", color: "#FF4A00" },
];

export default function AccompagnementContinuPage() {
  return (
    <div className="space-y-6">
      {/* Intro card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
        style={{ backgroundColor: "#0A0A0A" }}
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>

            <h2 className="font-heading text-4xl md:text-5xl text-white leading-[0.88] tracking-tight mb-5">
              Accompagnement<br />continu
            </h2>
            <p className="font-body font-light text-white/60 text-base leading-relaxed mb-8">
              On reste à vos côtés après le lancement. Chaque mois, on analyse, on améliore et on fait évoluer votre site avec votre business sans que vous ayez à vous en préoccuper.
            </p>
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-body font-semibold text-[#0A0A0A] hover:opacity-90 active:scale-95 transition-all"
              style={{ backgroundColor: "#3B82F6" }}
            >
              On en parle ? <ArrowUpRight size={14} />
            </Link>
          </div>

          <div>

            <ul className="space-y-3">
              {INCLUS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3B82F6" }}>
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="font-body font-light text-white/65 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Ce qu'on fait chaque mois */}
      <div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MENSUEL.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="liquid-glass rounded-3xl p-7"
            >
              <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center font-heading text-sm text-[#3B82F6]"
                style={{ backgroundColor: "rgba(59,130,246,0.1)" }}>
                {i + 1}
              </div>
              <h3 className="font-heading text-lg text-[#0A0A0A] mb-2">{m.title}</h3>
              <p className="font-body font-light text-[#0A0A0A]/55 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Outils de suivi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="liquid-glass rounded-3xl p-8"
      >

        <div className="flex flex-wrap gap-3">
          {TOOLS_CONTINU.map((t) => (
            <div key={t.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.05] shadow-sm">
              <img 
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace('#', '')}`} 
                alt={t.name} 
                className="w-4 h-4 object-contain"
              />
              <span className="font-body font-medium text-sm text-[#0A0A0A]/70">{t.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Comparaison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="liquid-glass rounded-3xl p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>

            <ul className="space-y-3">
              {["Votre site ne tombe pas en panne", "Corrections de bugs", "Mises à jour de sécurité", "Réactif aux problèmes"].map((p) => (
                <li key={p} className="font-body font-light text-sm text-[#0A0A0A]/40 flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#0A0A0A]/20 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>

            <ul className="space-y-3">
              {["Votre site devient plus performant chaque mois", "Amélioration continue du contenu", "Optimisation des conversions", "Proactif sur les opportunités"].map((p) => (
                <li key={p} className="font-body font-light text-sm text-[#0A0A0A]/70 flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#3B82F6" }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <p className="text-center font-body font-light text-[#0A0A0A]/35 text-xs pt-2">
        Diagnostic établi sur mesure après échange · Sans engagement
      </p>
    </div>
  );
}
