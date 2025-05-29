import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  getAllExamples: publicProcedure.query(async () => {
    return;
  }),

  createExample: publicProcedure.input(z.object({})).mutation(async ({ input }) => {
    return;
  }),
});
