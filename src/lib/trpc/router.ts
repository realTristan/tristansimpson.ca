import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { prisma } from "@/lib/prisma";

export const postRouter = router({
  getAll: publicProcedure.query(async () => {
    return await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, "Title is required"),
        content: z.string().min(1, "Content is required"),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.post.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

export const appRouter = router({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
