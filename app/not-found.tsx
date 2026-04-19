"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Home, Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-body selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-100/30 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-black/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/[0.02] rounded-full" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-red-100 shadow-sm">
              Erreur 404
            </span>
            
            <h1 
              className="font-heading text-6xl md:text-8xl text-[#0A0A0A] leading-[0.85] tracking-tight mb-8"
              style={{ fontSize: "clamp(60px, 12vw, 120px)" }}
            >
              Page <span className="italic font-light text-black/20">introuvable</span>
            </h1>
            
            <p className="text-xl text-[#0A0A0A]/50 font-light leading-relaxed max-w-lg mx-auto mb-12">
              Il semble que le chemin que vous cherchez n&apos;existe pas ou a été déplacé. Pas de panique, on vous raccompagne.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0A] text-white font-semibold text-[15px] hover:bg-[#0A0A0A]/90 transition-all active:scale-95 shadow-xl shadow-black/10"
              >
                <Home size={18} /> Retour à l&apos;accueil
              </Link>
              <Link
                href="/#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-black/10 text-[#0A0A0A] font-medium text-[15px] hover:bg-black/5 transition-all"
              >
                <Search size={18} /> Voir nos services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative numbers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading italic text-[40vw] text-black/[0.015] pointer-events-none select-none font-bold">
          404
        </div>
      </main>

      <Footer />
    </div>
  );
}
