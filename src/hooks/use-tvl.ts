"use client";

import { useEffect, useState } from "react";
import { IWSTokenEntry, IVaultLoan, IVault } from "@augustdigital/sdk";
import { INCLUDE_IDLE_CAPITAL_IN_TVL } from "@/utils/constants";

interface UseTVLReturn {
  totalSupplied: number | null;
  isLoading: boolean;
  error: Error | null;
}

export function useTVL(): UseTVLReturn {
  const [totalSupplied, setTotalSupplied] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vaultsResponse = await fetch("/api/vaults");
        if (!vaultsResponse.ok) {
          throw new Error(`HTTP error! status: ${vaultsResponse.status}`);
        }
        const vaultsResult = await vaultsResponse.json();
        const allPools: IVault[] = vaultsResult.data || [];

        if (!allPools?.length) {
          setTotalSupplied(0);
          setIsLoading(false);
          return;
        }

        const tokens: IWSTokenEntry[] = await Promise.all(
          allPools.map(async (p: IVault) => {
            const symbol = p.depositAssets?.[0]?.symbol;
            let price = 0;

            if (symbol) {
              try {
                const priceResponse = await fetch(
                  `/api/price?symbol=${symbol}`,
                );
                if (priceResponse.ok) {
                  const priceResult = await priceResponse.json();
                  price = priceResult.data || 0;
                }
              } catch {
                // Ignore price fetch errors, use 0
              }
            }

            return {
              ...p.depositAssets?.[0],
              price,
            };
          }),
        );

        let total = 0;
        allPools.forEach((pool: IVault) => {
          const foundToken = tokens.find(
            (t) => t.address === pool?.depositAssets?.[0]?.address,
          );
          if (foundToken) {
            total +=
              Number(pool?.totalAssets?.normalized || 0) *
              (foundToken?.price || 0);
          }
        });

        if (INCLUDE_IDLE_CAPITAL_IN_TVL) {
          allPools.forEach((pool: IVault) => {
            if (pool.loans && Array.isArray(pool.loans)) {
              pool.loans.forEach((loan: IVaultLoan) => {
                if (loan.isIdleCapital) {
                  const foundLoanToken = tokens.find(
                    (t) => t.address === loan?.principalToken?.address,
                  );
                  if (foundLoanToken) {
                    total +=
                      (loan.principalAmount || 0) *
                      (foundLoanToken?.price || 0);
                  }
                }
              });
            }
          });
        }

        setTotalSupplied(total);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        console.error("Error fetching TVL data:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { totalSupplied, isLoading, error };
}
