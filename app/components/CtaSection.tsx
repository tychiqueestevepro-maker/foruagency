export default function CtaSection() {
  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#22C55E" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-syne font-black text-4xl md:text-6xl uppercase tracking-tight text-white mb-6">
          Prêt à passer
          <br />
          à l&apos;action ?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Échangeons sur votre projet. 30 minutes suffit pour savoir ce qu&apos;on peut construire ensemble.
        </p>
        <a
          href="mailto:contact@foruagency.com"
          className="inline-block px-10 py-5 rounded-full font-bold text-base bg-white transition-all hover:opacity-90 active:scale-95"
          style={{ color: "#22C55E" }}
        >
          Envoyer un message →
        </a>
      </div>
    </section>
  );
}
