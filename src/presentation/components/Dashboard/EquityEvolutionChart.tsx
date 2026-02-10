'use client';

import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CaretDown, ChartLineUp, CurrencyBtc, CurrencyEth, Diamond } from '@phosphor-icons/react';
import { Skeleton } from '@/presentation/components/ui/Skeleton';

// Mock data generator for equity evolution
const generateData = (days: number) => {
  const data = [];
  let equity = 12400; // Starting around 12.4k as in image

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));

    // Random walk
    equity += (Math.random() - 0.4) * 300;

    data.push({
      date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      equity: Math.max(12000, equity), // Ensure positive
    });
  }
  return data;
};

export const EquityEvolutionChart = ({ loading }: { loading?: boolean }) => {
  // Fixed view for now as per image reference (approx 7 days visible)
  const data = useMemo(() => generateData(7), []);

  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-1/2">
            <div className="flex items-center gap-3 mb-2">
              <Skeleton className="h-4 w-24 bg-white/10" />
              <Skeleton className="h-4 w-12 bg-white/10" />
            </div>
            <Skeleton className="h-8 w-40 bg-white/10" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-24 bg-white/10 rounded-lg" />
            <Skeleton className="h-8 w-24 bg-white/10 rounded-lg" />
          </div>
        </div>
        <div className="flex-1 w-full min-h-0 relative mt-4">
          <Skeleton className="w-full h-full bg-white/5 rounded-xl" />
        </div>
        <div className="border-t border-[#2A2A2D] pt-3 mt-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-3">
                <Skeleton className="w-8 h-8 rounded-full bg-white/10" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-20 bg-white/10" />
                  <Skeleton className="h-2 w-16 bg-white/5" />
                </div>
              </div>
              <Skeleton className="h-8 w-24 bg-white/5" />
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-3">
                <Skeleton className="w-8 h-8 rounded-full bg-white/10" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-20 bg-white/10" />
                  <Skeleton className="h-2 w-16 bg-white/5" />
                </div>
              </div>
              <Skeleton className="h-8 w-24 bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[#919193] text-sm font-medium">Meu Portfólio</h3>
            <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
              +4.3%
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white tracking-tight">13,200.50</span>
            <span className="text-[#919193] text-sm font-medium">USD</span>
          </div>
        </div>

        <div className="flex bg-[#141416] p-1 rounded-lg border border-[#2A2A2D]">
          <button className="px-3 py-1.5 text-xs font-medium text-[#919193] hover:text-white transition-colors">
            Principais Ativos
          </button>
          <button className="px-3 py-1.5 text-xs font-bold bg-[#2A2A2D] text-white rounded shadow-sm border border-[#3A3A3D] flex items-center gap-1.5">
            <ChartLineUp size={14} weight="bold" />
            Gráficos
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 w-full min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
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
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B6B70', fontSize: 10, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B6B70', fontSize: 10, fontWeight: 500 }}
              tickFormatter={(val) => `${(val / 1000).toFixed(1)}k`}
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
              formatter={(value: unknown) => [`$${Number(value).toFixed(2)}`, 'Valor']}
            />
            <Area
              type="monotone"
              dataKey="equity"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEquity)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Assets List Section */}
      <div className="border-t border-[#2A2A2D] pt-3 mt-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">Ativos</h3>
            <span className="text-[#6B6B70] text-xs font-medium">(4)</span>
          </div>
          <button className="flex items-center gap-1.5 px-2 py-1 rounded border border-[#2A2A2D] bg-[#141416] text-[10px] font-bold text-[#919193] hover:text-white transition-colors">
            Ordenar por <CaretDown size={10} weight="bold" />
          </button>
        </div>

        <div className="space-y-2">
          {/* Ethereum */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 min-w-[120px]">
              <div className="w-8 h-8 rounded-full bg-[#627EEA]/10 border border-[#627EEA]/20 flex items-center justify-center text-[#627EEA]">
                <CurrencyEth size={16} weight="fill" />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold">Ethereum</h4>
                <p className="text-[#6B6B70] text-[10px]">2.301 ETH</p>
              </div>
            </div>

            {/* Sparkline (Green) */}
            <div className="h-8 w-24 hidden sm:block">
              <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0,25 C20,25 30,10 50,15 C70,20 80,5 100,2"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,25 C20,25 30,10 50,15 C70,20 80,5 100,2 V30 H0 Z"
                  fill="url(#gradient-eth)"
                  fillOpacity="0.1"
                  stroke="none"
                />
                <defs>
                  <linearGradient id="gradient-eth" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="text-right min-w-[100px]">
              <div className="flex items-center justify-end gap-2 mb-0.5">
                <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                  +8.5%
                </span>
                <span className="text-white font-bold text-xs">7,656.34 USD</span>
              </div>
            </div>
          </div>

          {/* Bitcoin */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 min-w-[120px]">
              <div className="w-8 h-8 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/20 flex items-center justify-center text-[#F7931A]">
                <CurrencyBtc size={16} weight="fill" />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold">Bitcoin</h4>
                <p className="text-[#6B6B70] text-[10px]">0.050 BTC</p>
              </div>
            </div>

            {/* Sparkline (Green) */}
            <div className="h-8 w-24 hidden sm:block">
              <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0,20 C20,22 40,15 60,18 C80,10 90,5 100,3"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="text-right min-w-[100px]">
              <div className="flex items-center justify-end gap-2 mb-0.5">
                <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                  +3.3%
                </span>
                <span className="text-white font-bold text-xs">3,390.15 USD</span>
              </div>
            </div>
          </div>

          {/* BNB */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 min-w-[120px]">
              <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F]">
                <CurrencyBtc size={16} weight="fill" />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold">BNB</h4>
                <p className="text-[#6B6B70] text-[10px]">2.74 BNB</p>
              </div>
            </div>

            {/* Sparkline (Red) */}
            <div className="h-8 w-24 hidden sm:block">
              <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0,5 C20,5 30,15 50,12 C70,20 80,25 100,28"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="text-right min-w-[100px]">
              <div className="flex items-center justify-end gap-2 mb-0.5">
                <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-red-500/20">
                  -4.1%
                </span>
                <span className="text-white font-bold text-xs">1,583.28 USD</span>
              </div>
            </div>
          </div>

          {/* Tether */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 min-w-[120px]">
              <div className="w-8 h-8 rounded-full bg-[#26A17B]/10 border border-[#26A17B]/20 flex items-center justify-center text-[#26A17B]">
                <Diamond size={16} weight="fill" />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold">Tether USDT</h4>
                <p className="text-[#6B6B70] text-[10px]">924.46 USDT</p>
              </div>
            </div>

            {/* Sparkline (Flat) */}
            <div className="h-8 w-24 hidden sm:block">
              <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0,15 C20,18 40,12 60,16 C80,14 90,15 100,15"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="text-right min-w-[100px]">
              <div className="flex items-center justify-end gap-2 mb-0.5">
                <span className="bg-gray-500/10 text-gray-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-gray-500/20">
                  0.0%
                </span>
                <span className="text-white font-bold text-xs">924.19 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
