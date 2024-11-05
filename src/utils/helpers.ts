/**
 * @todo move to @augustdigital/sdk
 */
export function formatUsd(value: string | number) {
  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });
  const formatted = formatCurrency.format(Number(value));
  if (formatted.includes(',')) return formatted.split('.')[0];
  return formatted;
}