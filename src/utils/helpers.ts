import { sendGAEvent } from "@next/third-parties/google";

/**
 * @todo move to @augustdigital/sdk
 */
export function formatUsd(value: string | number) {
  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });
  const formatted = formatCurrency.format(Number(value));
  if (formatted.includes(",")) return formatted.split(".")[0];
  return formatted;
}

export function log({
  eventName,
  eventType,
  parameters,
}: {
  eventType: "referral" | "button-click";
  eventName: string;
  parameters?: object;
}) {
  if (typeof window?.safary?.track !== "undefined") {
    window.safary.track({
      eventType: eventType,
      eventName: eventName,
      parameters: parameters,
    });
  }
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (typeof gaId !== "undefined") {
    sendGAEvent("event", eventType, {
      action: eventName,
    });
  }
}
