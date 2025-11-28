import { NextResponse } from "next/server";
import augustSdk from "@/config/august-sdk";

export async function GET() {
  try {
    const vaults = await augustSdk.getVaults({
      loans: true,
      allocations: false,
    });

    return NextResponse.json({
      data: vaults || [],
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching vaults:", error);
    return NextResponse.json(
      {
        data: [],
        status: 200,
        warning:
          error instanceof Error
            ? `Some vaults may be unavailable: ${error.message}`
            : "Some vaults may be unavailable",
      },
      { status: 200 },
    );
  }
}
