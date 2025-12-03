import React from 'react';
import { Shield, X } from 'lucide-react';

interface PrivacyModalProps {
  show: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ show, onClose }: PrivacyModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-t-2xl flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Politique de Confidentialité</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-8 space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Dernière mise à jour : Décembre 2024</p>
            
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h3>
              <p className="leading-relaxed">
                Bienvenue sur GataCart. Nous nous engageons à protéger votre vie privée et vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre application de gestion de courses.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Données Collectées</h3>
              <p className="font-semibold mb-2">GataCart collecte et traite les données suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Prix réels payés</strong> : Les montants que vous enregistrez pour vos articles de courses</li>
                <li><strong>Budgets et estimations</strong> : Vos objectifs budgétaires et prévisions de dépenses</li>
                <li><strong>Listes de courses</strong> : Les articles et catégories que vous créez</li>
                <li><strong>Historique d'achats</strong> : Vos transactions passées pour le calcul du prix moyen historique</li>
                <li><strong>Paramètres utilisateur</strong> : Ordre des catégories, devise de référence, préférences</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation des Données</h3>
              <p className="mb-2">Vos données sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir les fonctionnalités de l'application (suivi budgétaire, optimisation de parcours)</li>
                <li>Calculer le prix moyen historique via la Duplication Intelligente</li>
                <li>Générer des analyses et graphiques de vos dépenses</li>
                <li>Synchroniser vos données entre appareils</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Gestion Multidevises</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">Architecture Sécurisée</p>
                <p className="leading-relaxed">
                  Pour la conversion multidevises, GataCart utilise un serveur backend sécurisé qui communique 
                  avec des API de taux de change tierces. <strong>Aucune donnée personnelle identifiable n'est exposée</strong> 
                  à ces services tiers.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Mode Invité</h3>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <p className="font-semibold text-amber-900 mb-2">⚠️ Important</p>
                <p className="leading-relaxed">
                  Les données du <strong>Mode Invité</strong> sont stockées localement sur votre appareil uniquement. 
                  Ces données ne sont <strong>pas garanties</strong> en cas de désinstallation, changement d'appareil ou 
                  réinitialisation du téléphone.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Vos Droits (RGPD)</h3>
              <p className="mb-2">Vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès</strong> : Demander une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : Corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : Supprimer votre compte et vos données</li>
                <li><strong>Droit à la portabilité</strong> : Exporter vos données</li>
              </ul>
              <p className="mt-4 font-medium">
                Pour exercer ces droits : <span className="text-blue-600">privacy@gatacart.com</span>
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email :</strong> privacy@gatacart.com</p>
                <p><strong>Responsable DPO :</strong> dpo@gatacart.com</p>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <button 
                onClick={onClose}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
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
