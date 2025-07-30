import React from 'react';
import { TrendingUp, Globe, RefreshCw, Database } from 'lucide-react';
import { getTranslation } from '../utils/translations';
import { Language } from '../types';

interface StatsBarProps {
  totalArticles: number;
  totalSources: number;
  lastUpdated: Date;
  onRefresh: () => void;
  isLoading: boolean;
  language: Language;
  cacheStats?: { size: number, sources: string[] };
}

export const StatsBar: React.FC<StatsBarProps> = ({
  totalArticles,
  totalSources,
  lastUpdated,
  onRefresh,
  isLoading,
  language,
  cacheStats
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
      <div className="flex items-center space-x-2 text-white/80">
        <TrendingUp size={20} className="text-green-400" />
        <span className="font-semibold">{totalArticles}</span>
        <span className="text-sm">{getTranslation('articles', language)}</span>
      </div>
      
      <div className="flex items-center space-x-2 text-white/80">
        <Globe size={20} className="text-blue-400" />
        <span className="font-semibold">{totalSources}</span>
        <span className="text-sm">{getTranslation('sources', language)}</span>
      </div>
      
      {cacheStats && (
        <div className="flex items-center space-x-2 text-white/80">
          <Database size={20} className="text-purple-400" />
          <span className="font-semibold">{cacheStats.size}</span>
          <span className="text-sm">cache</span>
        </div>
      )}
      
      <div className="flex items-center space-x-3 text-white/80">
        <span className="text-sm">
          {getTranslation('lastUpdated', language)}: {lastUpdated.toLocaleTimeString()}
        </span>
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="flex items-center space-x-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={16} className={`${isLoading ? 'animate-spin' : ''}`} />
          <span className="text-sm font-medium">{getTranslation('refresh', language)}</span>
        </button>
      </div>
    </div>
  );
};