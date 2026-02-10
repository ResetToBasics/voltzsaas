'use client';

import Link from 'next/link';
import React from 'react';
import { ArrowLeft, List, Sparkle } from '@phosphor-icons/react';
import { useDashboardShell } from '@/presentation/components/DashboardLayout';

export function ComingSoon({ title, subtitle }: { title: string; subtitle: string }) {
  const { openSidebar } = useDashboardShell();

  return (
    <div className="flex flex-col h-full bg-[#202022] overflow-hidden">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-12 mt-4 sm:mt-5 mb-4 shrink-0">
        <div className="flex items-start gap-3 min-w-0">
          <button
            type="button"
            onClick={openSidebar}
            aria-label="Abrir menu"
            className="md:hidden w-10 h-10 grid place-items-center rounded-xl bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/80 shrink-0"
          >
            <List size={18} weight="bold" />
          </button>

          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="text-2xl font-bold text-white tracking-tight leading-none">{title}</h1>
            <div className="text-[11px] font-medium text-white/30 truncate">{subtitle}</div>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/70 hover:text-white"
        >
          <ArrowLeft size={14} weight="bold" />
          <span className="text-[10px] font-black uppercase tracking-[0.18em]">Voltar</span>
        </Link>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pb-10">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="rounded-xl border border-[#2A2A2D] bg-[#1B1B1D] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.6)_inset] p-6 overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)',
              }}
            />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-[640px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
                    <Sparkle size={16} weight="fill" />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
                      Em desenvolvimento
                    </div>
                    <div className="text-white font-bold text-[16px] tracking-tight">
                      Esta area ainda nao foi implementada
                    </div>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  Se voce quiser, eu monto esta tela com o mesmo nivel de detalhe da Carteira:
                  filtros, tabelas, cards, skeleton loading e estados vazios.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <Link
                  href="/dashboard/carteira"
                  className="px-4 py-2.5 rounded-xl bg-[#2A2A2D] hover:bg-[#323236] text-white text-xs font-black uppercase tracking-[0.18em] border border-[#3A3A3D] whitespace-nowrap transition-colors text-center"
                >
                  Ir para Carteira
                </Link>
                <Link
                  href="/dashboard"
                  className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-[#2A2A2D]/50 text-white text-xs font-black uppercase tracking-[0.18em] border border-[#2A2A2D] whitespace-nowrap transition-colors text-center"
                >
                  Visao Geral
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
