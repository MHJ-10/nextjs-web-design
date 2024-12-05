import TravelsTableLayout from "./TravelsTableLayout";

export default async function TravelsTable() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/travels`);
  const { data: travels } = await res.json();

  return <TravelsTableLayout travels={travels} />;
}
