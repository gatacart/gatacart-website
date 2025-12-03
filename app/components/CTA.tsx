'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CTA = () => {
  return (
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
  );
};

export default CTA;
