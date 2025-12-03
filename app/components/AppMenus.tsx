'use client';

import React from 'react';
import { List, Receipt, PieChart, Settings } from 'lucide-react';

interface AppMenu {
  icon: React.ReactNode;
  name: string;
  role: string;
  description: string;
  color: string;
}

const AppMenus = () => {
  const appMenus: AppMenu[] = [
    {
      icon: <List className="w-6 h-6" />,
      name: "Listes",
      role: "La Planification et l'Exécution",
      description: "Créez et gérez vos listes de courses avec le Double Suivi intégré. Pendant l'achat, visualisez en temps réel vos dépenses actuelles vs. votre budget estimé. Vos articles sont automatiquement triés selon l'ordre des catégories défini.",
      color: "blue"
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      name: "Achats",
      role: "L'Historique Transactionnel",
      description: "Conservez l'historique complet de toutes vos listes achevées avec les prix réels payés. La Duplication Intelligente analyse vos achats passés pour calculer le prix moyen historique et améliorer vos prévisions budgétaires.",
      color: "orange"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      name: "Stats",
      role: "L'Analyse Budgétaire Agrégée",
      description: "Tableau de bord complet avec graphiques de répartition par catégorie, tendances mensuelles et suivi du budget mensuel cible. Comprenez où va votre argent et optimisez vos dépenses.",
      color: "emerald"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: "Paramètres",
      role: "Configuration et Profil",
      description: "Définissez l'ordre des catégories pour optimiser votre parcours en magasin. Configurez votre devise de référence pour l'analyse multidevises et personnalisez votre expérience.",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', icon: 'bg-blue-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', icon: 'bg-orange-600' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: 'bg-emerald-600' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', icon: 'bg-amber-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quatre Menus pour une <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Maîtrise Totale</span>
          </h3>
          <p className="text-lg text-gray-600">
            Découvrez comment chaque fonctionnalité travaille pour vous
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {appMenus.map((menu, index) => {
            const colors = getColorClasses(menu.color);
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} flex-shrink-0`}>
                    {menu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {menu.name}
                    </h4>
                    <p className={`text-sm ${colors.text} font-medium mb-3`}>
                      {menu.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {menu.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppMenus;
