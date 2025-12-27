import { NextResponse } from 'next/server';

interface Deal {
  id?: string;
  deal_id?: number;
  title: string;
  description?: string;
  price: number;
  msrp?: number;
  original_price?: number;
  discount_pct?: number;
  discount_percentage?: number;
  percent_off?: number;
  brand?: string;
  vendor?: string;
  link: string;
  amazon_link?: string;
  score?: number;
  slug?: string;
  image_url?: string;
  category?: string;
  source?: string;
  status?: string;
}

// Manual fallback deals with REAL Amazon product images
const MANUAL_DEALS: Deal[] = [
  {
    id: '1',
    deal_id: 1,
    title: 'Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones',
    description: 'Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black',
    price: 169.95,
    original_price: 349.99,
    msrp: 349.99,
    discount_pct: 51,
    discount_percentage: 51,
    category: 'Electronics',
    link: 'https://amzn.to/3KLtodm',
    amazon_link: 'https://amzn.to/3KLtodm',
    image_url: 'https://m.media-amazon.com/images/I/51F5uA-s5UL._AC_SL1500_.jpg',
    slug: 'beats-studio-pro---wireless-bluetooth-noise-cancelling-headphones-1',
    source: 'manual',
    score: 0.9,
    status: 'active',
    vendor: 'Amazon',
    brand: 'Beats'
  },
  {
    id: '2',
    deal_id: 2,
    title: 'INSIGNIA 50" Class F50 Series LED 4K UHD Smart Fire TV',
    description: '50-inch 4K Smart Fire TV with Alexa Voice Remote (NS-50F502NA26)',
    price: 169.99,
    original_price: 299.99,
    msrp: 299.99,
    discount_pct: 43,
    discount_percentage: 43,
    category: 'Electronics',
    link: 'https://amzn.to/3J3rAvS',
    amazon_link: 'https://amzn.to/3J3rAvS',
    image_url: 'https://m.media-amazon.com/images/I/81BeW4LshaL._AC_SL1500_.jpg',
    slug: 'insignia-50-class-f50-series-led-4k-uhd-smart-fire-tv-2',
    source: 'manual',
    score: 0.9,
    status: 'active',
    vendor: 'Amazon',
    brand: 'INSIGNIA'
  },
  {
    id: '3',
    deal_id: 3,
    title: 'SAMSUNG 49" Odyssey G9 Curved Gaming Monitor',
    description: '49" DQHD 1000R Curved Gaming Monitor, 240Hz, 1ms, DisplayHDR 1000, AMD FreeSync Premium Pro',
    price: 679.99,
    original_price: 999.99,
    msrp: 999.99,
    discount_pct: 32,
    discount_percentage: 32,
    category: 'Electronics',
    link: 'https://amzn.to/4nhHvVD',
    amazon_link: 'https://amzn.to/4nhHvVD',
    image_url: 'https://m.media-amazon.com/images/I/81F+VQmSzpL._AC_SL1500_.jpg',
    slug: 'samsung-49-odyssey-g9-curved-gaming-monitor-3',
    source: 'manual',
    score: 0.9,
    status: 'active',
    vendor: 'Amazon',
    brand: 'SAMSUNG'
  }
];

// Slug generator
function generateSlug(title: string, id?: string): string {
  let slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .substring(0, 80);
  if (id) {
    const shortId = id.substring(0, 8);
    return `${slug}-${shortId}`;
  }
  return slug;
}

// Normalize deal fields
function normalizeDeal(deal: any): Deal {
  if (deal.percent_off && !deal.discount_pct) {
    deal.discount_pct = deal.percent_off;
  }
  if (!deal.discount_pct && deal.price && deal.msrp) {
    deal.discount_pct = Math.round(((deal.msrp - deal.price) / deal.msrp) * 100);
  }
  if (!deal.msrp && deal.original_price) {
    deal.msrp = deal.original_price;
  }
  if (deal.score === undefined) {
    deal.score = 0.5;
  }
  delete deal.percent_off;
  return deal;
}

// GET endpoint - Read deals from Upstash Redis
export async function GET() {
  try {
    const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
    const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!upstashUrl || !upstashToken) {
      console.log('Upstash credentials missing, using manual fallback');
      return NextResponse.json({ 
        deals: MANUAL_DEALS,
        source: 'manual_fallback',
        count: MANUAL_DEALS.length 
      });
    }

    const response = await fetch(`${upstashUrl}/get/deals:all`, {
      headers: { 'Authorization': `Bearer ${upstashToken}` }
    });

    if (!response.ok) {
      throw new Error(`Upstash error: ${response.status}`);
    }

    const data = await response.json();
    const dealsJson = data.result;

    if (!dealsJson) {
      console.log('No deals in Upstash, using manual fallback');
      return NextResponse.json({ 
        deals: MANUAL_DEALS,
        source: 'redis_empty',
        count: MANUAL_DEALS.length 
      });
    }

    const deals: Deal[] = JSON.parse(dealsJson);

    // Normalize and add slugs
    const normalizedDeals = deals.map(deal => {
      const normalized = normalizeDeal(deal);
      if (!normalized.slug) {
        normalized.slug = generateSlug(normalized.title, normalized.id);
      }
      return normalized;
    });

    return NextResponse.json({ 
      deals: normalizedDeals,
      source: 'upstash_redis',
      count: normalizedDeals.length 
    });

  } catch (error) {
    console.error('Error fetching deals:', error);
    return NextResponse.json({ 
      deals: MANUAL_DEALS,
      source: 'error_fallback',
      error: error instanceof Error ? error.message : 'Unknown error',
      count: MANUAL_DEALS.length 
    });
  }
}

// POST endpoint - Add or UPDATE deals (updates will overwrite by link)
export async function POST(request: Request) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.N8N_WEBHOOK_TOKEN || 'hustlecraft-n8n-secret-2024';

    if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
    const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!upstashUrl || !upstashToken) {
      return NextResponse.json(
        { error: 'Upstash not configured' },
        { status: 500 }
      );
    }

    // Get new/edited deals
    const newDeals: Deal[] = await request.json();
    const dealsArray = Array.isArray(newDeals) ? newDeals : [newDeals];
    const normalizedNewDeals = dealsArray.map(normalizeDeal);

    // Fetch existing deals
    const getResponse = await fetch(`${upstashUrl}/get/deals:all`, {
      headers: { 'Authorization': `Bearer ${upstashToken}` }
    });

    let existingDeals: Deal[] = [...MANUAL_DEALS];
    if (getResponse.ok) {
      const getData = await getResponse.json();
      if (getData.result) {
        try {
          const parsed = JSON.parse(getData.result);
          if (Array.isArray(parsed)) {
            existingDeals = parsed.map(normalizeDeal);
          }
        } catch (e) {
          console.warn('Could not parse existing deals, using manual fallback');
        }
      }
    }
    if (!Array.isArray(existingDeals)) {
      console.warn('existingDeals was not an array, resetting to manual deals');
      existingDeals = [...MANUAL_DEALS];
    }

    // Overwrite deals by link (remove any old with matching link, then add updated/new ones at the top)
    const newLinks = new Set(normalizedNewDeals.map(d => d.link));
    const filteredExisting = existingDeals.filter(d => !newLinks.has(d.link));

    // Add slugs/ID if missing
    normalizedNewDeals.forEach(deal => {
      if (!deal.slug) deal.slug = generateSlug(deal.title, deal.id);
      if (!deal.id) deal.id = deal.link.split('/').pop() || `deal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    });

    // Combine: new/edited first, then rest of old, up to 100
    const updatedDeals = [...normalizedNewDeals, ...filteredExisting].slice(0, 100);

    // Save to Upstash Redis
    const setResponse = await fetch(`${upstashUrl}/setex/deals:all/604800`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${upstashToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedDeals)
    });

    if (!setResponse.ok) {
      const errorText = await setResponse.text();
      throw new Error(`Failed to save to Upstash: ${setResponse.status} - ${errorText}`);
    }

    return NextResponse.json({
      success: true,
      updated: normalizedNewDeals.length,
      total: updatedDeals.length,
      message: `Successfully added/updated ${normalizedNewDeals.length} deal(s)`
    });

  } catch (error) {
    console.error('Error adding deals:', error);
    return NextResponse.json(
      { error: 'Failed to add deals', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
