import { getDestinations } from "@/app/lib/dal/destinations";

export default async function DestinationsList() {
  const destinations = await getDestinations();

  return (
    <ul>
      {destinations.map((destination) => (
        <li key={destination.id}>{destination.title}</li>
      ))}
    </ul>
  );
}
