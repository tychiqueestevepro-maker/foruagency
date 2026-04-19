"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const COLOR = "#F97316";

const TOOLS = [
  { name: "Prise de rendez-vous", apps: [{ name: "Calendly", domain: "calendly.com" }, { name: "Cal.com", domain: "cal.com" }, { name: "Acuity", domain: "acuityscheduling.com" }], desc: "Vos clients réservent directement depuis votre site : plus d'allers-retours par email." },
  { name: "Analytics & suivi", apps: [{ name: "Google Analytics", domain: "google.com" }, { name: "Hotjar", domain: "hotjar.com" }, { name: "Clarity", domain: "microsoft.com" }], desc: "Comprendre d'où viennent vos visiteurs, ce qu'ils font, ce qui convertit et ce qui bloque." },
  { name: "Email marketing", apps: [{ name: "Brevo", domain: "brevo.com" }, { name: "Mailchimp", domain: "mailchimp.com" }, { name: "ActiveCampaign", domain: "activecampaign.com" }], desc: "Capturez des emails et envoyez des séquences automatiques pour nourrir vos prospects." },
  { name: "Formulaires intelligents", apps: [{ name: "Tally", domain: "tally.so" }, { name: "Typeform", domain: "typeform.com" }, { name: "Jotform", domain: "jotform.com" }], desc: "Des formulaires qui qualifient, segmentent et redirigent vos contacts automatiquement." },
  { name: "CRM & gestion clients", apps: [{ name: "HubSpot", domain: "hubspot.com" }, { name: "Notion", domain: "notion.so" }, { name: "Airtable", domain: "airtable.com" }], desc: "Centralisez vos contacts et suivez chaque lead depuis le premier clic jusqu'à la vente." },
  { name: "Automatisations", apps: [{ name: "Zapier", domain: "zapier.com" }, { name: "Make", domain: "make.com" }], desc: "Connectez tous vos outils entre eux : si X alors Y, sans jamais toucher un clavier." },
  { name: "Chat & support live", apps: [{ name: "Crisp", domain: "crisp.chat" }, { name: "Intercom", domain: "intercom.com" }, { name: "Tawk.to", domain: "tawk.to" }], desc: "Soyez présent quand vos visiteurs ont une question. Configuré pour répondre même en absence." },
  { name: "Paiement en ligne", apps: [{ name: "Stripe", domain: "stripe.com" }, { name: "PayPal", domain: "paypal.com" }, { name: "Sumeria", domain: "sumeria.money" }], desc: "Acceptez des paiements directement depuis votre site : abonnements, sessions, produits." },
];

const BENEFITS = [
  { title: "Zéro lead perdu", desc: "Chaque visiteur qui remplit un formulaire, prend un RDV ou clique sur un CTA est automatiquement capturé et traité." },
  { title: "Gain de temps massif", desc: "Les tâches répétitives : confirmations, relances, synchro d'outils : se font seules." },
  { title: "Meilleures décisions", desc: "Avec les bonnes données, vous savez exactement ce qui fonctionne et où investir pour croître." },
  { title: "Expérience client premium", desc: "Un parcours fluide du premier clic au closing. Vos clients vivent une expérience professionnelle." },
];

function getSlug(name: string, domain: string) {
  const customSlugs: Record<string, string> = {
    "Google Analytics": "googleanalytics",
    "Stripe": "stripe",
    "Zapier": "zapier",
    "HubSpot": "hubspot",
    "Brevo": "brevo",
    "Calendly": "calendly",
    "Make": "make",
    "Notion": "notion",
    "Airtable": "airtable",
    "Crisp": "crisp"
  };
  return customSlugs[name] || domain.split('.')[0];
}

function logoUrl(name: string, domain: string) { return `https://cdn.simpleicons.org/${getSlug(name, domain)}`; }
function fallbackUrl(d: string) { return `https://unavatar.io/${d}`; }

export default function IntegrationsBusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-40 pb-14 md:pb-24 px-6 bg-white relative overflow-hidden">
          <div className="blob-orange w-[500px] h-[500px] opacity-12" style={{ top: "-15%", right: "-10%" }} />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-10">
              <Link href="/#services" className="font-body text-sm text-[#0A0A0A]/35 hover:text-[#0A0A0A] transition-colors">← Services</Link>
              <span className="text-[#0A0A0A]/15">/</span>
              <span className="font-body text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest" style={{ color: COLOR, backgroundColor: COLOR + "12" }}>Intégrations</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-7 max-w-[820px]"
              style={{ fontSize: "clamp(44px, 6.5vw, 80px)", letterSpacing: "-0.04em" }}>
              Des outils qui{" "}
              <span className="font-heading italic" style={{ color: COLOR }}>amplifient</span>{" "}votre site
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
              className="font-body font-light text-[#0A0A0A]/50 text-lg max-w-[500px] leading-relaxed mb-10">
              On connecte les outils qui capturent, qualifient et convertissent vos visiteurs automatiquement.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Link href="#booking" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
                style={{ background: `linear-gradient(135deg, ${COLOR}, #ea580c)`, boxShadow: `0 0 28px ${COLOR}40` }}>
                Connecter mes outils <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Outils Section Modernisée */}
        <section className="py-16 md:py-32 px-6 overflow-hidden" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                style={{ color: COLOR, backgroundColor: COLOR + "10" }}>Écosystème</span>
              <h2 className="font-body font-medium text-[#0A0A0A] leading-[1.1] mb-8"
                style={{ fontSize: "clamp(36px, 4.5vw, 54px)", letterSpacing: "-0.04em" }}>
                Plus qu&apos;une connexion, <br/>
                <span className="font-heading italic" style={{ color: COLOR }}>une synergie totale</span>
              </h2>
              <p className="font-body font-light text-[#0A0A0A]/60 text-lg leading-relaxed mb-8 max-w-[500px]">
                Votre site n&apos;est pas une île. Nous le connectons aux meilleurs outils du marché pour automatiser vos ventes et votre gestion client. De la prise de rendez-vous au paiement sécurisé, tout communique parfaitement.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {["stripe", "hubspot", "notion", "airtable"].map((slug) => (
                      <div key={slug} className="w-9 h-9 rounded-full border-2 border-[#F8F8F8] bg-white flex items-center justify-center overflow-hidden shadow-sm">
                        <img src={`https://cdn.simpleicons.org/${slug}`} alt={slug} className="w-4 h-4 object-contain opacity-60" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-[#F8F8F8] bg-[#0A0A0A] flex items-center justify-center shadow-sm">
                      <span className="text-[10px] text-white font-bold font-body">+100</span>
                    </div>
                  </div>
                  <span className="font-body text-[13px] text-[#0A0A0A]/40 font-medium">Et bien plus encore, adaptés à votre stack.</span>
                </div>
                <p className="font-body text-sm text-[#0A0A0A]/40 leading-relaxed italic border-l-2 border-[#0A0A0A]/5 pl-4">
                  &quot;On ne choisit pas vos outils pour vous, on les fait travailler ensemble.&quot;
                </p>
              </div>
            </motion.div>

            <div className="relative h-[450px] flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-full">
                {/* Scattered Logos */}
                {[
                  { name: "HubSpot", domain: "hubspot.com", x: "10%", y: "15%", delay: 0, rotate: -8 },
                  { name: "Stripe", domain: "stripe.com", x: "55%", y: "5%", delay: 0.1, rotate: 12 },
                  { name: "Calendly", domain: "calendly.com", x: "20%", y: "65%", delay: 0.2, rotate: -15 },
                  { name: "Make", domain: "make.com", x: "70%", y: "55%", delay: 0.3, rotate: 8 },
                  { name: "Notion", domain: "notion.so", x: "45%", y: "35%", delay: 0.4, rotate: 5 },
                  { name: "Brevo", domain: "brevo.com", x: "5%", y: "45%", delay: 0.5, rotate: -5 },
                ].map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8, rotate: tool.rotate }}
                    whileInView={{ opacity: 1, scale: 1, rotate: tool.rotate }}
                    viewport={{ once: true }}
                    animate={{ 
                      y: [0, i % 2 === 0 ? -15 : 15, 0],
                      rotate: [tool.rotate, tool.rotate + (i % 2 === 0 ? 5 : -5), tool.rotate]
                    }}
                    transition={{ 
                      y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                      default: { duration: 0.6, delay: tool.delay }
                    }}
                    className="absolute p-5 bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 flex items-center justify-center group hover:scale-110 transition-transform duration-300"
                    style={{ left: tool.x, top: tool.y }}
                  >
                    <img 
                      src={logoUrl(tool.name, tool.domain)} 
                      alt={tool.name} 
                      className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackUrl(tool.domain); }}
                    />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[10px] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                      {tool.name}
                    </div>
                  </motion.div>
                ))}
                
                {/* Background Decoration */}
                <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-[0.03]">
                  <div className="w-[400px] h-[400px] border border-[#0A0A0A] rounded-full" />
                  <div className="absolute w-[250px] h-[250px] border border-[#0A0A0A] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-14 md:py-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block font-body font-medium text-[11px] uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>Résultats</span>
            <h2 className="font-body font-medium text-white leading-[0.88] mb-14"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.04em" }}>
              Votre site devient{" "}<span className="font-heading italic" style={{ color: COLOR }}>une machine business</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card-dark rounded-3xl p-8">
                  <div className="w-9 h-9 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: COLOR + "20", border: `1px solid ${COLOR}30` }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLOR }} />
                  </div>
                  <h3 className="font-body font-medium text-white mb-3 tracking-[-0.02em]" style={{ fontSize: 19 }}>{b.title}</h3>
                  <p className="font-body font-light text-white/40 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-28 px-6 bg-white relative overflow-hidden">
          <div className="blob-orange w-[400px] h-[400px] opacity-10" style={{ bottom: "-20%", left: "-10%" }} />
          <div className="max-w-[720px] mx-auto text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-[#0A0A0A] leading-[0.88] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 62px)", letterSpacing: "-0.04em" }}>
              On connecte <span className="font-heading italic" style={{ color: COLOR }}>vos outils ?</span>
            </motion.h2>
            <p className="font-body font-light text-[#0A0A0A]/50 text-lg mb-10 leading-relaxed">Dites-nous quels outils vous utilisez : on s&apos;occupe du reste.</p>
            <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
              style={{ background: `linear-gradient(135deg, ${COLOR}, #ea580c)`, boxShadow: `0 0 36px ${COLOR}40` }}>
              On en parle ? <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
