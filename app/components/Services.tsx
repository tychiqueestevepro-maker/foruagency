const services = [
  {
    number: "01",
    icon: "💻",
    title: "Création de site web",
    description: "Un site clair, professionnel et orienté résultats. Design, développement, expérience utilisateur optimisée et mise en ligne : tout inclus.",
    tags: ["Design", "Développement", "UX", "Mise en ligne"],
  },
  {
    number: "02",
    icon: "🔧",
    title: "Intégrations business",
    description: "On connecte les bons outils à votre site : prise de rendez-vous, suivi des performances, formulaires, automatisations simples.",
    tags: ["Calendly", "Analytics", "Formulaires", "Email"],
  },
  {
    number: "03",
    icon: "🤖",
    title: "Agents IA",
    description: "Des automatisations intelligentes qui travaillent pour vous : réponse clients, qualification de leads, relances automatiques, support.",
    tags: ["Chatbot", "Qualification", "Relances", "Support"],
  },
  {
    number: "04",
    icon: "🔁",
    title: "Suivi & Optimisation",
    description: "On ne livre pas et on disparaît. Amélioration du contenu, ajustements, performances, évolution des automatisations : en continu.",
    tags: ["Contenu", "Performances", "Évolution", "Résultats"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#22C55E" }}>
            Nos services
          </p>
          <h2 className="font-syne font-black text-4xl md:text-5xl uppercase tracking-tight" style={{ color: "#0A0A0A" }}>
            Tout ce qu&apos;il faut
            <br />
            pour avancer vite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.number}
              className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-syne font-black text-5xl" style={{ color: "#F0F0F0" }}>{s.number}</span>
              </div>
              <h3 className="font-syne font-bold text-xl mb-3" style={{ color: "#0A0A0A" }}>
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
