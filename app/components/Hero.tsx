'use client';

import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';

const Hero = () => {
  const benefits: string[] = [
    "Optimisation du parcours en magasin",
    "Double suivi budgétaire en temps réel",
    "Prix moyen historique intelligent",
    "Graphiques d'analyse détaillés",
    "Gestion multidevises",
    "Mode invité disponible"
  ];

  return (
    <section id="home" className="py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4 text-orange-600" />
            <span>Votre Assistant de Courses Intelligent</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            GataCart:<span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Vos achats dans les règles de l'art!</span> 
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            Planifiez sans stress, analysez finement, maîtrisez votre budget
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Comme le grenier traditionnel où l'on stocke soigneusement ses provisions, GataCart organise votre budget et vos courses de manière fiable et ordonnée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-xl transition-all font-medium text-lg flex items-center justify-center gap-2 shadow-lg">
              <ShoppingCart className="w-5 h-5" />
              Télécharger sur Google Play
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg">
              En savoir plus
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
