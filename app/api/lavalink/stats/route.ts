import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const host = process.env.LAVALINK_HOST || "vip.visionhost.cloud:7052";
  const password = process.env.LAVALINK_PASSWORD || "ansh";

  try {
    const response = await fetch(`http://${host}/v4/stats`, {
      headers: {
        "Authorization": password,
        "Accept": "application/json"
      },
      next: { revalidate: 5 } // Cache for 5 seconds
    });

    if (!response.ok) {
      throw new Error(`Lavalink responded with ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
