import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Authentication error occurred." }, { status: 404 });
}
