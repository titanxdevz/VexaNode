import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ error: 'Domain is required' }, { status: 400 });
  }

  try {
    // Using Google DNS-over-HTTPS to check if the domain exists
    // Status 3 means NXDOMAIN (Not Found), which suggests it might be available
    const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const data = await response.json();

    const isAvailable = data.Status === 3;

    return NextResponse.json({
      domain,
      available: isAvailable,
      status: data.Status
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to check domain' }, { status: 500 });
  }
}
