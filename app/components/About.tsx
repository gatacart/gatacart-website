import React from 'react';
import { Target, Heart, Lightbulb, Shield, Users, TrendingUp, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Simplicité",
      description: "Une application facile à utiliser, sans jargon technique"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Utilité",
      description: "Chaque fonctionnalité répond à un besoin réel"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Confiance",
      description: "Les données des utilisateurs sont traitées avec sérieux et responsabilité"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Autonomie",
      description: "Aider chacun à reprendre le contrôle de son budget"
    }
  ];

  const targetAudience = [
    "Aux particuliers qui veulent mieux gérer leurs dépenses",
    "Aux étudiants et jeunes actifs",
    "Aux couples et familles souhaitant suivre un budget commun"
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "@gatacart_app", url: "https://instagram.com/gatacart_app" },
    { icon: <Linkedin className="w-5 h-5" />, label: "gatacart", url: "https://linkedin.com/company/gatacart" },
    { icon: <Facebook className="w-5 h-5" />, label: "gatacart", url: "https://facebook.com/gatacart" },
    { icon: <Twitter className="w-5 h-5" />, label: "@gatacart", url: "https://twitter.com/gatacart" },
    { icon: <Youtube className="w-5 h-5" />, label: "gatacart", url: "https://youtube.com/@gatacart" }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
            <Heart className="w-4 h-4 text-orange-600" />
            <span className="text-gray-800">À propos de GataCart</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Organisez vos dépenses. <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Comprenez votre budget.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GataCart est née d'un constat simple : beaucoup savent combien ils gagnent, 
            mais peu savent où part réellement leur argent.
          </p>
        </div>

        {/* Notre Mission */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Notre Mission</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GataCart est une application conçue pour aider chacun à mieux organiser ses dépenses 
            et à comprendre son budget simplement, au quotidien. Notre objectif est de rendre la 
            gestion financière personnelle plus claire, accessible et utile, sans complexité inutile.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous croyons que tout le monde mérite de reprendre le contrôle de ses finances, 
            sans avoir besoin d'être expert en comptabilité.
          </p>
        </div>

        {/* Pourquoi GataCart */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi GataCart ?</h3>
            <p className="text-gray-700 leading-relaxed">
              Beaucoup de personnes savent combien elles gagnent, mais ont du mal à savoir 
              où part réellement leur argent. GataCart est née de ce constat : offrir un outil 
              pratique qui permet de noter ses dépenses, de les organiser et de les analyser 
              afin de prendre de meilleures décisions financières.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ce que fait GataCart</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📋 Organisation</h4>
                <p className="text-gray-700 text-sm">
                  Création de listes de courses, gestion par catégories, suivi clair et structuré.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📊 Analyse</h4>
                <p className="text-gray-700 text-sm">
                  Visualisation des dépenses, suivi du budget et compréhension des habitudes financières.
                </p>
              </div>
              <p className="text-sm text-gray-600 italic pt-2">
                Pensée pour un usage personnel, en couple ou en famille, avec une interface simple et intuitive.
              </p>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Un projet en évolution */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-3xl font-bold mb-4">Un Projet en Évolution</h3>
          <p className="text-lg leading-relaxed mb-4 text-blue-50">
            GataCart est un projet en développement continu. Les fonctionnalités évoluent en 
            fonction des besoins des utilisateurs, avec l'objectif constant d'améliorer 
            l'expérience et la pertinence des analyses proposées.
          </p>
          <p className="text-blue-100">
            Nous écoutons notre communauté et adaptons l'application pour répondre au mieux 
            à vos attentes.
          </p>
        </div>

        {/* À qui s'adresse GataCart */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">À qui s'adresse GataCart ?</h3>
          </div>
          <div className="space-y-3">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-gray-700">{audience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact et Réseaux Sociaux */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Restons Connectés</h3>
            <p className="text-gray-600">
              Pour toute question, suggestion ou collaboration, vous pouvez nous contacter 
              via nos réseaux sociaux officiels.
            </p>
          </div>

          {/* Social Links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Email Contact */}
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-gray-700 mb-2">Vous préférez nous écrire ?</p>
            <a 
              href="mailto:contact@gatacart.com" 
              className="text-lg font-semibold text-blue-600 hover:text-orange-600 transition-colors"
            >
              contact@gatacart.com
            </a>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            GataCart — Vos achats dans les règles de l'art
          </p>
        </div>
      </div>
    </section>
  );
              }
