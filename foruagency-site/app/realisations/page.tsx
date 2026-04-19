"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PROJECTS = [
  {
    id: 1,
    title: "Pulse Advertising",
    category: "Sites web & Marketing",
    desc: "Le média urbain incontournable pour les commerces lyonnais. Publicité captive sur tablettes en VTC et Taxis.",
    image: "/images/realisations/pulse.png",
    logo: "/images/realisations/pulse-logo.png",
    color: "#3B82F6",
    link: "https://www.pulseadvertising.fr",
    features: ["Interface annonceur", "Ciblage géographique", "Dashboard performances"]
  },
  {
    id: 2,
    title: "Oartecarlo",
    category: "Sites web & Branding",
    desc: "Galerie d'art contemporain digitale pour l'artiste Carlo Garcia Moniz. Une expérience visuelle haut de gamme.",
    image: "/images/realisations/oartecarlo.png",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=oartecarlo.com",
    color: "#8B5CF6",
    link: "https://oartecarlo.com",
    features: ["Design minimaliste", "Vitrines d'art", "Optimisation SEO"]
  }
];



export default function RealisationsPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-44 pb-12 md:pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="font-body font-medium text-[#0A0A0A] leading-[0.9] mb-8"
                style={{ fontSize: "clamp(54px, 10vw, 96px)", letterSpacing: "-0.04em" }}
              >
                Concrétiser vos <br />
                <span className="font-heading italic font-light text-[#3B82F6]">ambitions</span>
              </h1>
              <p className="font-body text-[#0A0A0A]/50 text-xl max-w-[600px] leading-relaxed">
                Découvrez comment nous aidons nos clients à transformer leur business grâce à un design soigné et des technologies de pointe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 pb-32">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <AnimatePresence mode="popLayout">
                {PROJECTS.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <a 
                      href={project.link} 
                      target={project.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="group relative block rounded-[40px] overflow-hidden bg-[#F9F9F9] border border-black/[0.03] transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
                    >
                      {/* Image Container */}
                      <div className="relative h-[280px] sm:h-[420px] md:h-[620px] overflow-hidden">
                        <motion.img
                          src={project.image.includes("pulse.png") ? "/images/realisations/pulse_v2.png" : project.image.includes("oartecarlo.png") ? "/images/realisations/oartecarlo_v2.png" : project.image}
                          alt={project.title}
                          initial={{ y: 0 }}
                          whileHover={{ y: "calc(-100% + 620px)" }}
                          transition={{ duration: 8, ease: "linear" }}
                          className="w-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                          style={{ height: "auto", objectPosition: "top" }}
                        />
                        
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>

                      {/* Info Bar */}
                      <div className="p-5 md:p-8 bg-white flex items-center justify-between gap-3 flex-wrap border-t border-black/[0.03]">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-black flex items-center justify-center p-2 shadow-sm">
                            <img 
                              src={project.logo} 
                              alt={project.title} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-body font-bold text-xl text-[#0A0A0A] tracking-tight">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-body font-semibold text-xs transition-transform group-hover:scale-105">
                          Découvrir <ArrowUpRight size={14} strokeWidth={3} />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 bg-[#0A0A0A] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 
              className="font-body font-medium leading-[0.9] mb-8"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.04em" }}
            >
              Votre projet est le <br />
              <span className="font-heading italic" style={{
                    background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>suivant ?</span>
            </h2>
            <p className="font-body text-white/40 text-lg mb-12 max-w-md mx-auto">
              Rejoignez les entreprises qui ont choisi de propulser leur activité avec For U Agency.
            </p>
            <Link
              href="#booking"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-body font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                boxShadow: "0 0 48px rgba(139,92,246,0.3)"
              }}
            >
              On en parle ? <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
