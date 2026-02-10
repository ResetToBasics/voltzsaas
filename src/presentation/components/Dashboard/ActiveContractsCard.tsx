'use client';

import React from 'react';
import {
  CaretLeft,
  CaretRight,
  CaretDown,
  CurrencyBtc,
  Globe,
  CheckCircle,
  ArrowUpRight,
  Coins,
} from '@phosphor-icons/react';

const StakingCard = ({
  symbol,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name,
  amount,
  apr,
  earnings,
  earningsUnit,
  color,
  icon,
}: {
  symbol: string;
  name: string;
  amount: string;
  apr: string;
  earnings: string;
  earningsUnit: string;
  color: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-[#141416]/50 border border-[#2A2A2D] rounded-xl p-4 relative group hover:border-[#3A3A3D] transition-all">
    <div className="flex justify-between items-start mb-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${color}`}>
        {icon}
      </div>
      <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-500/20">
        APR {apr}
      </span>
    </div>

    <div className="mb-3">
      <h3 className="text-white font-bold text-sm leading-tight">{symbol}</h3>
      <p className="text-[#919193] text-xs mt-0.5">{amount}</p>
    </div>

    {/* Mini Chart SVG */}
    <div className="h-10 w-full mb-3 opacity-80">
      <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${symbol}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,35 C20,35 20,10 40,25 C60,40 70,5 100,10"
          fill="none"
          stroke="#34d399"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0,35 C20,35 20,10 40,25 C60,40 70,5 100,10 V40 H0 Z"
          fill={`url(#gradient-${symbol})`}
          stroke="none"
        />
      </svg>
    </div>

    <div className="flex justify-between items-center pt-3 border-t border-white/5">
      <span className="text-[#6B6B70] text-[10px] font-medium uppercase tracking-wide">
        Rendimento Diário
      </span>
      <span className="text-white font-bold text-xs">
        {earnings} <span className="text-[#6B6B70] text-[9px]">{earningsUnit}</span>
      </span>
    </div>
  </div>
);

const HistoryItem = ({
  type,
  date,
  tag,
  amount,
  unit,
  icon,
  statusColor,
}: {
  type: string;
  date: string;
  tag: string;
  amount: string;
  unit: string;
  icon: React.ReactNode;
  statusColor?: string;
}) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#1E1E21] border border-white/5 flex items-center justify-center text-[#919193] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-white font-semibold text-xs mb-0.5">{type}</div>
        <div className="text-[#6B6B70] text-[10px] font-medium">{date}</div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div
        className={`hidden sm:block text-[10px] font-bold px-2 py-0.5 rounded-md ${
          tag === 'Success'
            ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
            : 'bg-[#2A2A2D] text-[#919193] border border-white/5'
        }`}
      >
        {tag}
      </div>
      <div className="text-right">
        <div className="text-white font-bold text-xs flex items-center justify-end gap-1">
          {statusColor && <div className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />}
          {amount} <span className="text-[#6B6B70] text-[9px] font-medium">{unit}</span>
        </div>
      </div>
    </div>
  </div>
);

import { Skeleton } from '@/presentation/components/ui/Skeleton';

// ... (imports remain)

export const ActiveContractsCard = ({ loading }: { loading?: boolean }) => {
  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] flex flex-col h-full overflow-hidden">
        <div className="flex-1 p-4 overflow-hidden">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Skeleton className="h-4 w-32 bg-white/10" />
              <Skeleton className="h-4 w-12 bg-white/10" />
            </div>
            <div className="flex items-end justify-between mb-3">
              <Skeleton className="h-10 w-48 bg-white/10" />
              <Skeleton className="h-6 w-32 bg-white/5 rounded-lg" />
            </div>
            <div className="flex gap-3 overflow-hidden pb-1">
              <Skeleton className="h-10 w-full bg-white/5 rounded-xl flex-1" />
              <Skeleton className="h-10 w-full bg-white/5 rounded-xl flex-1" />
              <Skeleton className="h-10 w-full bg-white/5 rounded-xl flex-1" />
            </div>
          </div>
          <div className="h-px w-full bg-[#2A2A2D] mb-4" />
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24 bg-white/10" />
              <Skeleton className="h-3 w-8 bg-white/5" />
            </div>
            <div className="flex gap-1">
              <Skeleton className="w-6 h-6 rounded bg-white/5" />
              <Skeleton className="w-6 h-6 rounded bg-white/5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Skeleton className="h-32 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-32 w-full bg-white/5 rounded-xl" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <Skeleton className="h-4 w-32 bg-white/10" />
              <Skeleton className="h-5 w-16 bg-white/5 rounded" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
              <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
              <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] flex flex-col h-full overflow-hidden">
      {/* Content Container */}
      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        {/* Top Section: Balance & Actions */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#919193] text-sm font-medium">Tokens em Staking</span>
            <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
              +2.5%
            </span>
          </div>

          <div className="flex items-end justify-between mb-3">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white tracking-tight">2,279.02</span>
              <span className="text-[#919193] text-sm font-medium">USD</span>
            </div>

            <div className="flex bg-[#141416] p-1 rounded-lg border border-[#2A2A2D]">
              {['1D', '7D', '14D', '31D'].map((time, i) => (
                <button
                  key={time}
                  className={`px-2.5 py-1 text-[10px] font-bold rounded ${
                    i === 1
                      ? 'bg-[#2A2A2D] text-white shadow-sm'
                      : 'text-[#6B6B70] hover:text-white'
                  } transition-colors`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 -mb-1 custom-scrollbar">
            <button className="px-4 py-2.5 bg-[#2A2A2D] hover:bg-[#323236] text-white text-xs font-bold rounded-xl border border-[#3A3A3D] whitespace-nowrap transition-colors flex-1">
              Resgatar 10.03 USDT
            </button>
            <button className="px-4 py-2.5 bg-transparent hover:bg-[#2A2A2D]/50 text-white text-xs font-bold rounded-xl border border-[#2A2A2D] whitespace-nowrap transition-colors flex-1">
              Fazer Staking
            </button>
            <button className="px-4 py-2.5 bg-transparent hover:bg-[#2A2A2D]/50 text-white text-xs font-bold rounded-xl border border-[#2A2A2D] whitespace-nowrap transition-colors flex-1">
              Retirar Staking
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-[#2A2A2D] mb-4" />

        {/* Section Header: My Stakings */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">Meus Stakings</h3>
            <span className="text-[#6B6B70] text-xs font-medium">(3)</span>
          </div>
          <div className="flex gap-1">
            <button className="w-6 h-6 flex items-center justify-center rounded border border-[#2A2A2D] text-[#919193] hover:text-white hover:bg-[#2A2A2D] transition-colors">
              <CaretLeft size={12} weight="bold" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-[#2A2A2D] text-[#919193] hover:text-white hover:bg-[#2A2A2D] transition-colors">
              <CaretRight size={12} weight="bold" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <StakingCard
            symbol="BNB"
            name="Binance Coin"
            amount="2.15 BNB"
            apr="24.27%"
            earnings="15.58"
            earningsUnit="USDT"
            color="bg-[#F3BA2F]"
            icon={<CurrencyBtc size={18} weight="fill" className="text-white" />}
          />
          <StakingCard
            symbol="Stargate"
            name="Stargate Finance"
            amount="203.26 STG"
            apr="6.16%"
            earnings="1.20"
            earningsUnit="USDT"
            color="bg-black border border-[#333]"
            icon={<Globe size={18} weight="duotone" className="text-white" />}
          />
        </div>

        {/* History Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">Staking History</h3>
              <span className="text-[#6B6B70] text-[10px] font-medium">(22)</span>
            </div>
            <button className="flex items-center gap-1.5 px-2 py-1 rounded border border-[#2A2A2D] bg-[#141416] text-[10px] font-bold text-[#919193] hover:text-white transition-colors">
              Sort By <CaretDown size={10} weight="bold" />
            </button>
          </div>

          <div className="space-y-2">
            <HistoryItem
              type="Flexible Staking"
              date="05.04.2024"
              tag="Flexible"
              amount="350.50"
              unit="USDT"
              icon={<Coins size={16} weight="duotone" />}
              statusColor="bg-emerald-500"
            />
            <HistoryItem
              type="Claimed Reward"
              date="04.04.2024"
              tag="Success"
              amount="10.25"
              unit="USDT"
              icon={<CheckCircle size={16} weight="duotone" />}
              statusColor="bg-emerald-500"
            />
            <HistoryItem
              type="Unstaked"
              date="02.04.2024"
              tag="Success"
              amount="1.120"
              unit="BNB"
              icon={<ArrowUpRight size={16} weight="duotone" />}
              statusColor="bg-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
