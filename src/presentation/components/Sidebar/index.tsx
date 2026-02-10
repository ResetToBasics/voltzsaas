'use client';

import {
  SquaresFour,
  Wallet,
  ArrowsLeftRight,
  ArrowsClockwise,
  Buildings,
  Bell,
  FileText,
  ShieldCheck,
  Gear,
  Question,
  Crown,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { WorkspaceSelector } from './WorkspaceSelector';
import { CommandPalette } from './CommandPalette';
import { MenuItem } from './MenuItem';
import { VoltzLogo } from './VoltzLogo';

export const Sidebar = ({ forceExpanded = false }: { forceExpanded?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const expanded = forceExpanded || isHovered;

  return (
    <aside
      className={`
                bg-[#141416] h-[100dvh] flex flex-col pt-4 pb-4 text-[14px] select-none text-white
                transition-all duration-300 ease-in-out z-50
                ${expanded ? 'w-[240px] px-4' : 'w-[80px] px-0'}
            `}
      onMouseEnter={forceExpanded ? undefined : () => setIsHovered(true)}
      onMouseLeave={forceExpanded ? undefined : () => setIsHovered(false)}
    >
      {/* Product Identity */}
      {/* Product Identity */}
      {/* Product Identity */}
      <div
        className={`pt-0 pb-2 flex items-center ${expanded ? 'justify-start px-2' : 'justify-center px-0 w-full'} transition-all duration-300`}
      >
        <div className={`flex items-center ${expanded ? 'gap-3' : 'gap-0 justify-center w-full'}`}>
          <VoltzLogo
            className={`block text-white h-[24px] w-[26px] opacity-100 cursor-pointer shrink-0`}
          />
          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ${expanded ? 'w-[120px] opacity-100' : 'w-0 opacity-0'}`}
          >
            <span className="font-[800] text-[16px] tracking-tight leading-none text-white whitespace-nowrap">
              Voltz<span className="font-[400]">Bucket</span>
            </span>
          </div>
        </div>
      </div>

      {/* Workspace Selector (Now at Top) */}
      <div className={`transition-all duration-300 ${!expanded ? 'mb-2' : 'mb-3'}`}>
        <WorkspaceSelector dropdownPosition="bottom" collapsed={!expanded} />
      </div>

      <div className={`transition-all duration-300 mb-2`}>
        <CommandPalette collapsed={!expanded} />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 pb-1 overflow-x-hidden flex flex-col">
        <nav className="space-y-1">
          {/* Section: Principal */}
          <div>
            <div
              className={`
                            text-[8px] font-black text-white/10 uppercase mb-1 tracking-[0.2em] whitespace-nowrap transition-all duration-300
                            ${expanded ? 'px-3 opacity-100' : 'px-0 opacity-0 text-center'}
                        `}
            >
              {expanded ? 'Navegação Principal' : '-'}
            </div>
            <ul className="flex flex-col gap-0.5 w-full">
              <div className="flex flex-col w-full">
                <MenuItem
                  icon={SquaresFour}
                  label="Visão Geral"
                  href="/dashboard"
                  active={isActive('/dashboard')}
                  collapsed={!expanded}
                />
                <MenuItem
                  icon={Wallet}
                  label="Carteira"
                  href="/dashboard/carteira"
                  active={isActive('/dashboard/carteira')}
                  collapsed={!expanded}
                />
                <MenuItem
                  icon={ArrowsLeftRight}
                  label="Comprar/Vender"
                  href="/dashboard/comprar-vender"
                  active={isActive('/dashboard/comprar-vender')}
                  collapsed={!expanded}
                />
                <MenuItem
                  icon={ArrowsClockwise}
                  label="Transações"
                  href="/dashboard/transacoes"
                  active={isActive('/dashboard/transacoes')}
                  collapsed={!expanded}
                />
                <MenuItem
                  icon={Buildings}
                  label="Contas"
                  href="/dashboard/contas"
                  active={isActive('/dashboard/contas')}
                  collapsed={!expanded}
                />
                <MenuItem
                  icon={Bell}
                  label="Alertas"
                  href="/dashboard/alertas"
                  active={isActive('/dashboard/alertas')}
                  collapsed={!expanded}
                />
                <MenuItem
                  icon={FileText}
                  label="Relatórios"
                  href="/dashboard/relatorios"
                  active={isActive('/dashboard/relatorios')}
                  collapsed={!expanded}
                />
              </div>
            </ul>
          </div>

          {/* Section: Segurança */}
          <div>
            <div
              className={`
                            text-[8px] font-black text-white/10 uppercase mb-1 mt-2 tracking-[0.2em] whitespace-nowrap transition-all duration-300
                            ${expanded ? 'px-3 opacity-100' : 'px-0 opacity-0 text-center'}
                        `}
            >
              {expanded ? 'Segurança' : '-'}
            </div>
            <ul className="flex flex-col w-full">
              <MenuItem
                icon={ShieldCheck}
                label="Segurança"
                href="/dashboard/seguranca"
                active={isActive('/dashboard/seguranca')}
                collapsed={!expanded}
              />
            </ul>
          </div>

          {/* Section: Sistema */}
          <div>
            <div
              className={`
                            text-[8px] font-black text-white/10 uppercase mb-1 mt-2 tracking-[0.2em] whitespace-nowrap transition-all duration-300
                            ${expanded ? 'px-3 opacity-100' : 'px-0 opacity-0 text-center'}
                        `}
            >
              {expanded ? 'Sistema' : '-'}
            </div>
            <ul className="flex flex-col w-full">
              <MenuItem
                icon={Gear}
                label="Configurações"
                href="/dashboard/configuracoes"
                active={isActive('/dashboard/configuracoes')}
                collapsed={!expanded}
              />
              <MenuItem
                icon={Question}
                label="Suporte"
                href="/dashboard/suporte"
                active={isActive('/dashboard/suporte')}
                collapsed={!expanded}
              />
            </ul>
          </div>
        </nav>

        {/* Enhanced Premium Plan Card - Collapses to Icon */}
        <div
          className={`
                    mt-auto mb-2 rounded-2xl bg-[#141416] border border-white/[0.03] relative overflow-hidden group hover:border-white/10 transition-all 
                    shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.03)] 
                    ${expanded ? 'mx-1 p-3' : 'mx-0 p-2 flex justify-center items-center aspect-square mt-auto bg-transparent border-0 shadow-none'}
                `}
        >
          {!expanded ? (
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2a2a2d] to-[#141416] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 mx-auto">
              <Crown
                size={14}
                className="text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                weight="fill"
              />
            </div>
          ) : (
            <>
              {/* Texture & Effects */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)`,
                }}
              />
              <div className="absolute inset-0 shadow-[inset_0_2px_15px_rgba(0,0,0,0.9)] pointer-events-none rounded-2xl" />
              <div className="absolute inset-x-0 top-0 h-[100%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <div className="relative z-10 fade-in">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2a2a2d] to-[#141416] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5">
                    <Crown
                      size={14}
                      className="text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                      weight="fill"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-white/30 tracking-[0.2em] uppercase leading-tight">
                      Membro
                    </span>
                    <span className="text-[13px] font-bold text-white tracking-tight italic opacity-90">
                      Plano Pro
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-3 px-0.5">
                  <div className="flex items-center gap-2 group/feature">
                    <div className="w-1 h-1 rounded-full bg-indigo-500/40 shadow-[0_0_8px_rgba(99,102,241,0.4)] group-hover/feature:bg-indigo-400 transition-colors" />
                    <span className="text-[10px] text-white/40 font-semibold tracking-tight group-hover/feature:text-white/70 transition-colors">
                      Relatórios Ilimitados
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group/feature">
                    <div className="w-1 h-1 rounded-full bg-indigo-500/40 shadow-[0_0_8px_rgba(99,102,241,0.4)] group-hover/feature:bg-indigo-400 transition-colors" />
                    <span className="text-[10px] text-white/40 font-semibold tracking-tight group-hover/feature:text-white/70 transition-colors">
                      Suporte Priority 24h
                    </span>
                  </div>
                </div>

                <button className="w-full py-1.5 rounded-lg bg-[#1c1c1f] border border-white/[0.03] hover:border-white/10 hover:bg-[#232326] text-white/70 hover:text-white text-[9px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:translate-y-[1px]">
                  Upgrade Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
