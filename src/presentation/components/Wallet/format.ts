export function formatUsd(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

export function formatPct(value: number) {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function mask(value: string, privateMode: boolean) {
  return privateMode ? '****' : value;
}

export function shortenHash(hash: string, left = 6, right = 4) {
  if (hash.length <= left + right + 3) return hash;
  return `${hash.slice(0, left)}...${hash.slice(-right)}`;
}
