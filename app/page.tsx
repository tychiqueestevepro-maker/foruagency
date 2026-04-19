"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Check } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


/* ─── data ─── */
const FEATURES = [
  {
    color: "#3B82F6",
    tag: "Site web",
    title: "Un site qui convertit, pas juste qui affiche",
    desc: "Design sur mesure, structure orientée objectif, Core Web Vitals optimisés. Votre site travaille pour vous 24h/24.",
    href: "/services/creation-site-web",
    points: ["Design 100% personnalisé", "Mobile-first & rapide", "SEO technique inclus"],
  },
  {
    color: "#F97316",
    tag: "Intégrations",
    title: "Les bons outils, connectés au bon endroit",
    desc: "Calendly, Stripe, HubSpot, Zapier : on raccorde tout pour que chaque lead soit capturé et traité automatiquement.",
    href: "/services/integrations-business",
    points: ["Prise de RDV automatique", "CRM & email connectés", "Zéro lead perdu"],
  },
  {
    color: "#8B5CF6",
    tag: "Agents IA",
    title: "Une IA qui travaille à votre place",
    desc: "Réponse client, qualification de leads, relances : des agents autonomes entraînés sur votre business.",
    href: "/services/agents-ia",
    points: ["Disponible 24h/24, 7j/7", "Configuré à votre ton", "S'améliore en continu"],
  },
  {
    color: "#EC4899",
    tag: "Suivi",
    title: "On reste. On optimise. On fait croître.",
    desc: "Chaque mois : analyse des performances, mise à jour du contenu, évolution des automatisations. Votre site s'améliore en continu.",
    href: "/services/suivi-optimisation",
    points: ["Rapport mensuel clair", "A/B tests continus", "Support dédié"],
  },
];

const STEPS = [
  {
    n: "01", color: "#3B82F6", title: "Cadrage",
    desc: "30 minutes pour comprendre votre business, vos objectifs et ce qu'on doit construire ensemble.",
    points: ["Analyse de vos besoins", "Définition des objectifs", "Estimation & planning"],
  },
  {
    n: "02", color: "#8B5CF6", title: "Design & build",
    desc: "On conçoit, on développe, on connecte tout. Chaque décision est guidée par vos objectifs.",
    points: ["Maquettes validées ensemble", "Développement sur mesure", "Intégrations connectées"],
  },
  {
    n: "03", color: "#EC4899", title: "Lancement",
    desc: "Mise en ligne, tests finaux, formation. Votre site est prêt à performer dès le jour J.",
    points: ["Tests de performance", "Mise en ligne sécurisée", "Formation incluse"],
  },
  {
    n: "04", color: "#F97316", title: "Croissance",
    desc: "On analyse, on améliore, on adapte. Votre présence en ligne évolue avec votre business.",
    points: ["Rapport mensuel clair", "A/B tests continus", "Évolutions régulières"],
  },
];

const STATS = [
  { value: "100%", label: "Sur mesure", color: "#3B82F6" },
  { value: "4×", label: "Conversions moyennes", color: "#8B5CF6" },
  { value: "24/7", label: "Agents IA actifs", color: "#EC4899" },
  { value: "<48h", label: "Réponse garantie", color: "#F97316" },
];



function StepVisual({ idx, color }: { idx: number; color: string }) {
  const boxStyle: React.CSSProperties = {
    aspectRatio: "4/3",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.07)",
  };
  const blob = <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: color, filter: "blur(70px)" }} />;

  return (
    <div className="relative w-full max-w-lg">
      <div className="w-full">
        {idx === 0 && (
          <div className="relative rounded-3xl overflow-hidden w-full flex items-center justify-center p-10" style={boxStyle}>
            {blob}
            <div
              className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body font-medium text-xs"
              style={{ background: color + "18", color, border: `1px solid ${color}28` }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              Réponse &lt;24h
            </div>
            <div className="relative z-10 w-full max-w-[280px]">
              <div className="font-body text-white/55 text-[10px] uppercase tracking-widest mb-5">Brief initial</div>
              <div className="space-y-4 mb-6">
                {["Quel est votre objectif principal ?", "Quel est votre secteur d'activité ?", "Dans quel délai ?"].map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0" style={{ borderColor: color + "55" }} />
                    <span className="font-body text-sm text-white/80 leading-snug">{q}</span>
                  </div>
                ))}
              </div>
              <div className="w-full py-2.5 rounded-xl font-body font-semibold text-sm text-center" style={{ background: color + "22", color }}>
                Envoyer le brief
              </div>
            </div>
          </div>
        )}
        {idx === 1 && (
          <div className="relative rounded-3xl overflow-hidden w-full flex items-center justify-center p-10" style={boxStyle}>
            {blob}
            <div className="relative z-10 w-full max-w-[280px] space-y-3">
              {[
                { label: "Structure", sub: "Architecture & wireframes" },
                { label: "Design", sub: "Interface & identité visuelle" },
                { label: "Code & connect", sub: "Dev + intégrations actives" },
              ].map((layer, li) => (
                <div key={layer.label}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: `1px solid ${li === 1 ? color + "45" : "rgba(255,255,255,0.07)"}`,
                  }}>
                  <div className="w-1.5 h-8 rounded-full flex-shrink-0" style={{ background: li === 1 ? color : color + "35" }} />
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-medium text-white text-sm">{layer.label}</div>
                    <div className="font-body text-white/60 text-xs">{layer.sub}</div>
                  </div>
                  <Check size={10} style={{ color }} strokeWidth={3} />
                </div>
              ))}
            </div>
          </div>
        )}
        {idx === 2 && (
          <div className="relative rounded-3xl overflow-hidden w-full flex items-center justify-center p-10" style={boxStyle}>
            {blob}
            <div className="relative z-10 w-full max-w-[280px]">
              <div className="flex items-center justify-between mb-5">
                <span className="font-body text-white/55 text-[10px] uppercase tracking-widest">Checklist lancement</span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full font-body font-semibold text-xs"
                  style={{ background: color + "18", color, border: `1px solid ${color}28` }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                  LIVE
                </div>
              </div>
              {["Core Web Vitals optimisés", "SSL & sécurité configurés", "Mobile & responsive testé"].map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <Check size={10} style={{ color }} strokeWidth={3} />
                  <span className="font-body text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {idx === 3 && (
          <div className="relative rounded-3xl overflow-hidden w-full flex items-center justify-center p-10" style={boxStyle}>
            {blob}
            <div className="relative z-10 w-full max-w-[280px]">
              <div className="flex gap-3 mb-8">
                {[{ v: "+87%", l: "Trafic" }, { v: "×3.2", l: "Conversion" }].map((m) => (
                  <div key={m.l} className="flex-1 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${color}20` }}>
                    <div className="font-body font-semibold text-lg leading-none mb-1" style={{ color }}>{m.v}</div>
                    <div className="font-body text-white/60 text-xs">{m.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-end gap-2 h-24">
                {[30, 48, 40, 62, 54, 75, 92].map((h, hi) => (
                  <div key={hi}
                    style={{ flex: 1, height: `${h}%`, background: hi === 6 ? color : color + "30", borderRadius: "5px 5px 3px 3px" }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


function ProcessStep({ step, index, activeStep, onInView }: { step: any, index: number, activeStep: number, onInView: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onInView(index);
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, onInView]);

  return (
    <div ref={ref} className="min-h-[70vh] md:min-h-screen flex flex-col justify-center py-12 md:py-20 px-6">
      <div className="max-w-md lg:max-w-lg">
        <div 
          className="font-body font-medium leading-none mb-6 select-none transition-opacity duration-500"
          style={{ fontSize: "clamp(60px, 15vw, 92px)", color: step.color, opacity: activeStep === index ? 0.25 : 0.08, letterSpacing: "-0.04em" }}
        >
          {step.n}
        </div>
        <h3 
          className="font-body font-medium text-white mb-6 tracking-[-0.03em] transition-colors duration-500"
          style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, color: activeStep === index ? "white" : "rgba(255,255,255,0.3)" }}
        >
          {step.title}
        </h3>
        <p className="font-body text-lg leading-relaxed mb-8 transition-opacity duration-500" 
           style={{ color: "rgba(255,255,255,0.6)", opacity: activeStep === index ? 1 : 0.3 }}>
          {step.desc}
        </p>
        
        <ul className="space-y-4 mb-10">
          {step.points.map((p: string) => (
            <li key={p} className="flex items-center gap-4 font-body text-sm transition-all duration-500"
                style={{ color: activeStep === index ? "white" : "rgba(255,255,255,0.2)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                style={{ backgroundColor: activeStep === index ? step.color + "25" : "rgba(255,255,255,0.05)" }}>
                <Check size={12} style={{ color: activeStep === index ? step.color : "rgba(255,255,255,0.1)" }} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Link
            href="#booking"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-semibold text-[15px] transition-all"
            style={{ 
              backgroundColor: activeStep === index ? step.color : "rgba(255,255,255,0.05)",
              color: activeStep === index ? "white" : "rgba(255,255,255,0.3)",
              border: `1px solid ${activeStep === index ? "transparent" : "rgba(255,255,255,0.1)"}`,
              boxShadow: activeStep === index ? `0 0 32px ${step.color}40` : "none"
            }}
          >
            Échangeons <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}




export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
          <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white">
            {/* Background Blobs for Top Balance */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-purple-400/15 blur-[140px] rounded-full pointer-events-none" />

            {/* Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "saturate(1.5) contrast(1.15) brightness(1.02)" }}
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4" type="video/mp4" />
            </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center pt-36 md:pt-[290px] pb-20 md:pb-28" style={{ gap: 28 }}>


            {/* Heading */}
            <h1
              className="font-body font-medium text-[#0A0A0A] leading-[0.95] md:leading-[0.88]"
              style={{ fontSize: "clamp(40px, 8vw, 82px)", letterSpacing: "-0.04em" }}
            >
              Le site web que votre{" "}
              <span className="font-heading italic" style={{ fontSize: "clamp(45px, 10vw, 102px)" }}>
                business
              </span>
              {" "}mérite
            </h1>

            {/* Sub */}
            <p
              className="font-body text-[18px] leading-relaxed max-w-[520px]"
              style={{ color: "rgba(55,58,70,0.75)" }}
            >
              Design professionnel. Outils connectés. IA intégrée. Votre présence en ligne, pensée pour convertir.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-[15px] text-white transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                  boxShadow: "0 0 32px rgba(139,92,246,0.35)",
                }}
              >
                Discutons de votre projet <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-[15px] transition-all hover:bg-black/5"
                style={{ color: "rgba(55,58,70,0.7)", border: "1px solid rgba(0,0,0,0.1)", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.5)" }}
              >
                Voir les services <ChevronRight size={15} />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#3B82F6", "#8B5CF6", "#EC4899", "#F97316", "#0A0A0A"].map((c) => (
                  <div key={c} className="w-7 h-7 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">{[1,2,3,4,5].map((i) => <span key={i} className="text-sm leading-none" style={{ color: "#F97316" }}>★</span>)}</div>
                <span className="font-body text-sm font-medium" style={{ color: "rgba(55,58,70,0.65)" }}>50+ projets livrés</span>
              </div>
            </div>
          </div>
        </section>



        {/* ── FEATURES ── */}
        <section id="services" className="py-16 md:py-28 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 md:mb-16">
              <h2
                className="font-body font-medium text-[#0A0A0A] leading-[0.88] max-w-xl"
                style={{ fontSize: "clamp(32px, 4.5vw, 54px)", letterSpacing: "-0.04em" }}
              >
                Tout ce qu&apos;il faut<br />pour{" "}
                <span className="font-heading italic">performer en ligne</span>
              </h2>
            </div>

            <div className="space-y-14 md:space-y-24">
              {FEATURES.map((f, i) => (
                <div
                  key={f.tag}
                  className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Texte */}
                  <div className="flex-1 max-w-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: f.color + "18" }}>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
                      </div>
                    </div>

                    <h3
                      className="font-body font-medium text-[#0A0A0A] mb-4 tracking-[-0.03em]"
                      style={{ fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.15 }}
                    >
                      {f.title}
                    </h3>
                    <p className="font-body font-light text-[#0A0A0A]/50 text-base leading-relaxed mb-8">{f.desc}</p>

                    <ul className="space-y-3 mb-10">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 font-body text-sm text-[#0A0A0A]/65">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: f.color + "15" }}>
                            <Check size={11} style={{ color: f.color }} strokeWidth={2.5} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={f.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm transition-all hover:gap-3"
                      style={{ color: f.color, backgroundColor: f.color + "10", border: `1px solid ${f.color}25` }}
                    >
                      En savoir plus <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* Visuel */}
                  <div className="flex-1">
                    <div
                      className="rounded-3xl relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${f.color}10 0%, ${f.color}05 100%)`,
                        border: `1px solid ${f.color}18`,
                        aspectRatio: "4/3",
                      }}
                    >
                      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20" style={{ background: f.color, filter: "blur(70px)" }} />
                      <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full opacity-10" style={{ background: f.color, filter: "blur(55px)" }} />

                      <div className="relative z-10 p-6 md:p-10 flex flex-col gap-4 justify-center h-full">
                        {f.points.map((p, pi) => (
                          <div
                            key={p}
                            className="flex items-center gap-4 px-5 py-4 rounded-2xl"
                            style={{
                              background: "rgba(255,255,255,0.88)",
                              backdropFilter: "blur(12px)",
                              border: "1px solid rgba(255,255,255,0.6)",
                              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                              maxWidth: "340px",
                              marginLeft: pi === 1 ? "auto" : undefined,
                            }}
                          >
                            <span className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: f.color + "15" }}>
                              <Check size={14} style={{ color: f.color }} strokeWidth={2.5} />
                            </span>
                            <span className="font-body font-medium text-sm text-[#0A0A0A]/75">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ── PROCESS ── */}
        <section 
          id="process" 
          className="relative transition-colors duration-1000 ease-in-out" 
          style={{ 
            backgroundColor: "#0A0A0A",
          }}
        >
          {/* Dynamic Color Wash */}
          <div 
            className="absolute inset-0 opacity-[0.08] transition-colors duration-1000 pointer-events-none" 
            style={{ backgroundColor: STEPS[activeStep].color }} 
          />
          <div 
            className="absolute inset-0 opacity-20 transition-colors duration-1000 pointer-events-none" 
            style={{ 
              background: `radial-gradient(circle at 30% 50%, ${STEPS[activeStep].color}40, transparent 70%)` 
            }} 
          />

          {/* ── Mobile Process ── */}
          <div className="lg:hidden px-6 py-12 relative z-10">
            <h2 className="font-body font-medium text-white mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(28px, 7vw, 40px)", letterSpacing: "-0.04em" }}>
              Précis.{" "}<span className="font-heading italic" style={{ color: STEPS[0].color }}>Efficace.</span><br />Simple.
            </h2>
            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <div key={step.n} className="flex gap-5 pb-10 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: step.color + "25", color: step.color, border: `1px solid ${step.color}35` }}>
                      {step.n}
                    </div>
                    {i < STEPS.length - 1 && <div className="w-px flex-1 mt-3" style={{ backgroundColor: step.color + "30" }} />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-body font-medium text-white text-lg mb-2 tracking-[-0.02em]">{step.title}</h3>
                    <p className="font-body text-white/55 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.points.map((p: string) => (
                        <li key={p} className="flex items-center gap-2 font-body text-sm text-white/65">
                          <Check size={11} style={{ color: step.color }} strokeWidth={3} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] text-white mt-2"
              style={{ background: `linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)`, boxShadow: "0 0 32px rgba(139,92,246,0.4)" }}>
              Échangeons <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="max-w-[1200px] mx-auto hidden lg:flex flex-col lg:flex-row relative z-10">

            {/* Left side: Sticky labels & visuals */}
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="sticky top-0 h-screen flex flex-col justify-center px-10">
                <div className="mb-12">
                  <h2
                    className="font-body font-medium text-white leading-[0.88]"
                    style={{ fontSize: "clamp(32px, 4vw, 54px)", letterSpacing: "-0.04em" }}
                  >
                    Précis.{" "}
                    <span className="font-heading italic transition-colors duration-500" style={{ color: STEPS[activeStep].color }}>Efficace.</span>
                    <br />Simple.
                  </h2>
                </div>

                <div className="flex flex-col gap-3 mb-16 relative">
                  {/* Vertical progress line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-[23px]" />
                  <div 
                    className="absolute left-0 top-0 w-px transition-all duration-700 ml-[23px]" 
                    style={{ 
                      height: `${(activeStep / (STEPS.length - 1)) * 100}%`,
                      background: STEPS[activeStep].color,
                      boxShadow: `0 0 15px ${STEPS[activeStep].color}`
                    }} 
                  />

                  {STEPS.map((step, i) => (
                    <div key={step.n} className="flex items-center gap-6 relative z-10">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-body font-bold text-sm transition-all duration-500"
                        style={{ 
                          backgroundColor: activeStep === i ? step.color : "#1A1A1A",
                          color: activeStep === i ? "white" : "rgba(255,255,255,0.2)",
                          border: activeStep === i ? `none` : "1px solid rgba(255,255,255,0.05)",
                          boxShadow: activeStep === i ? `0 0 24px ${step.color}40` : "none"
                        }}
                      >
                        {step.n}
                      </div>
                      <span className="font-body font-medium text-sm transition-all duration-500"
                            style={{ color: activeStep === i ? "white" : "rgba(255,255,255,0.2)" }}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>

                <StepVisual idx={activeStep} color={STEPS[activeStep].color} />
              </div>
            </div>

            {/* Right side: Scrolling steps */}
            <div className="w-full lg:w-1/2">
              {STEPS.map((step, i) => (
                <ProcessStep 
                  key={step.n} 
                  step={step} 
                  index={i} 
                  activeStep={activeStep}
                  onInView={setActiveStep} 
                />
              ))}
            </div>
          </div>
        </section>


        {/* ── STATS ── */}
        <section className="py-20 px-6" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="card rounded-3xl p-5 md:p-8 text-center"
                >
                  <div
                    className="font-body font-medium mb-2 leading-none"
                    style={{ fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "-0.04em", color: s.color }}
                  >
                    {s.value}
                  </div>
                  <div className="font-body font-light text-[#0A0A0A]/45 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ── CTA ── */}
        <section className="py-20 md:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
          {/* Colorful blobs */}
          <div className="blob-blue  w-[500px] h-[500px] opacity-30" style={{ top: "-15%", right: "-10%" }} />
          <div className="blob-rose  w-[400px] h-[400px] opacity-25" style={{ bottom: "-10%", left: "-8%" }} />
          <div className="blob-orange w-[350px] h-[350px] opacity-20" style={{ bottom: "10%", right: "15%" }} />
          <div className="blob-purple w-[300px] h-[300px] opacity-25" style={{ top: "20%", left: "20%" }} />

          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <h2
              className="font-body font-medium text-white leading-[0.88] mb-6"
              style={{ fontSize: "clamp(44px, 7vw, 88px)", letterSpacing: "-0.04em" }}
            >
              Prêt à{" "}
              <span className="font-heading italic" style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                démarrer ?
              </span>
            </h2>
            <p
              className="font-body font-light text-white/40 text-lg mb-12 max-w-[440px] mx-auto leading-relaxed"
            >
              30 minutes suffisent pour savoir ce qu&apos;on peut construire ensemble.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-[15px] text-white hover:opacity-90 active:scale-95 transition-all"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                  boxShadow: "0 0 48px rgba(139,92,246,0.4)",
                }}
              >
                Discutons de votre projet <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-medium text-[15px] text-white/50 hover:text-white transition-colors"
              >
                Voir les services <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
