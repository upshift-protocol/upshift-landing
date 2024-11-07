"use client";

import Image from "next/image";

export default function Logo({
  height = 60,
  width = 120,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <Image
      src={`/assets/logos/upshift-wordmark-color.svg`}
      alt="Upshift Finance Logo"
      width={width}
      height={height}
    />
  );
}
