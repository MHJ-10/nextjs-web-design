import { sql } from "@vercel/postgres";

export type Travel = {
  id: number;
  origin: string;
  destination: string;
  price: number;
  date: string;
};

export async function fetchTravels() {
  try {
    const data = await sql<Travel>`SELECT * FROM travels`;
    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchTravelById(id: string) {
  try {
    const data = await sql<Travel>`SELECT * FROM travels 
    WHERE id=${id}`;

    return data.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch revenue data.");
  }
}
