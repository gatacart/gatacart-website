import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'features' | 'technical' | 'security';
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Quand l'application sera-t-elle disponible ?",
      answer: "GataCart est actuellement en phase de finalisation. Nous préparons le lancement sur Google Play Store dans les prochaines semaines. Inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux pour être informé du lancement officiel !",
      category: 'general'
    },
    {
      question: "GataCart est-elle gratuite ?",
      answer: "Oui ! GataCart sera disponible gratuitement sur Google Play Store. Toutes les fonctionnalités principales (listes de courses, suivi budgétaire, optimisation du parcours, analyse des dépenses) seront accessibles sans frais.",
      category: 'general'
    },
    {
      question: "Comment fonctionne l'optimisation du parcours en magasin ?",
      answer: "Vous définissez une seule fois l'ordre des catégories selon l'agencement de votre magasin habituel. GataCart trie ensuite automatiquement tous vos articles dans cet ordre, vous permettant de suivre un parcours linéaire sans allers-retours inutiles. Vous gagnez du temps à chaque visite !",
      category: 'features'
    },
    {
      question: "Qu'est-ce que le 'Double Suivi' budgétaire ?",
      answer: "Le Double Suivi est une fonctionnalité unique de GataCart. Pendant vos achats, vous voyez en temps réel : 1) Votre budget estimé (basé sur vos prévisions), 2) Vos dépenses actuelles (ce que vous mettez réellement dans le panier). Cela vous permet d'ajuster vos achats en direct pour respecter votre budget.",
      category: 'features'
    },
    {
      question: "Comment fonctionne la Duplication Intelligente ?",
      answer: "GataCart conserve l'historique de tous vos achats avec les prix réels payés. Lorsque vous dupliquez une ancienne liste, l'application calcule automatiquement le prix moyen historique de chaque article pour vous donner une estimation budgétaire très précise. Plus vous utilisez l'app, plus les prévisions sont fiables !",
      category: 'features'
    },
    {
      question: "Puis-je utiliser GataCart sans créer de compte ?",
      answer: "Oui, GataCart propose un Mode Invité qui permet d'utiliser l'application sans inscription. Cependant, vos données sont stockées uniquement sur votre appareil et ne sont pas sauvegardées en cas de désinstallation ou de changement de téléphone. Pour une sauvegarde sécurisée et la synchronisation entre appareils, nous recommandons de créer un compte.",
      category: 'technical'
    },
    {
      question: "L'application fonctionne-t-elle hors ligne ?",
      answer: "Oui ! GataCart fonctionne entièrement hors ligne. Vous pouvez créer vos listes, faire vos courses et enregistrer vos achats sans connexion Internet. La synchronisation se fait automatiquement dès que vous êtes à nouveau en ligne (si vous avez un compte).",
      category: 'technical'
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. GataCart prend la sécurité de vos données très au sérieux. Toutes vos informations (listes, budgets, historique d'achats) sont chiffrées et stockées de manière sécurisée. Nous ne vendons jamais vos données et respectons strictement les normes RGPD/GDPR. Pour plus de détails, consultez notre Politique de Confidentialité.",
      category: 'security'
    },
    {
      question: "Comment fonctionne la gestion multidevises ?",
      answer: "Si vous voyagez ou faites vos courses dans différents pays, GataCart gère automatiquement plusieurs devises. Nos serveurs sécurisés se connectent à des API de taux de change pour les conversions, sans jamais exposer vos données personnelles. Vous pouvez définir une devise de référence pour l'analyse globale de votre budget.",
      category: 'features'
    },
    {
      question: "Puis-je partager mes listes avec ma famille ?",
      answer: "Cette fonctionnalité de partage collaboratif est en cours de développement et sera disponible dans une prochaine mise à jour après le lancement. Vous pourrez alors partager vos listes en temps réel avec les membres de votre foyer.",
      category: 'features'
    },
    {
      question: "GataCart sera-t-elle disponible sur iOS (iPhone) ?",
      answer: "Le lancement initial se fera sur Android via Google Play Store. Nous étudions actuellement la possibilité d'une version iOS en fonction de l'adoption et des retours des utilisateurs. Suivez-nous sur les réseaux sociaux pour être informé des évolutions !",
      category: 'technical'
    },
    {
      question: "Comment puis-je être notifié du lancement ?",
      answer: "Pour ne rien manquer du lancement de GataCart, vous pouvez : 1) Suivre nos réseaux sociaux (Facebook, Instagram, Twitter), 2) Nous envoyer un email à contact@gatacart.com avec l'objet 'Notification de lancement', 3) Ajouter ce site à vos favoris et le consulter régulièrement. Nous annoncerons la disponibilité de l'app dès qu'elle sera publiée sur le Play Store !",
      category: 'general'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { key: 'general', label: 'Général', color: 'text-blue-600' },
    { key: 'features', label: 'Fonctionnalités', color: 'text-orange-600' },
    { key: 'technical', label: 'Technique', color: 'text-emerald-600' },
    { key: 'security', label: 'Sécurité', color: 'text-amber-600' }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Foire Aux Questions</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vos Questions, <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Nos Réponses</span>
          </h3>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir sur GataCart
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <div key={cat.key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${cat.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' : cat.color === 'text-orange-600' ? 'from-orange-500 to-orange-600' : cat.color === 'text-emerald-600' ? 'from-emerald-500 to-emerald-600' : 'from-amber-500 to-amber-600'}`}></div>
              <span className="text-sm text-gray-600">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const categoryColor = categories.find(c => c.key === item.category)?.color || 'text-gray-600';
            
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all ${
                  isOpen 
                    ? 'border-blue-300 shadow-lg bg-gradient-to-r from-blue-50 to-orange-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-semibold ${categoryColor} uppercase tracking-wide`}>
                        {categories.find(c => c.key === item.category)?.label}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {item.question}
                    </h4>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'bg-blue-600 rotate-180' : 'bg-gray-100'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl border border-blue-100">
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            Vous avez d'autres questions ?
          </h4>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous aider ! N'hésitez pas à nous contacter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@gatacart.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all font-medium inline-flex items-center justify-center gap-2"
            >
              📧 Contactez-nous
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
            }
