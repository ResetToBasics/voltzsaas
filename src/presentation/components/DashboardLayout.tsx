'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { Sidebar } from './Sidebar';

type DashboardShellContextValue = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

const DashboardShellContext = createContext<DashboardShellContextValue | null>(null);

export function useDashboardShell() {
  const ctx = useContext(DashboardShellContext);
  if (!ctx) throw new Error('useDashboardShell must be used within DashboardLayout');
  return ctx;
}

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (!mobileSidebarOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileSidebarOpen]);

  const shell = useMemo<DashboardShellContextValue>(
    () => ({
      isSidebarOpen: mobileSidebarOpen,
      openSidebar: () => setMobileSidebarOpen(true),
      closeSidebar: () => setMobileSidebarOpen(false),
      toggleSidebar: () => setMobileSidebarOpen((v) => !v),
    }),
    [mobileSidebarOpen],
  );

  return (
    <DashboardShellContext.Provider value={shell}>
      <div className="flex h-[100dvh] bg-[#141416] text-[#EDEDED] antialiased overflow-hidden">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-[2000] md:hidden">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={shell.closeSidebar}
            />
            <div className="absolute inset-y-0 left-0 w-[240px] max-w-[88vw] relative">
              <button
                type="button"
                onClick={shell.closeSidebar}
                aria-label="Fechar menu"
                className="absolute top-3 right-3 z-50 w-10 h-10 grid place-items-center rounded-xl bg-[#141416]/80 border border-white/10 text-white/70 hover:text-white hover:bg-[#1c1c1f] transition-colors shadow-[0_18px_40px_rgba(0,0,0,0.65)]"
              >
                <X size={18} weight="bold" />
              </button>
              <Sidebar forceExpanded />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0 p-2 sm:p-3 bg-[#141416]">
          <div className="h-full rounded-[24px] border border-black/80 p-[1px]">
            <main className="h-full bg-[#202022] rounded-[23px] overflow-hidden custom-scrollbar border border-white/[0.03] shadow-2xl relative z-10 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
      </div>
    </DashboardShellContext.Provider>
  );
};
