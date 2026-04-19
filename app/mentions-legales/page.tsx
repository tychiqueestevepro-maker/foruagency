"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function MentionsLegales() {
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
              Mentions <span className="text-purple-600">Légales</span>
            </h1>

            <div className="prose prose-sm md:prose-base max-w-none text-[#0A0A0A]/70 space-y-10">
              
              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">1. Édition du site</h2>
                <p>
                  En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet <strong>foruagency.com</strong> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Propriétaire du site :</strong> Tychique Esteve : For U Agency</li>
                  <li><strong>Contact :</strong> contact@foruagency.com : 06 65 97 07 86</li>
                  <li><strong>Identification de l&apos;entreprise :</strong> EI Tychique Esteve : For U Agency</li>
                  <li><strong>SIREN :</strong> 978 543 320</li>
                  <li><strong>Code APE :</strong> 62.01Z</li>
                  <li><strong>Directeur de la publication :</strong> Tychique Esteve</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">2. Hébergement</h2>
                <p>
                  Le Site est hébergé par la société <strong>Vercel Inc.</strong>, situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                  <br />
                  Site web : <a href="https://vercel.com" className="text-purple-600 underline">https://vercel.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">3. Propriété intellectuelle et contrefaçons</h2>
                <p>
                  Tychique Esteve est propriétaire des droits de propriété intellectuelle et détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                </p>
                <p className="mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Tychique Esteve.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">4. Limitations de responsabilité</h2>
                <p>
                  Tychique Esteve ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site foruagency.com.
                </p>
                <p className="mt-4">
                  Tychique Esteve décline toute responsabilité quant à l&apos;utilisation qui pourrait être faite des informations et contenus présents sur foruagency.com. Tychique Esteve s&apos;engage à sécuriser au mieux le site, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">5. CNIL et gestion des données personnelles</h2>
                <p>
                  Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l&apos;utilisateur du site foruagency.com dispose d&apos;un droit d&apos;accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à : <strong>contact@foruagency.com</strong>.
                </p>
                <p className="mt-4">
                  Pour plus d&apos;informations sur la façon dont nous traitons vos données, lisez notre <a href="/politique-confidentialite" className="text-purple-600 underline">Politique de Confidentialité</a>.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">6. Liens hypertextes et cookies</h2>
                <p>
                  Le site foruagency.com contient des liens hypertextes vers d&apos;autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d&apos;autres sites vers foruagency.com.
                </p>
                <p className="mt-4">
                  La navigation sur le site foruagency.com est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur. Un &quot;cookie&quot; est un fichier de petite taille qui enregistre des informations relatives à la navigation d&apos;un utilisateur sur un site. Les données ainsi obtenues permettent d&apos;obtenir des mesures de fréquentation, par exemple.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] font-bold text-xl mb-4">7. Droit applicable et attribution de juridiction</h2>
                <p>
                  Tout litige en relation avec l&apos;utilisation du site foruagency.com est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents.
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
