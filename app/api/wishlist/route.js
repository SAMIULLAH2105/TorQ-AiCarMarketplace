import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response(JSON.stringify({ carIds: [] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    const dbUser = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!dbUser) {
      return new Response(JSON.stringify({ carIds: [] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    const saved = await db.userSavedCar.findMany({
      where: { userId: dbUser.id },
      select: { carId: true },
    });
    const carIds = saved.map((s) => s.carId);

    return new Response(JSON.stringify({ carIds }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ carIds: [] }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
}



