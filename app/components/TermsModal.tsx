import React from 'react';
import { FileText, X } from 'lucide-react';

interface TermsModalProps {
  show: boolean;
  onClose: () => void;
}

export default function TermsModal({ show, onClose }: TermsModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-blue-500 text-white p-6 rounded-t-2xl flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Conditions d'Utilisation</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-8 space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Dernière mise à jour : Décembre 2024</p>
            
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des Conditions</h3>
              <p className="leading-relaxed">
                En téléchargeant, installant ou utilisant l'application GataCart, vous acceptez d'être lié par 
                ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser 
                l'application.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Description du Service</h3>
              <p className="leading-relaxed mb-2">
                GataCart est une application mobile de gestion de courses qui offre :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Création et gestion de listes de courses</li>
                <li>Optimisation du parcours en magasin</li>
                <li>Suivi budgétaire en temps réel (Double Suivi)</li>
                <li>Analyse des dépenses avec graphiques</li>
                <li>Calcul du prix moyen historique</li>
                <li>Gestion multidevises</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Licence d'Utilisation</h3>
              <p className="leading-relaxed mb-2">
                Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour utiliser 
                GataCart à des fins personnelles. Vous n'êtes pas autorisé à :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copier, modifier ou distribuer l'application</li>
                <li>Décompiler ou faire de l'ingénierie inverse</li>
                <li>Utiliser l'application à des fins commerciales sans autorisation</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Mode Invité</h3>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <p className="leading-relaxed">
                  Le Mode Invité permet d'utiliser GataCart sans créer de compte. Les données sont stockées 
                  localement. <strong>GataCart ne peut garantir la conservation de ces données</strong> en cas de 
                  désinstallation ou changement d'appareil.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Utilisation Acceptable</h3>
              <p className="mb-2">Vous acceptez de ne pas :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliser l'application de manière illégale ou frauduleuse</li>
                <li>Transmettre des virus ou codes malveillants</li>
                <li>Tenter de surcharger ou perturber nos serveurs</li>
                <li>Collecter des données d'autres utilisateurs</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation de Responsabilité</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="leading-relaxed mb-2">
                  GataCart est un outil d'aide à la gestion budgétaire. Nous ne sommes pas responsables de :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Erreurs dans les calculs si les données saisies sont incorrectes</li>
                  <li>Pertes financières liées à l'utilisation de l'application</li>
                  <li>Perte de données en Mode Invité</li>
                  <li>Problèmes causés par des appareils ou réseaux tiers</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Conformité RGPD</h3>
              <p className="leading-relaxed">
                GataCart est conforme au RGPD. Vos droits concernant vos données personnelles sont détaillés 
                dans notre Politique de Confidentialité. Nous nous engageons à protéger vos données et à respecter 
                votre vie privée.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email :</strong> support@gatacart.com</p>
                <p><strong>Support technique :</strong> help@gatacart.com</p>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <button 
                onClick={onClose}
                className="w-full py-3 bg-gradient-to-r from-orange-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
