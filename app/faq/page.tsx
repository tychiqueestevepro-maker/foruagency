"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, Search, MessageSquare, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CATEGORIES = [
  {
    label: "Général",
    color: "#3B82F6",
    icon: <MessageSquare size={16} />,
    questions: [
      {
        q: "Qu'est-ce que For U Agency ?",
        a: "Nous sommes une agence digitale créative spécialisée dans la conception de sites web haute performance, l'automatisation de processus business et l'intégration d'intelligence artificielle sur mesure. Notre mission est de transformer votre présence digitale en un véritable moteur de croissance.",
      },
      {
        q: "En quoi êtes-vous différents des agences traditionnelles ?",
        a: "Là où d'autres se contentent de livrer un template, nous concevons des solutions uniques codées avec précision. Nous fusionnons design premium, stratégie business et technologies d'avant-garde (IA, automatisations) pour créer des outils qui ne sont pas seulement beaux, mais redoutablement efficaces.",
      },
      {
        q: "Quel type de clients accompagnez-vous ?",
        a: "Nous travaillons avec des entrepreneurs ambitieux, des startups en phase de scale-up et des PME qui souhaitent passer au niveau supérieur. Nous privilégions les relations basées sur la confiance et l'audace technologique.",
      },
      {
        q: "Proposez-vous une collaboration à distance ?",
        a: "Absolument. Notre structure est agile et pensée pour le remote. Nous utilisons les meilleurs outils collaboratifs pour assurer une fluidité totale, que vous soyez à Paris, Genève ou au bout du monde.",
      },
    ],
  },
  {
    label: "Investissement",
    color: "#8B5CF6",
    icon: <ArrowUpRight size={16} />,
    questions: [
      {
        q: "Quel est le budget pour un projet avec vous ?",
        a: "Chaque projet est unique et mérite une approche sur mesure. Pour des écosystèmes complexes incluant IA et automatisations, nous élaborons un diagnostic précis pour définir ensemble l'investissement nécessaire.",
      },
      {
        q: "Livraison complète vs Accompagnement continu ?",
        a: "La Livraison complète est idéale pour un lancement percutant (clé en main). L'Accompagnement continu s'adresse à ceux qui veulent une optimisation constante : A/B testing, mises à jour IA, et évolution stratégique mensuelle.",
      },
      {
        q: "Y a-t-il des coûts récurrents à prévoir ?",
        a: "Nous prônons la transparence totale. Les seuls coûts récurrents sont vos licences d'outils tiers (hébergement, CMS, API IA) que nous optimisons pour vous. Pas de frais de maintenance cachés : vous êtes propriétaire de votre code.",
      },
    ],
  },
  {
    label: "Process & Délais",
    color: "#EC4899",
    icon: <Plus size={16} />,
    questions: [
      {
        q: "Sous quel délai puis-je espérer mon site ?",
        a: "Un projet type est livré en 4 à 8 semaines. Pour les besoins urgents, notre offre 'Fast-Track' permet de sortir une V1 performante en 15 jours. La qualité demande du temps, mais nous respectons nos engagements au jour près.",
      },
      {
        q: "Comment se déroule la collaboration ?",
        a: "De la découverte à la mise en ligne, nous suivons une méthode rigoureuse : Immersion > Stratégie & Design > Développement Haute Fidélité > Intégrations IA > Lancement & Formation. Vous suivez l'avancée en temps réel via un dashboard dédié.",
      },
      {
        q: "Suis-je formé à l'utilisation du site ?",
        a: "Oui, c'est une priorité. À la livraison, vous recevez une formation personnalisée et des guides vidéo pour que vous et votre équipe soyez totalement autonomes sur la gestion de votre nouvel outil.",
      },
    ],
  },
  {
    label: "Technique & IA",
    color: "#F97316",
    icon: <Mail size={16} />,
    questions: [
      {
        q: "Quelles technologies maîtrisez-vous ?",
        a: "Nous utilisons le stack le plus moderne : Next.js, React et Tailwind CSS pour une rapidité fulgurante. Pour l'IA, nous intégrons les modèles les plus performants (OpenAI, Anthropic, Mistral) via des architectures scalables et sécurisées.",
      },
      {
        q: "Comment garantissez-vous les performances ?",
        a: "Chaque ligne de code est optimisée pour le SEO et la vitesse (Core Web Vitals). Nous ne faisons aucun compromis sur l'expérience utilisateur mobile et l'accessibilité.",
      },
      {
        q: "Pouvez-vous reprendre un site existant ?",
        a: "Nous préférons généralement repartir sur des bases saines pour garantir les résultats. Cependant, nous pouvons auditer votre stack actuel pour voir si une migration ou une intégration d'IA est pertinente sans tout reconstruire.",
      },
    ],
  },
];

function FaqItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group border-b border-black/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 transition-all"
      >
        <span className="font-body font-medium text-[16px] text-[#0A0A0A] tracking-[-0.01em] group-hover:translate-x-1 transition-transform duration-300">{q}</span>
        <div 
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ 
            backgroundColor: open ? color : "transparent",
            border: open ? `1px solid ${color}` : "1px solid rgba(0,0,0,0.1)"
          }}
        >
          {open
            ? <Minus size={14} className="text-white" strokeWidth={2.5} />
            : <Plus size={14} className="text-[#0A0A0A]" strokeWidth={2.5} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="font-body font-light text-[#0A0A0A]/60 text-base leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = CATEGORIES[activeCategory].questions.filter(
    q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
         q.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Header Section */}
        <section className="relative pt-28 md:pt-44 pb-12 md:pb-24 px-6 overflow-hidden">
          {/* Enhanced Background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] bg-blue-100/40 opacity-50 animate-pulse" />
            <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] bg-purple-100/30 opacity-40" />
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full blur-[80px] bg-pink-100/20 opacity-30" />
          </div>

          <div className="max-w-[900px] mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 
                className="font-body font-medium text-[#0A0A0A] leading-[0.9] mb-8"
                style={{ fontSize: "clamp(48px, 8vw, 84px)", letterSpacing: "-0.04em" }}
              >
                On répond à vos <br />
                <span className="font-heading italic font-light text-purple-600">curiosités</span>
              </h1>
              
              <p className="font-body text-[#0A0A0A]/50 text-xl max-w-[580px] mx-auto leading-relaxed mb-12">
                Tout ce que vous devez savoir pour lancer votre projet en toute sérénité.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-[500px] mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                <input 
                  type="text"
                  placeholder="Une question spécifique ?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white border border-black/[0.08] focus:border-purple-500/30 focus:ring-4 focus:ring-purple-500/5 transition-all outline-none font-body text-base placeholder:text-black/20 shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-32 px-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Sidebar Navigation */}
              <div className="lg:w-64 lg:shrink-0">
                <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
                  {CATEGORIES.map((cat, i) => (
                    <button
                      key={cat.label}
                      onClick={() => {
                        setActiveCategory(i);
                        setSearchQuery("");
                      }}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left flex-shrink-0 lg:flex-shrink"
                      style={{
                        backgroundColor: activeCategory === i ? `${cat.color}10` : "transparent",
                        color: activeCategory === i ? cat.color : "rgba(10,10,10,0.45)"
                      }}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                        style={{ 
                          backgroundColor: activeCategory === i ? cat.color : "rgba(0,0,0,0.03)",
                          color: activeCategory === i ? "white" : "rgba(0,0,0,0.3)"
                        }}
                      >
                        {cat.icon}
                      </div>
                      <span className="font-body font-medium text-sm">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ List */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory + searchQuery}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-8">
                      <h2 className="font-body font-semibold text-2xl text-[#0A0A0A] mb-2">
                        {searchQuery ? "Résultats de recherche" : CATEGORIES[activeCategory].label}
                      </h2>
                      <div className="w-12 h-1 rounded-full" style={{ backgroundColor: CATEGORIES[activeCategory].color }} />
                    </div>

                    <div className="bg-white border border-black/[0.05] rounded-[32px] p-8 md:p-10 shadow-sm">
                      {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((item, idx) => (
                          <FaqItem
                            key={item.q}
                            q={item.q}
                            a={item.a}
                            color={CATEGORIES[activeCategory].color}
                          />
                        ))
                      ) : (
                        <div className="py-20 text-center">
                          <p className="font-body text-black/30">Aucun résultat pour cette recherche.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Contact Section */}
        <section className="pb-32 px-6">
          <div className="max-w-[1000px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 md:p-20 rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-50%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
              </div>
              
              <div className="relative z-10 max-w-[600px] mx-auto">
                <h2 
                  className="font-body font-medium leading-[0.95] mb-8"
                  style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.03em" }}
                >
                  D&apos;autres questions ? <br />
                  <span className="text-white/40">On y répond en direct.</span>
                </h2>
                <p className="font-body font-light text-white/50 text-lg mb-12">
                  Prenez 30 minutes pour clarifier votre projet et découvrir comment nous pouvons vous aider.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="#booking"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-white text-black font-body font-semibold text-[15px] hover:bg-white/90 active:scale-95 transition-all"
                  >
                    On en parle ? <ArrowUpRight size={18} />
                  </Link>
                  <Link
                    href="mailto:contact@foruagency.com"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white font-body font-medium text-[15px] hover:bg-white/10 transition-all"
                  >
                    Envoyer un mail <Mail size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
