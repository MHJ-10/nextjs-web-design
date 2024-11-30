export type Travel = {
  id: number;
  origin: string;
  destination: string;
  price: number;
  date: Date;
};

export const fetchTravelsList = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/travels.json");
  const data: Travel[] = await res.json();

  return data;
};

export const fetchTravelWithId = async (id: number) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/travels.json");
  const data: Travel[] = await res.json();

  return data[id - 1];
};
