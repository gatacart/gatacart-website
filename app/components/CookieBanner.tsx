import React from 'react';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  show: boolean;
  onClose: () => void;
}

export default function CookieBanner({ show, onClose }: CookieBannerProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 flex-shrink-0 mt-1" />
          <p className="text-sm">
            Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
