import { z } from "zod";
import { router, publicProcedure } from "@/lib/trpc/trpc";
import { v4 as uuidv4 } from "uuid";
import { TRPCError } from "@trpc/server";
import { generateResponse } from "@/lib/gemini";

const welcomeMessages = [
  {
    id: uuidv4(),
    content:
      "Hi! I'm Tristan. I'm a full-stack developer with over five years of experience designing, developing, and implementing solutions using a vast range of technologies and programming languages. Because of my professional experience in developing high-quality applications, I can confidently understand the majority of languages and services.\n\nFeel free to ask me anything about my experience, projects, or technical topics!",
    role: "assistant" as const,
    timestamp: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    content:
      "Dans mes temps libres j'aime faire le vélo de montagne, enseigner la programmation, et de construire mes propres projets!",
    role: "assistant" as const,
    timestamp: new Date().toISOString(),
  },
];

export const chatRouter = router({
  send: publicProcedure
    .input(
      z.object({
        content: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        console.log("[chat] Processing message:", input.content);

        // Generate response using Gemini
        const aiResponse = await generateResponse(input.content);

        if (!aiResponse) {
          throw new Error("No response generated");
        }

        const response = {
          id: uuidv4(),
          content: aiResponse,
          role: "assistant" as const,
          timestamp: new Date().toISOString(),
        };

        console.log("[chat] Generated response:", response);
        return response;
      } catch (error) {
        console.error("[chat] Error processing message:", error);

        // Handle specific error types
        if (error instanceof Error) {
          if (error.message.includes("API key")) {
            throw new TRPCError({
              code: "UNAUTHORIZED",
              message: "Invalid API key. Please check your configuration.",
            });
          }
          if (error.message.includes("quota")) {
            throw new TRPCError({
              code: "TOO_MANY_REQUESTS",
              message: "API quota exceeded. Please try again later.",
            });
          }
          if (error.message.includes("safety")) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Message blocked by safety filters.",
            });
          }
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error instanceof Error ? error.message : "Failed to process message",
        });
      }
    }),

  // Add a new procedure to get welcome messages
  getWelcomeMessages: publicProcedure.query(() => {
    return welcomeMessages;
  }),
});
