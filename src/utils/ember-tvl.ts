"use server";

/**
 * Fetches external TVL data and returns the latest value in USD
 * @returns Promise with the latest TVL value as a number, or 0 if error
 */
export const fetchEmberTVL = async (): Promise<number> => {
  try {
    const response = await fetch(
      `https://vaults.api.sui-prod.bluefin.io/api/v1/vaults/tvl-history?limit=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result && result.length > 0) {
      const latestEntry = result[0];
      // Convert from E9 format (nano units) to regular USD
      const tvlUSD = Number(latestEntry.tvlE9) / 1e9;
      return tvlUSD;
    }

    return 0;
  } catch (error) {
    console.error("Error fetching external TVL:", error);
    return 0;
  }
};
