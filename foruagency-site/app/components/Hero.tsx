export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#22C55E" }} />
            <span className="text-sm font-medium" style={{ color: "#22C55E" }}>Agence digitale : Lyon, Rhône</span>
          </div>

          <h1
            className="font-syne font-black text-5xl md:text-7xl leading-none uppercase tracking-tight mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Votre site.
            <br />
            Vos outils.
            <br />
            <span style={{ color: "#22C55E" }}>Vos résultats.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            On crée votre site web, on connecte vos outils business et on automatise vos processus avec l&apos;IA : pour que vous puissiez vous concentrer sur ce qui compte vraiment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:opacity-90 active:scale-95 text-center"
              style={{ backgroundColor: "#22C55E" }}
            >
              Démarrer mon projet →
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-semibold text-black text-base border border-gray-200 hover:border-gray-400 transition-all text-center"
            >
              Découvrir les services
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Sur mesure" },
            { value: "4", label: "Services clés" },
            { value: "IA", label: "Intégrée" },
            { value: "Lyon", label: "Base, France" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="font-syne font-black text-3xl mb-1" style={{ color: "#22C55E" }}>{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
