// Prisma instance to communicate with the database (call to db)

import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}




// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
// This is particularly useful in a development environment where the application is  frequently reloaded. In production, a new instance of the Prisma client is created  each time the application starts, which is the desired behavior.
