import { travels } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const targetTravel = travels[+params.id - 1];

  return NextResponse.json({ data: targetTravel });
}
