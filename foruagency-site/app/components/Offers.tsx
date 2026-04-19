const oneShot = [
  "Site complet livré clé en main",
  "Design + développement inclus",
  "Intégrations outils configurées",
  "Accès total au site et aux données",
  "Formation à l'utilisation",
  "Client 100% autonome après livraison",
];

const accompagnement = [
  "Tout le contenu de la formule One Shot",
  "Gestion mensuelle du site",
  "Amélioration continue du contenu",
  "Optimisation des performances",
  "Évolution des automatisations IA",
  "Suivi des résultats et reporting",
];

export default function Offers() {
  return (
    <section id="offres" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#22C55E" }}>
            Nos formules
          </p>
          <h2 className="font-syne font-black text-4xl md:text-5xl uppercase tracking-tight" style={{ color: "#0A0A0A" }}>
            Choisissez votre
            <br />
            niveau d&apos;engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* One Shot */}
          <div className="p-8 rounded-3xl border-2 border-gray-100 bg-gray-50">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gray-200 text-gray-600 mb-4">
                🅰️ Livraison complète
              </span>
              <h3 className="font-syne font-black text-2xl mb-2" style={{ color: "#0A0A0A" }}>One Shot</h3>
              <p className="text-gray-500 text-sm">Projet livré entièrement. Vous repartez autonome, avec tout en main.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {oneShot.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#22C55E" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center px-6 py-3.5 rounded-full font-semibold text-sm border-2 transition-all hover:bg-black hover:text-white hover:border-black"
              style={{ borderColor: "#0A0A0A", color: "#0A0A0A" }}
            >
              Demander un devis →
            </a>
          </div>

          {/* Accompagnement */}
          <div className="p-8 rounded-3xl border-2 text-white relative overflow-hidden" style={{ backgroundColor: "#0A0A0A", borderColor: "#22C55E" }}>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#22C55E" }}>
              Recommandé
            </div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
                🅱️ Accompagnement continu
              </span>
              <h3 className="font-syne font-black text-2xl mb-2">Partenariat</h3>
              <p className="text-gray-400 text-sm">On reste à vos côtés. Votre site évolue avec votre business.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {accompagnement.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#22C55E" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#22C55E" }}
            >
              Démarrer le partenariat →
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Chaque projet est unique : on établit un devis sur mesure après échange.
        </p>
      </div>
    </section>
  );
}
