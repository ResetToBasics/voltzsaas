'use client';

import React, { useMemo, useState } from 'react';
import { ArrowSquareOut, Copy, Globe, Tag } from '@phosphor-icons/react';
import { Skeleton } from '@/presentation/components/ui/Skeleton';
import { shortenHash } from '@/presentation/components/Wallet/format';
import { WalletAddress } from '@/presentation/components/Wallet/types';

export function AddressesCard({
  addresses,
  loading,
}: {
  addresses: WalletAddress[];
  loading?: boolean;
}) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sorted = useMemo(() => {
    return [...addresses].sort((a, b) => {
      if (a.network === b.network) return a.label.localeCompare(b.label);
      return a.network.localeCompare(b.network);
    });
  }, [addresses]);

  const copy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 900);
    } catch {
      // noop
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-36 bg-white/10" />
            <Skeleton className="h-3 w-52 bg-white/5" />
          </div>
          <Skeleton className="h-9 w-20 bg-white/10 rounded-lg" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
          <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
          <Skeleton className="h-12 w-full bg-white/5 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-4 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-bold text-white">Enderecos</h3>
            <span className="text-[#6B6B70] text-[10px] font-medium">({sorted.length})</span>
          </div>
          <div className="text-[11px] text-white/30 font-medium">
            Contas por rede (copiar e abrir no explorer)
          </div>
        </div>
        <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50">
          <Globe size={18} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
        <div className="space-y-2">
          {sorted.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between p-3 rounded-xl bg-[#141416]/30 border border-[#2A2A2D] hover:bg-[#141416]/50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#1E1E21] border border-white/5 flex items-center justify-center text-[#919193] shrink-0">
                  <Tag size={16} weight="duotone" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-white font-semibold text-xs truncate">{a.label}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-white/40">
                      {a.network}
                    </span>
                  </div>
                  <div className="text-[#6B6B70] text-[10px] font-medium truncate">
                    {shortenHash(a.address, 10, 8)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => void copy(a.id, a.address)}
                  className={[
                    'h-8 px-2.5 rounded-lg border flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] transition-colors',
                    copiedId === a.id
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-[#141416] border-[#2A2A2D] text-white/50 hover:text-white hover:bg-[#1c1c1f] hover:border-white/10',
                  ].join(' ')}
                  title="Copiar endereco"
                >
                  <Copy size={14} />
                  <span className="hidden sm:block">
                    {copiedId === a.id ? 'Copiado' : 'Copiar'}
                  </span>
                </button>
                <a
                  href={`${a.explorerBaseUrl}${a.address}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg border border-[#2A2A2D] bg-[#141416] hover:bg-[#1c1c1f] hover:border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  title="Abrir no explorer"
                >
                  <ArrowSquareOut size={14} />
                </a>
              </div>
            </div>
          ))}

          {sorted.length === 0 && (
            <div className="py-12 px-4 flex flex-col items-center justify-center gap-2 opacity-30">
              <Globe size={32} weight="light" className="text-white" />
              <span className="text-[11px] text-white uppercase font-black tracking-[0.2em] text-center">
                Nenhum endereco cadastrado
              </span>
              <span className="text-[11px] text-white/40 font-medium text-center">
                Adicione enderecos por rede para depositos/saques.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
