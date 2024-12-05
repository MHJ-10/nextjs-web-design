export type Travel = {
  id: number;
  origin: string;
  destination: string;
  price: number;
  date: string;
};

export const travels: Travel[] = [
  {
    id: 1,
    origin: "تهران",
    destination: "مشهد",
    price: 1500000,
    date: "2024-12-10",
  },
  {
    id: 2,
    origin: "شیراز",
    destination: "اصفهان",
    price: 1200000,
    date: "2024-12-15",
  },
  {
    id: 3,
    origin: "تهران",
    destination: "دبی",
    price: 5000000,
    date: "2024-12-20",
  },
  {
    id: 4,
    origin: "اصفهان",
    destination: "تبریز",
    price: 1000000,
    date: "2024-12-12",
  },
  {
    id: 5,
    origin: "کرمان",
    destination: "کیش",
    price: 2000000,
    date: "2024-12-18",
  },
  {
    id: 6,
    origin: "مشهد",
    destination: "شیراز",
    price: 1700000,
    date: "2024-12-22",
  },
  {
    id: 7,
    origin: "تهران",
    destination: "استانبول",
    price: 6000000,
    date: "2024-12-25",
  },
  {
    id: 8,
    origin: "تبریز",
    destination: "بندرعباس",
    price: 2200000,
    date: "2024-12-28",
  },
  {
    id: 9,
    origin: "اهواز",
    destination: "تهران",
    price: 1300000,
    date: "2024-12-30",
  },
  {
    id: 10,
    origin: "رشت",
    destination: "قشم",
    price: 2500000,
    date: "2025-01-02",
  },
  {
    id: 11,
    origin: "تهران",
    destination: "کوالالامپور",
    price: 8000000,
    date: "2025-01-05",
  },
  {
    id: 12,
    origin: "شیراز",
    destination: "تهران",
    price: 1100000,
    date: "2025-01-07",
  },
];
