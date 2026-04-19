"use client";
import { motion } from "framer-motion";

const TOOLS = [
  { name: "Stripe",           domain: "stripe.com",     color: "#635BFF", x: -280, y: -90  },
  { name: "Calendly",         domain: "calendly.com",   color: "#006BFF", x: -130, y: -215 },
  { name: "Google Analytics", domain: "google.com",     color: "#E37400", x:   65, y: -245 },
  { name: "HubSpot",          domain: "hubspot.com",    color: "#FF7A59", x:  245, y: -155 },
  { name: "Brevo",            domain: "brevo.com",      color: "#0B996E", x:  305, y:   48 },
  { name: "Zapier",           domain: "zapier.com",     color: "#FF4A00", x:  225, y:  210 },
  { name: "Make",             domain: "make.com",       color: "#6D00CC", x:   30, y:  275 },
  { name: "Notion",           domain: "notion.so",      color: "#000000", x: -190, y:  235 },
  { name: "Airtable",         domain: "airtable.com",   color: "#18BFFF", x: -305, y:   80 },
  { name: "Crisp",            domain: "crisp.chat",     color: "#1972F5", x: -175, y: -172 },
];

export default function ToolOrbit() {
  return (
    <div className="relative w-full h-[460px] flex items-center justify-center overflow-hidden bg-white">
      {/* Concentric rings */}
      <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed" style={{ borderColor: "rgba(139,92,246,0.16)" }} />
      <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed" style={{ borderColor: "rgba(139,92,246,0.09)" }} />
      <div className="absolute w-[660px] h-[660px] rounded-full border border-dashed" style={{ borderColor: "rgba(139,92,246,0.05)" }} />

      {/* Soft center glow */}
      <div className="absolute w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07), transparent 70%)" }} />

      {/* Tool cards : positioned from center anchor */}
      <div className="absolute top-1/2 left-1/2">
        {TOOLS.map((tool, i) => (
          <div
            key={tool.name}
            className="absolute"
            style={{ top: tool.y, left: tool.x, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.5, type: "spring", stiffness: 180 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 2.6 + (i % 5) * 0.65,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.28,
                }}
              >
                <div
                  className="group relative w-[56px] h-[56px] rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Letter fallback */}
                  <span
                    className="absolute font-body font-bold text-sm uppercase select-none"
                    style={{ color: tool.color }}
                  >
                    {tool.name.charAt(0)}
                  </span>

                  {/* Logo : fades in over the letter when loaded */}
                  <img
                    src={`https://logo.clearbit.com/${tool.domain}`}
                    alt={tool.name}
                    onLoad={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    className="relative z-10 w-8 h-8 object-contain transition-opacity duration-500"
                    style={{ opacity: 0 }}
                  />

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[10px] font-body px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                    {tool.name}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Center Brand Card */}
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, type: "spring", stiffness: 160 }}
        className="relative z-20 w-36 h-36 md:w-40 md:h-40 rounded-[2.5rem] flex items-center justify-center"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div className="text-center font-body font-semibold">
          <span className="text-xl md:text-2xl block text-[#0A0A0A] tracking-[-0.02em]">For U</span>
          <span
            className="text-lg md:text-xl block tracking-[-0.02em]"
            style={{
              background: "linear-gradient(135deg,#3B82F6,#8B5CF6,#EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Agency
          </span>
        </div>
      </motion.div>
    </div>
  );
}
