import { fetchTravels } from "../lib/data";
import TravelsTableLayout from "./TravelsTableLayout";

export default async function TravelsTable() {
  const travels = await fetchTravels();

  return <TravelsTableLayout travels={travels} />;
}
