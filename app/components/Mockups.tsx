import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

interface MockupSlide {
  title: string;
  description: string;
  imagePath: string;
  category: string;
  features: string[];
}

export default function Mockups() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const mockups: MockupSlide[] = [
    {
      title: "Menu Listes",
      description: "Créez et gérez vos listes de courses avec une interface intuitive. Tri automatique par catégorie pour un parcours optimisé.",
      imagePath: "/mockups/listes.png",
      category: "Planification",
      features: ["Double suivi budgétaire", "Tri par catégorie", "Mode d'exécution"]
    },
    {
      title: "Menu Achats",
      description: "Consultez l'historique complet de vos achats passés. La duplication intelligente calcule les prix moyens pour des estimations précises.",
      imagePath: "/mockups/achats.png",
      category: "Historique",
      features: ["Prix moyen historique", "Duplication intelligente", "Archivage automatique"]
    },
    {
      title: "Menu Stats",
      description: "Visualisez vos dépenses avec des graphiques détaillés. Analysez les tendances et optimisez votre budget mensuel.",
      imagePath: "/mockups/stats.png",
      category: "Analyse",
      features: ["Graphiques de répartition", "Tendances mensuelles", "Budget cible"]
    },
    {
      title: "Menu Paramètres",
      description: "Personnalisez votre expérience. Définissez l'ordre des catégories et configurez votre devise de référence.",
      imagePath: "/mockups/parametres.png",
      category: "Configuration",
      features: ["Ordre des catégories", "Multidevises", "Profil utilisateur"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            <span>Découvrez l'Interface</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Une Application <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Simple et Puissante</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Parcourez les différents menus et découvrez comment GataCart transforme votre expérience de courses
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Mockup Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Placeholder for screenshot - Replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 via-white to-orange-100 flex items-center justify-center relative">
                      <img 
                        src={mockups[currentSlide].imagePath}
                        alt={mockups[currentSlide].title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback si l'image n'existe pas encore
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && parent.querySelector('.placeholder') === null) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'placeholder absolute inset-0 flex flex-col items-center justify-center p-8';
                            placeholder.innerHTML = `
                              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p class="text-gray-600 text-center font-medium">${mockups[currentSlide].title}</p>
                              <p class="text-gray-400 text-sm text-center mt-2">Screenshot à venir</p>
                            `;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-sm font-semibold">
                {mockups[currentSlide].category}
              </div>
              
              <h4 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {mockups[currentSlide].title}
              </h4>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {mockups[currentSlide].description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {mockups[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center gap-3 pt-4">
                {mockups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 bg-gradient-to-r from-blue-600 to-orange-500' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 z-10"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 z-10"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Bottom Grid - Preview Thumbnails */}
        <div className="grid grid-cols-4 gap-4 mt-12">
          {mockups.map((mockup, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentSlide 
                  ? 'ring-4 ring-blue-500 ring-offset-2 scale-105' 
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">{mockup.title}</span>
              </div>
              {index === currentSlide && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
