import { Travel } from "@/app/lib/data";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: Omit<Travel, "id"> = await req.json();

  try {
    await sql`INSERT INTO travels (origin, destination, price, date)
        VALUES (${body.origin}, ${body.destination}, ${body.price}, ${body.date})
        `;

    revalidatePath("/");

    return NextResponse.json(
      { message: "travel inserted successfully", data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Database Error: Failed to Create Travel." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "hello" });
}
