# 🤖 AI Haber Merkezi - Yapay Zeka Haber Toplayıcısı

**🚀 Türkiye ve dünyadan AI haberleri tek platformda:** [Hemen başlayın](#-kurulum)

<div align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=00FF88&center=true&vCenter=true&width=1000&lines=AI+Haber+Merkezi+-+Yapay+Zeka+Haberleri;Türkiye+ve+Dünya+AI+Haberleri;Gerçek+Zamanlı+RSS+Toplayıcısı;Modern+ve+Responsive+Tasarım" alt="Typing SVG" />
</div>

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![RSS](https://img.shields.io/badge/RSS-Feed_Parser-FF6600?style=for-the-badge&logo=rss&logoColor=white)](https://en.wikipedia.org/wiki/RSS)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Turkish](https://img.shields.io/badge/Language-Türkçe%2FEnglish-red?style=for-the-badge&logo=google-translate&logoColor=white)](https://tr.wikipedia.org/wiki/T%C3%BCrk%C3%A7e)

</div>

## 📸 Ekran Görüntüleri

<div align="center">

### 🏠 Ana Sayfa
<img src="https://github.com/MustafaKemal0146/ai-haber-merkezi/blob/main/img/main.png?raw=true" alt="AI Haber Merkezi Ana Sayfa" width="800"/>
<br/>
<em>Modern ve responsive tasarım ile AI haberlerini takip edin</em>

<br/><br/>

### ⚙️ RSS Yönetimi
<img src="https://github.com/MustafaKemal0146/ai-haber-merkezi/blob/main/img/rss.png?raw=true" alt="RSS Kaynak Yönetimi" width="800"/>
<br/>
<em>Web arayüzünden kolayca RSS kaynakları ekleyin ve yönetin</em>

</div>

> **🔥 Akıllı Haber Toplayıcısı:** AI Haber Merkezi, Türkiye ve dünyadan yapay zeka haberlerini otomatik olarak toplayan, filtreleyen ve modern bir arayüzde sunan gelişmiş bir web uygulamasıdır. Çift dil desteği ve kategorik filtreleme ile mükemmel kullanıcı deneyimi sunar.

## ✨ Özellikler

<div align="center">
<img src="https://github.com/MustafaKemal0146/ai-haber-merkezi/blob/main/img/main.png?raw=true" alt="AI Haber Merkezi Özellikleri" width="600"/>
</div>

- 🌐 **Çift Dil Desteği**: Türkçe ve İngilizce tam lokalizasyon
- � **AGerçek Zamanlı RSS**: 20+ güvenilir kaynaktan otomatik haber çekme
- � **Akıellı Filtreleme**: AI ile ilgili haberleri otomatik tespit
- �  **Responsive Tasarım**: Mobil, tablet ve desktop uyumlu
- 🔄 **Otomatik Güncelleme**: 15 dakikada bir otomatik yenileme
- 💾 **Akıllı Cache**: 10 dakikalık cache sistemi ile hızlı yükleme
- 🎨 **Modern UI/UX**: Gradient tasarım ve micro-interactions
- 📊 **Canlı İstatistikler**: Makale sayısı, kaynak sayısı ve cache durumu
- 🏷️ **Kategori Filtreleme**: Yerel ve uluslararası haber ayrımı
- ⚡ **Yüksek Performans**: Client-side rendering ile hızlı deneyim
- ⚙️ **RSS Manager**: Web arayüzünden RSS kaynak yönetimi

## 🛠️ Teknolojiler

- **Frontend Framework**: React 18.3.1 + TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1 (Utility-first CSS)
- **Build Tool**: Vite 5.4.2 (Lightning fast HMR)
- **Icons**: Lucide React (Beautiful SVG icons)
- **RSS Parsing**: Custom XML parser with CORS proxy
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Caching**: In-memory cache with TTL
- **Responsive**: Mobile-first responsive design
- **Typography**: Inter font family (Google Fonts)

## 🔧 Sistem Gereksinimleri

| Bileşen | Minimum | Önerilen |
|---------|---------|----------|
| **Node.js** | 16.0+ | 18.0+ |
| **NPM** | 7.0+ | 9.0+ |
| **RAM** | 2GB | 4GB+ |
| **Disk** | 500MB | 1GB+ |
| **Browser** | Chrome 90+ | Chrome/Firefox/Safari Latest |

## 🚀 Kurulum

### 🖥️ Yerel Geliştirme (Development)

1. **Projeyi klonlayın**
```bash
git clone https://github.com/mustafakemal0146/ai-haber-merkezi.git
cd ai-haber-merkezi
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **İki terminal açın ve şu komutları çalıştırın:**

**Terminal 1 (CORS Proxy):**
```bash
npm run cors-proxy
```

**Terminal 2 (Web Sitesi):**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173
```

### 🍓 Raspberry Pi 5'te Kurulum (Önerilen - 24/7 Çalışma)

Kendi sunucunuzda barındırmak için Raspberry Pi 5 ideal bir çözümdür:

#### ✨ Raspberry Pi Avantajları:
- 🔄 **24/7 Çalışır** - Sürekli haber toplar
- ⚡ **Düşük Güç** - Ayda ~5-10 TL elektrik
- 🏠 **Kendi Sunucunuz** - Dışarıya bağımlı değil
- 📱 **Yerel Ağ Erişimi** - Evdeki tüm cihazlardan erişim
- 🔧 **Genişletilebilir** - Diğer projelerle entegre

#### 🛠️ Otomatik Kurulum:

1. **Projeyi Raspberry Pi'ye aktarın**
```bash
scp -r . pi@raspberry-pi-ip:/home/pi/ai-haber-merkezi/
```

2. **Otomatik kurulum scriptini çalıştırın**
```bash
cd /home/pi/ai-haber-merkezi
chmod +x setup-raspberry-pi.sh
./setup-raspberry-pi.sh
```

3. **Performans optimizasyonu (opsiyonel)**
```bash
chmod +x raspberry-pi-optimize.sh
./raspberry-pi-optimize.sh
sudo reboot
```

4. **Erişim**
```
http://RASPBERRY-PI-IP-ADRESI
```

#### 📊 Raspberry Pi Yönetimi:
```bash
# Sistem durumunu kontrol et
~/monitor.sh

# PM2 servis durumu
pm2 status

# Logları görüntüle
pm2 logs

# Servisleri yeniden başlat
pm2 restart all
```

### ☁️ Cloud Deployment (Vercel/Netlify)

Cloud platformlarda deploy etmek için Vercel serverless function kullanılır:

1. **Vercel'e deploy**
```bash
npm install -g vercel
vercel --prod
```

2. **Environment Variables ayarlayın:**
- `CORS_PROXY_URL`: Vercel function URL'si

### 🔄 Production Build (Manuel)

```bash
# Production build oluştur
npm run build

# Build'i önizle
npm run preview

# PM2 ile production'da çalıştır
pm2 start ecosystem.config.js
```

### ⚠️ Önemli Notlar
- **CORS Proxy gereklidir** (RSS feed'ler için)
- **Raspberry Pi kurulumu önerilir** (24/7 çalışma için)
- **Modern tarayıcı** gereklidir (ES6+ desteği)
- **Node.js 16+** gereklidir

## 🎮 Kullanım

### 🌐 Dil Değiştirme

Sağ üst köşedeki dil seçicisinden Türkçe/İngilizce arası geçiş yapabilirsiniz:

```
🌐 Türkçe ↔ English
```

### 📂 Kategori Filtreleme

Ana sayfada üç kategori arasında seçim yapabilirsiniz:

- **🏠 Tüm Kategoriler**: Tüm haberler
- **🇹🇷 Yerel Haberler**: Türk kaynaklarından haberler
- **🌍 Uluslararası Haberler**: Yabancı kaynaklarından haberler

### 🔄 Manuel Yenileme

İstatistik çubuğundaki "Yenile" butonuna tıklayarak haberleri manuel olarak güncelleyebilirsiniz.

### 📊 İstatistik Görüntüleme

Üst kısımda şu bilgileri görebilirsiniz:
- 📰 Toplam makale sayısı
- 🌐 Toplam kaynak sayısı
- 💾 Cache durumu
- 🕒 Son güncelleme zamanı

## 📰 Haber Kaynakları

### 🇹🇷 Türk Kaynakları (8 Kaynak)

| Kaynak | URL | Kategori |
|--------|-----|----------|
| **Webrazzi** | webrazzi.com/feed/ | Teknoloji |
| **ShiftDelete.Net** | shiftdelete.net/feed | Teknoloji |
| **Donanım Haber** | donanimhaber.com/rss.xml | Donanım |
| **Teknoloji.org** | teknoloji.org/feed/ | Teknoloji |
| **Chip Online** | chip.com.tr/rss/haberler.xml | Teknoloji |
| **Log** | log.com.tr/feed/ | Teknoloji |
| **Tamindir** | tamindir.com/rss/ | Yazılım |
| **Tekno Blog** | teknoblog.com/feed/ | Teknoloji |

### 🌍 Uluslararası Kaynakları (12 Kaynak)

| Kaynak | URL | Kategori |
|--------|-----|----------|
| **TechCrunch AI** | techcrunch.com/category/artificial-intelligence/feed/ | AI News |
| **MIT Technology Review** | technologyreview.com/feed/ | Research |
| **VentureBeat AI** | venturebeat.com/ai/feed/ | Business |
| **AI News** | artificialintelligence-news.com/feed/ | AI News |
| **The Verge** | theverge.com/rss/index.xml | Technology |
| **Wired AI** | wired.com/feed/tag/ai/latest/rss | AI News |
| **Ars Technica** | feeds.arstechnica.com/arstechnica/index | Technology |
| **IEEE Spectrum** | spectrum.ieee.org/rss/fulltext | Research |
| **Next Big Future** | nextbigfuture.com/feed | Future Tech |
| **AI Research** | marktechpost.com/feed/ | Research |
| **Analytics Vidhya** | analyticsvidhya.com/feed/ | Data Science |
| **Towards Data Science** | towardsdatascience.com/feed | Data Science |

## 🧠 AI Filtreleme Algoritması

### 🎯 Anahtar Kelime Filtreleme

Sistem şu anahtar kelimeleri arayarak AI ile ilgili haberleri filtreler:

#### 🇬🇧 İngilizce Anahtar Kelimeler
```javascript
const englishKeywords = [
  'artificial intelligence', 'ai', 'machine learning', 'ml', 
  'deep learning', 'neural network', 'chatgpt', 'gpt', 
  'openai', 'claude', 'gemini', 'computer vision', 
  'nlp', 'natural language', 'robotics', 'automation',
  'algorithm', 'data science', 'big data', 'predictive', 'cognitive'
];
```

#### 🇹🇷 Türkçe Anahtar Kelimeler
```javascript
const turkishKeywords = [
  'yapay zeka', 'makine öğrenmesi', 'derin öğrenme', 
  'sinir ağı', 'algoritma', 'otomasyon', 'robotik', 
  'veri bilimi', 'büyük veri', 'doğal dil işleme', 
  'bilgisayarlı görü', 'tahminleme'
];
```

### 📊 Filtreleme Süreci

1. **RSS Parse**: XML içeriği parse edilir
2. **Metin Temizleme**: HTML tag'leri ve entity'ler temizlenir
3. **Anahtar Kelime Tarama**: Başlık ve açıklama taranır
4. **Tarih Filtreleme**: 3 aydan eski haberler elenir
5. **Sıralama**: Yayın tarihine göre sıralanır

## ⚙️ RSS Kaynak Yönetimi

<div align="center">
<img src="https://github.com/MustafaKemal0146/ai-haber-merkezi/blob/main/img/rss.png?raw=true" alt="RSS Kaynak Yönetimi Arayüzü" width="700"/>
<br/>
<em>Sezgisel web arayüzü ile RSS kaynaklarınızı kolayca yönetin</em>
</div>

### 🔧 RSS Manager Özellikleri:
- ➕ **Kolay Ekleme**: Form ile yeni RSS kaynakları ekleyin
- 🧪 **Test Etme**: RSS feed'lerini eklemeden önce test edin
- 📊 **Popüler Öneriler**: Hazır RSS kaynak önerileri
- 🗑️ **Kolay Kaldırma**: Tek tıkla kaynak kaldırma
- 🏷️ **Kategori Seçimi**: Yerel/Uluslararası kategori belirleme
- 🌐 **Dil Desteği**: Türkçe/İngilizce kaynak dil seçimi

### 📝 Yeni RSS Kaynağı Ekleme:
1. **RSS Yönetimi** butonuna tıklayın (sağ üst köşe)
2. **Kaynak Ekle** butonuna tıklayın
3. Kaynak adı ve URL'sini girin
4. **Test Et** ile RSS'in geçerliliğini kontrol edin
5. Kategori ve dil seçin
6. **Ekle** butonuna tıklayın

## 🔧 Manuel Konfigürasyon

### ⚙️ Kod ile RSS Kaynakları Ekleme

`src/data/rssSources.ts` dosyasında yeni kaynaklar ekleyebilirsiniz:

```typescript
{
  name: 'Yeni Kaynak',
  url: 'https://example.com/feed.xml',
  category: 'local', // veya 'international'
  language: 'tr' // veya 'en'
}
```

### 🕒 Cache Ayarları

`src/services/rssService.ts` dosyasında cache süresini değiştirebilirsiniz:

```typescript
private static readonly CACHE_DURATION = 10 * 60 * 1000; // 10 dakika
```

### 📅 Tarih Filtreleme

`src/hooks/useNews.ts` dosyasında tarih filtresini ayarlayabilirsiniz:

```typescript
const threeMonthsAgo = new Date();
threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3); // 3 ay
```

### 🎨 Tema Renkleri

`tailwind.config.js` dosyasında renk paletini özelleştirebilirsiniz:

```javascript
theme: {
  extend: {
    colors: {
      'ai-blue': '#3B82F6',
      'ai-purple': '#8B5CF6',
      'ai-orange': '#F97316'
    }
  }
}
```

## 📁 Proje Yapısı

```
ai-haber-merkezi/
├── public/
│   ├── vite.svg                 # Vite logosu
│   └── index.html              # Ana HTML template
├── src/
│   ├── components/             # React bileşenleri
│   │   ├── CategoryFilter.tsx  # Kategori filtreleme
│   │   ├── LanguageSelector.tsx # Dil seçici
│   │   ├── NewsCard.tsx        # Haber kartı
│   │   └── StatsBar.tsx        # İstatistik çubuğu
│   ├── data/
│   │   └── rssSources.ts       # RSS kaynak listesi
│   ├── hooks/
│   │   └── useNews.ts          # Haber yönetimi hook'u
│   ├── services/
│   │   └── rssService.ts       # RSS parsing servisi
│   ├── types/
│   │   └── index.ts            # TypeScript tip tanımları
│   ├── utils/
│   │   └── translations.ts     # Çeviri sistemi
│   ├── App.tsx                 # Ana uygulama bileşeni
│   ├── main.tsx               # React DOM render
│   └── index.css              # Tailwind CSS imports
├── package.json               # NPM bağımlılıkları
├── tsconfig.json             # TypeScript konfigürasyonu
├── tailwind.config.js        # Tailwind CSS ayarları
├── vite.config.ts           # Vite build ayarları
└── README.md                # Bu dokümantasyon
```

## 🚨 Sorun Giderme

### 🍓 Raspberry Pi Sorunları

#### CORS Proxy Çalışmıyor
```bash
# PM2 durumunu kontrol et
pm2 status

# CORS proxy'yi yeniden başlat
pm2 restart ai-haber-cors-proxy

# Port kontrolü
sudo netstat -tlnp | grep :8080
```

#### Yüksek CPU/RAM Kullanımı
```bash
# Sistem durumunu kontrol et
~/monitor.sh

# PM2 memory limit ayarla
pm2 restart ecosystem.config.js --max-memory-restart 500M
```

#### Boot'ta Başlamıyor
```bash
# Systemd service durumu
sudo systemctl status ai-haber

# Service'i yeniden aktif et
sudo systemctl enable ai-haber
sudo systemctl start ai-haber
```

### 🖥️ Geliştirme Sorunları

#### CORS Hataları
```bash
# CORS proxy'nin çalıştığından emin olun
npm run cors-proxy

# Port 8080'in boş olduğunu kontrol edin (Windows)
netstat -ano | findstr :8080

# Port 8080'in boş olduğunu kontrol edin (Linux/Mac)
lsof -i :8080
```

#### Bağımlılık Sorunları
```bash
# Node modules'ü temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install

# Cache'i temizle
npm cache clean --force
```

#### RSS Feed Sorunları
```bash
# RSS feed'in erişilebilir olduğunu test edin
curl -I https://example.com/feed.xml

# CORS proxy üzerinden test edin
curl -I http://localhost:8080/https://example.com/feed.xml
```

### 🔧 Build Sorunları
```bash
# TypeScript hatalarını kontrol edin
npx tsc --noEmit

# Linting hatalarını düzeltin
npx eslint src --fix
```

### 📱 Responsive Sorunları
- ✅ Tarayıcı geliştirici araçlarını kullanın
- ✅ Farklı cihaz boyutlarını test edin
- ✅ Tailwind breakpoint'lerini kontrol edin

### 🧪 Debug Modu

Geliştirme sırasında console log'larını aktif etmek için:

```javascript
// src/services/rssService.ts içinde
const DEBUG = true; // false yerine true yapın
```

### 🍓 Raspberry Pi Performans İpuçları

#### Bellek Optimizasyonu
```bash
# Swap kullanımını kontrol et
free -h

# Gereksiz servisleri durdur
sudo systemctl disable bluetooth
sudo systemctl disable cups
```

#### Sıcaklık Kontrolü
```bash
# CPU sıcaklığını kontrol et
vcgencmd measure_temp

# Eğer 70°C üzerindeyse fan ekleyin veya case değiştirin
```

#### Log Yönetimi
```bash
# PM2 loglarını temizle
pm2 flush

# Sistem loglarını temizle
sudo journalctl --vacuum-time=7d
```

## 🎯 Gelecek Planları

### � v1.*1.0 - Yakında
- [ ] � **Gealişmiş Arama**: Başlık ve içerik araması
- [ ] 🌙 **Dark Mode**: Karanlık tema desteği
- [ ] 📱 **PWA Desteği**: Offline çalışma ve app-like deneyim
- [ ] ⚙️ **RSS Manager UI**: Web arayüzünden RSS kaynak yönetimi

### 🎨 v1.2.0 - UI/UX İyileştirmeleri
- [ ] � **Graafik Dashboard**: Haber trendleri ve istatistikler
- [ ] 🎨 **Tema Seçenekleri**: Çoklu renk temaları
- [ ] 📱 **Responsive İyileştirmeler**: Daha iyi mobil deneyim
- [ ] � **Soocial Sharing**: Sosyal medya paylaşım butonları

### 🤖 v2.0.0 - AI Özellikleri
- [ ] 🤖 **AI Özetleme**: GPT ile haber özetleme
- [ ] 🏷️ **Akıllı Etiketleme**: Otomatik kategori belirleme
- [ ] 📈 **Trend Analizi**: AI ile haber trend analizi
- [ ] 🔔 **Akıllı Bildirimler**: Önemli haberlerde otomatik uyarı

### 📱 v2.1.0 - Mobil ve Entegrasyon
- [ ] 📱 **Mobile App**: React Native ile mobil uygulama
- [ ] 📧 **Email Newsletter**: Günlük/haftalık haber özeti
- [ ] 📈 **Analytics**: Google Analytics entegrasyonu
- [ ] 🔐 **User Accounts**: Kişiselleştirilmiş haber akışı

### 🍓 Raspberry Pi Özel Özellikleri
- [ ] 🏠 **IoT Entegrasyonu**: Diğer Raspberry Pi projelerle bağlantı
- [ ] 📺 **Kiosk Mode**: TV'de tam ekran haber gösterimi
- [ ] 🔊 **Sesli Haber**: Text-to-speech ile haber okuma
- [ ] 📡 **API Endpoint**: Diğer uygulamalar için REST API
- [ ] 🌐 **Mesh Network**: Birden fazla Raspberry Pi ile dağıtık sistem

## 🤝 Katkıda Bulunma

### 🔧 Geliştirme Süreci
1. Bu projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik: AI haber filtreleme'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

### 📝 Katkı Alanları
- **🐛 Bug Raporları**: Hata bildirimleri ve düzeltmeler
- **💡 Özellik Önerileri**: Yeni fonksiyon fikirleri
- **📚 Dokümantasyon**: README ve kod yorumları
- **🌐 Çeviriler**: Diğer dillere çeviri desteği
- **🎨 UI/UX**: Tasarım iyileştirmeleri
- **⚡ Performans**: Optimizasyon önerileri
- **📰 RSS Kaynakları**: Yeni haber kaynağı önerileri
- **🧪 Test Yazma**: Unit ve integration testleri

### 📋 Katkı Kuralları
- **Code Style**: ESLint ve Prettier kurallarına uyun
- **Commit Messages**: Açıklayıcı commit mesajları yazın
- **Documentation**: Yeni özellikler için dokümantasyon ekleyin
- **Testing**: Mümkünse test yazın
- **Responsive**: Mobil uyumluluğu kontrol edin

## 📚 Kaynaklar

### 🔗 Teknik Dokümantasyon
- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)

### 🛠️ Geliştirme Araçları
- [Visual Studio Code](https://code.visualstudio.com/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)

### 🎨 Tasarım Kaynakları
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Pexels Stock Photos](https://www.pexels.com/)
- [Gradient Generator](https://cssgradient.io/)

## 📊 Performans Metrikleri

### 🖥️ Yerel Geliştirme
- **İlk Yükleme**: ~2-3 saniye
- **Cache'li Yükleme**: ~0.5-1 saniye
- **RSS Güncelleme**: ~3-5 saniye
- **Kategori Değişimi**: Anında

### 🍓 Raspberry Pi 5 Performansı
- **İlk Yükleme**: ~1-2 saniye (SSD ile)
- **RSS Güncelleme**: ~2-4 saniye
- **Bellek Kullanımı**: ~150-200MB
- **CPU Kullanımı**: ~5-15% (idle durumda)
- **Güç Tüketimi**: ~3-5W (24/7 çalışma)
- **Aylık Elektrik**: ~5-10 TL

### 📱 Responsive Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Küçük tablet */
md: 768px   /* Tablet */
lg: 1024px  /* Küçük desktop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Büyük desktop */
```

### 🎯 Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ❌ Internet Explorer (Desteklenmiyor)

### 🍓 Raspberry Pi Sistem Gereksinimleri
- **Model**: Raspberry Pi 4/5 (önerilen: Pi 5)
- **RAM**: Minimum 4GB (önerilen: 8GB)
- **Depolama**: Minimum 32GB microSD (önerilen: SSD)
- **İnternet**: Stabil internet bağlantısı
- **Güç**: 5V 3A adaptör (Pi 5 için)

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

```
MIT License - Özgürce kullanın, değiştirin, dağıtın
```

## 👨‍💻 Geliştirici

<div align="center">
  <img src="https://github.com/yourusername.png" width="100" style="border-radius: 50%;" alt="Developer Avatar"/>

**AI Haber Merkezi Geliştirici**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yourusername/)
[![Website](https://img.shields.io/badge/Website-00FF88?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourwebsite.com/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)

</div>

## ⭐ Destek

Eğer AI Haber Merkezi size faydalı olduysa, lütfen ⭐ vererek destekleyin!

### 📊 Proje İstatistikleri

<div align="center">
<img src="https://komarev.com/ghpvc/?username=ai-haber-merkezi&color=00ff88&style=for-the-badge&label=Project+Views" />
</div>

### 🏆 Başarılar
- 🎯 **20+ RSS Kaynağı** entegrasyonu
- 🌐 **Çift Dil Desteği** (TR/EN)
- 📱 **%100 Responsive** tasarım
- ⚡ **Sub-second** cache performansı
- 🤖 **AI Filtreleme** algoritması

---

<div align="center">

**Made with 🤖 for AI news enthusiasts**

*"Yapay zeka haberlerinin güvenilir kaynağı"*

</div>

<div align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&duration=4000&pause=1000&color=00FF88&center=true&vCenter=true&width=600&lines=Thank+you+for+using+AI+Haber+Merkezi;Stay+updated+with+latest+AI+news;Every+innovation+starts+with+information" alt="Footer Typing SVG" />
</div>

## 🔥 Son Güncellemeler

### v1.0.0 (2025-07-30) - İlk Stabil Sürüm
- ✅ **20+ RSS Kaynağı**: Türk ve uluslararası AI haber kaynakları
- ✅ **Çift Dil Desteği**: Türkçe ve İngilizce tam lokalizasyon
- ✅ **Responsive Tasarım**: Mobil, tablet ve desktop uyumlu
- ✅ **AI Haber Filtreleme**: Akıllı anahtar kelime filtreleme
- ✅ **Cache Sistemi**: 10 dakikalık akıllı cache
- ✅ **Otomatik Güncelleme**: 15 dakikada bir otomatik yenileme
- ✅ **RSS Manager**: Web arayüzünden RSS kaynak yönetimi
- ✅ **Raspberry Pi Desteği**: 24/7 çalışma için optimize edildi

### v1.0.1 (2025-07-30) - Hata Düzeltmeleri
- � **URL2 Port Sorunu**: Link'lerdeki port numarası kaldırıldı
- �  **RSS Parsing**: CDATA ve HTML entity desteği iyileştirildi
- � **vText Temizleme**: Başlık ve açıklamalar daha temiz
- ⚡ **Performans**: Raspberry Pi optimizasyonları

### Yakında Gelecek Özellikler
- 🔄 **v1.1.0**: Dark mode ve PWA desteği
- 🔄 **v1.2.0**: Gelişmiş arama ve filtreleme
- 🔄 **v1.3.0**: Social sharing ve analytics
- 🔄 **v2.0.0**: AI özetleme ve kişiselleştirme

### 🍓 Raspberry Pi Özel Güncellemeler
- ✅ **Otomatik Kurulum**: Tek script ile tam kurulum
- ✅ **PM2 Entegrasyonu**: Process management ve auto-restart
- ✅ **Nginx Reverse Proxy**: Profesyonel web server kurulumu
- ✅ **Systemd Service**: Boot'ta otomatik başlatma
- ✅ **Performans Monitoring**: Sistem durumu takibi
- ✅ **Log Rotation**: Otomatik log temizleme

---

<div align="center">
  <h3>🚀 Hemen Başlayın!</h3>
  <p>
    <a href="#-kurulum">
      <img src="https://img.shields.io/badge/Kurulum_Rehberi-00FF88?style=for-the-badge&logo=rocket&logoColor=white" alt="Kurulum Rehberi"/>
    </a>
    <a href="#-raspberry-pi-5te-kurulum-önerilen---247-çalışma">
      <img src="https://img.shields.io/badge/🍓_Raspberry_Pi-FF6B6B?style=for-the-badge&logo=raspberry-pi&logoColor=white" alt="Raspberry Pi Kurulumu"/>
    </a>
    <a href="#-kullanım">
      <img src="https://img.shields.io/badge/Kullanım_Kılavuzu-3B82F6?style=for-the-badge&logo=book&logoColor=white" alt="Kullanım Kılavuzu"/>
    </a>
    <a href="#-katkıda-bulunma">
      <img src="https://img.shields.io/badge/Katkıda_Bulun-8B5CF6?style=for-the-badge&logo=heart&logoColor=white" alt="Katkıda Bulun"/>
    </a>
  </p>
  
  <h4>💡 Önerilen Kurulum: Raspberry Pi 5</h4>
  <p>
    <img src="https://img.shields.io/badge/24/7_Çalışma-✅-green?style=flat-square" alt="24/7 Çalışma"/>
    <img src="https://img.shields.io/badge/Düşük_Güç-⚡_3~5W-yellow?style=flat-square" alt="Düşük Güç"/>
    <img src="https://img.shields.io/badge/Aylık_Maliyet-💰_5~10_TL-blue?style=flat-square" alt="Aylık Maliyet"/>
    <img src="https://img.shields.io/badge/Kendi_Sunucunuz-🏠-orange?style=flat-square" alt="Kendi Sunucunuz"/>
  </p>
</div>
