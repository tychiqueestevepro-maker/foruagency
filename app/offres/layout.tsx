"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TABS = [
  { label: "Livraison complète", href: "/offres/livraison-complete", sub: "One Shot" },
  { label: "Accompagnement continu", href: "/offres/accompagnement-continu", sub: "Partenariat" },
];

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-24 md:pt-36 pb-0 px-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-16">
            <div
              className="w-[600px] h-[400px] rounded-full opacity-12"
              style={{
                background: "radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
                filter: "blur(90px)",
              }}
            />
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="font-heading text-4xl md:text-6xl text-[#0A0A0A] leading-[0.85] tracking-tight mb-4">
              Choisissez votre offre
            </h1>
            <p className="font-body font-light text-[#0A0A0A]/55 text-lg max-w-xl mx-auto mb-12">
              Deux façons de travailler ensemble : selon que vous voulez l&apos;autonomie ou la croissance continue.
            </p>

            {/* Tabs */}
            <div className="liquid-glass rounded-full inline-flex p-1.5 gap-1">
              {TABS.map((tab) => {
                const active = pathname === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`rounded-full px-6 py-2.5 font-body font-medium text-sm transition-all ${
                      active
                        ? "text-white shadow-sm"
                        : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                    }`}
                    style={active ? { backgroundColor: "#3B82F6" } : {}}
                  >
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.sub}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Page content */}
        <div className="max-w-5xl mx-auto px-6 py-16">{children}</div>
      </main>
      <Footer />
    </>
  );
}
