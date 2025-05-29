import { initTRPC } from "@trpc/server";
import { prisma } from "@/lib/prisma";
import superjson from "superjson";

// tRPC Context Types
export type CreateContextOptions = {
  req: Request;
  res: Response;
};

export const createTRPCContext = async (opts: CreateContextOptions) => {
  const { req, res } = opts;

  return {
    prisma,
    req,
    res,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
