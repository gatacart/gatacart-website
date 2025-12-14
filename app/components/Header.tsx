import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Retour à l'accueil"
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="GataCart Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                GataCart
              </h1>
              <p className="text-xs text-gray-600">Le Grenier Organisé</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Fonctionnalités
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              FAQ
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium">
              Bientôt disponible
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('features')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">
              Fonctionnalités
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors">
              FAQ
            </button>
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium">
              Bientôt disponible
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
