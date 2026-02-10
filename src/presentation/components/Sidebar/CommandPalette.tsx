'use client';

import { useState, useEffect, useRef } from 'react';
import {
  MagnifyingGlass,
  Sparkle,
  Wallet,
  ArrowsLeftRight,
  BellRinging,
  ArrowRight,
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export const CommandPalette = ({ collapsed }: { collapsed?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: 'Depositar', icon: Wallet, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    {
      label: 'Comprar/Vender',
      icon: ArrowsLeftRight,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    { label: 'Criar alerta', icon: BellRinging, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="mb-3 relative" ref={containerRef}>
      {/* Professional Search Trigger */}
      <div
        onClick={() => setIsOpen(true)}
        className={`
                    group flex items-center transition-all cursor-text shadow-sm
                    ${
                      collapsed
                        ? 'justify-center w-8 h-8 rounded-xl bg-transparent hover:bg-[#2a2a2d] hover:text-white border border-transparent hover:border-white/5 mx-auto px-0'
                        : 'gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.05]'
                    }
                `}
      >
        <MagnifyingGlass
          size={18}
          className={`
                        transition-colors 
                        ${collapsed ? 'text-[#888888] group-hover:text-[#EDEDED]' : 'text-white/20 group-hover:text-white/40'}
                    `}
          weight="bold"
        />

        {!collapsed && (
          <>
            <span className="text-[12px] text-white/20 group-hover:text-white/40 transition-colors flex-1 whitespace-nowrap overflow-hidden">
              Buscar...
            </span>
            <div className="flex items-center gap-0.5 opacity-30 group-hover:opacity-50 transition-opacity">
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1] text-[9px] text-white font-sans leading-none">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1] text-[9px] text-white font-sans leading-none">
                K
              </kbd>
            </div>
          </>
        )}
      </div>

      {/* Modal-style Dropdown for Navigation Assistant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed left-1/2 -translate-x-1/2 sm:left-[20px] sm:translate-x-0 top-20 sm:top-[140px] w-[calc(100vw-32px)] sm:w-[415px] z-[100] bg-[#1a1a1c]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-[0_24px_48px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            {/* Search Input Area */}
            <div className="p-3.5 flex items-center gap-3 border-b border-white/[0.05]">
              <MagnifyingGlass
                size={18}
                className="text-indigo-400 group-focus-within:text-indigo-300"
                weight="bold"
              />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que você deseja fazer?"
                className="bg-transparent border-none outline-none text-[13px] text-white placeholder:text-white/20 flex-1 h-8"
              />
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest px-1.5 py-0.5 rounded border border-white/[0.05] bg-white/[0.02]">
                  Esc
                </span>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="px-3.5 py-3 bg-black/40 border-b border-white/[0.03]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.2em]">
                  Ações Rápidas
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar-none pb-0.5">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] hover:scale-[1.02] active:scale-[0.98] transition-all group shadow-sm shrink-0"
                  >
                    <div className={`p-1 rounded-md ${action.bg}`}>
                      <action.icon size={12} className={action.color} weight="bold" />
                    </div>
                    <span className="text-[11px] font-bold text-white/40 group-hover:text-white/80 transition-colors whitespace-nowrap">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results / Suggestion */}
            <div className="p-2.5 max-h-[300px] overflow-y-auto">
              {searchQuery ? (
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 flex items-center gap-4 group hover:from-indigo-500/15 transition-all cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkle size={40} weight="fill" className="text-indigo-400" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center shadow-inner">
                    <Sparkle size={20} className="text-indigo-400" weight="fill" />
                  </div>
                  <div className="flex flex-col gap-0.5 relative z-10">
                    <span className="text-[14px] font-semibold text-white">
                      &ldquo;{searchQuery}&rdquo;
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                        Navigation Assistant
                      </span>
                      <ArrowRight size={10} className="text-indigo-400/50" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-10 px-4 flex flex-col items-center justify-center gap-3 opacity-20">
                  <MagnifyingGlass size={32} weight="light" className="text-white" />
                  <span className="text-[11px] text-white uppercase font-black tracking-[0.2em] text-center">
                    Nenhum termo buscado
                  </span>
                </div>
              )}
            </div>

            {/* Footer Hint */}
            <div className="px-4 py-2 bg-black/20 border-t border-white/[0.03] flex items-center justify-between">
              <span className="text-[9px] text-white/20 font-bold uppercase tracking-tight">
                Quick Navigation
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-white/10 uppercase font-black tracking-widest">
                    Select
                  </span>
                  <kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-[9px] text-white/30 font-sans border border-white/[0.05]">
                    ⏎
                  </kbd>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
