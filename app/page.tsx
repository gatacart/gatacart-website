"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Settings,
  List,
  Receipt,
  PieChart,
  Menu,
  X,
  ChevronRight,
  Check,
  Shield,
  FileText,
  Cookie,
} from "lucide-react";

const GataCartWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const features = [
    {
      icon: <List className="w-8 h-8" />,
      title: "Faites vos courses dans l'ordre parfait",
      subtitle: "Efficacité en Magasin",
      description:
        "GataCart optimise automatiquement votre parcours en magasin. Votre liste est triée selon l'ordre des allées que vous avez défini, vous permettant d'économiser du temps et d'éviter les allers-retours inutiles.",
      highlight: "Optimisation du Parcours",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Le Double Suivi qui vous fait économiser",
      subtitle: "Contrôle Budgétaire",
      description:
        "Suivez vos dépenses en temps réel pendant vos achats. Comparez le budget estimé avec vos dépenses actuelles. La Duplication Intelligente calcule le prix moyen historique pour des prévisions encore plus précises.",
      highlight: "Suivi en Temps Réel",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transformez vos dépenses en stratégie",
      subtitle: "Analyse Intelligente",
      description:
        "Visualisez la répartition de vos dépenses par catégorie, identifiez les tendances mensuelles et ajustez votre budget. Le menu Stats transforme vos données en insights actionnables.",
      highlight: "Graphiques et Tendances",
    },
  ];

  const appMenus = [
    {
      icon: <List className="w-6 h-6" />,
      name: "Listes",
      role: "La Planification et l'Exécution",
      description:
        "Créez et gérez vos listes de courses avec le Double Suivi intégré. Pendant l'achat, visualisez en temps réel vos dépenses actuelles vs. votre budget estimé. Vos articles sont automatiquement triés selon l'ordre des catégories défini.",
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      name: "Achats",
      role: "L'Historique Transactionnel",
      description:
        "Conservez l'historique complet de toutes vos listes achevées avec les prix réels payés. La Duplication Intelligente analyse vos achats passés pour calculer le prix moyen historique et améliorer vos prévisions budgétaires.",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      name: "Stats",
      role: "L'Analyse Budgétaire Agrégée",
      description:
        "Tableau de bord complet avec graphiques de répartition par catégorie, tendances mensuelles et suivi du budget mensuel cible. Comprenez où va votre argent et optimisez vos dépenses.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: "Paramètres",
      role: "Configuration et Profil",
      description:
        "Définissez l'ordre des catégories pour optimiser votre parcours en magasin. Configurez votre devise de référence pour l'analyse multidevises et personnalisez votre expérience.",
    },
  ];

  const benefits = [
    "Optimisation du parcours en magasin",
    "Double suivi budgétaire en temps réel",
    "Prix moyen historique intelligent",
    "Graphiques d'analyse détaillés",
    "Gestion multidevises",
    "Mode invité disponible",
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="text-sm">
                Nous utilisons des cookies pour améliorer votre expérience. En
                continuant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
            <button
              onClick={() => setShowCookieBanner(false)}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">GataCart</h1>
                <p className="text-xs text-gray-600">Le Grenier Organisé</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection("legal")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Légal
              </button>
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Télécharger
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection("legal")}
                className="text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Légal
              </button>
              <button className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Télécharger
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span>Votre Assistant de Courses Intelligent</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Le Grenier Organisé de vos Courses
            </h2>

            <p className="text-xl sm:text-2xl text-gray-600 mb-4">
              Planifiez sans stress, analysez finement, maîtrisez votre budget
            </p>

            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Comme le grenier traditionnel où l'on stocke soigneusement ses
              provisions, GataCart organise votre budget et vos courses de
              manière fiable et ordonnée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg flex items-center justify-center gap-2 shadow-lg">
                <ShoppingCart className="w-5 h-5" />
                Télécharger sur Google Play
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg">
                En savoir plus
              </button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trois Piliers pour une Gestion Parfaite
            </h3>
            <p className="text-lg text-gray-600">
              GataCart combine efficacité, contrôle et analyse pour transformer
              votre expérience de courses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold mb-3">
                  {feature.subtitle}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-medium">
                  <ChevronRight className="w-5 h-5" />
                  <span className="text-sm">{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Menus Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quatre Menus pour une Maîtrise Totale
            </h3>
            <p className="text-lg text-gray-600">
              Découvrez comment chaque fonctionnalité travaille pour vous
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {appMenus.map((menu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                    {menu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {menu.name}
                    </h4>
                    <p className="text-sm text-emerald-600 font-medium mb-3">
                      {menu.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {menu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à organiser votre grenier de courses ?
          </h3>
          <p className="text-xl text-emerald-100 mb-8">
            Rejoignez les utilisateurs qui ont déjà transformé leur façon de
            faire leurs courses
          </p>
          <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg shadow-lg">
            Télécharger GataCart Gratuitement
          </button>
        </div>
      </section>

      {/* Legal Section */}
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
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Politique de Confidentialité
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                GataCart traite vos prix réels payés et vos budgets de manière
                sécurisée. Pour la gestion multidevises, nos serveurs backend
                sécurisés communiquent avec des API de taux de change tierces
                sans exposer vos données personnelles identifiables.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Mode Invité :</strong> Les données du mode invité sont
                stockées localement sur votre appareil et ne sont pas garanties
                en cas de désinstallation ou de changement d'appareil.
              </p>
              <button
                onClick={() => scrollToSection("privacy-full")}
                className="text-emerald-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Lire la politique complète
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-emerald-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Conditions d'Utilisation
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                En utilisant GataCart, vous acceptez nos conditions
                d'utilisation. L'application est fournie "telle quelle" pour
                vous aider à gérer vos courses et votre budget de manière
                efficace.
              </p>
              <p className="text-gray-600 mb-4">
                Nous nous engageons à protéger vos données et à fournir un
                service de qualité conforme aux standards RGPD/GDPR.
              </p>
              <button
                onClick={() => scrollToSection("terms-full")}
                className="text-emerald-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Lire les conditions complètes
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-6 h-6" />
                <span className="font-bold text-lg">GataCart</span>
              </div>
              <p className="text-gray-400 text-sm">
                Le Grenier Organisé de vos courses. Planifiez, analysez,
                maîtrisez.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Navigation</h5>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  Fonctionnalités
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  Comment ça marche
                </button>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Légal</h5>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection("legal")}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  Politique de Confidentialité
                </button>
                <button
                  onClick={() => scrollToSection("legal")}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  Conditions d'Utilisation
                </button>
                <button
                  onClick={() => scrollToSection("legal")}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors"
                >
                  Gestion des Cookies
                </button>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Télécharger</h5>
              <button className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 GataCart. Tous droits réservés.</p>
            <p className="mt-2">
              Conçu avec ❤️ pour simplifier vos courses quotidiennes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GataCartWebsite;
