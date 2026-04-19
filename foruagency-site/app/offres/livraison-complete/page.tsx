"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const INCLUS = [
  "Projet livré entièrement, de A à Z",
  "Design 100% personnalisé",
  "Développement sur mesure",
  "Intégrations outils configurées",
  "Agents IA si inclus dans le projet",
  "Optimisation vitesse et SEO technique",
  "Accès total au site et aux données",
  "Formation à l'utilisation",
  "Vous repartez 100% autonome",
];

const POUR_QUI = [
  { title: "Un projet ponctuel", desc: "Vous avez un besoin précis : créer votre site, lancer un produit, refondre une page. Pas besoin d'un contrat mensuel." },
  { title: "Vous aimez garder le contrôle", desc: "Vous voulez avoir la main sur votre site après livraison, gérer vous-même les mises à jour et évolutions." },
  { title: "Un investissement clair", desc: "On définit ensemble le périmètre exact du projet avant de lancer la production pour une visibilité totale." },
];

const TOOLS_ICONS = [
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "Calendly", slug: "calendly", color: "#006BFF" },
  { name: "Analytics", slug: "googleanalytics", color: "#E37400" },
  { name: "HubSpot", slug: "hubspot", color: "#FF7A59" },
  { name: "Zapier", slug: "zapier", color: "#FF4A00" },
  { name: "Brevo", slug: "brevo", color: "#0B996E" },
];

export default function LivraisonCompletePage() {
  return (
    <div className="space-y-6">
      {/* Intro card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="liquid-glass rounded-3xl p-10 md:p-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>

            <h2 className="font-heading text-4xl md:text-5xl text-[#0A0A0A] leading-[0.88] tracking-tight mb-5">
              Livraison<br />complète
            </h2>
            <p className="font-body font-light text-[#0A0A0A]/60 text-base leading-relaxed mb-8">
              On construit votre projet de A à Z : site, outils, automatisations IA. Tout est livré, configuré et opérationnel. Vous repartez avec accès complet et formation incluse.
            </p>
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-body font-semibold text-white hover:opacity-90 active:scale-95 transition-all"
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
                  <span className="font-body font-light text-[#0A0A0A]/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Pour qui */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {POUR_QUI.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="liquid-glass rounded-3xl p-7"
          >
            <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center font-heading text-sm text-[#3B82F6]"
              style={{ backgroundColor: "rgba(59,130,246,0.1)" }}>
              {i + 1}
            </div>
            <h3 className="font-heading text-lg text-[#0A0A0A] mb-2">{p.title}</h3>
            <p className="font-body font-light text-[#0A0A0A]/55 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Outils intégrables */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="liquid-glass rounded-3xl p-8"
      >

        <div className="flex flex-wrap gap-3">
          {TOOLS_ICONS.map((t) => (
            <div key={t.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.05] shadow-sm">
              <img 
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace('#', '')}`} 
                alt={t.name} 
                className="w-4 h-4 object-contain"
              />
              <span className="font-body font-medium text-sm text-[#0A0A0A]/70">{t.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass">
            <span className="font-body font-light text-sm text-[#0A0A0A]/50">+ bien d&apos;autres</span>
          </div>
        </div>
      </motion.div>

      {/* Note devis */}
      <p className="text-center font-body font-light text-[#0A0A0A]/35 text-xs pt-2">
        Diagnostic établi sur mesure après échange · Sans engagement
      </p>
    </div>
  );
}
