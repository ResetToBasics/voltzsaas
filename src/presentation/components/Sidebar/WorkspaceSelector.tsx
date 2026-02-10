'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { CaretDown, Check, Users, GearSix, Circle, SignOut } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

interface Workspace {
  id: string;
  name: string;
  role: string;
  avatar: string;
  type: 'personal' | 'team' | 'client';
  status?: 'online' | 'away' | 'busy';
}

const workspaces: Workspace[] = [
  {
    id: '1',
    name: '0xa19...92814',
    role: 'Smart Chain (BSC)',
    avatar:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    type: 'personal',
    status: 'online',
  },
  {
    id: '2',
    name: '0x72b...81a92',
    role: 'Ethereum Mainnet',
    avatar:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    type: 'personal',
    status: 'online',
  },
];

interface WorkspaceSelectorProps {
  dropdownPosition?: 'top' | 'bottom';
  className?: string;
}

export const WorkspaceSelector = ({
  dropdownPosition = 'bottom',
  className,
  collapsed,
}: WorkspaceSelectorProps & { collapsed?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={['px-0 relative', className ?? ''].join(' ')} ref={containerRef}>
      {/* Main Selector Button - The "Trigger" */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
                    group relative flex items-center rounded-lg transition-all duration-500 cursor-pointer
                    bg-[#1a1a1c]/40 border border-white/[0.05] hover:border-white/[0.1]
                    ${isOpen ? 'ring-1 ring-white/10 bg-[#222224]/60' : ''}
                    ${collapsed ? 'justify-center p-0 w-8 h-8 mx-auto bg-transparent border-transparent gap-0' : 'p-1.5 gap-2.5'}
                `}
      >
        {/* Visual Depth Backgrounds - Hide when collapsed for cleaner look */}
        {!collapsed && (
          <>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
          </>
        )}

        {/* Main Avatar / Identity */}
        <div className="relative shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={activeWorkspace.avatar}
              alt={activeWorkspace.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-0 overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 opacity-0' : 'flex-1 min-w-0 opacity-100'}`}
        >
          <div className="flex items-center gap-1.5 overflow-hidden">
            <span className="text-[12px] font-bold text-white tracking-tight truncate leading-tight">
              {activeWorkspace.name}
            </span>
            {activeWorkspace.type === 'team' && (
              <Users size={11} className="text-white/30 shrink-0" weight="bold" />
            )}
          </div>
          <span className="text-[9px] text-white/30 font-bold uppercase tracking-[0.1em] leading-tight text-left">
            {activeWorkspace.role}
          </span>
        </div>

        <div
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''} ${collapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}
        >
          <CaretDown size={12} weight="bold" className="text-white/20 group-hover:text-white/40" />
        </div>
      </div>

      {/* Premium Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
              opacity: { duration: 0.25 },
            }}
            className={[
              // Base
              'absolute z-50 rounded-xl overflow-hidden border border-white/[0.08]',
              'shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]',
              'bg-[#141416]/98 backdrop-blur-3xl',
              // Placement
              collapsed
                ? 'left-full top-0 ml-3 w-[320px] origin-top-left'
                : dropdownPosition === 'top'
                  ? 'left-0 right-0 bottom-full mb-2 origin-bottom'
                  : 'left-0 right-0 top-full mt-2 origin-top',
            ].join(' ')}
          >
            {/* Relative wrapper for the sliding content effect */}
            <motion.div
              initial={{ y: dropdownPosition === 'top' ? 10 : -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: dropdownPosition === 'top' ? 10 : -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Workspace List */}
              <div className="px-1 py-1 space-y-0.5 max-h-[280px] overflow-y-auto custom-scrollbar">
                <div className="px-2 py-1 mb-0.5">
                  <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.2em]">
                    Suas Contas
                  </span>
                </div>

                {workspaces.map((ws) => (
                  <div
                    key={ws.id}
                    onClick={() => {
                      setActiveWorkspace(ws);
                      setIsOpen(false);
                    }}
                    className={`
                                            group relative flex items-center gap-2.5 p-1.5 rounded-lg cursor-pointer transition-all duration-300
                                            ${activeWorkspace.id === ws.id ? 'bg-white/[0.03]' : 'hover:bg-white/[0.05]'}
                                        `}
                  >
                    <div className="relative shrink-0">
                      <div className="w-7 h-7 rounded-full overflow-hidden transition-colors">
                        <Image src={ws.avatar} alt={ws.name} fill className="object-cover" />
                      </div>
                      {ws.status === 'online' && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-[#141416] bg-[#00ffc3]" />
                      )}
                    </div>

                    <div className="flex flex-col gap-0 flex-1 min-w-0">
                      <span
                        className={`text-[12px] font-medium leading-tight transition-colors ${activeWorkspace.id === ws.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}
                      >
                        {ws.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] text-white/20 uppercase tracking-wider font-bold leading-tight">
                          {ws.role}
                        </span>
                        <Circle size={3} weight="fill" className="text-white/5" />
                        <span className="text-[8px] text-white/20 uppercase tracking-wider font-bold leading-tight">
                          {ws.type === 'team'
                            ? 'Conta'
                            : ws.type === 'personal'
                              ? 'Pessoal'
                              : 'Cliente'}
                        </span>
                      </div>
                    </div>

                    {activeWorkspace.id === ws.id && (
                      <div className="w-4 h-4 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/5">
                        <Check
                          size={8}
                          weight="bold"
                          className="text-[#00ffc3] drop-shadow-[0_0_6px_rgba(0,255,195,0.4)]"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="p-1.5 bg-black/20 border-t border-white/[0.03] mt-0.5">
                <div className="grid grid-cols-2 gap-1">
                  <button className="flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.03] transition-all group">
                    <GearSix
                      size={12}
                      weight="bold"
                      className="text-white/20 group-hover:text-white/60 transition-colors"
                    />
                    <span className="text-[10px] font-bold text-white/20 group-hover:text-white/60 transition-colors">
                      Gerenciar
                    </span>
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-rose-500/[0.02] hover:bg-rose-500/[0.08] border border-rose-500/[0.05] hover:border-rose-500/20 transition-all group">
                    <SignOut
                      size={12}
                      weight="bold"
                      className="text-rose-500/30 group-hover:text-rose-400 transition-colors"
                    />
                    <span className="text-[10px] font-bold text-rose-500/30 group-hover:text-rose-400 transition-colors">
                      Sair
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
