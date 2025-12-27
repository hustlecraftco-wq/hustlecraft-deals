import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error('MailerLite credentials missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Add subscriber to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        groups: [groupId],
        fields: {
          signup_source: 'hustlecraft_deals_website',
          signup_date: new Date().toISOString()
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('MailerLite error:', errorData);
      
      // If subscriber already exists, that's still a success
      if (response.status === 422 || errorData.message?.includes('already exists')) {
        return NextResponse.json({ 
          success: true, 
          message: 'You are already subscribed!' 
        });
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!',
      subscriberId: data.data?.id 
    });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
