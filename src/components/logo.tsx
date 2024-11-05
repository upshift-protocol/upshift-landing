"use client";

import { useThemeMode } from "@/stores/theme";
import Image from "next/image";

export default function Logo({
  height = 60,
  width = 120,
}: {
  height?: number;
  width?: number;
}) {
  const { isDark } = useThemeMode();
  return (
    <Image
      src={`/assets/logos/upshift-wordmark-${isDark ? "color" : "black-color"}.svg`}
      alt="Upshift Finance Logo"
      width={width}
      height={height}
    />
  );
}
