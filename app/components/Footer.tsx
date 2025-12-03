import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FooterProps {
  scrollToSection: (section: string) => void;
  openPrivacyPolicy: () => void;
  openTerms: () => void;
}

export default function Footer({ scrollToSection, openPrivacyPolicy, openTerms }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <img 
                  src="/logo.png" 
                  alt="GataCart Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg">GataCart</span>
            </div>
            <p className="text-gray-400 text-sm">
              Le Grenier Organisé de vos courses. Planifiez, analysez, maîtrisez.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-orange-400">Navigation</h5>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-400 hover:text-white text-sm text-left transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-400 hover:text-white text-sm text-left transition-colors"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-gray-400 hover:text-white text-sm text-left transition-colors"
              >
                Comment ça marche
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-blue-400">Légal</h5>
            <div className="flex flex-col gap-2">
              <button 
                onClick={openPrivacyPolicy}
                className="text-gray-400 hover:text-white text-sm text-left transition-colors"
              >
                Politique de Confidentialité
              </button>
              <button 
                onClick={openTerms}
                className="text-gray-400 hover:text-white text-sm text-left transition-colors"
              >
                Conditions d'Utilisation
              </button>
              <button 
                onClick={() => scrollToSection('legal')} 
                className="text-gray-400 hover:text-white text-sm text-left transition-colors"
              >
                Gestion des Cookies
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-emerald-400">Télécharger</h5>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-orange-500 hover:shadow-lg rounded-lg transition-all flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Google Play</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 GataCart. Tous droits réservés.</p>
          <p className="mt-2">Conçu avec ❤️ pour simplifier vos courses quotidiennes</p>
        </div>
      </div>
    </footer>
  );
}
