'use client';

import { useEffect, useMemo, useState } from 'react';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { StatCard } from '@/presentation/components/Dashboard/StatCard';
import { AllocationCard } from '@/presentation/components/Wallet/AllocationCard';
import { AddressesCard } from '@/presentation/components/Wallet/AddressesCard';
import { HoldingsTable } from '@/presentation/components/Wallet/HoldingsTable';
import { NetWorthCard } from '@/presentation/components/Wallet/NetWorthCard';
import { TransactionsCard } from '@/presentation/components/Wallet/TransactionsCard';
import { WalletHeader } from '@/presentation/components/Wallet/WalletHeader';
import {
  WalletAddress,
  WalletHolding,
  WalletPeriod,
  WalletTransaction,
} from '@/presentation/components/Wallet/types';

const generateAreaLoop = () =>
  Array.from({ length: 15 }, (_, i) => ({
    value: 40 + Math.sin(i / 2) * 20 + Math.random() * 10,
  }));
const generateBarLoop = () =>
  Array.from({ length: 10 }, () => ({ value: Math.random() * 80 + 20 }));

function money(value: number) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function mask(value: string, privateMode: boolean) {
  return privateMode ? '****' : value;
}

export default function CarteiraPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState<WalletPeriod>('7D');
  const [privateMode, setPrivateMode] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const holdings = useMemo<WalletHolding[]>(
    () => [
      {
        symbol: 'ETH',
        name: 'Ethereum',
        network: 'Ethereum',
        balance: 2.301,
        priceUsd: 3326.12,
        change24hPct: 1.84,
        costBasisUsd: 6650.0,
        tags: ['Core'],
        lastActivityISO: '2026-02-05T16:12:00.000Z',
      },
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        network: 'Ethereum',
        balance: 0.05,
        priceUsd: 67803.0,
        change24hPct: 0.92,
        costBasisUsd: 3120.0,
        tags: ['Core'],
        lastActivityISO: '2026-02-01T09:40:00.000Z',
      },
      {
        symbol: 'BNB',
        name: 'BNB',
        network: 'BSC',
        balance: 2.74,
        priceUsd: 577.6,
        change24hPct: -2.14,
        costBasisUsd: 1740.0,
        tags: ['Staking'],
        lastActivityISO: '2026-02-06T14:22:00.000Z',
      },
      {
        symbol: 'USDT',
        name: 'Tether',
        network: 'BSC',
        balance: 924.46,
        priceUsd: 1.0,
        change24hPct: 0.0,
        costBasisUsd: 924.46,
        tags: ['Stable'],
        lastActivityISO: '2026-02-06T11:03:00.000Z',
      },
      {
        symbol: 'ARB',
        name: 'Arbitrum',
        network: 'Arbitrum',
        balance: 880.0,
        priceUsd: 1.85,
        change24hPct: 3.12,
        costBasisUsd: 1240.0,
        tags: ['L2'],
        lastActivityISO: '2026-01-29T19:18:00.000Z',
      },
      {
        symbol: 'MATIC',
        name: 'Polygon',
        network: 'Polygon',
        balance: 1600.0,
        priceUsd: 0.84,
        change24hPct: -1.02,
        costBasisUsd: 1510.0,
        tags: ['L2'],
        lastActivityISO: '2026-01-22T10:10:00.000Z',
      },
      {
        symbol: 'SOL',
        name: 'Solana',
        network: 'Solana',
        balance: 6.1,
        priceUsd: 142.2,
        change24hPct: 2.65,
        costBasisUsd: 720.0,
        tags: ['Alt'],
        lastActivityISO: '2026-02-03T07:32:00.000Z',
      },
    ],
    [],
  );

  const addresses = useMemo<WalletAddress[]>(
    () => [
      {
        id: 'addr-eth-main',
        label: 'Principal',
        network: 'Ethereum',
        address: '0x72bB9c5e0A5A0b0d9D2cC0f4dF1c8bB8a81a92E1',
        explorerBaseUrl: 'https://etherscan.io/address/',
      },
      {
        id: 'addr-bsc-main',
        label: 'BSC Hot',
        network: 'BSC',
        address: '0xa19b1B7e9b1c9E8a7d1e2d3c4b5a6f7e92814BSC',
        explorerBaseUrl: 'https://bscscan.com/address/',
      },
      {
        id: 'addr-arb-main',
        label: 'Arbitrum',
        network: 'Arbitrum',
        address: '0x2c03A2d0c1a19E1b2C03A2d0c1a19E1b2c03A2d0',
        explorerBaseUrl: 'https://arbiscan.io/address/',
      },
      {
        id: 'addr-poly-main',
        label: 'Polygon',
        network: 'Polygon',
        address: '0x9c55b0D9c55b0D9c55b0D9c55b0D9c55b0D9c55b',
        explorerBaseUrl: 'https://polygonscan.com/address/',
      },
    ],
    [],
  );

  const transactions = useMemo<WalletTransaction[]>(
    () => [
      {
        id: 'tx-1',
        type: 'Deposit',
        status: 'Success',
        network: 'BSC',
        assetSymbol: 'USDT',
        assetAmount: 350.5,
        usdValue: 350.5,
        feeUsd: 0.18,
        txHash: '0x8b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b',
        timestampISO: '2026-02-06T11:03:00.000Z',
        note: 'Deposit via bridge',
      },
      {
        id: 'tx-2',
        type: 'Buy',
        status: 'Success',
        network: 'Ethereum',
        assetSymbol: 'ETH',
        assetAmount: 0.35,
        usdValue: 1164.14,
        feeUsd: 6.2,
        txHash: '0x11bbaaa9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d',
        timestampISO: '2026-02-05T16:12:00.000Z',
        note: 'DCA',
      },
      {
        id: 'tx-3',
        type: 'Stake',
        status: 'Success',
        network: 'BSC',
        assetSymbol: 'BNB',
        assetAmount: 1.12,
        usdValue: 646.91,
        feeUsd: 0.12,
        txHash: '0xa2d0c1a19e1b2c03a2d0c1a19e1b2c03a2d0c1a19e1b2c03a2d0c1a19e1b2c03',
        timestampISO: '2026-02-06T14:22:00.000Z',
        note: 'Flexible staking',
      },
      {
        id: 'tx-4',
        type: 'Reward',
        status: 'Success',
        network: 'BSC',
        assetSymbol: 'USDT',
        assetAmount: 10.25,
        usdValue: 10.25,
        feeUsd: 0.01,
        txHash: '0x5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c',
        timestampISO: '2026-02-06T18:03:00.000Z',
        note: 'Staking reward',
      },
      {
        id: 'tx-5',
        type: 'Swap',
        status: 'Pending',
        network: 'Arbitrum',
        assetSymbol: 'ARB',
        assetAmount: 250,
        usdValue: 462.5,
        feeUsd: 0.22,
        txHash: '0x9d2cc0f4df1c8bb8a81a92e19d2cc0f4df1c8bb8a81a92e19d2cc0f4df1c8bb8',
        timestampISO: '2026-02-07T02:06:00.000Z',
        note: 'ARB -> USDT',
      },
      {
        id: 'tx-6',
        type: 'Fee',
        status: 'Failed',
        network: 'Ethereum',
        assetSymbol: 'ETH',
        assetAmount: 0,
        usdValue: 0,
        feeUsd: 3.75,
        txHash: '0x3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2d5c17a9b0d4b3f2',
        timestampISO: '2026-02-02T10:41:00.000Z',
        note: 'Reverted tx',
      },
    ],
    [],
  );

  const totals = useMemo(() => {
    const totalValue = holdings.reduce((acc, h) => acc + h.balance * h.priceUsd, 0);
    const stakedValue = holdings
      .filter((h) => (h.tags ?? []).includes('Staking'))
      .reduce((acc, h) => acc + h.balance * h.priceUsd, 0);
    const pnl = holdings.reduce((acc, h) => {
      const v = h.balance * h.priceUsd;
      return acc + (v - h.costBasisUsd);
    }, 0);

    const available = Math.max(0, totalValue - stakedValue);
    return { totalValue, stakedValue, available, pnl };
  }, [holdings]);

  const chartArea = useMemo(() => generateAreaLoop(), []);
  const chartBar = useMemo(() => generateBarLoop(), []);

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full bg-[#202022] overflow-hidden">
        <WalletHeader
          selectedPeriod={period}
          onSelectPeriod={setPeriod}
          privateMode={privateMode}
          onTogglePrivateMode={() => setPrivateMode((v) => !v)}
        />

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pb-10">
          <div className="px-4 sm:px-6 lg:px-12 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
            <StatCard
              title="Saldo Total"
              value={mask(money(totals.totalValue), privateMode)}
              change="+4.3%"
              chartType="area"
              chartColor="#10B981"
              data={chartArea}
              loading={isLoading}
            />
            <StatCard
              title="Disponivel"
              value={mask(money(totals.available), privateMode)}
              change="+1.2%"
              chartType="area"
              chartColor="#3B82F6"
              data={chartArea}
              loading={isLoading}
            />
            <StatCard
              title="Em Staking"
              value={mask(money(totals.stakedValue), privateMode)}
              subtitle="Alocado em earn/flexible"
              change="+2.5%"
              chartType="bar"
              chartColor="#F59E0B"
              data={chartBar}
              loading={isLoading}
            />
            <StatCard
              title="P&L (Nao Real.)"
              value={mask(money(totals.pnl), privateMode)}
              changeType={totals.pnl >= 0 ? 'positive' : 'negative'}
              change={totals.pnl >= 0 ? '+8.5%' : '-3.1%'}
              chartType="bar"
              chartColor={totals.pnl >= 0 ? '#10B981' : '#EF4444'}
              data={chartBar}
              loading={isLoading}
            />
          </div>

          <div className="px-4 sm:px-6 lg:px-12 mt-6 grid grid-cols-1 xl:grid-cols-12 gap-4 w-full">
            <div className="xl:col-span-7 h-[480px] sm:h-[520px] xl:h-[560px] min-w-0">
              <NetWorthCard loading={isLoading} period={period} privateMode={privateMode} />
            </div>
            <div className="xl:col-span-5 h-[480px] sm:h-[520px] xl:h-[560px] min-w-0">
              <AllocationCard holdings={holdings} loading={isLoading} privateMode={privateMode} />
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-12 mt-4">
            <HoldingsTable holdings={holdings} loading={isLoading} privateMode={privateMode} />
          </div>

          <div className="px-4 sm:px-6 lg:px-12 mt-4 grid grid-cols-1 xl:grid-cols-12 gap-4 w-full">
            <div className="xl:col-span-7 h-[520px] sm:h-[620px] min-w-0">
              <TransactionsCard
                transactions={transactions}
                loading={isLoading}
                privateMode={privateMode}
              />
            </div>
            <div className="xl:col-span-5 h-[520px] sm:h-[620px] min-w-0">
              <AddressesCard addresses={addresses} loading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
