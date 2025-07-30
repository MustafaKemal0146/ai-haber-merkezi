import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  siteTitle: {
    tr: 'AI Haber Merkezi',
    en: 'AI News Hub'
  },
  siteSubtitle: {
    tr: 'Yapay zeka dünyasından son haberler',
    en: 'Latest news from the world of artificial intelligence'
  },
  localNews: {
    tr: 'Yerel Haberler',
    en: 'Local News'
  },
  internationalNews: {
    tr: 'Uluslararası Haberler',
    en: 'International News'
  },
  allCategories: {
    tr: 'Tüm Kategoriler',
    en: 'All Categories'
  },
  loading: {
    tr: 'Haberler yükleniyor...',
    en: 'Loading news...'
  },
  error: {
    tr: 'Haberler yüklenirken bir hata oluştu',
    en: 'Error loading news'
  },
  readMore: {
    tr: 'Devamını Oku',
    en: 'Read More'
  },
  lastUpdated: {
    tr: 'Son güncelleme',
    en: 'Last updated'
  },
  refresh: {
    tr: 'Yenile',
    en: 'Refresh'
  },
  sources: {
    tr: 'kaynak',
    en: 'sources'
  },
  articles: {
    tr: 'makale',
    en: 'articles'
  }
};

export const getTranslation = (key: string, language: 'tr' | 'en'): string => {
  return translations[key]?.[language] || key;
};