"use client";
import { motion } from "framer-motion";

const BACKEND_LOGOS = [
  { name: "Stripe", domain: "stripe.com", x: "15%", y: "45%" },
  { name: "Zapier", domain: "zapier.com", x: "30%", y: "20%" },
  { name: "HubSpot", domain: "hubspot.com", x: "70%", y: "20%" },
  { name: "Brevo", domain: "brevo.com", x: "85%", y: "45%" },
  { name: "Calendly", domain: "calendly.com", x: "22%", y: "75%" },
  { name: "Make", domain: "make.com", x: "78%", y: "75%" },
];

function logoUrl(_name: string, domain: string) {
  return `https://logo.clearbit.com/${domain}`;
}

function fallbackUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

export default function LogoArc() {
  return (
    <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden py-20 bg-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
        style={{ 
          backgroundImage: `linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#7C3AED]/10 to-transparent blur-[120px]" />
      </div>

      <div className="relative w-full max-w-5xl h-full mx-auto">
        {/* The Arc Path (SVG) */}
        <svg
          viewBox="0 0 1000 400"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          fill="none"
        >
          <motion.path
            d="M 150 250 Q 500 -50 850 250"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeDasharray="8 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="w-20 h-20 md:w-28 md:h-28 rounded-3xl liquid-glass-strong flex items-center justify-center shadow-xl p-5 border border-[#7C3AED]/20"
          >
            <div className="text-2xl md:text-3xl font-heading">
              For U <span className="text-[#7C3AED]">Agency</span>
            </div>
          </motion.div>
          {/* Pulsing effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl border-2 border-[#7C3AED]/30 pointer-events-none"
          />
        </div>

        {/* Surrounding Logos */}
        {BACKEND_LOGOS.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0], // Floating animation
            }}
            transition={{
              opacity: { delay: 0.5 + i * 0.1 },
              scale: { delay: 0.5 + i * 0.1, type: "spring" },
              y: {
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute z-10"
            style={{ left: logo.x, top: logo.y }}
          >
            <div className="group relative">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center p-3 border border-black/5 transition-transform group-hover:scale-110">
                <img
                  src={logoUrl(logo.name, logo.domain)}
                  alt={logo.name}
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  className="w-full h-full object-contain p-0.5 relative z-10 transition-opacity duration-300"
                  style={{ opacity: 0 }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.dataset.fallback === 'true') {
                      target.style.display = 'none';
                    } else {
                      target.dataset.fallback = 'true';
                      target.src = fallbackUrl(logo.domain);
                    }
                  }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#7C3AED] uppercase bg-[#7C3AED]/5 rounded-2xl">
                  {logo.name.charAt(0)}
                </span>
                
                {/* Connector dot */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {logo.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
