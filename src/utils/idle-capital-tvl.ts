"use client";

import augustSdk from "@/config/august-sdk";
import { OLD_LENDING_POOLS, type IVaultLoan } from "@augustdigital/sdk";

// Excluded from idle-capital sum to mirror the upshift-app calculation
// (see src/ui/molecules/overview-stats.tsx in upshift-app).
const KELP_GAIN_VAULT = "0xe1B4d34E8754600962Cd944B535180Bd758E6c2e";

/**
 * Sums USD value of idle capital sitting in legacy Upshift lending pools
 * (Upshift USDC, Upshift cbBTC, etc.). Mirrors the calculation upshift-app
 * adds on top of vault TVL so the landing page total matches the app total.
 *
 * Returns 0 on any failure — falling back to a smaller number is preferable
 * to crashing the marketing page.
 */
export const fetchIdleCapitalTvl = async (): Promise<number> => {
  try {
    const pools = OLD_LENDING_POOLS.filter(
      (p) => p.toLowerCase() !== KELP_GAIN_VAULT.toLowerCase(),
    );

    const loanResults = await Promise.all(
      pools.map((vault) =>
        augustSdk
          .getVaultLoans({ vault, chainId: 1 })
          .catch((error: unknown) => {
            console.error(`getVaultLoans failed for ${vault}:`, error);
            return [] as IVaultLoan[];
          }),
      ),
    );

    let total = 0;
    loanResults.flat().forEach((loan) => {
      if (!loan?.isIdleCapital) return;
      const price = loan?.principalToken?.price || 0;
      const amount = loan?.principalAmount || 0;
      total += amount * price;
    });

    return total;
  } catch (error) {
    console.error("Error fetching idle capital TVL:", error);
    return 0;
  }
};
