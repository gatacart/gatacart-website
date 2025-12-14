import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Share2, X } from 'lucide-react';

export default function SocialBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après avoir scrollé de 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: "https://facebook.com/gatacart", 
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700" 
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      url: "https://twitter.com/gatacart", 
      label: "Twitter/X",
      color: "bg-sky-500 hover:bg-sky-600" 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: "https://instagram.com/gatacart_app", 
      label: "Instagram",
      color: "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: "https://linkedin.com/company/gatacart", 
      label: "LinkedIn",
      color: "bg-blue-700 hover:bg-blue-800" 
    },
  
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'GataCart - Le Grenier Organisé',
          text: 'Découvrez GataCart, l\'app qui transforme vos courses !',
          url: window.location.href
        });
      } catch (err) {
        console.log('Partage annulé');
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <>
      {/* Floating Social Bar - Desktop */}
      <div 
        className={`hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl p-3 space-y-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-lg`}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
          
          <div className="h-px bg-gray-200 my-2"></div>
          
          <button
            onClick={handleShare}
            className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-lg"
            aria-label="Partager"
            title="Partager"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Share Menu Popup */}
      {showShareMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Partager GataCart</h3>
              <button 
                onClick={() => setShowShareMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={`${social.url}?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white`}>
                    {social.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-700">{social.label}</span>
                </a>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <label className="text-xs font-semibold text-gray-600 mb-2 block">Lien à copier</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={window.location.href}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Lien copié !');
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                >
                  Copier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Social Bar - Bottom */}
      <div 
        className={`lg:hidden fixed bottom-20 right-4 z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <button
          onClick={handleShare}
          className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Partager sur les réseaux sociaux"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </>
  );
                  }
