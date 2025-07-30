import { RSSSource } from '../types';

export class RSSManager {
  /**
   * Yeni RSS kaynağı ekle
   */
  static addSource(source: RSSSource): RSSSource[] {
    // Mevcut kaynakları al
    const currentSources = this.getAllSources();
    
    // Aynı URL'nin olup olmadığını kontrol et
    const exists = currentSources.some(s => s.url === source.url);
    if (exists) {
      throw new Error('Bu RSS kaynağı zaten mevcut!');
    }
    
    // Yeni kaynağı ekle
    const newSources = [...currentSources, source];
    
    console.log(`Yeni RSS kaynağı eklendi: ${source.name}`);
    return newSources;
  }
  
  /**
   * RSS kaynağını kaldır
   */
  static removeSource(url: string): RSSSource[] {
    const currentSources = this.getAllSources();
    const filteredSources = currentSources.filter(s => s.url !== url);
    
    console.log(`RSS kaynağı kaldırıldı: ${url}`);
    return filteredSources;
  }
  
  /**
   * Tüm kaynakları getir
   */
  static getAllSources(): RSSSource[] {
    // Bu fonksiyon dinamik olarak güncellenebilir
    // Şimdilik mevcut kaynakları döndürüyor
    return [];
  }
  
  /**
   * RSS feed'ini test et
   */
  static async testRSSFeed(url: string): Promise<boolean> {
    try {
      const proxyUrl = `http://localhost:8080/${url}`;
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/xml, text/xml, */*',
        },
      });
      
      if (!response.ok) {
        return false;
      }
      
      const xmlText = await response.text();
      
      // Basit XML kontrolü
      return xmlText.includes('<rss') || xmlText.includes('<feed') || xmlText.includes('<item');
    } catch (error) {
      console.error('RSS test hatası:', error);
      return false;
    }
  }
  
  /**
   * Popüler RSS kaynakları önerileri
   */
  static getPopularSources(): Partial<RSSSource>[] {
    return [
      // Türkçe Teknoloji
      { name: 'Dünya Gazetesi Teknoloji', url: 'https://www.dunya.com/rss/teknoloji.xml', category: 'local', language: 'tr' },
      { name: 'Milliyet Teknoloji', url: 'https://www.milliyet.com.tr/rss/rssNew/teknoloji.xml', category: 'local', language: 'tr' },
      { name: 'Sabah Teknoloji', url: 'https://www.sabah.com.tr/rss/teknoloji.xml', category: 'local', language: 'tr' },
      
      // Uluslararası AI/Tech
      { name: 'AI News', url: 'https://www.artificialintelligence-news.com/feed/', category: 'international', language: 'en' },
      { name: 'Machine Learning Mastery', url: 'https://machinelearningmastery.com/feed/', category: 'international', language: 'en' },
      { name: 'OpenAI Blog', url: 'https://openai.com/blog/rss.xml', category: 'international', language: 'en' },
      { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', category: 'international', language: 'en' },
      { name: 'DeepMind Blog', url: 'https://deepmind.com/blog/feed/basic/', category: 'international', language: 'en' },
      
      // Genel Teknoloji
      { name: 'TechRadar', url: 'https://www.techradar.com/rss', category: 'international', language: 'en' },
      { name: 'Engadget', url: 'https://www.engadget.com/rss.xml', category: 'international', language: 'en' },
      { name: 'Gizmodo', url: 'https://gizmodo.com/rss', category: 'international', language: 'en' },
    ];
  }
}