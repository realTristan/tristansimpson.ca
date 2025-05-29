import { initTRPC } from "@trpc/server";
// import { prisma } from "@/lib/prisma";
import superjson from "superjson";

// tRPC Context Types
export type CreateContextOptions = {
  req: Request;
};

export const createTRPCContext = async (opts: CreateContextOptions) => {
  const { req } = opts;

  return {
    // prisma,
    req,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
