import { NewsArticle, RSSSource } from '../types';

interface RSSItem {
  title?: string[];
  description?: string[];
  link?: string[];
  pubDate?: string[];
  'dc:date'?: string[];
  guid?: string[];
  category?: string[];
}

interface RSSFeed {
  rss?: {
    channel?: [{
      item?: RSSItem[];
    }];
  };
  feed?: {
    entry?: Array<{
      title?: string[];
      summary?: string[];
      link?: Array<{ $: { href: string } }>;
      published?: string[];
      updated?: string[];
      id?: string[];
    }>;
  };
}

export class RSSService {
  private static cache: Map<string, { data: NewsArticle[], timestamp: number }> = new Map();
  private static readonly CACHE_DURATION = 10 * 60 * 1000; // 10 dakika
  private static readonly CORS_PROXY = 'http://localhost:8080/';

  static async fetchFromSource(source: RSSSource): Promise<NewsArticle[]> {
    // Cache kontrolü
    const cached = this.cache.get(source.url);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      console.log(`Cache'den veri alındı: ${source.name}`);
      return cached.data;
    }

    try {
      console.log(`RSS feed çekiliyor: ${source.name} - ${source.url}`);
      
      // CORS proxy ile RSS feed'i çek
      const proxyUrl = `${this.CORS_PROXY}${source.url}`;
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/xml, text/xml, */*',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const xmlText = await response.text();
      
      if (!xmlText || xmlText.trim().length === 0) {
        throw new Error('RSS içeriği bulunamadı');
      }

      // XML'i parse et
      const articles = await this.parseRSSContent(xmlText, source);
      
      // Cache'e kaydet
      this.cache.set(source.url, {
        data: articles,
        timestamp: Date.now()
      });

      console.log(`${source.name} için ${articles.length} makale çekildi`);
      return articles;

    } catch (error) {
      console.error(`${source.name} RSS feed hatası:`, error);
      
      // Hata durumunda cache'deki eski veriyi döndür
      const cached = this.cache.get(source.url);
      if (cached) {
        console.log(`Hata nedeniyle eski cache verisi kullanılıyor: ${source.name}`);
        return cached.data;
      }
      
      return [];
    }
  }

  private static async parseRSSContent(xmlContent: string, source: RSSSource): Promise<NewsArticle[]> {
    try {
      // XML2JS kullanmak yerine basit regex parsing
      const articles: NewsArticle[] = [];
      
      // RSS item'larını bul
      const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi;
      const items = xmlContent.match(itemRegex) || [];

      for (const item of items.slice(0, 10)) { // İlk 10 makaleyi al
        try {
          const title = this.extractXMLContent(item, 'title');
          const description = this.extractXMLContent(item, 'description') || 
                            this.extractXMLContent(item, 'summary') ||
                            this.extractXMLContent(item, 'content:encoded');
          let link = this.extractXMLContent(item, 'link') || 
                      this.extractXMLContent(item, 'guid');
          
          // Port numarasını URL'den kaldır
          if (link) {
            link = link.replace(/:8080/g, '');
          }
          const pubDate = this.extractXMLContent(item, 'pubDate') || 
                         this.extractXMLContent(item, 'dc:date') ||
                         this.extractXMLContent(item, 'published');

          if (title && link) {
            // AI ile ilgili makaleleri filtrele
            if (this.isAIRelated(title, description || '')) {
              articles.push({
                title: this.cleanText(title),
                description: this.cleanText(description || '').substring(0, 300) + '...',
                link: link.trim(),
                pubDate: this.parseDate(pubDate || '').toISOString(),
                source: source.name,
                category: source.category
              });
            }
          }
        } catch (itemError) {
          console.warn(`Makale parse hatası:`, itemError);
          continue;
        }
      }

      return articles;
    } catch (error) {
      console.error('XML parse hatası:', error);
      return [];
    }
  }

  private static extractXMLContent(xml: string, tag: string): string {
    // CDATA içeriğini de handle et
    const cdataRegex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
    const cdataMatch = xml.match(cdataRegex);
    if (cdataMatch) {
      return cdataMatch[1].trim();
    }
    
    // Normal XML içeriği
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
    const match = xml.match(regex);
    return match ? match[1].trim() : '';
  }

  private static cleanText(text: string): string {
    return text
      .replace(/<[^>]*>/g, '') // HTML tag'lerini kaldır
      .replace(/&nbsp;/g, ' ') // Non-breaking space
      .replace(/&amp;/g, '&') // Ampersand
      .replace(/&lt;/g, '<') // Less than
      .replace(/&gt;/g, '>') // Greater than
      .replace(/&quot;/g, '"') // Quote
      .replace(/&#39;/g, "'") // Apostrophe
      .replace(/&[^;]+;/g, ' ') // Diğer HTML entity'leri
      .replace(/\s+/g, ' ') // Çoklu boşlukları tek boşluğa çevir
      .replace(/^\s*-\s*/, '') // Başındaki tire işaretini kaldır
      .trim();
  }

  private static isAIRelated(title: string, description: string): boolean {
    const aiKeywords = [
      // İngilizce
      'artificial intelligence', 'ai', 'machine learning', 'ml', 'deep learning',
      'neural network', 'chatgpt', 'gpt', 'openai', 'claude', 'gemini',
      'computer vision', 'nlp', 'natural language', 'robotics', 'automation',
      'algorithm', 'data science', 'big data', 'predictive', 'cognitive',
      
      // Türkçe
      'yapay zeka', 'makine öğrenmesi', 'derin öğrenme', 'sinir ağı',
      'algoritma', 'otomasyon', 'robotik', 'veri bilimi', 'büyük veri',
      'doğal dil işleme', 'bilgisayarlı görü', 'tahminleme'
    ];

    const content = (title + ' ' + description).toLowerCase();
    return aiKeywords.some(keyword => content.includes(keyword.toLowerCase()));
  }

  private static parseDate(dateString: string): Date {
    if (!dateString) return new Date();
    
    // Çeşitli tarih formatlarını parse et
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
  }

  static async fetchAllSources(sources: RSSSource[]): Promise<NewsArticle[]> {
    console.log(`${sources.length} RSS kaynağından veri çekiliyor...`);
    
    const promises = sources.map(async (source) => {
      try {
        return await this.fetchFromSource(source);
      } catch (error) {
        console.error(`${source.name} için hata:`, error);
        return [];
      }
    });
    
    const results = await Promise.allSettled(promises);
    
    const allArticles = results
      .filter((result): result is PromiseFulfilledResult<NewsArticle[]> => 
        result.status === 'fulfilled'
      )
      .flatMap(result => result.value)
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    console.log(`Toplam ${allArticles.length} makale çekildi`);
    return allArticles;
  }

  static clearCache(): void {
    console.log('Cache temizlendi');
    this.cache.clear();
  }

  static getCacheStats(): { size: number, sources: string[] } {
    return {
      size: this.cache.size,
      sources: Array.from(this.cache.keys())
    };
  }
}