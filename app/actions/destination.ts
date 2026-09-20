"use server";

import { updateTag } from "next/cache";
import { createDestination } from "../lib/dal/destinations";

export async function createDestinationAction(formData: FormData) {
  await createDestination(formData);
  updateTag("destinations");
}
