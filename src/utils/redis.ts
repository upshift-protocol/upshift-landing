import { Redis } from "@upstash/redis";

// Points at the same Upstash instance as upshift-app. Requires
// UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN to be set on this project
// (linked via the Vercel Storage tab, or copied from the upshift-app project).
export const redis = Redis.fromEnv();

// Shared with upshift-app's /api/proxy/tvl producer — both apps use this exact
// key so the displayed TVL stays in sync.
export const TVL_CACHE_KEY = "tvl:overview";
