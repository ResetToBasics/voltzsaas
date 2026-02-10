'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowsLeftRight,
  Eye,
  EyeSlash,
  List,
  ShieldCheck,
} from '@phosphor-icons/react';

import { WalletPeriod } from '@/presentation/components/Wallet/types';
import { useDashboardShell } from '@/presentation/components/DashboardLayout';

export function WalletHeader({
  selectedPeriod,
  onSelectPeriod,
  privateMode,
  onTogglePrivateMode,
}: {
  selectedPeriod: WalletPeriod;
  onSelectPeriod: (p: WalletPeriod) => void;
  privateMode: boolean;
  onTogglePrivateMode: () => void;
}) {
  const periods = useMemo(() => ['1D', '7D', '30D', 'YTD'] as const, []);
  const [lastUpdated] = useState(() => new Date());
  const { openSidebar } = useDashboardShell();

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-12 mt-4 sm:mt-5 mb-4 shrink-0">
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-end gap-3 min-w-0">
          <button
            type="button"
            onClick={openSidebar}
            aria-label="Abrir menu"
            className="md:hidden w-10 h-10 grid place-items-center rounded-xl bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/80 shrink-0"
          >
            <List size={18} weight="bold" />
          </button>
          <h1 className="text-2xl font-bold text-white tracking-tight leading-none">Carteira</h1>
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-[#2A2A2D] rounded text-[#9CA3AF] mb-0.5 border border-white/5">
            <ShieldCheck size={12} weight="fill" className="text-emerald-400" />
            <span className="text-[10px] font-bold tracking-wide">Custodia verificada</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/30 min-w-0">
          <span className="truncate">Resumo consolidado multi-chain</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span className="hidden sm:inline whitespace-nowrap">
            Atualizado{' '}
            {lastUpdated.toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap justify-between sm:justify-end">
        <button
          onClick={onTogglePrivateMode}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/70 hover:text-white"
          title={privateMode ? 'Mostrar valores' : 'Ocultar valores'}
        >
          {privateMode ? <EyeSlash size={14} /> : <Eye size={14} />}
          <span className="text-[10px] font-black uppercase tracking-[0.18em] hidden sm:block">
            Privacidade
          </span>
        </button>

        <div className="bg-[#2A2A2D] p-1 rounded-lg flex items-center shadow-sm border border-white/5">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => onSelectPeriod(period)}
              className={[
                'px-2.5 sm:px-3 py-1 text-[11px] font-bold rounded transition-colors',
                selectedPeriod === period
                  ? 'bg-white text-black shadow-sm'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-[#323235]',
              ].join(' ')}
            >
              {period}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/80">
            <ArrowDown size={14} weight="bold" className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em]">Depositar</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/80">
            <ArrowUp size={14} weight="bold" className="text-orange-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em]">Sacar</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/80">
            <ArrowsLeftRight size={14} weight="bold" className="text-indigo-300" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em]">Transferir</span>
          </button>
        </div>
      </div>
    </div>
  );
}
