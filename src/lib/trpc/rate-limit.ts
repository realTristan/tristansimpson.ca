import { TRPCError } from "@trpc/server";
import { rateLimit, type RateLimitConfig } from "@/lib/redis";

export const createRateLimitMiddleware = (config: RateLimitConfig) => {
  return async ({ ctx, next }: { ctx: any; next: () => Promise<any> }) => {
    const ip = ctx.req.headers.get("x-forwarded-for") || "anonymous";
    const key = `ratelimit:${ip}`;

    const result = await rateLimit(key, config);

    if (!result.success) {
      throw new TRPCError({
        code: "TOO_MANY_REQUESTS",
        message: `Rate limit exceeded. Try again in ${Math.ceil(
          (result.reset - Date.now()) / 1000,
        )} seconds.`,
      });
    }

    return next();
  };
};
