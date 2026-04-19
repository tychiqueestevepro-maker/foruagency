const steps = [
  {
    number: "1",
    title: "Cadrage du projet",
    description: "On échange sur vos objectifs, votre business et vos besoins. On définit ensemble la stratégie et les priorités.",
  },
  {
    number: "2",
    title: "Design & conception",
    description: "Création de votre image de marque en ligne : design adapté, charte visuelle, structure pensée pour convertir.",
  },
  {
    number: "3",
    title: "Développement & intégration",
    description: "On construit et on connecte tout : site, outils, automatisations. Testé, optimisé, prêt à performer.",
  },
  {
    number: "4",
    title: "Lancement & suivi",
    description: "Mise en ligne, formation si besoin, puis suivi continu des résultats et évolution selon vos besoins.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#22C55E" }}>
            Comment ça marche
          </p>
          <h2 className="font-syne font-black text-4xl md:text-5xl uppercase tracking-tight text-white">
            Simple, efficace,
            <br />
            sans prise de tête
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px" style={{ backgroundColor: "#22C55E", opacity: 0.3 }} />

          <div className="space-y-px">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-8 p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-syne font-black text-xl border-2 text-white"
                  style={{ borderColor: "#22C55E", color: i === 0 ? "#0A0A0A" : "white", backgroundColor: i === 0 ? "#22C55E" : "transparent" }}
                >
                  {step.number}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="font-syne font-bold text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
