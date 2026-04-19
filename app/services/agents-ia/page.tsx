"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const COLOR = "#8B5CF6";

const AGENTS = [
  { title: "Agent réponse client", tag: "Site / Email", desc: "Répond aux questions fréquentes de vos clients 24h/24, 7j/7. Configuré avec votre ton, vos services et vos informations.", gains: ["80% des questions gérées automatiquement", "Réponse en quelques secondes", "Ton adapté à votre marque"] },
  { title: "Agent qualification de leads", tag: "Prospects", desc: "Engage la conversation avec vos visiteurs, pose les bonnes questions et identifie les prospects vraiment intéressés.", gains: ["Filtrage automatique des prospects", "Score de qualification en temps réel", "Alertes pour les leads chauds"] },
  { title: "Agent relances automatiques", tag: "Conversion", desc: "Suit les contacts qui n'ont pas donné suite et relance au bon moment, avec le bon message.", gains: ["Relances personnalisées", "Séquences adaptées au comportement", "Conversions augmentées"] },
  { title: "Agent support client", tag: "SAV", desc: "Gère les demandes courantes de vos clients existants. Escalade les cas complexes vers vous.", gains: ["Réduction du volume de support", "Disponibilité permanente", "Satisfaction client améliorée"] },
];

const HOW = [
  { n: "01", title: "Analyse de votre business", desc: "On étudie votre activité, vos clients, vos questions fréquentes et votre parcours commercial." },
  { n: "02", title: "Construction de l'agent", desc: "Configuration, entraînement, test. L'agent apprend votre ton, vos produits, vos processus." },
  { n: "03", title: "Intégration", desc: "L'agent est connecté à votre site, email, CRM. Il s'intègre dans votre workflow existant." },
  { n: "04", title: "Optimisation continue", desc: "On analyse les conversations et améliore l'agent. Il devient plus intelligent avec chaque interaction." },
];

export default function AgentsIAPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-40 pb-14 md:pb-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="blob-purple w-[600px] h-[600px] opacity-25" style={{ top: "-15%", right: "-10%" }} />
          <div className="blob-blue   w-[400px] h-[400px] opacity-15" style={{ bottom: "-10%", left: "-8%" }} />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-10">
              <Link href="/#services" className="font-body text-sm text-white/30 hover:text-white transition-colors">← Services</Link>
              <span className="text-white/15">/</span>
              <span className="font-body text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest" style={{ color: COLOR, backgroundColor: COLOR + "18" }}>Agents IA</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body font-medium text-white leading-[0.88] mb-7 max-w-[820px]"
              style={{ fontSize: "clamp(44px, 6.5vw, 80px)", letterSpacing: "-0.04em" }}>
              L&apos;IA qui{" "}
              <span className="font-heading italic" style={{ color: COLOR }}>ne dort jamais</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
              className="font-body font-light text-white/45 text-lg max-w-[500px] leading-relaxed mb-10">
              Pas de simples chatbots. De vrais agents autonomes qui comprennent, répondent, qualifient et relancent : à votre place.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Link href="#booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
                style={{ background: `linear-gradient(135deg, ${COLOR}, #7c3aed)`, boxShadow: `0 0 28px ${COLOR}50` }}>
                Intégrer l&apos;IA <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Agents */}
        <section className="py-14 md:py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Nos agents</span>
            <h2 className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              Quatre agents,{" "}<span className="font-heading italic">infiniment utiles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AGENTS.map((a, i) => (
                <motion.div key={a.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card rounded-3xl p-8">
                  <span className="font-body font-semibold text-xs px-3 py-1.5 rounded-full uppercase tracking-widest mb-5 inline-block"
                    style={{ color: COLOR, backgroundColor: COLOR + "10" }}>{a.tag}</span>
                  <h3 className="font-body font-medium text-[#0A0A0A] mb-3 tracking-[-0.02em]" style={{ fontSize: 19 }}>{a.title}</h3>
                  <p className="font-body font-light text-[#0A0A0A]/50 text-sm leading-relaxed mb-5">{a.desc}</p>
                  <ul className="space-y-2">
                    {a.gains.map((g) => (
                      <li key={g} className="flex items-center gap-2 font-body text-sm text-[#0A0A0A]/55">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR }} />
                        {g}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How */}
        <section className="py-14 md:py-24 px-6" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Méthode</span>
            <h2 className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              De zéro à un agent{" "}<span className="font-heading italic">opérationnel</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HOW.map((h, i) => (
                <motion.div key={h.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card rounded-3xl p-8">
                  <span className="font-body font-medium leading-none block mb-5" style={{ fontSize: 44, letterSpacing: "-0.04em", color: COLOR + "30" }}>{h.n}</span>
                  <h3 className="font-body font-medium text-[#0A0A0A] mb-3 tracking-[-0.02em]" style={{ fontSize: 17 }}>{h.title}</h3>
                  <p className="font-body font-light text-[#0A0A0A]/50 text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-28 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="blob-purple w-[500px] h-[500px] opacity-20" style={{ top: "-20%", left: "-10%" }} />
          <div className="max-w-[720px] mx-auto text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-white leading-[0.88] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 62px)", letterSpacing: "-0.04em" }}>
              Prêt à <span className="font-heading italic" style={{ color: COLOR }}>déléguer à l&apos;IA ?</span>
            </motion.h2>
            <p className="font-body font-light text-white/40 text-lg mb-10 leading-relaxed">Décrivez vos tâches répétitives : on vous propose l&apos;agent qui les automatise.</p>
            <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
              style={{ background: `linear-gradient(135deg, ${COLOR}, #7c3aed)`, boxShadow: `0 0 40px ${COLOR}50` }}>
              On en parle ? <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
