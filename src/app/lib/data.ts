import { db } from "@vercel/postgres";

export type Travel = {
  id: number;
  origin: string;
  destination: string;
  price: number;
  date: string;
};

export async function fetchTravels() {
  const client = await db.connect();
  try {
    const data = await client.sql<Travel>`SELECT * FROM travels`;
    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchTravelById(id: string) {
  const client = await db.connect();
  try {
    const data = await client.sql<Travel>`SELECT * FROM travels 
    WHERE id=${id}`;

    return data.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch revenue data.");
  }
}
