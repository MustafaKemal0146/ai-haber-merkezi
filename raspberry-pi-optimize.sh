#!/bin/bash

echo "🍓 Raspberry Pi 5 Performans Optimizasyonu"
echo "=========================================="

# GPU memory split (headless için)
echo "🎮 GPU memory ayarlanıyor..."
sudo raspi-config nonint do_memory_split 16

# Swap dosyası artırma
echo "💾 Swap dosyası artırılıyor..."
sudo dphys-swapfile swapoff
sudo sed -i 's/CONF_SWAPSIZE=100/CONF_SWAPSIZE=1024/' /etc/dphys-swapfile
sudo dphys-swapfile setup
sudo dphys-swapfile swapon

# CPU governor ayarı
echo "⚡ CPU governor ayarlanıyor..."
echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# Cron job ile otomatik yeniden başlatma (haftalık)
echo "⏰ Otomatik yeniden başlatma ayarlanıyor..."
(crontab -l 2>/dev/null; echo "0 3 * * 0 sudo reboot") | crontab -

# Log rotation
echo "📝 Log rotation ayarlanıyor..."
sudo tee /etc/logrotate.d/ai-haber > /dev/null <<EOF
/home/pi/.pm2/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    notifempty
    create 0644 pi pi
    postrotate
        pm2 reloadLogs
    endscript
}
EOF

# Sistem monitoring scripti
echo "📊 Monitoring scripti oluşturuluyor..."
tee /home/pi/monitor.sh > /dev/null <<EOF
#!/bin/bash
echo "🍓 Raspberry Pi 5 - AI Haber Merkezi Durumu"
echo "==========================================="
echo "📅 Tarih: \$(date)"
echo "🌡️ CPU Sıcaklığı: \$(vcgencmd measure_temp)"
echo "💾 RAM Kullanımı: \$(free -h | grep Mem | awk '{print \$3 "/" \$2}')"
echo "💿 Disk Kullanımı: \$(df -h / | tail -1 | awk '{print \$3 "/" \$2 " (" \$5 ")"}')"
echo "⚡ CPU Yükü: \$(uptime | awk -F'load average:' '{print \$2}')"
echo ""
echo "🚀 PM2 Durumu:"
pm2 status
echo ""
echo "📊 Son 10 Log Satırı:"
pm2 logs --lines 10
EOF

chmod +x /home/pi/monitor.sh

echo ""
echo "✅ Optimizasyon tamamlandı!"
echo "📊 Sistem durumunu görmek için: ~/monitor.sh"
echo "🔄 Değişikliklerin etkili olması için yeniden başlatın: sudo reboot"
echo ""