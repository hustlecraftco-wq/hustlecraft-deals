import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const dealData = await request.json();
    
    // Call the scorer service (server-side, so it can reach the internal IP)
    const scorerUrl = process.env.SCORER_URL || 'http://192.168.86.249:8001/score';
    
    const response = await fetch(scorerUrl, {
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

    if (!response.ok) {
      throw new Error(`Scorer returned ${response.status}`);
    }

    const scoreData = await response.json();
    
    return NextResponse.json({ 
      score: scoreData.score,
      should_publish: scoreData.should_publish,
      threshold: scoreData.threshold 
    });
    
  } catch (error) {
    console.error('Scoring error:', error);
    return NextResponse.json(
      { 
        error: 'Scoring failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        score: 0.5 // Default fallback score
      },
      { status: 500 }
    );
  }
}

// Health check/status handler for browser & GET requests
export async function GET(request: NextRequest) {
  return NextResponse.json({ status: 'Score endpoint is alive.' });
}
