import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  
  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const host = process.env.LAVALINK_HOST || "vip.visionhost.cloud:7052";
  const password = process.env.LAVALINK_PASSWORD || "ansh";

  try {
    const response = await fetch(`http://${host}/v4/loadtracks?identifier=ytsearch:${encodeURIComponent(query)}`, {
      headers: {
        "Authorization": password,
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Lavalink responded with ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Lavalink search error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
