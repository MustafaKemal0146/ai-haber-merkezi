export interface NewsArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: 'local' | 'international';
}

export interface RSSSource {
  name: string;
  url: string;
  category: 'local' | 'international';
  language: 'tr' | 'en';
}

export type Language = 'tr' | 'en';

export interface Translation {
  tr: string;
  en: string;
}