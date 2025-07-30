import { useState, useEffect, useCallback } from 'react';
import { NewsArticle } from '../types';
import { RSSService } from '../services/rssService';
import { RSS_SOURCES } from '../data/rssSources';

export const useNews = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchNews = useCallback(async () => {
    try {
      console.log('Haberler çekiliyor...');
      setLoading(true);
      setError(null);
      
      const newsArticles = await RSSService.fetchAllSources(RSS_SOURCES);
      
      if (newsArticles.length === 0) {
        throw new Error('Hiçbir kaynaktan haber çekilemedi');
      }
      
      // 3 aydan eski haberleri filtrele
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      
      const filteredArticles = newsArticles.filter(article => {
        const articleDate = new Date(article.pubDate);
        return articleDate >= threeMonthsAgo;
      });
      
      console.log(`${newsArticles.length} haberden ${filteredArticles.length} tanesi 3 aydan yeni`);
      setArticles(filteredArticles);
      setLastUpdated(new Date());
      console.log(`Başarıyla ${filteredArticles.length} haber çekildi`);
      
    } catch (err) {
      console.error('Haber çekme hatası:', err);
      setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshNews = useCallback(() => {
    console.log('Haberler yenileniyor...');
    RSSService.clearCache();
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    fetchNews();
    
    // Her 15 dakikada bir otomatik yenile
    const interval = setInterval(() => {
      console.log('Otomatik yenileme başlatılıyor...');
      fetchNews();
    }, 15 * 60 * 1000);
    
    return () => {
      clearInterval(interval);
      console.log('Otomatik yenileme durduruldu');
    };
  }, [fetchNews]);

  return {
    articles,
    loading,
    error,
    lastUpdated,
    refreshNews,
    cacheStats: RSSService.getCacheStats()
  };
};