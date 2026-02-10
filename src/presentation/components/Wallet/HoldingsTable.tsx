'use client';

import React, { Fragment, useMemo, useState } from 'react';
import { ArrowsDownUp, DotsThreeVertical, Funnel, MagnifyingGlass } from '@phosphor-icons/react';
import { Skeleton } from '@/presentation/components/ui/Skeleton';
import { formatPct, formatUsd, mask } from '@/presentation/components/Wallet/format';
import { WalletHolding, WalletNetwork } from '@/presentation/components/Wallet/types';

type SortKey = 'value' | 'pnl' | 'change';
type SortDir = 'desc' | 'asc';

function valueUsd(h: WalletHolding) {
  return h.balance * h.priceUsd;
}

function pnlUsd(h: WalletHolding) {
  return valueUsd(h) - h.costBasisUsd;
}

function pnlPct(h: WalletHolding) {
  if (h.costBasisUsd <= 0) return 0;
  return (pnlUsd(h) / h.costBasisUsd) * 100;
}

function uniqueNetworks(holdings: WalletHolding[]) {
  const set = new Set<WalletNetwork>();
  for (const h of holdings) set.add(h.network);
  return Array.from(set.values());
}

function EtchedDivider() {
  return (
    <div className="relative w-full">
      <div className="h-[1px] bg-black/60" />
      <div className="h-[1px] bg-white/[0.03]" />
    </div>
  );
}

function ChangeBadge({ value }: { value: number }) {
  const isPos = value > 0;
  const isNeg = value < 0;
  const cls = isPos
    ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
    : isNeg
      ? 'bg-red-500/10 text-red-500 border-red-500/20'
      : 'bg-white/[0.03] text-white/50 border-white/10';
  return (
    <span
      className={['text-[10px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap', cls].join(
        ' ',
      )}
    >
      {formatPct(value)}
    </span>
  );
}

export function HoldingsTable({
  holdings,
  loading,
  privateMode,
}: {
  holdings: WalletHolding[];
  loading?: boolean;
  privateMode: boolean;
}) {
  const networks = useMemo(() => ['Todos', ...uniqueNetworks(holdings)] as const, [holdings]);
  const [query, setQuery] = useState('');
  const [network, setNetwork] = useState<(typeof networks)[number]>('Todos');
  const [hideDust, setHideDust] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>('value');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const dustMin = 25;
    const filtered = holdings.filter((h) => {
      if (network !== 'Todos' && h.network !== network) return false;
      if (hideDust && valueUsd(h) < dustMin) return false;
      if (!q) return true;
      return (
        h.symbol.toLowerCase().includes(q) ||
        h.name.toLowerCase().includes(q) ||
        h.network.toLowerCase().includes(q)
      );
    });

    const factor = sortDir === 'desc' ? -1 : 1;
    filtered.sort((a, b) => {
      const va = sortKey === 'value' ? valueUsd(a) : sortKey === 'pnl' ? pnlUsd(a) : a.change24hPct;
      const vb = sortKey === 'value' ? valueUsd(b) : sortKey === 'pnl' ? pnlUsd(b) : b.change24hPct;
      if (va === vb) return 0;
      return va > vb ? -1 * factor : 1 * factor;
    });

    return filtered;
  }, [holdings, hideDust, network, query, sortDir, sortKey]);

  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-5">
        <div className="flex items-center justify-between mb-5 px-1">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 bg-white/10" />
            <Skeleton className="h-3 w-52 bg-white/5" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-52 bg-white/10 rounded-lg" />
            <Skeleton className="h-9 w-24 bg-white/10 rounded-lg" />
          </div>
        </div>
        <div className="rounded-lg border border-[#2A2A2D]/60 bg-[#141416]/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="p-4 space-y-2">
            <Skeleton className="h-10 w-full bg-white/5 rounded-xl" />
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
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-5 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-white tracking-tight">Posicoes</h3>
            <span className="text-[#6B6B70] text-xs font-medium">({rows.length})</span>
          </div>
          <p className="text-[#6B6B70] text-[11px] mt-0.5 font-medium tracking-tight">
            Preco, custo medio, P&L (nao realizado) e exposicao por rede
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative group">
            <MagnifyingGlass
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B70] group-focus-within:text-white transition-colors"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar ativo, rede..."
              className="bg-[#141416]/50 border border-[#2A2A2D] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder:text-[#6B6B70] focus:outline-none focus:border-white/10 transition-all min-w-[220px]"
            />
          </div>

          <button
            onClick={() => setHideDust((v) => !v)}
            className={[
              'flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-[#919193] hover:text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]',
              hideDust
                ? 'border-emerald-500/30 bg-emerald-500/10'
                : 'border-[#2A2A2D] bg-[#141416]/50 hover:bg-[#2A2A2D]',
            ].join(' ')}
            title="Ocultar valores pequenos"
          >
            <Funnel size={16} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            <span className="text-xs font-semibold">{hideDust ? 'Sem poeira' : 'Com poeira'}</span>
          </button>

          <button
            onClick={() =>
              setSortKey((k) => (k === 'value' ? 'pnl' : k === 'pnl' ? 'change' : 'value'))
            }
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#2A2A2D] bg-[#141416]/50 hover:bg-[#2A2A2D] transition-all text-[#919193] hover:text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            title="Alternar criterio de ordenacao"
          >
            <ArrowsDownUp size={16} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            <span className="text-xs font-semibold">
              Ordenar: {sortKey === 'value' ? 'Valor' : sortKey === 'pnl' ? 'P&L' : '24h'}
            </span>
          </button>

          <button
            onClick={() => setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'))}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#2A2A2D] bg-[#141416]/50 hover:bg-[#2A2A2D] transition-all text-[#919193] hover:text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            title="Inverter ordem"
          >
            <span className="text-xs font-semibold">{sortDir === 'desc' ? 'Desc' : 'Asc'}</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {networks.map((n) => (
          <button
            key={n}
            onClick={() => setNetwork(n)}
            className={[
              'px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-[0.18em] transition-colors',
              network === n
                ? 'bg-white text-black border-white shadow-[0_6px_18px_rgba(0,0,0,0.4)]'
                : 'bg-[#141416]/40 border-[#2A2A2D] text-white/40 hover:text-white hover:bg-[#1c1c1f] hover:border-white/10',
            ].join(' ')}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-[#2A2A2D]/60 bg-[#141416]/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1B1B1D]/20">
                <th className="text-left py-3 px-4 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Ativo
                </th>
                <th className="text-left py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em] hidden md:table-cell">
                  Rede
                </th>
                <th className="text-right py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Saldo
                </th>
                <th className="text-right py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em] hidden lg:table-cell">
                  Preco
                </th>
                <th className="text-right py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  Valor
                </th>
                <th className="text-center py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  24h
                </th>
                <th className="text-right py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em] hidden xl:table-cell">
                  Custo
                </th>
                <th className="text-right py-3 px-2 text-[#6B6B70] text-[10px] font-bold uppercase tracking-[0.1em]">
                  P&L
                </th>
                <th className="py-3 px-4 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((h, idx) => {
                const v = valueUsd(h);
                const pnl = pnlUsd(h);
                const pnlP = pnlPct(h);
                const pnlCls =
                  pnl > 0 ? 'text-emerald-400' : pnl < 0 ? 'text-red-400' : 'text-white/60';
                return (
                  <Fragment key={`${h.symbol}-${h.network}-${h.lastActivityISO}`}>
                    <tr className="group hover:bg-white/[0.02] transition-colors relative">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3 min-w-[220px]">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                            <span className="text-[11px] font-black text-white/70">
                              {h.symbol.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-white/90 font-semibold text-[13px] tracking-tight truncate">
                                {h.name}
                              </span>
                              <span className="text-[10px] font-bold text-white/30">
                                {h.symbol}
                              </span>
                              {(h.tags ?? []).includes('Staking') && (
                                <span className="text-[9px] font-black uppercase tracking-[0.18em] px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                                  Staking
                                </span>
                              )}
                            </div>
                            <div className="text-[#6B6B70] text-[10px] font-medium">
                              Ult. atividade{' '}
                              {new Date(h.lastActivityISO).toLocaleDateString('pt-BR')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 hidden md:table-cell">
                        <span className="inline-flex px-2 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-bold text-white/50">
                          {h.network}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="text-white/90 font-bold text-xs">
                          {mask(
                            h.balance.toLocaleString('en-US', { maximumFractionDigits: 6 }),
                            privateMode,
                          )}{' '}
                          <span className="text-[#6B6B70] text-[9px] font-medium">{h.symbol}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right hidden lg:table-cell">
                        <div className="text-white/80 font-semibold text-xs">
                          {mask(formatUsd(h.priceUsd), privateMode)}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="text-white/90 font-bold text-xs">
                          {mask(formatUsd(v), privateMode)}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <ChangeBadge value={h.change24hPct} />
                      </td>
                      <td className="py-3 px-2 text-right hidden xl:table-cell">
                        <div className="text-white/60 font-semibold text-xs">
                          {mask(formatUsd(h.costBasisUsd), privateMode)}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className={['font-bold text-xs', pnlCls].join(' ')}>
                          {pnl >= 0 ? '+' : ''}
                          {mask(formatUsd(pnl), privateMode)}
                        </div>
                        <div className="text-[10px] font-bold text-white/30">
                          {pnlP >= 0 ? '+' : ''}
                          {pnlP.toFixed(2)}%
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <button className="p-1.5 text-[#6B6B70] hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                          <DotsThreeVertical size={16} weight="bold" />
                        </button>
                      </td>
                    </tr>
                    {idx < rows.length - 1 && (
                      <tr>
                        <td colSpan={9} className="p-0">
                          <EtchedDivider />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-10 px-4">
                    <div className="flex flex-col items-center justify-center gap-2 opacity-40">
                      <MagnifyingGlass size={28} weight="light" className="text-white" />
                      <span className="text-[11px] text-white uppercase font-black tracking-[0.2em] text-center">
                        Nenhum resultado
                      </span>
                      <span className="text-[11px] text-white/40 font-medium text-center">
                        Ajuste os filtros (rede/poeira) ou a busca.
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
