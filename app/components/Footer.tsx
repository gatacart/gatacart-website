import React from 'react';
import { ShoppingCart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (section: string) => void;
  openPrivacyPolicy: () => void;
  openTerms: () => void;
}

export default function Footer({ scrollToSection, openPrivacyPolicy, openTerms }: FooterProps) {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/gatacart", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/gatacart", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/gatacart", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/gatacart", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@gatacart", label: "YouTube", color: "hover:text-red-500" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:contact@gatacart.com", label: "Email", color: "hover:text-orange-500" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Retour à l'accueil"
            >
              <div className="relative w-10 h-10">
                <img 
                  src="/logo.png" 
                  alt="GataCart Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg">GataCart</span>
            </button>
            <p className="text-gray-400 text-sm mb-4">
              Le Grenier Organisé de vos courses. Planifiez, analysez, maîtrisez.
            </p>
            
            {/* Social Links */}
            <div className="mb-4">
              <h6 className="text-sm font-semibold text-gray-300 mb-3">Suivez-nous</h6>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all ${social.color} hover:bg-gray-700 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
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
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-orange-500 hover:shadow-lg rounded-lg transition-all flex items-center justify-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5" />
              <span>Google Play</span>
            </button>
            
            <div className="text-sm text-gray-400">
              <p className="mb-1">📧 contact@gatacart.com</p>
              <p>📞 Support disponible 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-gray-400 text-sm">
              <p>&copy; 2024 GataCart. Tous droits réservés.</p>
              <p className="mt-1">Conçu avec ❤️ pour simplifier vos courses quotidiennes</p>
            </div>
            
            {/* Social Links Mobile (répété pour visibilité) */}
            <div className="flex gap-3 md:hidden">
              {socialLinks.slice(0, 4).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center transition-all ${social.color} hover:bg-gray-700`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
      }
