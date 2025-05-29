import { router } from "../trpc";
import { exampleRouter } from "./examples";

export const appRouter = router({
  posts: exampleRouter,
});

export type AppRouter = typeof appRouter;
