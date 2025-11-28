import { NextResponse } from "next/server";
import augustSdk from "@/config/august-sdk";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get("symbol");

    if (!symbol) {
      return NextResponse.json(
        { error: "Symbol parameter is required", status: 400 },
        { status: 400 },
      );
    }

    const price = await augustSdk.getPrice(symbol);

    return NextResponse.json({
      data: price,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching price:", error);
    return NextResponse.json(
      {
        data: 0,
        status: 200,
        warning:
          error instanceof Error
            ? `Price fetch failed: ${error.message}`
            : "Price fetch failed",
      },
      { status: 200 },
    );
  }
}
