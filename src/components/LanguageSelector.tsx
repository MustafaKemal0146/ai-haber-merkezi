import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
      <Globe size={18} className="text-white/80" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
      >
        <option value="tr" className="bg-gray-800 text-white">Türkçe</option>
        <option value="en" className="bg-gray-800 text-white">English</option>
      </select>
    </div>
  );
};