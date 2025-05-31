import { router } from "@/lib/trpc/trpc";
import { chatRouter } from "./chat";

export const appRouter = router({
  chat: chatRouter,
});

export type AppRouter = typeof appRouter;
