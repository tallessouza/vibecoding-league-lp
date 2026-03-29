import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, type } = body;

  if (!name || !email || !type) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: integrar com banco de dados real (Supabase) em story futura
  console.log("Waitlist signup:", { name, email, type });

  return NextResponse.json({ success: true, message: "Registered successfully" });
}
