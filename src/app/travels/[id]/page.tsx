const TravelPage = async ({ params }: { params: { id: string } }) => {
  const travelId = +params.id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/travels/${travelId}`
  );
  const { data: travel } = await res.json();

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
