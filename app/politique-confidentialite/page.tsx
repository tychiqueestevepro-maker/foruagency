"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading italic text-5xl md:text-7xl text-[#0A0A0A] mb-12">
              Politique de <span className="text-purple-600">Confidentialité</span>
            </h1>

            <div className="prose prose-sm md:prose-base max-w-none text-[#0A0A0A]/70 space-y-10 font-body">
              
              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Introduction</h2>
                <p>
                  Dans le cadre de son activité, For U Agency est amenée à collecter et à traiter des informations dont certaines sont qualifiées de &quot;données personnelles&quot;. For U Agency attache une grande importance au respect de la vie privée, et n&apos;utilise que des données de manière responsable et confidentielle et dans une finalité précise.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Données personnelles</h2>
                <p>
                  Sur le site web foruagency.com, il y a 2 types de données susceptibles d&apos;être recueillies :
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-3">
                  <li>
                    <strong>Données transmises directement :</strong> Ces données sont celles que vous nous transmettez directement, via un formulaire de contact ou bien par contact direct par email/téléphone. Sont obligatoires dans le formulaire de contact les champs : prénom et nom, entreprise (facultatif), e-mail et votre message.
                  </li>
                  <li>
                    <strong>Données collectées automatiquement :</strong> Lors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations de type &quot;web analytics&quot; relatives à votre navigation, la durée de votre consultation, votre adresse IP, votre type et version de navigateur. La technologie utilisée est le cookie.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Utilisation des données</h2>
                <p>
                  Les données que vous nous transmettez directement sont utilisées dans le but de vous re-contacter et/ou dans le cadre de la demande que vous nous faites.
                </p>
                <p className="mt-4">
                  Les données &quot;web analytics&quot; sont collectées de forme anonyme (en enregistrant des adresses IP anonymes) par Google Analytics, et nous permettent de mesurer l&apos;audience de notre site web, les consultations et les éventuelles erreurs afin d&apos;améliorer constamment l&apos;expérience des utilisateurs. Ces données sont utilisées par For U Agency, responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d&apos;autres fins que celles détaillées ci-dessus.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Base légale</h2>
                <p>
                  Les données personnelles ne sont collectées qu&apos;après consentement obligatoire de l&apos;utilisateur. Ce consentement est recueilli librement (boutons et cases à cocher), spécifiquement, éclairée et univoque.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Durée de conservation</h2>
                <p>
                  Les données seront sauvegardées durant une durée maximale de 3 ans.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Cookies</h2>
                <p>
                  Voici la liste des cookies utilisées et leur objectif :
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Cookies de session :</strong> Pour mémoriser vos préférences de navigation.</li>
                  <li><strong>Google Analytics :</strong> Web analytics.</li>
                  <li><strong>Calendly :</strong> Pour permettre la prise de rendez-vous directement sur le site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4 text-purple-600 uppercase tracking-wider text-sm">Vos droits concernant les données personnelles</h2>
                <p>
                  Vous avez le droit de consultation, demande de modification ou d&apos;effacement sur l&apos;ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.
                </p>
                <p className="mt-6">
                  Contact responsable traitement : <br />
                  <strong>Tychique Esteve : For U Agency</strong> <br />
                  Email : <strong>contact@foruagency.com</strong>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
