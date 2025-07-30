import React, { useState } from 'react';
import { Plus, Trash2, TestTube, Check, X } from 'lucide-react';
import { RSSSource, Language } from '../types';
import { RSSManager } from '../utils/rssManager';

interface RSSManagerProps {
  language: Language;
  onSourcesUpdate: (sources: RSSSource[]) => void;
  currentSources: RSSSource[];
}

export const RSSManagerComponent: React.FC<RSSManagerProps> = ({ 
  language, 
  onSourcesUpdate, 
  currentSources 
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSource, setNewSource] = useState<Partial<RSSSource>>({
    name: '',
    url: '',
    category: 'local',
    language: 'tr'
  });
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<boolean | null>(null);

  const handleAddSource = async () => {
    if (!newSource.name || !newSource.url) {
      alert(language === 'tr' ? 'Lütfen tüm alanları doldurun!' : 'Please fill all fields!');
      return;
    }

    try {
      const updatedSources = RSSManager.addSource(newSource as RSSSource);
      onSourcesUpdate([...currentSources, newSource as RSSSource]);
      
      // Formu temizle
      setNewSource({ name: '', url: '', category: 'local', language: 'tr' });
      setShowAddForm(false);
      setTestResult(null);
      
      alert(language === 'tr' ? 'RSS kaynağı başarıyla eklendi!' : 'RSS source added successfully!');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Hata oluştu!');
    }
  };

  const handleRemoveSource = (url: string) => {
    const updatedSources = currentSources.filter(s => s.url !== url);
    onSourcesUpdate(updatedSources);
    alert(language === 'tr' ? 'RSS kaynağı kaldırıldı!' : 'RSS source removed!');
  };

  const handleTestFeed = async () => {
    if (!newSource.url) {
      alert(language === 'tr' ? 'Lütfen URL girin!' : 'Please enter URL!');
      return;
    }

    setTesting(true);
    setTestResult(null);

    try {
      const isValid = await RSSManager.testRSSFeed(newSource.url);
      setTestResult(isValid);
    } catch (error) {
      setTestResult(false);
    } finally {
      setTesting(false);
    }
  };

  const popularSources = RSSManager.getPopularSources();

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-lg">
          {language === 'tr' ? 'RSS Kaynak Yönetimi' : 'RSS Source Management'}
        </h3>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all"
        >
          <Plus size={16} className="mr-2" />
          {language === 'tr' ? 'Kaynak Ekle' : 'Add Source'}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
          <h4 className="text-white font-semibold mb-3">
            {language === 'tr' ? 'Yeni RSS Kaynağı Ekle' : 'Add New RSS Source'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder={language === 'tr' ? 'Kaynak Adı (örn: TechCrunch)' : 'Source Name (e.g: TechCrunch)'}
              value={newSource.name || ''}
              onChange={(e) => setNewSource({ ...newSource, name: e.target.value })}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
            />
            
            <input
              type="url"
              placeholder={language === 'tr' ? 'RSS URL (https://...)' : 'RSS URL (https://...)'}
              value={newSource.url || ''}
              onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              value={newSource.category || 'local'}
              onChange={(e) => setNewSource({ ...newSource, category: e.target.value as 'local' | 'international' })}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              <option value="local">{language === 'tr' ? 'Yerel' : 'Local'}</option>
              <option value="international">{language === 'tr' ? 'Uluslararası' : 'International'}</option>
            </select>
            
            <select
              value={newSource.language || 'tr'}
              onChange={(e) => setNewSource({ ...newSource, language: e.target.value as 'tr' | 'en' })}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTestFeed}
              disabled={testing || !newSource.url}
              className="flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-all disabled:opacity-50"
            >
              <TestTube size={16} className="mr-2" />
              {testing ? (language === 'tr' ? 'Test Ediliyor...' : 'Testing...') : (language === 'tr' ? 'Test Et' : 'Test Feed')}
            </button>

            {testResult !== null && (
              <div className={`flex items-center px-3 py-2 rounded-lg ${testResult ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                {testResult ? <Check size={16} className="mr-2" /> : <X size={16} className="mr-2" />}
                {testResult 
                  ? (language === 'tr' ? 'RSS geçerli!' : 'RSS valid!') 
                  : (language === 'tr' ? 'RSS geçersiz!' : 'RSS invalid!')
                }
              </div>
            )}

            <button
              onClick={handleAddSource}
              disabled={!newSource.name || !newSource.url}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg transition-all disabled:opacity-50"
            >
              <Plus size={16} className="mr-2" />
              {language === 'tr' ? 'Ekle' : 'Add'}
            </button>
          </div>
        </div>
      )}

      {/* Mevcut Kaynaklar */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">
          {language === 'tr' ? 'Mevcut Kaynaklar' : 'Current Sources'} ({currentSources.length})
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {currentSources.map((source, index) => (
            <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10">
              <div>
                <div className="text-white font-medium text-sm">{source.name}</div>
                <div className="text-white/60 text-xs">{source.category === 'local' ? '🇹🇷' : '🌍'} {source.language.toUpperCase()}</div>
              </div>
              <button
                onClick={() => handleRemoveSource(source.url)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popüler Kaynaklar */}
      <div>
        <h4 className="text-white font-semibold mb-3">
          {language === 'tr' ? 'Popüler Kaynaklar (Öneriler)' : 'Popular Sources (Suggestions)'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {popularSources.slice(0, 6).map((source, index) => (
            <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10">
              <div>
                <div className="text-white font-medium text-sm">{source.name}</div>
                <div className="text-white/60 text-xs">{source.category === 'local' ? '🇹🇷' : '🌍'} {source.language?.toUpperCase()}</div>
              </div>
              <button
                onClick={() => setNewSource(source)}
                className="text-blue-400 hover:text-blue-300 transition-colors text-xs px-2 py-1 bg-blue-500/20 rounded"
              >
                {language === 'tr' ? 'Kullan' : 'Use'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};