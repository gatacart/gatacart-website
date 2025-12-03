'use client';

import React from 'react';
import { TrendingUp, BarChart3, List, ChevronRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  gradient: string;
}

const Features = () => {
  const features: Feature[] = [
    {
      icon: <List className="w-8 h-8" />,
      title: "Faites vos courses dans l'ordre parfait",
      subtitle: "Efficacité en Magasin",
      description: "GataCart optimise automatiquement votre parcours en magasin. Votre liste est triée selon l'ordre des allées que vous avez défini, vous permettant d'économiser du temps et d'éviter les allers-retours inutiles.",
      highlight: "Optimisation du Parcours",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Le Double Suivi qui vous fait économiser",
      subtitle: "Contrôle Budgétaire",
      description: "Suivez vos dépenses en temps réel pendant vos achats. Comparez le budget estimé avec vos dépenses actuelles. La Duplication Intelligente calcule le prix moyen historique pour des prévisions encore plus précises.",
      highlight: "Suivi en Temps Réel",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transformez vos dépenses en stratégie",
      subtitle: "Analyse Intelligente",
      description: "Visualisez la répartition de vos dépenses par catégorie, identifiez les tendances mensuelles et ajustez votre budget. Le menu Stats transforme vos données en insights actionnables.",
      highlight: "Graphiques et Tendances",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trois Piliers pour une <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Gestion Parfaite</span>
          </h3>
          <p className="text-lg text-gray-600">
            GataCart combine efficacité, contrôle et analyse pour transformer votre expérience de courses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-xs font-semibold mb-3">
                {feature.subtitle}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-medium">
                <ChevronRight className="w-5 h-5" />
                <span className="text-sm">{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
