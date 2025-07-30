import React, { useState, useMemo } from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { Language } from './types';
import { useNews } from './hooks/useNews';
import { LanguageSelector } from './components/LanguageSelector';
import { CategoryFilter } from './components/CategoryFilter';
import { NewsCard } from './components/NewsCard';
import { StatsBar } from './components/StatsBar';
import { getTranslation } from './utils/translations';
import { RSS_SOURCES } from './data/rssSources';
import { RSSManagerComponent } from './components/RSSManager';

function App() {
  const [language, setLanguage] = useState<Language>('tr');
  const [activeCategory, setActiveCategory] = useState<'all' | 'local' | 'international'>('all');
  const [showRSSManager, setShowRSSManager] = useState(false);
  const [rssSources, setRssSources] = useState(RSS_SOURCES);
  const { articles, loading, error, lastUpdated, refreshNews, cacheStats } = useNews();

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return articles;
    return articles.filter(article => article.category === activeCategory);
  }, [articles, activeCategory]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{getTranslation('error', language)}</h2>
          <button
            onClick={refreshNews}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {getTranslation('refresh', language)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                <Brain size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white">
                  {getTranslation('siteTitle', language)}
                </h1>
                <p className="text-white/70 text-lg">
                  {getTranslation('siteSubtitle', language)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowRSSManager(!showRSSManager)}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all text-sm"
              >
                {language === 'tr' ? '⚙️ RSS Yönetimi' : '⚙️ RSS Manager'}
              </button>
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>
          </div>

          <StatsBar
            totalArticles={filteredArticles.length}
            totalSources={RSS_SOURCES.length}
            lastUpdated={lastUpdated}
            onRefresh={refreshNews}
            isLoading={loading}
            language={language}
            cacheStats={cacheStats}
          />

          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            language={language}
          />
        </header>

        {/* RSS Manager */}
        {showRSSManager && (
          <div className="container mx-auto px-6 mb-8">
            <RSSManagerComponent
              language={language}
              currentSources={rssSources}
              onSourcesUpdate={setRssSources}
            />
          </div>
        )}

        {/* Main Content */}
        <main className="container mx-auto px-6 pb-12">
          {loading && articles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                <Sparkles className="absolute inset-0 m-auto text-white animate-pulse" size={24} />
              </div>
              <p className="text-white/80 mt-4 text-lg">
                {getTranslation('loading', language)}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <NewsCard
                  key={`${article.link}-${index}`}
                  article={article}
                  language={language}
                />
              ))}
            </div>
          )}

          {!loading && filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {language === 'tr' ? 'Henüz haber yok' : 'No news yet'}
              </h3>
              <p className="text-white/70">
                {language === 'tr' 
                  ? 'Bu kategoride henüz haber bulunmuyor.' 
                  : 'No news found in this category.'}
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-white/60 text-sm">
              {language === 'tr' 
                ? '© 2025 AI Haber Merkezi. Yapay zeka haberlerinin güvenilir kaynağı.'
                : '© 2025 AI News Hub. Your trusted source for AI news.'}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;