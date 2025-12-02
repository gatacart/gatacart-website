'use client';

import React, { useState } from 'react';
import { TrendingUp, BarChart3, Settings, List, Receipt, PieChart, Menu, X, ChevronRight, Check, Shield, FileText, Cookie, ShoppingCart } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  gradient: string;
}

interface AppMenu {
  icon: React.ReactNode;
  name: string;
  role: string;
  description: string;
  color: string;
}

const GataCartWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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

  const benefits: string[] = [
    "Optimisation du parcours en magasin",
    "Double suivi budgétaire en temps réel",
    "Prix moyen historique intelligent",
    "Graphiques d'analyse détaillés",
    "Gestion multidevises",
    "Mode invité disponible"
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    setShowPrivacyPolicy(false);
    setShowTerms(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
    setShowTerms(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTerms = () => {
    setShowTerms(true);
    setShowPrivacyPolicy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setShowPrivacyPolicy(false);
    setShowTerms(false);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-t-2xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Politique de Confidentialité</h2>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 space-y-6 text-gray-700">
                <p className="text-sm text-gray-500">Dernière mise à jour : Décembre 2024</p>
                
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h3>
                  <p className="leading-relaxed">
                    Bienvenue sur GataCart. Nous nous engageons à protéger votre vie privée et vos données personnelles. 
                    Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                    lorsque vous utilisez notre application de gestion de courses.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Données Collectées</h3>
                  <p className="font-semibold mb-2">GataCart collecte et traite les données suivantes :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Prix réels payés</strong> : Les montants que vous enregistrez pour vos articles de courses</li>
                    <li><strong>Budgets et estimations</strong> : Vos objectifs budgétaires et prévisions de dépenses</li>
                    <li><strong>Listes de courses</strong> : Les articles et catégories que vous créez</li>
                    <li><strong>Historique d'achats</strong> : Vos transactions passées pour le calcul du prix moyen historique</li>
                    <li><strong>Paramètres utilisateur</strong> : Ordre des catégories, devise de référence, préférences</li>
                    <li><strong>Données de compte (si connecté)</strong> : Email, nom d'utilisateur pour la synchronisation</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation des Données</h3>
                  <p className="mb-2">Vos données sont utilisées exclusivement pour :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir les fonctionnalités de l'application (suivi budgétaire, optimisation de parcours)</li>
                    <li>Calculer le prix moyen historique via la Duplication Intelligente</li>
                    <li>Générer des analyses et graphiques de vos dépenses</li>
                    <li>Synchroniser vos données entre appareils (si compte créé)</li>
                    <li>Améliorer l'expérience utilisateur et les fonctionnalités</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Gestion Multidevises</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="font-semibold text-blue-900 mb-2">Architecture Sécurisée</p>
                    <p className="leading-relaxed">
                      Pour la conversion multidevises, GataCart utilise un serveur backend sécurisé qui communique 
                      avec des API de taux de change tierces. <strong>Aucune donnée personnelle identifiable n'est exposée</strong> 
                      à ces services tiers. Seules les demandes de conversion de devises anonymes sont transmises.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Mode Invité</h3>
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                    <p className="font-semibold text-amber-900 mb-2">⚠️ Important</p>
                    <p className="leading-relaxed">
                      Les données du <strong>Mode Invité</strong> sont stockées localement sur votre appareil uniquement. 
                      Ces données ne sont <strong>pas sauvegardées sur nos serveurs</strong> et ne sont <strong>pas garanties</strong> en cas de :
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Désinstallation de l'application</li>
                      <li>Changement d'appareil</li>
                      <li>Réinitialisation du téléphone</li>
                      <li>Problèmes techniques avec l'appareil</li>
                    </ul>
                    <p className="mt-2 font-medium">
                      Pour garantir la sauvegarde de vos données, nous recommandons de créer un compte.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Partage des Données</h3>
                  <p className="leading-relaxed mb-2">
                    <strong>GataCart ne vend jamais vos données.</strong> Nous ne partageons vos informations qu'avec :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Services d'hébergement cloud</strong> : Pour stocker vos données de manière sécurisée</li>
                    <li><strong>API de taux de change</strong> : Uniquement pour les conversions de devises (données anonymisées)</li>
                    <li><strong>Services d'analyse</strong> : Données agrégées et anonymisées pour améliorer l'application</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Sécurité</h3>
                  <p className="leading-relaxed">
                    Nous utilisons des mesures de sécurité standard de l'industrie pour protéger vos données :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                    <li>Chiffrement des données au repos</li>
                    <li>Authentification sécurisée</li>
                    <li>Accès limité aux données par notre équipe</li>
                    <li>Audits de sécurité réguliers</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Vos Droits (RGPD/GDPR)</h3>
                  <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Droit d'accès</strong> : Demander une copie de vos données</li>
                    <li><strong>Droit de rectification</strong> : Corriger vos données inexactes</li>
                    <li><strong>Droit à l'effacement</strong> : Supprimer votre compte et vos données</li>
                    <li><strong>Droit à la portabilité</strong> : Exporter vos données dans un format lisible</li>
                    <li><strong>Droit d'opposition</strong> : Refuser certains traitements de données</li>
                  </ul>
                  <p className="mt-4 font-medium">
                    Pour exercer ces droits, contactez-nous à : <span className="text-blue-600">privacy@gatacart.com</span>
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Conservation des Données</h3>
                  <p className="leading-relaxed">
                    Vos données sont conservées tant que votre compte est actif. Si vous supprimez votre compte, 
                    toutes vos données personnelles seront effacées dans un délai de 30 jours, sauf obligation légale 
                    de conservation.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies et Traceurs</h3>
                  <p className="leading-relaxed">
                    Notre site web utilise des cookies essentiels pour le fonctionnement et des cookies analytiques 
                    (avec votre consentement) pour améliorer nos services. Vous pouvez gérer vos préférences de cookies 
                    à tout moment via les paramètres de votre navigateur.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications de la Politique</h3>
                  <p className="leading-relaxed">
                    Nous pouvons mettre à jour cette politique de confidentialité occasionnellement. Nous vous informerons 
                    de tout changement significatif via l'application ou par email. La date de dernière mise à jour est 
                    indiquée en haut de ce document.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h3>
                  <p className="leading-relaxed mb-2">
                    Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Email :</strong> privacy@gatacart.com</p>
                    <p><strong>Responsable de la protection des données :</strong> dpo@gatacart.com</p>
                  </div>
                </section>

                <div className="border-t pt-6 mt-8">
                  <button 
                    onClick={closeModal}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-blue-500 text-white p-6 rounded-t-2xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Conditions d'Utilisation</h2>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 space-y-6 text-gray-700">
                <p className="text-sm text-gray-500">Dernière mise à jour : Décembre 2024</p>
                
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des Conditions</h3>
                  <p className="leading-relaxed">
                    Bienvenue sur GataCart. Nous vous informons qu'en accédant à nos services, 
                    vous consentez à nos conditions d'utilisation. Nous vous invitons à les lire attentivement.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Description du Service</h3>
                  <p className="leading-relaxed mb-2">
                    GataCart est une application mobile de gestion de courses qui offre :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Création et gestion de listes de courses</li>
                    <li>Optimisation du parcours en magasin</li>
                    <li>Suivi budgétaire en temps réel (Double Suivi)</li>
                    <li>Analyse des dépenses avec graphiques</li>
                    <li>Calcul du prix moyen historique (Duplication Intelligente)</li>
                    <li>Gestion multidevises</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Licence d'Utilisation</h3>
                  <p className="leading-relaxed">
                    Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour utiliser 
                    GataCart à des fins personnelles et non commerciales. Vous n'êtes pas autorisé à :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Copier, modifier ou distribuer l'application</li>
                    <li>Décompiler ou faire de l'ingénierie inverse</li>
                    <li>Utiliser l'application à des fins commerciales sans autorisation</li>
                    <li>Tenter d'accéder aux systèmes backend de manière non autorisée</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Compte Utilisateur</h3>
                  <p className="leading-relaxed mb-2">
                    Pour utiliser certaines fonctionnalités, vous devez créer un compte. Vous êtes responsable de :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintenir la confidentialité de vos identifiants</li>
                    <li>Toutes les activités effectuées sous votre compte</li>
                    <li>Notifier immédiatement tout accès non autorisé</li>
                    <li>Fournir des informations exactes et à jour</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Mode Invité</h3>
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                    <p className="leading-relaxed">
                      Le Mode Invité permet d'utiliser GataCart sans créer de compte. Les données sont stockées 
                      localement sur votre appareil. <strong>GataCart ne peut garantir la conservation de ces données</strong> 
                      en cas de désinstallation, changement d'appareil ou problème technique.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Utilisation Acceptable</h3>
                  <p className="mb-2">Vous acceptez de ne pas :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Utiliser l'application de manière illégale ou frauduleuse</li>
                    <li>Transmettre des virus ou codes malveillants</li>
                    <li>Tenter de surcharger ou perturber nos serveurs</li>
                    <li>Collecter des données d'autres utilisateurs</li>
                    <li>Utiliser des robots ou scripts automatisés non autorisés</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Propriété Intellectuelle</h3>
                  <p className="leading-relaxed">
                    Tous les droits de propriété intellectuelle relatifs à GataCart (code, design, logo, contenu) 
                    appartiennent à GataCart ou à ses concédants de licence. Le nom "GataCart" et le logo sont 
                    des marques déposées.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Disponibilité du Service</h3>
                  <p className="leading-relaxed">
                    GataCart est fourni "tel quel" et "selon disponibilité". Nous nous efforçons d'assurer la disponibilité 
                    continue du service, mais ne garantissons pas un accès ininterrompu. Nous nous réservons le droit de :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Effectuer des maintenances programmées</li>
                    <li>Suspendre temporairement le service pour des raisons techniques</li>
                    <li>Modifier ou interrompre des fonctionnalités avec préavis</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation de Responsabilité</h3>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="leading-relaxed">
                      GataCart est un outil d'aide à la gestion budgétaire. Nous ne sommes pas responsables de :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Erreurs dans les calculs budgétaires si les données saisies sont incorrectes</li>
                      <li>Pertes financières liées à l'utilisation de l'application</li>
                      <li>Perte de données en Mode Invité</li>
                      <li>Dommages indirects ou consécutifs</li>
                      <li>Problèmes causés par des appareils ou réseaux tiers</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Conformité RGPD/GDPR</h3>
                  <p className="leading-relaxed">
                    GataCart est conforme au Règlement Général sur la Protection des Données (RGPD). Vos droits 
                    concernant vos données personnelles sont détaillés dans notre Politique de Confidentialité. 
                    Nous nous engageons à protéger vos données et à respecter votre vie privée.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Résiliation</h3>
                  <p className="leading-relaxed mb-2">
                    Vous pouvez arrêter d'utiliser GataCart à tout moment en :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Désinstallant l'application</li>
                    <li>Supprimant votre compte depuis les paramètres</li>
                  </ul>
                  <p className="mt-4 leading-relaxed">
                    Nous pouvons suspendre ou résilier votre accès si vous violez ces conditions, avec notification 
                    préalable sauf en cas de violation grave.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications des Conditions</h3>
                  <p className="leading-relaxed">
                    Nous pouvons modifier ces conditions d'utilisation à tout moment. Les modifications importantes 
                    vous seront notifiées via l'application ou par email. L'utilisation continue de GataCart après 
                    les modifications constitue votre acceptation des nouvelles conditions.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">13. Droit Applicable</h3>
                  <p className="leading-relaxed">
                    Ces conditions sont régies par les lois françaises et européennes. Tout litige sera soumis à 
                    la juridiction exclusive des tribunaux français, sauf dispositions légales contraires.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h3>
                  <p className="leading-relaxed mb-2">
                    Pour toute question concernant ces conditions d'utilisation :
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Email :</strong> support@gatacart.com</p>
                    <p><strong>Support technique :</strong> help@gatacart.com</p>
                  </div>
                </section>

                <div className="border-t pt-6 mt-8">
                  <button 
                    onClick={closeModal}
                    className="w-full py-3 bg-gradient-to-r from-orange-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="text-sm">
                Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
            <button
              onClick={() => setShowCookieBanner(false)}
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
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
              <div className="relative w-12 h-12 flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="GataCart Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">GataCart</h1>
                <p className="text-xs text-gray-600">Le Grenier Organisé</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-600 transition-colors">Fonctionnalités</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-emerald-600 transition-colors">Comment ça marche</button>
              <button onClick={() => scrollToSection('legal')} className="text-gray-700 hover:text-amber-600 transition-colors">Légal</button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                Télécharger
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
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-gray-700 hover:text-orange-600 transition-colors">Fonctionnalités</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors">Comment ça marche</button>
              <button onClick={() => scrollToSection('legal')} className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors">Légal</button>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium">
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4 text-orange-600" />
              <span>Votre Assistant de Courses Intelligent</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Le <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Grenier Organisé</span> de vos Courses
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

      {/* Features Section */}
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

      {/* App Menus Section */}
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à organiser votre grenier de courses ?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les utilisateurs qui ont déjà transformé leur façon de faire leurs courses
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg shadow-lg inline-flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
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
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Politique de Confidentialité
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                GataCart traite vos prix réels payés et vos budgets de manière sécurisée. Pour la gestion multidevises, nos serveurs backend sécurisés communiquent avec des API de taux de change tierces sans exposer vos données personnelles identifiables.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Mode Invité :</strong> Les données du mode invité sont stockées localement sur votre appareil et ne sont pas garanties en cas de désinstallation ou de changement d'appareil.
              </p>
              <button onClick={openPrivacyPolicy} className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Lire la politique complète
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Conditions d'Utilisation
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                En utilisant GataCart, vous acceptez nos conditions d'utilisation. L'application est fournie "telle quelle" pour vous aider à gérer vos courses et votre budget de manière efficace.
              </p>
              <p className="text-gray-600 mb-4">
                Nous nous engageons à protéger vos données et à fournir un service de qualité conforme aux standards RGPD/GDPR.
              </p>
              <button onClick={openTerms} className="text-orange-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
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
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white text-sm text-left transition-colors">Accueil</button>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white text-sm text-left transition-colors">Fonctionnalités</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white text-sm text-left transition-colors">Comment ça marche</button>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-blue-400">Légal</h5>
              <div className="flex flex-col gap-2">
                <button onClick={openPrivacyPolicy} className="text-gray-400 hover:text-white text-sm text-left transition-colors">Politique de Confidentialité</button>
                <button onClick={openTerms} className="text-gray-400 hover:text-white text-sm text-left transition-colors">Conditions d'Utilisation</button>
                <button onClick={() => scrollToSection('legal')} className="text-gray-400 hover:text-white text-sm text-left transition-colors">Gestion des Cookies</button>
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
    </div>
  );
};

export default GataCartWebsite;
