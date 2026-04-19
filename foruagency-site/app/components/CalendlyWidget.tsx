"use client";

import { Calendar, X, MessageCircle } from "lucide-react";
import Script from "next/script";
import { useState, useEffect } from "react";

export default function CalendlyWidget() {
  const CALENDLY_URL = "https://calendly.com/tychique-estevepro/30min";
  const [isOpen, setIsOpen] = useState(false);
  const [showInvite, setShowInvite] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startInviteTimer = () => {
      // Vérifier si le consentement cookie est donné
      const consent = typeof window !== "undefined" && localStorage.getItem("cookie_consent");
      // Vérifier si l'utilisateur a déjà fermé l'invitation
      const hasClosed = typeof window !== "undefined" && localStorage.getItem("calendly_invite_closed");

      if (consent && !hasClosed) {
        // Attendre 10 secondes APRÈS le choix des cookies (ou après le chargement si déjà fait)
        timer = setTimeout(() => {
          if (!isOpen) setShowInvite(true);
        }, 10000);
      }
    };

    startInviteTimer();

    // Ré-écouter si le consentement est mis à jour
    window.addEventListener("cookie_consent_updated", startInviteTimer);

    // Intercepter tous les clics sur les liens "devis" ou "#booking" pour ouvrir Calendly à la place
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest("a");
      if (closestLink && closestLink.getAttribute("href") === "#booking") {
        e.preventDefault();
        openCalendly();
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("cookie_consent_updated", startInviteTimer);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setShowInvite(false);
    // Enregistrer le refus pour ne plus déranger l'utilisateur
    if (typeof window !== "undefined") {
      localStorage.setItem("calendly_invite_closed", "true");
    }
  };

  const openCalendly = () => {
    setShowInvite(false);
    setIsOpen(false);
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
      });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-3 font-body">
        
        {/* Fenêtre "Complète" */}
        {(showInvite || isOpen) && (
          <div
            className="bg-white rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-black/5 w-72 md:w-80 overflow-hidden mb-2"
          >
            {/* Header Profile */}
            <div className="bg-[#0A0A0A] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] opacity-10 blur-[40px] pointer-events-none" />
              
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold relative shadow-lg"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)" }}
                >
                  T
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0A0A0A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Tychique Esteve</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Fondateur</p>
                </div>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                👋 Bonjour ! Un projet web ou besoin d&apos;automatiser vos outils ? On en discute de vive voix ?
              </p>
            </div>

            {/* Action Area */}
            <div className="p-6 bg-white space-y-4">
              <button 
                onClick={openCalendly}
                className="w-full text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)" }}
              >
                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                On en parle ?
              </button>


              <p className="text-center text-[10px] text-[#0A0A0A]/30 uppercase tracking-[0.15em] font-bold">
                Réponse rapide • Sans engagement
              </p>
            </div>
          </div>
        )}

        {/* Boutons Bulle Flottants (side-bar) */}
        {!isOpen && !showInvite && (
          <div className="flex flex-col gap-3">

            {/* Bouton Principal (Prise de RDV) */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full text-white shadow-2xl flex items-center justify-center transition-all duration-300 relative group"
              style={{ 
                background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                boxShadow: "0 15px 40px rgba(139,92,246,0.35)"
              }}
            >
              <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
              <span className="absolute inset-0 rounded-full bg-[#8B5CF6] animate-ping opacity-20 -z-10" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
