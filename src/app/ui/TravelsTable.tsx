import { fetchTravelsList } from "../lib/data";
import TravelsTableLayout from "./TravelsTableLayout";

export default async function TravelsTable() {
  const travels = await fetchTravelsList();

  return <TravelsTableLayout travels={travels} />;
}
