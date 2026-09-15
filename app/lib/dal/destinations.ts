import client from "@/db/client";

export async function getDestinations() {
  return client.destination.findMany();
}
