'use client';

import React, { useMemo, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { CaretDown, SlidersHorizontal } from '@phosphor-icons/react';
import { Skeleton } from '@/presentation/components/ui/Skeleton';
import { formatUsd, mask } from '@/presentation/components/Wallet/format';
import { WalletHolding, WalletNetwork } from '@/presentation/components/Wallet/types';

type ViewMode = 'Ativos' | 'Redes';

const palette = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#a855f7',
  '#22c55e',
  '#06b6d4',
  '#f97316',
];

function groupBy<T extends string>(holdings: WalletHolding[], keyFn: (h: WalletHolding) => T) {
  const map = new Map<T, number>();
  for (const h of holdings) {
    const k = keyFn(h);
    const v = h.balance * h.priceUsd;
    map.set(k, (map.get(k) ?? 0) + v);
  }
  return Array.from(map.entries()).map(([key, value]) => ({ key, value }));
}

function pct(value: number, total: number) {
  if (total <= 0) return 0;
  return (value / total) * 100;
}

export function AllocationCard({
  holdings,
  loading,
  privateMode,
}: {
  holdings: WalletHolding[];
  loading?: boolean;
  privateMode: boolean;
}) {
  const [view, setView] = useState<ViewMode>('Ativos');
  const total = useMemo(
    () => holdings.reduce((acc, h) => acc + h.balance * h.priceUsd, 0),
    [holdings],
  );

  const byAsset = useMemo(() => {
    const grouped = groupBy(holdings, (h) => h.symbol);
    return grouped
      .sort((a, b) => b.value - a.value)
      .slice(0, 6)
      .map((x) => ({
        label: x.key,
        value: x.value,
      }));
  }, [holdings]);

  const byNetwork = useMemo(() => {
    const grouped = groupBy(holdings, (h) => h.network as WalletNetwork);
    return grouped
      .sort((a, b) => b.value - a.value)
      .map((x) => ({
        label: x.key,
        value: x.value,
      }));
  }, [holdings]);

  const data = view === 'Ativos' ? byAsset : byNetwork;
  const topShare = data[0] ? pct(data[0].value, total) : 0;

  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-1/2">
            <Skeleton className="h-4 w-32 bg-white/10 mb-2" />
            <Skeleton className="h-3 w-44 bg-white/5" />
          </div>
          <Skeleton className="h-8 w-28 bg-white/10 rounded-lg" />
        </div>
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <Skeleton className="w-[180px] h-[180px] rounded-full bg-white/5" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-10 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-10 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-10 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-10 w-full bg-white/5 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[#919193] text-sm font-medium">Alocacao e Exposicao</h3>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/5 bg-white/[0.03] text-white/60">
              Top 1: {topShare.toFixed(1)}%
            </span>
          </div>
          <div className="text-[11px] text-white/30 font-medium">
            Visao por {view === 'Ativos' ? 'ativos' : 'redes'} com valores em USD
          </div>
        </div>

        <button
          onClick={() => setView((v) => (v === 'Ativos' ? 'Redes' : 'Ativos'))}
          className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-[#2A2A2D] bg-[#141416] text-[10px] font-black uppercase tracking-[0.18em] text-white/60 hover:text-white hover:bg-[#1c1c1f] transition-colors"
          title="Alternar visao"
        >
          <SlidersHorizontal size={14} />
          <span className="hidden sm:block">{view}</span>
          <CaretDown size={12} className="text-white/20" />
        </button>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center rounded-xl border border-[#2A2A2D] bg-[#141416]/30">
          <div className="w-full h-full min-h-[220px] p-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1B1B1D',
                    border: '1px solid #2A2A2D',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  }}
                  itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}
                  labelStyle={{ color: '#9CA3AF', fontSize: '11px' }}
                  formatter={(value: unknown) => [
                    privateMode ? '****' : formatUsd(Number(value)),
                    'Valor',
                  ]}
                />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="label"
                  innerRadius={58}
                  outerRadius={84}
                  paddingAngle={2}
                  stroke="#141416"
                  strokeWidth={2}
                  isAnimationActive={false}
                >
                  {data.map((_, idx) => (
                    <Cell key={idx} fill={palette[idx % palette.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-[#2A2A2D] bg-[#141416]/30 p-3 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Distribuicao</span>
              <span className="text-[#6B6B70] text-xs font-medium">({data.length})</span>
            </div>
            <span className="text-[10px] font-bold text-white/30">
              Total: {mask(formatUsd(total), privateMode)}
            </span>
          </div>

          <div className="space-y-2">
            {data.map((item, idx) => {
              const p = pct(item.value, total);
              const color = palette[idx % palette.length];
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#141416]/40 border border-[#2A2A2D] hover:bg-[#141416]/55 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                    <div className="min-w-0">
                      <div className="text-white text-xs font-bold truncate">{item.label}</div>
                      <div className="text-[#6B6B70] text-[10px] font-medium">
                        {p.toFixed(1)}% do total
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-white font-bold text-xs">
                      {mask(formatUsd(item.value), privateMode)}
                    </div>
                    <div className="mt-1 w-[120px] h-1.5 rounded-full bg-black/30 border border-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.min(100, Math.max(0, p))}%`,
                          backgroundColor: color,
                          opacity: 0.75,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
