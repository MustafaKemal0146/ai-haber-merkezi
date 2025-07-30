#!/bin/bash

echo "🍓 AI Haber Merkezi - Raspberry Pi 5 Kurulumu"
echo "=============================================="

# Sistem güncellemesi
echo "📦 Sistem güncelleniyor..."
sudo apt update && sudo apt upgrade -y

# Node.js kurulumu
echo "📦 Node.js kuruluyor..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 kurulumu
echo "📦 PM2 kuruluyor..."
sudo npm install -g pm2 serve

# Nginx kurulumu (opsiyonel)
read -p "🌐 Nginx kurmak istiyor musunuz? (y/n): " install_nginx
if [ "$install_nginx" = "y" ]; then
    echo "📦 Nginx kuruluyor..."
    sudo apt install -y nginx
    
    # Nginx config kopyala
    sudo cp nginx.conf /etc/nginx/sites-available/ai-haber
    sudo ln -sf /etc/nginx/sites-available/ai-haber /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Nginx'i yeniden başlat
    sudo systemctl restart nginx
    sudo systemctl enable nginx
fi

# Proje bağımlılıklarını yükle
echo "📦 Proje bağımlılıkları yükleniyor..."
npm install

# Production build
echo "🏗️ Production build oluşturuluyor..."
npm run build

# PM2 ile servisleri başlat
echo "🚀 Servisler başlatılıyor..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Systemd service kurulumu
echo "⚙️ Systemd service kuruluyor..."
sudo cp ai-haber.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable ai-haber
sudo systemctl start ai-haber

# Firewall ayarları
echo "🔥 Firewall ayarları..."
sudo ufw allow 80/tcp
sudo ufw allow 3000/tcp
sudo ufw allow 8080/tcp

# IP adresini göster
echo ""
echo "✅ Kurulum tamamlandı!"
echo "🌐 Site adresi: http://$(hostname -I | awk '{print $1}')"
echo "📊 PM2 durumu: pm2 status"
echo "📝 Loglar: pm2 logs"
echo ""