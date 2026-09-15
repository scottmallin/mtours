"use server";

import { createDestination } from "../lib/dal/destinations";

export async function createDestinationAction(formData: FormData) {
  await createDestination(formData);
}
