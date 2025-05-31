import { Redis } from "@upstash/redis";

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error("Missing Upstash Redis environment variables");
}

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export async function rateLimit(
  key: string,
  config: RateLimitConfig,
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const now = Date.now();
  const windowKey = `${key}:${Math.floor(now / config.windowMs)}`;

  const multi = redis.pipeline();
  multi.incr(windowKey);
  multi.pttl(windowKey);

  const [requests, ttl] = (await multi.exec()) as [number, number];

  if (ttl === -1) {
    await redis.pexpire(windowKey, config.windowMs);
  }

  const remaining = Math.max(0, config.maxRequests - requests);
  const reset = Math.floor(now / config.windowMs) * config.windowMs + config.windowMs;

  return {
    success: remaining > 0,
    limit: config.maxRequests,
    remaining,
    reset,
  };
}
