import { fetchTravelWithId } from "@/app/lib/data";
import React from "react";

interface Props {
  params: { id: string };
}

const TravelPage = async ({ params }: Props) => {
  const travelId = +params.id;
  const travel = await fetchTravelWithId(travelId);

  return (
    <ul>
      <li>{travel.origin}</li>
      <li>{travel.destination}</li>
      <li>{new Date(travel.date).toLocaleDateString("fa-IR")}</li>
      <li>{travel.price}</li>
    </ul>
  );
};

export default TravelPage;
