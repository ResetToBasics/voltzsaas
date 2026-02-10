'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BrandMark } from '@/presentation/components/Brand/BrandMark';
import { CaretDown, Globe } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const corner = pathname.startsWith('/register')
    ? { pre: 'Já tem uma conta?', href: '/login', label: 'Entrar' }
    : pathname.startsWith('/forgot-password')
      ? { pre: 'Lembrou a senha?', href: '/login', label: 'Entrar' }
      : { pre: 'Não tem uma conta?', href: '/register', label: 'Cadastrar' };

  return (
    <div className="min-h-[100dvh] bg-[#050505] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side: Forms */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative z-20 bg-[#050505]">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity min-w-0"
            aria-label="VoltzBucket"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <BrandMark className="w-6 h-6 text-white" />
            </div>
            <span className="hidden sm:inline text-white font-black text-2xl tracking-tighter truncate">
              Voltz<span className="font-medium text-white/90">Bucket</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-white/30 text-[12px] font-semibold">
              {corner.pre}
            </span>
            <Link
              href={corner.href}
              className="px-3 py-1.5 rounded-xl bg-white text-black text-[11px] font-black tracking-tight shadow-[0_14px_32px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(255,255,255,0.35)] hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              {corner.label}
            </Link>
          </div>
        </div>

        <main className="flex-1 flex flex-col justify-center max-w-[420px] mx-auto w-full py-12 sm:py-16 lg:py-20">
          {children}
        </main>

        {/* Footer simple */}
        <div className="text-white/20 text-[12px] flex items-center justify-between gap-4 mt-auto pt-8 border-t border-white/5">
          <span>© 2026 VoltzBucket</span>
          <button
            type="button"
            className="flex items-center gap-2 text-white/30 hover:text-white/50 transition-colors"
            aria-label="Idioma"
          >
            <Globe size={14} />
            <span className="text-[11px] font-black uppercase tracking-[0.18em]">PT-BR</span>
            <CaretDown size={12} className="text-white/20" />
          </button>
        </div>
      </div>

      {/* Right Side: Visual Preview */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0b0b0c] items-center justify-center overflow-hidden border-l border-white/5">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)',
              backgroundSize: '84px 84px',
              maskImage: 'radial-gradient(circle at 60% 45%, black 0%, transparent 65%)',
              WebkitMaskImage: 'radial-gradient(circle at 60% 45%, black 0%, transparent 65%)',
            }}
          />
        </div>

        {/* Floating Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[820px] px-10 relative z-10"
        >
          {/* Perspective Glows */}
          <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full" />
          <div className="absolute -bottom-40 -right-20 w-[520px] h-[520px] bg-white/[0.015] blur-[150px] rounded-full" />

          <div className="relative max-w-[620px]">
            <div
              className="absolute -inset-12 bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.08)_0%,transparent_60%)] blur-[24px] opacity-70 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -top-20 -left-10 text-[180px] font-black leading-none text-white/[0.04] select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <div
              className="absolute -bottom-24 right-0 text-[180px] font-black leading-none text-white/[0.03] select-none pointer-events-none"
              aria-hidden="true"
            >
              &rdquo;
            </div>

            <div className="relative text-[38px] xl:text-[46px] font-black tracking-tight leading-[1.06] text-white drop-shadow-[0_40px_90px_rgba(0,0,0,0.75)]">
              O{' '}
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                VoltzBucket
              </span>{' '}
              virou o meu painel unico
              <br />
              para acompanhar posicoes, performance e staking,
              <br />
              <span className="text-white/35 italic">sem ruido.</span>
            </div>
          </div>
        </motion.div>

        {/* Light Bridge (Matches Landing style) */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
