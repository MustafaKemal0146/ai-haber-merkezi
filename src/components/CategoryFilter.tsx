import React from 'react';
import { getTranslation } from '../utils/translations';
import { Language } from '../types';

interface CategoryFilterProps {
  activeCategory: 'all' | 'local' | 'international';
  onCategoryChange: (category: 'all' | 'local' | 'international') => void;
  language: Language;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
  language
}) => {
  const categories = [
    { key: 'all', label: getTranslation('allCategories', language) },
    { key: 'local', label: getTranslation('localNews', language) },
    { key: 'international', label: getTranslation('internationalNews', language) }
  ] as const;

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onCategoryChange(key)}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeCategory === key
              ? key === 'local'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25'
                : key === 'international'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg shadow-gray-500/25'
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};