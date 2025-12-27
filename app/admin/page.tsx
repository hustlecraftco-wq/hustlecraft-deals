'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Deal {
  id: string;
  title: string;
  description?: string;
  price: number;
  msrp: number;
  discount_pct: number;
  brand?: string;
  vendor?: string;
  link: string;
  image_url?: string;
  category?: string;
  score?: number;
  slug?: string;
  source?: string;
}

export default function AdminHub() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [scoring, setScoring] = useState(false);
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);
  const [activeTab, setActiveTab] = useState<'manage' | 'import' | 'export'>('manage');
  const [importData, setImportData] = useState('');
  const router = useRouter();

  const [formData, setFormData] = useState<Partial<Deal>>({
    title: '',
    description: '',
    price: 0,
    msrp: 0,
    discount_pct: 0,
    brand: '',
    vendor: 'Amazon',
    link: '',
    image_url: '',
    category: 'Electronics',
    score: 0,
    source: 'manual'
  });

  useEffect(() => {
    fetchDeals();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/deals');
      const data = await response.json();
      setDeals(data.deals || []);
    } catch (error) {
      console.error('Error fetching deals:', error);
    } finally {
      setLoading(false);
    }
  };

  // AI Scorer: Apply a BOOST to the returned score
  const scoreDeal = async (dealData: Partial<Deal>) => {
    setScoring(true);
    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: dealData.title || '',
          description: dealData.description || '',
          price: dealData.price || 0,
          msrp: dealData.msrp || 0,
          discount_pct: dealData.discount_pct || 0,
          brand: dealData.brand || '',
          vendor: dealData.vendor || 'Amazon',
          link: dealData.link || ''
        })
      });

      if (response.ok) {
        const scoreData = await response.json();
        // Boost score by 0.10 (10%), max 1.0
        const boost = 0.10;
        const boostedScore = Math.min(1, (scoreData.score ?? 0) + boost);
        setFormData(prev => ({ ...prev, score: boostedScore }));
        alert(`✅ Scored! Quality: ${(boostedScore * 100).toFixed(0)}%`);
      } else {
        alert('❌ Scoring failed - using default 0.5');
        setFormData(prev => ({ ...prev, score: 0.5 }));
      }
    } catch (error) {
      console.error('Scoring error:', error);
      alert('❌ Could not connect to scorer - using default 0.5');
      setFormData(prev => ({ ...prev, score: 0.5 }));
    } finally {
      setScoring(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let fd = { ...formData };

    if ((!fd.discount_pct || fd.discount_pct === 0) && fd.price && fd.msrp) {
      fd.discount_pct = Math.round(((fd.msrp - fd.price) / fd.msrp) * 100);
    }
    if (!fd.slug && fd.title) {
      fd.slug = fd.title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 80);
    }
    if (!fd.id) {
      fd.id = Date.now().toString();
    }

    try {
      const response = await fetch('/api/deals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer hustlecraft-n8n-secret-2024'
        },
        body: JSON.stringify([fd])
      });

      if (response.ok) {
        alert(editingDeal ? '✅ Deal updated!' : '✅ Deal added!');
        setShowForm(false);
        setEditingDeal(null);
        resetForm();
        fetchDeals();
      } else {
        const error = await response.json();
        alert('❌ Error: ' + (error.error || 'Failed to save'));
      }
    } catch (error) {
      alert('❌ Error: ' + error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: 0,
      msrp: 0,
      discount_pct: 0,
      brand: '',
      vendor: 'Amazon',
      link: '',
      image_url: '',
      category: 'Electronics',
      score: 0,
      source: 'manual'
    });
  };

  const handleEdit = (deal: Deal) => {
    setFormData(deal);
    setEditingDeal(deal);
    setShowForm(true);
  };

  const handleDelete = async (dealId: string) => {
    if (!confirm('🗑️ Delete this deal?')) return;
    try {
      const filtered = deals.filter(d => d.id !== dealId);
      const response = await fetch('https://enabled-mastiff-6296.upstash.io/setex/deals:all/604800', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ARiYAAImcDJhZDczMWE1ZTU1MGU0MjM2OThjOWRhZmU3M2MwZjJlMHAyNjI5Ng',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filtered)
      });
      if (response.ok) {
        alert('✅ Deal deleted!');
        fetchDeals();
      }
    } catch (error) {
      alert('❌ Error deleting deal');
    }
  };

  const handleBulkDelete = async () => {
    if (!confirm('🗑️ DELETE ALL DEALS? This cannot be undone!')) return;
    if (!confirm('⚠️ Are you REALLY sure?')) return;
    try {
      const response = await fetch('https://enabled-mastiff-6296.upstash.io/setex/deals:all/604800', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ARiYAAImcDJhZDczMWE1ZTU1MGU0MjM2OThjOWRhZmU3M2MwZjJlMHAyNjI5Ng',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([])
      });
      if (response.ok) {
        alert('✅ All deals deleted!');
        fetchDeals();
      }
    } catch (error) {
      alert('❌ Error deleting deals');
    }
  };

  const handleImport = async () => {
    try {
      const imported = JSON.parse(importData);
      const dealsArray = Array.isArray(imported) ? imported : [imported];
      for (const deal of dealsArray) {
        if (!deal.title || !deal.price || !deal.link) {
          alert('❌ Invalid deal data - missing required fields');
          return;
        }
      }
      const response = await fetch('/api/deals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer hustlecraft-n8n-secret-2024'
        },
        body: JSON.stringify(dealsArray)
      });
      if (response.ok) {
        alert(`✅ Imported ${dealsArray.length} deals!`);
        setImportData('');
        fetchDeals();
      }
    } catch (error) {
      alert('❌ Invalid JSON format');
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(deals, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hustlecraft-deals-${Date.now()}.json`;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading Admin Hub...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">🚀 HustleCraft Admin Hub</h1>
              <p className="text-blue-100">Manage your deals, score quality, import/export data</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-slate-400 text-sm">Total Deals</div>
            <div className="text-3xl font-bold text-white">{deals.length}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-slate-400 text-sm">Avg Score</div>
            <div className="text-3xl font-bold text-green-400">
              {deals.length > 0 ? ((deals.reduce((sum, d) => sum + (d.score || 0), 0) / deals.length) * 100).toFixed(0) : 0}%
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-slate-400 text-sm">Avg Discount</div>
            <div className="text-3xl font-bold text-blue-400">
              {deals.length > 0 ? (deals.reduce((sum, d) => sum + d.discount_pct, 0) / deals.length).toFixed(0) : 0}%
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-slate-400 text-sm">Total Savings</div>
            <div className="text-3xl font-bold text-purple-400">
              ${deals.reduce((sum, d) => sum + (d.msrp - d.price), 0).toFixed(0)}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('manage')}
            className={`px-6 py-3 font-semibold rounded-lg ${
              activeTab === 'manage' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            📝 Manage Deals
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`px-6 py-3 font-semibold rounded-lg ${
              activeTab === 'import' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            📥 Import
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-6 py-3 font-semibold rounded-lg ${
              activeTab === 'export' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            📤 Export
          </button>
        </div>

        {/* MANAGE TAB */}
        {activeTab === 'manage' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Deals Management</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    resetForm();
                    setEditingDeal(null);
                    setShowForm(!showForm);
                  }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
                >
                  {showForm ? '❌ Cancel' : '➕ Add New Deal'}
                </button>
                {deals.length > 0 && (
                  <button
                    onClick={handleBulkDelete}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
                  >
                    🗑️ Delete All
                  </button>
                )}
              </div>
            </div>

            {showForm && (
              <div className="bg-slate-800 rounded-xl p-6 mb-8 border-2 border-blue-500">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {editingDeal ? '✏️ Edit Deal' : '➕ Add New Deal'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title & Brand */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">📝 Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                        placeholder="e.g., Sony WH-1000XM5 Headphones"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">🏷️ Brand</label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({...formData, brand: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                        placeholder="e.g., Sony"
                      />
                    </div>
                  </div>

                  {/* Price & MSRP */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">💰 Current Price *</label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={formData.price}
                        onChange={(e) => {
                          const price = parseFloat(e.target.value);
                          const discount = formData.msrp ? Math.round(((formData.msrp - price) / formData.msrp) * 100) : 0;
                          setFormData(prev => ({ ...prev, price, discount_pct: discount }));
                        }}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">💵 Original MSRP *</label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={formData.msrp}
                        onChange={(e) => {
                          const msrp = parseFloat(e.target.value);
                          const discount = formData.price ? Math.round(((msrp - formData.price) / msrp) * 100) : 0;
                          setFormData(prev => ({ ...prev, msrp, discount_pct: discount }));
                        }}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">📊 Discount %</label>
                      <input
                        type="number"
                        disabled
                        value={formData.discount_pct}
                        className="w-full px-4 py-3 rounded-lg bg-slate-600 text-white border-2 border-slate-600"
                      />
                    </div>
                  </div>

                  {/* Link & Image */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">🔗 Amazon Link *</label>
                      <input
                        type="url"
                        required
                        value={formData.link}
                        onChange={(e) => setFormData({...formData, link: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                        placeholder="https://amzn.to/..."
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">🖼️ Image URL</label>
                      <input
                        type="url"
                        value={formData.image_url}
                        onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                        placeholder="Right-click Amazon image → Copy image address"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-white font-semibold mb-2">📄 Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 focus:border-blue-500 outline-none"
                      rows={3}
                      placeholder="Product details..."
                    />
                  </div>

                  {/* Score Section */}
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold mb-1">🎯 Quality Score</div>
                        <div className="text-slate-400 text-sm">Auto-score this deal using AI</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-blue-400">
                          {((formData.score || 0) * 100).toFixed(0)}%
                        </div>
                        <button
                          type="button"
                          onClick={() => scoreDeal(formData)}
                          disabled={scoring || !formData.title}
                          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 text-white font-semibold rounded-lg"
                        >
                          {scoring ? '⏳ Scoring...' : '🎯 Score Now'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={scoring}
                      className={`flex-1 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-lg ${scoring ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {editingDeal ? '✅ Update Deal' : '➕ Add Deal'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingDeal(null);
                        resetForm();
                      }}
                      className="px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Deals List */}
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Current Deals ({deals.length})
              </h3>
              {deals.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <div className="text-6xl mb-4">📦</div>
                  <div className="text-xl">No deals yet. Add your first deal!</div>
                </div>
              ) : (
                <div className="space-y-4">
                  {deals.map((deal) => (
                    <div key={deal.id} className="bg-slate-700 rounded-lg p-4 flex gap-4 hover:bg-slate-600 transition-colors">
                      {deal.image_url ? (
                        <img
                          src={deal.image_url}
                          alt={deal.title}
                          className="w-32 h-32 object-cover rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/128x128/1e293b/white?text=No+Image';
                          }}
                        />
                      ) : (
                        <div className="w-32 h-32 bg-slate-800 rounded-lg flex items-center justify-center text-slate-600">
                          No Image
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2">{deal.title}</h4>
                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{deal.description}</p>
                        <div className="flex gap-4 text-sm flex-wrap">
                          <span className="text-green-400 font-bold">${deal.price.toFixed(2)}</span>
                          <span className="text-slate-400 line-through">${deal.msrp.toFixed(2)}</span>
                          <span className="text-blue-400">{deal.discount_pct}% off</span>
                          <span className="text-purple-400">Score: {((deal.score || 0) * 100).toFixed(0)}%</span>
                          {deal.brand && <span className="text-slate-400">🏷️ {deal.brand}</span>}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleEdit(deal)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(deal.id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* IMPORT TAB */}
        {activeTab === 'import' && (
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📥 Import Deals</h2>
            <p className="text-slate-400 mb-6">
              Paste JSON data below to bulk import deals. Format: Array of deal objects.
            </p>
            <textarea
              value={importData}
              onChange={(e) => setImportData(e.target.value)}
              className="w-full h-96 px-4 py-3 rounded-lg bg-slate-700 text-white font-mono text-sm border-2 border-slate-600 focus:border-blue-500 outline-none mb-4"
              placeholder='[{"title": "Deal Name", "price": 99.99, "msrp": 199.99, "link": "https://...", ...}]'
            />
            <div className="flex gap-4">
              <button
                onClick={handleImport}
                disabled={!importData}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white font-semibold rounded-lg"
              >
                📥 Import Deals
              </button>
              <button
                onClick={() => setImportData('')}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* EXPORT TAB */}
        {activeTab === 'export' && (
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📤 Export Deals</h2>
            <p className="text-slate-400 mb-6">
              Download all your deals as JSON. You can edit and re-import later.
            </p>
            <div className="bg-slate-700 rounded-lg p-4 mb-6">
              <div className="text-white font-semibold mb-2">Export Info:</div>
              <div className="text-slate-400 space-y-1">
                <div>• Total Deals: {deals.length}</div>
                <div>• Format: JSON</div>
                <div>• File Name: hustlecraft-deals-{Date.now()}.json</div>
              </div>
            </div>
            <button
              onClick={handleExport}
              disabled={deals.length === 0}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold rounded-lg"
            >
              📤 Download JSON
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
