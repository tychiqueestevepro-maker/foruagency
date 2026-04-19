"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const COLOR = "#EC4899";

const ACTIONS = [
  { title: "Analyse des performances", desc: "Trafic, taux de conversion, parcours utilisateur. On sait exactement ce qui fonctionne et ce qui freine." },
  { title: "Mise à jour du contenu", desc: "Textes, offres, pages de service. Votre site reste pertinent et optimisé pour les moteurs de recherche." },
  { title: "Tests & expérimentations", desc: "A/B tests sur les titres, CTA, mises en page. On teste, on mesure, on garde ce qui convertit mieux." },
  { title: "Évolution des agents IA", desc: "Mise à jour des automatisations selon les nouveaux besoins et les évolutions de votre business." },
  { title: "Optimisation technique", desc: "Vitesse, performances mobiles, Core Web Vitals. Un site rapide convertit plus et est mieux référencé." },
  { title: "Reporting mensuel", desc: "Un rapport clair chaque mois : ce qui a été fait, les résultats, les axes d'amélioration." },
];

const MODES = [
  { title: "Intervention ponctuelle", desc: "Besoin spécifique : refonte d'une page, mise à jour d'une offre. On intervient à la demande, sans engagement.", ideal: "Idéal pour les clients autonomes qui ont ponctuellement besoin d'aide.", recommended: false },
  { title: "Accompagnement continu", desc: "On s'occupe de tout. Chaque mois, analyse, amélioration, évolution selon vos objectifs.", ideal: "Idéal pour les entrepreneurs qui veulent une croissance régulière sans s'occuper du technique.", recommended: true },
];

export default function SuiviOptimisationPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-40 pb-14 md:pb-24 px-6 bg-white relative overflow-hidden">
          <div className="blob-rose w-[500px] h-[500px] opacity-12" style={{ top: "-15%", right: "-10%" }} />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-10">
              <Link href="/#services" className="font-body text-sm text-[#0A0A0A]/35 hover:text-[#0A0A0A] transition-colors">← Services</Link>
              <span className="text-[#0A0A0A]/15">/</span>
              <span className="font-body text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest" style={{ color: COLOR, backgroundColor: COLOR + "12" }}>Suivi</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-7 max-w-[820px]"
              style={{ fontSize: "clamp(44px, 6.5vw, 80px)", letterSpacing: "-0.04em" }}>
              On ne livre pas{" "}
              <span className="font-heading italic" style={{ color: COLOR }}>et on disparaît</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
              className="font-body font-light text-[#0A0A0A]/50 text-lg max-w-[500px] leading-relaxed mb-10">
              Votre site est lancé. Le vrai travail commence. On analyse, on améliore et on fait évoluer vos automatisations : en continu.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Link href="#booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
                style={{ background: `linear-gradient(135deg, ${COLOR}, #db2777)`, boxShadow: `0 0 28px ${COLOR}40` }}>
                En discuter <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Actions */}
        <section className="py-14 md:py-24 px-6" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Ce qu&apos;on fait</span>
            <h2 className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              Amélioration continue,{" "}<span className="font-heading italic">résultats croissants</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ACTIONS.map((a, i) => (
                <motion.div key={a.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="card rounded-3xl p-7">
                  <div className="w-8 h-8 rounded-xl mb-5 flex items-center justify-center" style={{ backgroundColor: COLOR + "15" }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLOR }} />
                  </div>
                  <h3 className="font-body font-medium text-[#0A0A0A] mb-3 tracking-[-0.02em]" style={{ fontSize: 17 }}>{a.title}</h3>
                  <p className="font-body font-light text-[#0A0A0A]/50 text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modes */}
        <section className="py-14 md:py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Formules</span>
            <h2 className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              À votre rythme,{" "}<span className="font-heading italic">selon vos besoins</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MODES.map((m, i) => (
                <motion.div key={m.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-3xl p-8 relative ${m.recommended ? "" : "card"}`}
                  style={m.recommended ? { backgroundColor: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)" } : {}}>
                  {m.recommended && (
                    <span className="absolute top-5 right-5 font-body font-semibold text-xs px-3 py-1 rounded-full text-white"
                      style={{ background: `linear-gradient(135deg, ${COLOR}, #db2777)` }}>Recommandé</span>
                  )}
                  <h3 className={`font-body font-medium mb-3 tracking-[-0.02em] ${m.recommended ? "text-white" : "text-[#0A0A0A]"}`} style={{ fontSize: 21 }}>{m.title}</h3>
                  <p className={`font-body font-light text-sm leading-relaxed mb-6 ${m.recommended ? "text-white/45" : "text-[#0A0A0A]/50"}`}>{m.desc}</p>
                  <p className={`font-body font-light text-xs ${m.recommended ? "" : "text-[#0A0A0A]/30"}`} style={m.recommended ? { color: COLOR } : {}}>{m.ideal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-28 px-6 relative overflow-hidden" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="blob-rose w-[400px] h-[400px] opacity-15" style={{ bottom: "-20%", right: "-10%" }} />
          <div className="max-w-[720px] mx-auto text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 62px)", letterSpacing: "-0.04em" }}>
              On fait évoluer <span className="font-heading italic" style={{ color: COLOR }}>votre site ?</span>
            </motion.h2>
            <p className="font-body font-light text-[#0A0A0A]/50 text-lg mb-10 leading-relaxed">Parlez-nous de votre situation : on vous propose le mode d&apos;accompagnement adapté.</p>
            <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
              style={{ background: `linear-gradient(135deg, ${COLOR}, #db2777)`, boxShadow: `0 0 36px ${COLOR}40` }}>
              On en parle ? <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
