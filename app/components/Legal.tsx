import React from 'react';
import { Shield, FileText, ChevronRight } from 'lucide-react';

interface LegalProps {
  openPrivacyPolicy: () => void;
  openTerms: () => void;
}

export default function Legal({ openPrivacyPolicy, openTerms }: LegalProps) {
  return (
    <section id="legal" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Informations Légales
          </h3>
          <p className="text-gray-600">
            Transparence et sécurité de vos données
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Politique de Confidentialité
              </h4>
            </div>
            <p className="text-gray-600 mb-4">
              GataCart traite vos prix réels payés et vos budgets de manière sécurisée. Pour la gestion multidevises, nos serveurs backend sécurisés communiquent avec des API de taux de change tierces sans exposer vos données personnelles identifiables.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Mode Invité :</strong> Les données du mode invité sont stockées localement sur votre appareil et ne sont pas garanties en cas de désinstallation ou de changement d'appareil.
            </p>
            <button 
              onClick={openPrivacyPolicy}
              className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              Lire la politique complète
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Conditions d'Utilisation
              </h4>
            </div>
            <p className="text-gray-600 mb-4">
              En utilisant GataCart, vous acceptez nos conditions d'utilisation. L'application est fournie "telle quelle" pour vous aider à gérer vos courses et votre budget de manière efficace.
            </p>
            <p className="text-gray-600 mb-4">
              Nous nous engageons à protéger vos données et à fournir un service de qualité conforme aux standards RGPD/GDPR.
            </p>
            <button 
              onClick={openTerms}
              className="text-orange-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              Lire les conditions complètes
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
