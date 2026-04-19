"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";

const SERVICES = [
  { label: "Création de site web", href: "/services/creation-site-web", color: "#3B82F6" },
  { label: "Intégrations business", href: "/services/integrations-business", color: "#F97316" },
  { label: "Agents IA", href: "/services/agents-ia", color: "#8B5CF6" },
  { label: "Suivi & Optimisation", href: "/services/suivi-optimisation", color: "#EC4899" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="glass-nav !overflow-visible rounded-full px-5 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/icon.png" alt="For U Agency" width={36} height={36} className="rounded-xl" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            <Link href="/" className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${pathname === "/" ? "text-[#0A0A0A]" : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]"}`}>
              Accueil
            </Link>

            <div ref={dropRef} className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-body font-medium text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                type="button"
              >
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
              </button>
              {dropOpen && (
                <div
                  className="absolute top-full mt-2 left-0 bg-white rounded-2xl p-2 z-[100]"
                  style={{ width: 240, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
                >
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setDropOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <span className="text-sm font-body font-medium text-[#0A0A0A]/70 group-hover:text-[#0A0A0A] transition-colors">
                        {s.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#process" className="px-4 py-2 rounded-full text-sm font-body font-medium text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors">
              Méthode
            </Link>
            <Link href="/realisations" className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${pathname === "/realisations" ? "text-[#0A0A0A]" : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]"}`}>
              Réalisations
            </Link>


            <Link
              href="/offres/livraison-complete"
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${pathname.startsWith("/offres") ? "text-[#0A0A0A]" : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]"}`}
            >
              Offres
            </Link>
            <Link
              href="/faq"
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${pathname === "/faq" ? "text-[#0A0A0A]" : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]"}`}
            >
              FAQ
            </Link>

          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/33665970786" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors mr-2"
              title="WhatsApp"
            >
              <Phone size={18} strokeWidth={2.5} />
            </a>
            <Link
              href="#booking"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-body font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                boxShadow: "0 0 20px rgba(139,92,246,0.3)",
              }}
            >
              On en parle ? <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-3 -mr-1 touch-manipulation text-[#0A0A0A]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden mt-2 bg-white rounded-2xl p-4 flex flex-col gap-1 max-h-[calc(100vh-100px)] overflow-y-auto"
            style={{ 
              border: "1px solid rgba(0,0,0,0.07)", 
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              position: "relative",
              zIndex: 1000
            }}
          >
            <Link href="/" className="px-4 py-3 rounded-xl text-sm font-body font-medium text-[#0A0A0A]" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <div className="px-4 pt-3 pb-2 border-t border-black/5">
              <p className="text-[10px] font-body font-medium text-[#0A0A0A]/30 uppercase tracking-widest mb-2">Services</p>
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 text-sm font-body font-medium text-[#0A0A0A]/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href="/#process" className="px-4 py-3 rounded-xl text-sm font-body font-medium text-[#0A0A0A] border-t border-black/5" onClick={() => setMenuOpen(false)}>Méthode</Link>
            <Link href="/realisations" className={`px-4 py-3 rounded-xl text-sm font-body font-medium ${pathname === "/realisations" ? "text-[#0A0A0A]" : "text-[#0A0A0A]/70"}`} onClick={() => setMenuOpen(false)}>Réalisations</Link>

            <Link href="/offres/livraison-complete" className={`px-4 py-3 rounded-xl text-sm font-body font-medium ${pathname.startsWith("/offres") ? "text-[#0A0A0A]" : "text-[#0A0A0A]/70"}`} onClick={() => setMenuOpen(false)}>Offres</Link>
            <Link href="/faq" className={`px-4 py-3 rounded-xl text-sm font-body font-medium ${pathname === "/faq" ? "text-[#0A0A0A]" : "text-[#0A0A0A]/70"}`} onClick={() => setMenuOpen(false)}>FAQ</Link>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/33665970786"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-body font-semibold text-[#0A0A0A] border border-black/10 hover:bg-black/5"
              >
                <Phone size={16} /> WhatsApp
              </a>
              <Link
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full text-sm font-body font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)" }}
              >
                On en parle ? <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
