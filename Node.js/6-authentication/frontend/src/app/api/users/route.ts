import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:3002/users");
    if (!res.ok) throw new Error("Failed to fetch users from backend");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
