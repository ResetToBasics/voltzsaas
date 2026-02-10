'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Copy,
  Funnel,
  MagnifyingGlass,
  WarningCircle,
} from '@phosphor-icons/react';
import { Skeleton } from '@/presentation/components/ui/Skeleton';
import { formatUsd, mask, shortenHash } from '@/presentation/components/Wallet/format';
import {
  WalletTransaction,
  WalletTransactionStatus,
  WalletTransactionType,
} from '@/presentation/components/Wallet/types';

type Tab = 'Tudo' | 'Trades' | 'Transferencias' | 'Staking';

function statusPill(status: WalletTransactionStatus) {
  if (status === 'Success') {
    return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
  }
  if (status === 'Pending') {
    return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  }
  return 'bg-red-500/10 text-red-500 border-red-500/20';
}

function iconForType(type: WalletTransactionType) {
  switch (type) {
    case 'Deposit':
      return <ArrowDownRight size={16} weight="bold" />;
    case 'Withdraw':
      return <ArrowUpRight size={16} weight="bold" />;
    case 'Buy':
    case 'Sell':
    case 'Swap':
      return <ArrowUpRight size={16} weight="bold" />;
    case 'Stake':
    case 'Unstake':
    case 'Reward':
      return <CheckCircle size={16} weight="duotone" />;
    case 'Fee':
    default:
      return <WarningCircle size={16} weight="duotone" />;
  }
}

function typeToTab(type: WalletTransactionType): Tab {
  if (type === 'Buy' || type === 'Sell' || type === 'Swap') return 'Trades';
  if (type === 'Deposit' || type === 'Withdraw') return 'Transferencias';
  if (type === 'Stake' || type === 'Unstake' || type === 'Reward') return 'Staking';
  return 'Tudo';
}

export function TransactionsCard({
  transactions,
  loading,
  privateMode,
}: {
  transactions: WalletTransaction[];
  loading?: boolean;
  privateMode: boolean;
}) {
  const [tab, setTab] = useState<Tab>('Tudo');
  const [query, setQuery] = useState('');
  const [hideFailed, setHideFailed] = useState(false);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return transactions
      .filter((t) => (hideFailed ? t.status !== 'Failed' : true))
      .filter((t) => (tab === 'Tudo' ? true : typeToTab(t.type) === tab))
      .filter((t) => {
        if (!q) return true;
        return (
          t.assetSymbol.toLowerCase().includes(q) ||
          t.network.toLowerCase().includes(q) ||
          t.type.toLowerCase().includes(q) ||
          t.txHash.toLowerCase().includes(q) ||
          (t.note ?? '').toLowerCase().includes(q)
        );
      })
      .sort((a, b) => (a.timestampISO < b.timestampISO ? 1 : -1));
  }, [hideFailed, query, tab, transactions]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // noop
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] flex flex-col h-full overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="space-y-2">
              <Skeleton className="h-4 w-40 bg-white/10" />
              <Skeleton className="h-3 w-52 bg-white/5" />
            </div>
            <Skeleton className="h-9 w-44 bg-white/10 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
            <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-[#2A2A2D]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-bold text-white">Historico</h3>
              <span className="text-[#6B6B70] text-[10px] font-medium">({rows.length})</span>
            </div>
            <div className="text-[11px] text-white/30 font-medium">
              Trades, transferencias, staking e taxas (hash copiavel)
            </div>
          </div>

          <div className="relative group">
            <MagnifyingGlass
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B70] group-focus-within:text-white transition-colors"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar..."
              className="bg-[#141416]/50 border border-[#2A2A2D] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder:text-[#6B6B70] focus:outline-none focus:border-white/10 transition-all min-w-[180px]"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {(['Tudo', 'Trades', 'Transferencias', 'Staking'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={[
                'px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-[0.18em] transition-colors',
                tab === t
                  ? 'bg-white text-black border-white'
                  : 'bg-[#141416]/40 border-[#2A2A2D] text-white/40 hover:text-white hover:bg-[#1c1c1f] hover:border-white/10',
              ].join(' ')}
            >
              {t}
            </button>
          ))}

          <button
            onClick={() => setHideFailed((v) => !v)}
            className={[
              'ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-[10px] font-black uppercase tracking-[0.18em]',
              hideFailed
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                : 'bg-[#141416]/40 border-[#2A2A2D] text-white/40 hover:text-white hover:bg-[#1c1c1f] hover:border-white/10',
            ].join(' ')}
            title="Ocultar falhas"
          >
            <Funnel size={14} />
            Sem falhas
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        <div className="space-y-2">
          {rows.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#1E1E21] border border-white/5 flex items-center justify-center text-[#919193] group-hover:text-white transition-colors shrink-0">
                  {iconForType(t.type)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="text-white font-semibold text-xs truncate">{t.type}</div>
                    <span
                      className={[
                        'text-[10px] font-bold px-2 py-0.5 rounded-md border',
                        statusPill(t.status),
                      ].join(' ')}
                    >
                      {t.status}
                    </span>
                    <span className="hidden md:inline-flex px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-bold text-white/40">
                      {t.network}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B6B70] text-[10px] font-medium">
                    <Clock size={12} className="text-white/20" />
                    <span className="whitespace-nowrap">
                      {new Date(t.timestampISO).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                    {t.note && (
                      <>
                        <span className="text-white/10">|</span>
                        <span className="truncate">{t.note}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-white font-bold text-xs whitespace-nowrap">
                    {t.assetAmount >= 0 ? '' : '-'}
                    {mask(
                      Math.abs(t.assetAmount).toLocaleString('en-US', {
                        maximumFractionDigits: 6,
                      }),
                      privateMode,
                    )}{' '}
                    <span className="text-[#6B6B70] text-[9px] font-medium">{t.assetSymbol}</span>
                  </div>
                  <div className="text-[10px] font-bold text-white/30 whitespace-nowrap">
                    {mask(formatUsd(t.usdValue), privateMode)}
                    {typeof t.feeUsd === 'number' && <span className="text-white/10"> | </span>}
                    {typeof t.feeUsd === 'number' && (
                      <span className="text-white/30">
                        Fee {mask(formatUsd(t.feeUsd), privateMode)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    void copy(t.txHash);
                  }}
                  className="w-8 h-8 rounded-lg border border-[#2A2A2D] bg-[#141416] hover:bg-[#1c1c1f] hover:border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  title={`Copiar hash: ${shortenHash(t.txHash)}`}
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          ))}

          {rows.length === 0 && (
            <div className="py-12 px-4 flex flex-col items-center justify-center gap-3 opacity-30">
              <MagnifyingGlass size={32} weight="light" className="text-white" />
              <span className="text-[11px] text-white uppercase font-black tracking-[0.2em] text-center">
                Sem transacoes
              </span>
              <span className="text-[11px] text-white/40 font-medium text-center">
                Ajuste o filtro ou a busca para ver resultados.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
