'use client';

import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { TrendUp } from '@phosphor-icons/react';
import { Skeleton } from '@/presentation/components/ui/Skeleton';
import { formatUsd, mask } from '@/presentation/components/Wallet/format';
import { WalletPeriod } from '@/presentation/components/Wallet/types';

type Point = {
  label: string;
  netWorth: number;
};

function generateNetWorth(points: number) {
  const out: Point[] = [];
  let value = 13200;
  for (let i = 0; i < points; i++) {
    value += (Math.random() - 0.42) * 220;
    out.push({
      label: String(i + 1),
      netWorth: Math.max(9800, value),
    });
  }
  return out;
}

function pointsForPeriod(period: WalletPeriod) {
  switch (period) {
    case '1D':
      return 24;
    case '7D':
      return 14;
    case '30D':
      return 30;
    case 'YTD':
      return 40;
    default:
      return 30;
  }
}

export function NetWorthCard({
  loading,
  period,
  privateMode,
}: {
  loading?: boolean;
  period: WalletPeriod;
  privateMode: boolean;
}) {
  const data = useMemo(() => generateNetWorth(pointsForPeriod(period)), [period]);
  const netWorth = data[data.length - 1]?.netWorth ?? 0;
  const netWorthPrev = data[Math.max(0, data.length - 2)]?.netWorth ?? netWorth;
  const delta = netWorth - netWorthPrev;
  const deltaPct = netWorthPrev ? (delta / netWorthPrev) * 100 : 0;

  const realized = 320.5;
  const unrealized = 1150.5;
  const fees30d = 10.4;
  const netFlow = 540.0;

  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-1/2">
            <div className="flex items-center gap-3 mb-2">
              <Skeleton className="h-4 w-32 bg-white/10" />
              <Skeleton className="h-4 w-12 bg-white/10" />
            </div>
            <Skeleton className="h-9 w-48 bg-white/10" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-28 bg-white/10 rounded-lg" />
            <Skeleton className="h-8 w-28 bg-white/10 rounded-lg" />
          </div>
        </div>
        <div className="flex-1 w-full min-h-0 relative">
          <Skeleton className="w-full h-full bg-white/5 rounded-xl" />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Skeleton className="h-14 bg-white/5 rounded-xl" />
          <Skeleton className="h-14 bg-white/5 rounded-xl" />
          <Skeleton className="h-14 bg-white/5 rounded-xl" />
          <Skeleton className="h-14 bg-white/5 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[#919193] text-sm font-medium">Valor da Carteira</h3>
            <span
              className={[
                'text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/5',
                deltaPct >= 0
                  ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                  : 'bg-red-500/10 text-red-500 border-red-500/20',
              ].join(' ')}
            >
              {deltaPct >= 0 ? '+' : ''}
              {deltaPct.toFixed(2)}%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white tracking-tight">
              {mask(formatUsd(netWorth), privateMode)}
            </span>
            <span className="text-[#919193] text-sm font-medium">USD</span>
          </div>
          <div className="text-[11px] text-white/30 font-medium mt-1 flex items-center gap-2">
            <TrendUp size={14} className="text-indigo-300" weight="bold" />
            <span>
              {delta >= 0 ? '+' : ''}
              {mask(formatUsd(delta), privateMode)} vs. ultimo ponto
            </span>
          </div>
        </div>

        <div className="flex bg-[#141416] p-1 rounded-lg border border-[#2A2A2D]">
          <button className="px-3 py-1.5 text-xs font-bold bg-[#2A2A2D] text-white rounded shadow-sm border border-[#3A3A3D]">
            Net Worth
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-[#919193] hover:text-white transition-colors">
            Cashflow
          </button>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="colorNetWorth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
              stroke="#2A2A2D"
              opacity={0.3}
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B6B70', fontSize: 10, fontWeight: 500 }}
              dy={10}
              hide={period === '1D'}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B6B70', fontSize: 10, fontWeight: 500 }}
              tickFormatter={(val) => `${(Number(val) / 1000).toFixed(1)}k`}
              domain={['dataMin - 200', 'dataMax + 200']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1B1B1D',
                border: '1px solid #2A2A2D',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
              itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}
              labelStyle={{ display: 'none' }}
              formatter={(value: unknown) => [formatUsd(Number(value)), 'Net Worth']}
            />
            <Area
              type="monotone"
              dataKey="netWorth"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorNetWorth)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="rounded-xl border border-[#2A2A2D] bg-[#141416]/40 p-3">
          <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">
            Realizado
          </div>
          <div className="text-white font-bold text-sm">
            {mask(formatUsd(realized), privateMode)}
          </div>
          <div className="text-[10px] text-white/30 font-medium mt-1">Lucro consolidado</div>
        </div>
        <div className="rounded-xl border border-[#2A2A2D] bg-[#141416]/40 p-3">
          <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">
            Nao realizado
          </div>
          <div className="text-white font-bold text-sm">
            {mask(formatUsd(unrealized), privateMode)}
          </div>
          <div className="text-[10px] text-white/30 font-medium mt-1">P&L em aberto</div>
        </div>
        <div className="rounded-xl border border-[#2A2A2D] bg-[#141416]/40 p-3">
          <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">
            Taxas (30D)
          </div>
          <div className="text-white font-bold text-sm">
            {mask(formatUsd(fees30d), privateMode)}
          </div>
          <div className="text-[10px] text-white/30 font-medium mt-1">Gas + exchange fees</div>
        </div>
        <div className="rounded-xl border border-[#2A2A2D] bg-[#141416]/40 p-3">
          <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">
            Fluxo liquido
          </div>
          <div className="text-white font-bold text-sm">
            {mask(formatUsd(netFlow), privateMode)}
          </div>
          <div className="text-[10px] text-white/30 font-medium mt-1">Depositos - saques</div>
        </div>
      </div>
    </div>
  );
}
