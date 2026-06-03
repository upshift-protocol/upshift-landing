import { NextResponse } from "next/server";
import augustSdk from "@/config/august-sdk";
import { fetchIdleCapitalTvl } from "@/utils/idle-capital-tvl";
import { redis, TVL_CACHE_KEY } from "@/utils/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cached = await redis.get<number>(TVL_CACHE_KEY);
    if (cached !== null && cached !== undefined) {
      return NextResponse.json({ totalSupplied: cached, cached: true });
    }

    // Cache miss (cold, or expired before upshift-app's cron refilled it):
    // compute live so the marketing page still shows a value. upshift-app is
    // the producer that keeps the key warm, so this is the rare path.
    const [totalDepositedFromVaults, idleCapitalTvl] = await Promise.all([
      augustSdk.getTotalDeposited({
        loadSubaccounts: false,
        loadSnapshots: false,
      }),
      fetchIdleCapitalTvl(),
    ]);

    return NextResponse.json({
      totalSupplied: totalDepositedFromVaults + idleCapitalTvl,
      cached: false,
    });
  } catch (error) {
    console.error("Error fetching TVL:", error);
    return NextResponse.json({ error: "Failed to fetch TVL" }, { status: 500 });
  }
}
