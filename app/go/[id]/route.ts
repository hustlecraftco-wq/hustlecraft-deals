import { NextRequest, NextResponse } from 'next/server';

// Next.js 15: params is now a Promise that must be awaited
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in Next.js 15
    const { id } = await params;
    
    // TODO: Track click in database
    console.log(`Redirect tracked for deal: ${id}`);
    
    // For now, redirect to placeholder
    // Will connect to database to get real affiliate URL
    const affiliateUrl = `https://example.com/deal/${id}`;
    
    return NextResponse.redirect(affiliateUrl);
  } catch (error) {
    console.error('Redirect error:', error);
    return NextResponse.redirect(new URL('/', req.url));
  }
}
