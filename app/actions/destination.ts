"use server";

import { z } from "zod";
import { Destination } from "@/generated/prisma/client";
import client from "@/db/client";

const destinationSchema = z.toZod<Destination>()(
  z.object({
    id: z.number(),
    title: z.string(),
    description: z.nullable(z.string()),
    createdAt: z.date(),
    updatedAt: z.nullable(z.date()),
    deleted: z.boolean()
  })
);

const newDestinationSchema = destinationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deleted: true
});

export async function createDestination(formData: FormData) {
  const result = newDestinationSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description")
  });

  console.log(result);

  if (!result.success) {
    console.log(result.error);
    return;
  }

  await client.destination.create({
    data: {
      title: result.data.title,
      description: result.data.description
    }
  });
}
