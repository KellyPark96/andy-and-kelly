import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, side, attendance, count } = body;

  if (!name || !side || !attendance) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const { error } = await supabase.from("rsvp").insert({
    name,
    phone: phone || null,
    side,
    attendance,
    count: attendance === "yes" ? count : null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
