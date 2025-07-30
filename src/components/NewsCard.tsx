import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface NewsCardProps {
  article: NewsArticle;
  language: Language;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, language }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return language === 'tr' ? 'Az önce' : 'Just now';
    } else if (diffInHours < 24) {
      return language === 'tr' ? `${diffInHours} saat önce` : `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return language === 'tr' ? `${diffInDays} gün önce` : `${diffInDays}d ago`;
    }
  };

  return (
    <div className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl ${
      article.category === 'local' 
        ? 'hover:shadow-orange-500/20 border-l-4 border-l-orange-500/50' 
        : 'hover:shadow-blue-500/20 border-l-4 border-l-blue-500/50'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          article.category === 'local'
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
        }`}>
          {article.source}
        </div>
        <div className="flex items-center text-white/60 text-sm">
          <Clock size={14} className="mr-1" />
          {formatDate(article.pubDate)}
        </div>
      </div>

      <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
        {article.title}
      </h3>

      <p className="text-white/80 text-sm mb-4 line-clamp-3 leading-relaxed">
        {article.description}
      </p>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold text-sm transition-colors group"
      >
        {getTranslation('readMore', language)}
        <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};