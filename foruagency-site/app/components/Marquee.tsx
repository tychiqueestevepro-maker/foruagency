"use client";

const TOOLS = [
  { name: "Stripe",           domain: "stripe.com",           color: "#635BFF" },
  { name: "Calendly",         domain: "calendly.com",         color: "#006BFF" },
  { name: "Google Analytics", domain: "analytics.google.com", color: "#E37400" },
  { name: "HubSpot",          domain: "hubspot.com",          color: "#FF7A59" },
  { name: "Brevo",            domain: "brevo.com",            color: "#0B996E" },
  { name: "Zapier",           domain: "zapier.com",           color: "#FF4A00" },
  { name: "Make",             domain: "make.com",             color: "#6D00CC" },
  { name: "Notion",           domain: "notion.so",            color: "#000000" },
  { name: "Airtable",         domain: "airtable.com",         color: "#18BFFF" },
  { name: "Crisp",            domain: "crisp.chat",           color: "#1972F5" },
  { name: "Typeform",         domain: "typeform.com",         color: "#262627" },
  { name: "Mailchimp",        domain: "mailchimp.com",        color: "#FFE01B" },
  { name: "Shopify",          domain: "shopify.com",          color: "#96BF48" },
  { name: "Cal.com",          domain: "cal.com",              color: "#111111" },
  { name: "WordPress",        domain: "wordpress.org",        color: "#21759B" },
  { name: "Hotjar",           domain: "hotjar.com",           color: "#F8400A" },
];

function logoUrl(domain: string) {
  return `https://logo.clearbit.com/${domain}`;
}

function fallbackUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

export default function Marquee({ label = "Outils qu'on connecte" }: { label?: string }) {
  const doubled = [...TOOLS, ...TOOLS];

  return (
    <div className="py-10 overflow-hidden select-none" style={{ backgroundColor: "#F7F7F7" }}>
      {label && (
        <p className="text-center font-body font-medium text-xs uppercase tracking-widest text-[#0A0A0A]/35 mb-6">
          {label}
        </p>
      )}
      <div className="relative group">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#F7F7F7] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#F7F7F7] to-transparent" />

        <div className="flex w-max animate-[marquee-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          <div className="flex gap-4 px-4">
            {TOOLS.map((tool, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-md overflow-hidden flex items-center justify-center bg-white shadow-sm border border-black/5 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl(tool.domain)}
                    alt={tool.name}
                    className="w-full h-full object-contain p-0.5 relative z-10 bg-white"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.dataset.fallback === 'true') {
                        target.style.display = 'none';
                      } else {
                        target.dataset.fallback = 'true';
                        target.src = fallbackUrl(tool.domain);
                      }
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white uppercase" style={{ backgroundColor: tool.color }}>
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium text-sm text-[#0A0A0A]/75 whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 px-4" aria-hidden="true">
            {TOOLS.map((tool, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-md overflow-hidden flex items-center justify-center bg-white shadow-sm border border-black/5 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl(tool.domain)}
                    alt={tool.name}
                    className="w-full h-full object-contain p-0.5 relative z-10 bg-white"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.dataset.fallback === 'true') {
                        target.style.display = 'none';
                      } else {
                        target.dataset.fallback = 'true';
                        target.src = fallbackUrl(tool.domain);
                      }
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white uppercase" style={{ backgroundColor: tool.color }}>
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium text-sm text-[#0A0A0A]/75 whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
