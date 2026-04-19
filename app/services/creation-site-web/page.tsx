"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const COLOR = "#3B82F6";

const INCLUS = [
  "Design 100% personnalisé : aucun template",
  "Développement sur mesure",
  "Structure orientée conversion",
  "Responsive mobile-first",
  "Optimisation vitesse (Core Web Vitals)",
  "SEO technique de base",
  "Mise en ligne et déploiement",
  "Formation à l'utilisation",
];

const TYPES = [
  { title: "Site vitrine", desc: "Présentez votre activité, vos services et vos coordonnées de façon claire et professionnelle." },
  { title: "Landing page", desc: "Une page unique conçue pour convertir : publicité, campagne, lancement de produit." },
  { title: "Site portfolio", desc: "Montrez votre travail sous son meilleur jour. Mise en valeur de vos réalisations." },
  { title: "Site one-page", desc: "Tout sur une seule page, navigation fluide. Parfait pour aller droit au but." },
];

const APPROACH = [
  { num: "01", title: "On part de votre objectif", desc: "Pas de 'beau site pour faire beau'. On définit d'abord ce que vous voulez obtenir : des prospects, des RDV, des ventes." },
  { num: "02", title: "Structure qui vend", desc: "Hiérarchie visuelle claire, CTA stratégiquement placés, textes qui convainquent. Votre visiteur comprend votre valeur en 3 secondes." },
  { num: "03", title: "Performance technique", desc: "Un site lent fait fuir 53% des visiteurs. On optimise chaque aspect technique pour que votre site soit rapide partout." },
  { num: "04", title: "Design qui inspire confiance", desc: "Votre site est souvent le premier contact. Il doit refléter votre excellence et rassurer immédiatement." },
];

export default function CreationSiteWebPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-40 pb-14 md:pb-24 px-6 bg-white relative overflow-hidden">
          <div className="blob-blue w-[600px] h-[600px] opacity-12" style={{ top: "-20%", right: "-15%" }} />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-10">
              <Link href="/#services" className="font-body text-sm text-[#0A0A0A]/35 hover:text-[#0A0A0A] transition-colors">← Services</Link>
              <span className="text-[#0A0A0A]/15">/</span>
              <span className="font-body text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest" style={{ color: COLOR, backgroundColor: COLOR + "12" }}>Site web</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-7 max-w-[820px]"
              style={{ fontSize: "clamp(44px, 6.5vw, 80px)", letterSpacing: "-0.04em" }}>
              Votre site web,{" "}
              <span className="font-heading italic" style={{ color: COLOR }}>pensé pour convertir</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
              className="font-body font-light text-[#0A0A0A]/50 text-lg max-w-[500px] leading-relaxed mb-10">
              On ne crée pas juste un beau site. On construit un outil qui travaille pour vous : 24h/24, 7j/7.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Link href="#booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
                style={{ background: `linear-gradient(135deg, ${COLOR}, #2563eb)`, boxShadow: `0 0 28px ${COLOR}40` }}>
                Commencer <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Inclus */}
        <section className="py-14 md:py-24 px-6" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                  style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Inclus</span>
                <h2 className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-5"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
                  Tout, de <span className="font-heading italic">A à Z</span>
                </h2>
                <p className="font-body font-light text-[#0A0A0A]/50 text-sm leading-relaxed">Pas de frais cachés. Voici exactement ce que comprend chaque projet.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INCLUS.map((item) => (
                  <div key={item} className="card rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Check size={14} style={{ color: COLOR, flexShrink: 0, marginTop: 2 }} strokeWidth={2.5} />
                    <span className="font-body font-light text-[#0A0A0A]/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Formats</span>
            <h2 className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              Le bon format<br />pour <span className="font-heading italic">votre activité</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TYPES.map((t, i) => (
                <motion.div key={t.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card rounded-3xl p-8">
                  <div className="w-8 h-8 rounded-xl mb-5" style={{ backgroundColor: COLOR + "15" }}>
                    <div className="w-full h-full rounded-xl flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLOR }} />
                    </div>
                  </div>
                  <h3 className="font-body font-medium text-[#0A0A0A] mb-3 tracking-[-0.02em]" style={{ fontSize: 19 }}>{t.title}</h3>
                  <p className="font-body font-light text-[#0A0A0A]/50 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approche */}
        <section className="py-14 md:py-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>Approche</span>
            <h2 className="font-body font-medium text-white leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              Pourquoi ça <span className="font-heading italic" style={{ color: COLOR }}>convertit vraiment</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {APPROACH.map((a, i) => (
                <motion.div key={a.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card-dark rounded-3xl p-8">
                  <span className="font-body font-medium leading-none block mb-5" style={{ fontSize: 44, letterSpacing: "-0.04em", color: COLOR + "30" }}>{a.num}</span>
                  <h3 className="font-body font-medium text-white mb-3 tracking-[-0.02em]" style={{ fontSize: 17 }}>{a.title}</h3>
                  <p className="font-body font-light text-white/40 text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-28 px-6 bg-white relative overflow-hidden">
          <div className="blob-blue w-[400px] h-[400px] opacity-10" style={{ bottom: "-20%", right: "-10%" }} />
          <div className="max-w-[720px] mx-auto text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 62px)", letterSpacing: "-0.04em" }}>
              On crée <span className="font-heading italic" style={{ color: COLOR }}>votre site ?</span>
            </motion.h2>
            <p className="font-body font-light text-[#0A0A0A]/50 text-lg mb-10 leading-relaxed">Décrivez votre projet, on revient vers vous sous 24h.</p>
            <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
              style={{ background: `linear-gradient(135deg, ${COLOR}, #2563eb)`, boxShadow: `0 0 36px ${COLOR}40` }}>
              On en parle ? <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
