// Configuration centralisée des liens de réseaux sociaux
// Modifiez ces URLs avec vos vrais comptes

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/gatacart",
  twitter: "https://twitter.com/gatacart",
  instagram: "https://instagram.com/gatacart",
  linkedin: "https://linkedin.com/company/gatacart",
  youtube: "https://youtube.com/@gatacart",
  tiktok: "https://tiktok.com/@gatacart", // Optionnel
  
  // Emails de contact
  email: "contact@gatacart.com",
  support: "support@gatacart.com",
  privacy: "privacy@gatacart.com",
  
  // Liens de téléchargement
  googlePlay: "https://play.google.com/store/apps/details?id=com.gatacart",
  appStore: "https://apps.apple.com/app/gatacart/id123456789", // Si iOS à l'avenir
  
  // Autres liens
  blog: "https://blog.gatacart.com",
  help: "https://help.gatacart.com",
  status: "https://status.gatacart.com",
};

// Méta-informations pour le partage
export const SHARE_INFO = {
  title: "GataCart - Le Grenier Organisé de vos Courses",
  description: "Planifiez sans stress, analysez finement, maîtrisez votre budget avec GataCart, l'application intelligente de gestion de courses.",
  hashtags: ["GataCart", "Courses", "Budget", "Économies", "Shopping"],
};

// Messages pré-formatés pour le partage
export const SHARE_MESSAGES = {
  facebook: `Découvrez GataCart, l'app qui transforme vos courses ! 🛒✨\n${SHARE_INFO.description}`,
  twitter: `Je viens de découvrir @GataCart, l'app parfaite pour gérer mes courses et mon budget ! 🛒📊 #GataCart #Budget`,
  whatsapp: `Salut ! Je viens de découvrir GataCart, une super app pour gérer tes courses et ton budget. Tu devrais l'essayer !`,
  email: {
    subject: "Découvre GataCart - L'app de gestion de courses",
    body: `Bonjour,\n\nJe voulais te recommander GataCart, une application qui m'aide à mieux gérer mes courses et mon budget.\n\n${SHARE_INFO.description}\n\nTu peux la télécharger ici : ${SOCIAL_LINKS.googlePlay}\n\nBonne journée !`
  }
};
