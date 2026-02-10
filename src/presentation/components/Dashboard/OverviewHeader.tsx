'use client';

import { Crown, List } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useDashboardShell } from '@/presentation/components/DashboardLayout';

export const OverviewHeader = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7D');
  const periods = ['1D', '7D', '14D', '31D'];
  const { openSidebar } = useDashboardShell();

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-12 mt-4 sm:mt-5 mb-4">
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={openSidebar}
          aria-label="Abrir menu"
          className="md:hidden w-10 h-10 grid place-items-center rounded-xl bg-[#141416] border border-[#2A2A2D] hover:bg-[#1c1c1f] hover:border-white/10 transition-colors text-white/80 shrink-0"
        >
          <List size={18} weight="bold" />
        </button>

        <div className="flex items-end gap-3 min-w-0">
          <h1 className="text-2xl font-bold text-white tracking-tight leading-none truncate">
            Overview
          </h1>
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-[#2A2A2D] rounded text-[#9CA3AF] mb-0.5">
            <Crown size={12} weight="fill" className="text-yellow-500" />
            <span className="text-[10px] font-bold tracking-wide">Verified Trader</span>
          </div>
        </div>
      </div>

      <div className="bg-[#2A2A2D] p-1 rounded-lg flex items-center shadow-sm">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`
                            px-2.5 sm:px-3 py-1 text-[11px] font-bold rounded transition-colors
                            ${
                              selectedPeriod === period
                                ? 'bg-white text-black shadow-sm'
                                : 'text-[#9CA3AF] hover:text-white hover:bg-[#323235]'
                            }
                        `}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};
