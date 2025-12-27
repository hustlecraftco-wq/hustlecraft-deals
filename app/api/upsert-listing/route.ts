// API Route: /api/upsert-listing
import { NextRequest, NextResponse } from 'next/server';

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function POST(req: NextRequest) {
  // Check admin token
  const token = req.headers.get('x-admin-token');
  if (token !== process.env.SITE_ADMIN_TOKEN) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const body = await req.json();
  const slug = slugify(`${body.title}-${body.brand || ''}-${body.vendor || ''}-${body.id}`);

  // For now, just log and return success
  // TODO: Connect to PostgreSQL
  console.log('Received listing:', {
    ...body,
    slug,
    updated_at: new Date().toISOString()
  });

  // In production, this would insert into database
  // await db.query(INSERT_QUERY, [values]);

  return NextResponse.json({ 
    ok: true,
    id: body.id,
    slug 
  });
}