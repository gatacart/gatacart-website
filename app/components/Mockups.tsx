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
  
  // Nouvel état pour gérer la transition fluide entre les menus
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // Fonction centrale pour changer de menu avec fluidité
  const handleMenuChange = (newIndex: number) => {
    if (newIndex === currentMenu || isTransitioning) return;

    setIsAutoPlaying(false);
    setIsTransitioning(true); // Début du fade-out

    // On attend que l'animation de sortie soit finie (300ms) avant de changer les données
    setTimeout(() => {
      setCurrentMenu(newIndex);
      setCurrentScreenshot(0); // Reset screenshot au début
      
      // Petite pause technique pour laisser le DOM se mettre à jour invisiblement
      setTimeout(() => {
        setIsTransitioning(false); // Début du fade-in
      }, 50);
    }, 300);
  };

  const nextMenu = () => {
    handleMenuChange((currentMenu + 1) % menus.length);
  };

  const prevMenu = () => {
    handleMenuChange((currentMenu - 1 + menus.length) % menus.length);
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % totalScreenshots);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + totalScreenshots) % totalScreenshots);
  };

  // Auto-play intelligent
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (currentScreenshot < totalScreenshots - 1) {
        // Si on est dans le même menu, on slide simplement
        nextScreenshot();
      } else {
        // Si on change de menu, on utilise la transition fluide manuelle
        // Note: On recrée la logique ici pour éviter la dépendance circulaire avec handleMenuChange
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentMenu((prev) => (prev + 1) % menus.length);
          setCurrentScreenshot(0);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentScreenshot, currentMenu, isAutoPlaying, totalScreenshots, menus.length]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
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
          {/* Main Display Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px]">
            
            {/* Left: Mockup Image SLIDER */}
            <div className={`relative order-2 md:order-1 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <div className="relative mx-auto max-w-sm">
                
                {/* Zone de défilement */}
                <div className="overflow-hidden py-8 px-4">
                  {/* Bande d'images */}
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
                  >
                    {currentMenuData.screenshots.map((screen, index) => (
                      <div key={`${currentMenu}-${index}`} className="min-w-full flex justify-center px-2">
                         {/* Image "pure" sans cadre CSS */}
                        <img 
                          src={screen.imagePath}
                          alt={screen.caption}
                          className="w-full h-auto object-contain drop-shadow-2xl max-h-[550px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Screenshots (Interne au téléphone) */}
                {totalScreenshots > 1 && (
                  <>
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all z-20 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all z-20 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium z-20 shadow-lg transition-opacity duration-300">
                      {currentScreenshot + 1} / {totalScreenshots}
                    </div>
                  </>
                )}

                {/* Decorative Background Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              </div>

              {/* Caption changeante */}
              <div className="text-center -mt-2 relative h-8">
                 <p className="text-sm text-gray-600 font-medium bg-white/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm transition-all duration-300">
                    {currentMenuData.screenshots[currentScreenshot].caption}
                 </p>
              </div>
            </div>

            {/* Right: Content */}
            {/* On applique la transition aussi ici pour que le texte arrive en même temps que le téléphone */}
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-300 ease-in-out delay-75 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-sm font-semibold">
                {currentMenuData.category}
              </div>
              
              <h4 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {currentMenuData.title}
              </h4>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentMenuData.description}
              </p>

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
                    onClick={() => handleMenuChange(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentMenu 
                        ? 'w-12 bg-gradient-to-r from-blue-600 to-orange-500' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller au menu ${index + 1}`}
                  />
                ))}
              </div>

              {/* Screenshot Dots (si applicable) */}
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
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Large Navigation Buttons (Global) */}
          <button
            onClick={prevMenu}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-blue-600 transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextMenu}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-blue-600 transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Bottom Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {menus.map((menu, index) => (
            <button
              key={index}
              onClick={() => handleMenuChange(index)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 p-4 border-2 ${
                index === currentMenu 
                  ? 'border-blue-500 bg-white shadow-lg scale-105' 
                  : 'border-transparent bg-white/60 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="text-center">
                <p className={`text-sm font-bold mb-1 ${index === currentMenu ? 'text-blue-700' : 'text-gray-600'}`}>
                    {menu.title.replace('Menu ', '')}
                </p>
                <p className="text-xs text-gray-400">{menu.screenshots.length} écrans</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
