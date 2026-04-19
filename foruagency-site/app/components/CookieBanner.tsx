"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("cookie_consent_updated"));
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    window.dispatchEvent(new Event("cookie_consent_updated"));
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-40"
        >
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-black/5 p-6 md:p-8 overflow-hidden relative">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/40 blur-[40px] rounded-full -z-10" />
            
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                <Cookie className="text-purple-600" size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-syne font-bold text-lg text-[#0A0A0A]">Cookies & Privacy</h3>
                  <button onClick={declineCookies} className="text-black/20 hover:text-black transition-colors">
                    <X size={18} />
                  </button>
                </div>
                <p className="font-body text-sm text-[#0A0A0A]/60 leading-relaxed mb-6">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
                  En continuant, vous acceptez notre <Link href="/politique-confidentialite" className="text-purple-600 underline hover:text-purple-700">politique de confidentialité</Link>.
                </p>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={acceptCookies}
                    className="flex-1 py-3.5 rounded-2xl bg-[#0A0A0A] text-white font-body font-semibold text-sm hover:opacity-90 transition-all active:scale-[0.98]"
                  >
                    Accepter
                  </button>
                  <button
                    onClick={declineCookies}
                    className="px-6 py-3.5 rounded-2xl bg-black/5 text-[#0A0A0A] font-body font-semibold text-sm hover:bg-black/10 transition-all"
                  >
                    Refuser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
