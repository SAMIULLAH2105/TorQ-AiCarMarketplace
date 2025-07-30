import { currentUser } from "@clerk/nextjs/server";
import  {db}  from "./prisma";
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

export const checkUser = async () => {
  const user = await currentUser();
  // const user = await prisma.user.findMany()

  if (!user) {
    return null;
  }
  console.log("User found:", user.id, user.firstName);

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    console.log("Logged in user:", loggedInUser);

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};
