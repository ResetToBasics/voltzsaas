export type WalletNetwork = 'Ethereum' | 'BSC' | 'Arbitrum' | 'Polygon' | 'Solana';

export type WalletPeriod = '1D' | '7D' | '30D' | 'YTD';

export type WalletHolding = {
  symbol: string;
  name: string;
  network: WalletNetwork;
  balance: number;
  priceUsd: number;
  change24hPct: number;
  costBasisUsd: number;
  tags?: string[];
  lastActivityISO: string;
};

export type WalletTransactionType =
  | 'Deposit'
  | 'Withdraw'
  | 'Buy'
  | 'Sell'
  | 'Swap'
  | 'Stake'
  | 'Unstake'
  | 'Reward'
  | 'Fee';

export type WalletTransactionStatus = 'Success' | 'Pending' | 'Failed';

export type WalletTransaction = {
  id: string;
  type: WalletTransactionType;
  status: WalletTransactionStatus;
  network: WalletNetwork;
  assetSymbol: string;
  assetAmount: number;
  usdValue: number;
  feeUsd?: number;
  txHash: string;
  timestampISO: string;
  note?: string;
};

export type WalletAddress = {
  id: string;
  label: string;
  network: WalletNetwork;
  address: string;
  explorerBaseUrl: string;
};
