import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

interface Screenshot {
  imagePath: string;
  caption: string;
}

interface MockupMenu {
  title: string;
  description: string;
  category: string;
  features: string[];
  screenshots: Screenshot[];
}

export default function Mockups() {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const menus: MockupMenu[] = [
    {
      title: "Menu Listes",
      description: "Créez et gérez vos listes de courses avec une interface intuitive. Tri automatique par catégorie pour un parcours optimisé.",
      category: "Planification",
      features: ["Double suivi budgétaire", "Tri par catégorie", "Mode d'exécution"],
      screenshots: [
        { imagePath: "/mockups/listes-1.png", caption: "Vue principale des listes" },
        { imagePath: "/mockups/listes-2.png", caption: "Mode d'exécution en magasin" },
        { imagePath: "/mockups/listes-3.png", caption: "Ajout d'articles" }
      ]
    },
    {
      title: "Menu Achats",
      description: "Consultez l'historique complet de vos achats passés. La duplication intelligente calcule les prix moyens pour des estimations précises.",
      category: "Historique",
      features: ["Prix moyen historique", "Duplication intelligente", "Archivage automatique"],
      screenshots: [
        { imagePath: "/mockups/achats-1.png", caption: "Historique des achats" },
        { imagePath: "/mockups/achats-2.png", caption: "Détails d'un achat" },
        { imagePath: "/mockups/achats-3.png", caption: "Duplication intelligente" }
      ]
    },
    {
      title: "Menu Stats",
      description: "Visualisez vos dépenses avec des graphiques détaillés. Analysez les tendances et optimisez votre budget mensuel.",
      category: "Analyse",
      features: ["Graphiques de répartition", "Tendances mensuelles", "Budget cible"],
      screenshots: [
        { imagePath: "/mockups/stats-1.png", caption: "Tableau de bord" },
        { imagePath: "/mockups/stats-2.png", caption: "Graphiques par catégorie" },
        { imagePath: "/mockups/stats-3.png", caption: "Évolution mensuelle" }
      ]
    },
    {
      title: "Menu Paramètres",
      description: "Personnalisez votre expérience. Définissez l'ordre des catégories et configurez votre devise de référence.",
      category: "Configuration",
      features: ["Ordre des catégories", "Multidevises", "Profil utilisateur"],
      screenshots: [
        { imagePath: "/mockups/parametres-1.png", caption: "Paramètres généraux" },
        { imagePath: "/mockups/parametres-2.png", caption: "Ordre des catégories" }
      ]
    }
  ];

  const currentMenuData = menus[currentMenu];
  const totalScreenshots = currentMenuData.screenshots.length;

  const nextMenu = () => {
    setCurrentMenu((prev) => (prev + 1) % menus.length);
    setCurrentScreenshot(0);
  };

  const prevMenu = () => {
    setCurrentMenu((prev) => (prev - 1 + menus.length) % menus.length);
    setCurrentScreenshot(0);
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % totalScreenshots);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + totalScreenshots) % totalScreenshots);
  };

  const goToMenu = (index: number) => {
    setCurrentMenu(index);
    setCurrentScreenshot(0);
    setIsAutoPlaying(false);
  };

  // Auto-play pour les screenshots
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (currentScreenshot < totalScreenshots - 1) {
        nextScreenshot();
      } else {
        // Passer au menu suivant
        nextMenu();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentScreenshot, currentMenu, isAutoPlaying, totalScreenshots]);

  const renderPlaceholder = (caption: string) => (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-white to-orange-100">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
        <Smartphone className="w-12 h-12 text-white" />
      </div>
      <p className="text-gray-600 text-center font-medium mb-2">{currentMenuData.title}</p>
      <p className="text-gray-500 text-sm text-center">{caption}</p>
      <p className="text-gray-400 text-xs text-center mt-2">Screenshot à venir</p>
    </div>
  );

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
          {/* Main Display */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Mockup Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                    <img 
                      src={currentMenuData.screenshots[currentScreenshot].imagePath}
                      alt={currentMenuData.screenshots[currentScreenshot].caption}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && parent.querySelector('.placeholder') === null) {
                          const placeholder = document.createElement('div');
                          placeholder.className = 'placeholder';
                          parent.appendChild(placeholder);
                          const root = document.createElement('div');
                          placeholder.appendChild(root);
                          root.outerHTML = renderPlaceholder(currentMenuData.screenshots[currentScreenshot].caption).props.children;
                        }
                      }}
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full z-10"></div>
                </div>

                {/* Screenshot Navigation Arrows (si plus d'un screenshot) */}
                {totalScreenshots > 1 && (
                  <>
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all z-20"
                      aria-label="Screenshot précédent"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all z-20"
                      aria-label="Screenshot suivant"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>

                    {/* Screenshot Counter */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                      {currentScreenshot + 1} / {totalScreenshots}
                    </div>
                  </>
                )}

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              </div>

              {/* Screenshot Caption */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 font-medium">
                  {currentMenuData.screenshots[currentScreenshot].caption}
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-sm font-semibold">
                {currentMenuData.category}
              </div>
              
              <h4 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {currentMenuData.title}
              </h4>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentMenuData.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {currentMenuData.features.map((feature, index) => (
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

              {/* Menu Navigation Dots */}
              <div className="flex items-center gap-3 pt-4">
                {menus.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToMenu(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentMenu 
                        ? 'w-12 bg-gradient-to-r from-blue-600 to-orange-500' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller au menu ${index + 1}`}
                  />
                ))}
              </div>

              {/* Screenshot Dots (pour le menu actuel) */}
              {totalScreenshots > 1 && (
                <div className="flex items-center gap-2">
                  {currentMenuData.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentScreenshot 
                          ? 'bg-orange-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Menu Navigation Buttons */}
          <button
            onClick={prevMenu}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 z-10"
            aria-label="Menu précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextMenu}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 z-10"
            aria-label="Menu suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Bottom Grid - Menu Thumbnails */}
        <div className="grid grid-cols-4 gap-4 mt-12">
          {menus.map((menu, index) => (
            <button
              key={index}
              onClick={() => goToMenu(index)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 p-4 ${
                index === currentMenu 
                  ? 'ring-4 ring-blue-500 ring-offset-2 scale-105 bg-gradient-to-br from-blue-50 to-orange-50' 
                  : 'bg-white opacity-60 hover:opacity-100 hover:shadow-lg'
              }`}
            >
              <div className="text-center">
                <p className="text-sm font-bold text-gray-800 mb-1">{menu.title.replace('Menu ', '')}</p>
                <p className="text-xs text-gray-500">{menu.screenshots.length} captures</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
