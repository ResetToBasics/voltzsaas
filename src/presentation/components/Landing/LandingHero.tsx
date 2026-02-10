'use client';

import Link from 'next/link';
import React from 'react';
import { DiscordLogo, TelegramLogo, TwitterLogo } from '@phosphor-icons/react';
import { BrandMark } from '@/presentation/components/Brand/BrandMark';
import { HeroPreviewFrame } from '@/presentation/components/Landing/HeroPreviewFrame';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group relative w-8 h-8 rounded-full grid place-items-center select-none"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#121214] to-[#000000] border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-8px_14px_rgba(0,0,0,0.6)] transition-all group-hover:shadow-[0_14px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-10px_18px_rgba(0,0,0,0.65)] group-hover:translate-y-[-1px]" />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18)_0%,transparent_60%)] opacity-70 pointer-events-none" />
      <span className="relative z-10 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.55)] transition-colors">
        {children}
      </span>
    </a>
  );
}

export function LandingHero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0b0c] text-white overflow-hidden">
      {/* Background texture removed for white connection lines design */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1c_0%,#000000_100%)] opacity-50 pointer-events-none" />

      {/* Decorative Background Bent Line */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="max-w-[1200px] mx-auto h-full px-6 relative">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 1200 1200"
          >
            <defs>
              <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -6"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="over" />
              </filter>
            </defs>
            <path
              d="M 78 0 V 100 Q 78 120 98 120 H 108 Q 128 120 128 140 V 1200"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              fill="none"
              filter="url(#line-glow)"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
            <path
              d="M 1122 0 V 150 Q 1122 170 1102 170 H 1092 Q 1072 170 1072 190 V 1200"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              fill="none"
              filter="url(#line-glow)"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
          </svg>

          {/* Ethereum Nodes */}
          {/* Left Node */}
          <motion.div
            initial={{ y: -600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 18, stiffness: 45, delay: 0.2 }}
            className="absolute left-[10.7%] top-[26.7%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.3)] z-20"
          >
            <svg viewBox="0 0 256 417" className="w-4 h-4 text-black">
              <path
                fill="currentColor"
                d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
              />
              <path
                fill="currentColor"
                fillOpacity=".602"
                d="M127.962 0L0 212.32l127.962 75.638V154.158z"
              />
              <path
                fill="currentColor"
                d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.594 128.038-180.32z"
              />
              <path
                fill="currentColor"
                fillOpacity=".602"
                d="M127.962 416.905v-104.72L0 236.585z"
              />
              <path
                fill="currentColor"
                fillOpacity=".298"
                d="M127.961 287.958l127.96-75.637-127.96-58.162z"
              />
              <path fill="currentColor" fillOpacity=".802" d="M0 212.32l127.962 75.638V154.158z" />
            </svg>
          </motion.div>

          {/* Right Node */}
          <motion.div
            initial={{ y: -600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 18, stiffness: 45, delay: 0.5 }}
            className="absolute left-[89.3%] top-[33.3%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.3)] z-20"
          >
            <svg viewBox="0 0 256 417" className="w-4 h-4 text-black">
              <path
                fill="currentColor"
                d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
              />
              <path
                fill="currentColor"
                fillOpacity=".602"
                d="M127.962 0L0 212.32l127.962 75.638V154.158z"
              />
              <path
                fill="currentColor"
                d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.594 128.038-180.32z"
              />
              <path
                fill="currentColor"
                fillOpacity=".602"
                d="M127.962 416.905v-104.72L0 236.585z"
              />
              <path
                fill="currentColor"
                fillOpacity=".298"
                d="M127.961 287.958l127.96-75.637-127.96-58.162z"
              />
              <path fill="currentColor" fillOpacity=".802" d="M0 212.32l127.962 75.638V154.158z" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative pt-24 sm:pt-32">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none">
          <motion.header
            initial={false}
            animate={{
              // Use left/right instead of width/flex-center for stability
              left: isScrolled ? '3%' : '0%',
              right: isScrolled ? '3%' : '0%',
              // Use numeric px values so Framer can interpolate smoothly.
              // A very large maxWidth behaves like "none" for typical viewports.
              maxWidth: isScrolled ? 1100 : 9999,
              marginTop: isScrolled ? '24px' : '0px',
              backgroundColor: isScrolled ? 'rgba(11, 11, 12, 0.85)' : 'rgba(11, 11, 12, 0.15)',
              backdropFilter: 'blur(16px)',
              borderColor: isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0)',
              borderRadius: isScrolled ? '12px' : '0px',
              paddingTop: isScrolled ? '10px' : '16px',
              paddingBottom: isScrolled ? '10px' : '16px',
              boxShadow: isScrolled
                ? '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
                : 'none',
            }}
            style={{
              marginInline: 'auto',
              originY: 0, // Anchor animation to the top
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 220,
            }}
            className="absolute border pointer-events-auto overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="hidden sm:flex items-center gap-2">
                  <SocialButton href="https://twitter.com" label="Twitter">
                    <TwitterLogo size={14} weight="fill" />
                  </SocialButton>
                  <SocialButton href="https://t.me" label="Telegram">
                    <TelegramLogo size={14} weight="fill" />
                  </SocialButton>
                  <SocialButton href="https://discord.com" label="Discord">
                    <DiscordLogo size={14} weight="fill" />
                  </SocialButton>
                </div>

                <Link
                  href="/"
                  className="flex items-center gap-2.5 px-3 py-1 rounded-full hover:bg-white/5 transition-colors"
                  aria-label="VoltzBucket"
                >
                  <BrandMark className="w-7 h-7 text-white" />
                  <span className="text-[13px] font-black tracking-tight">
                    Voltz<span className="font-medium text-white/90">Bucket</span>
                  </span>
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    href="/login"
                    className="px-5 py-2 rounded-xl bg-white text-black text-[12px] font-bold tracking-tight shadow-[0_18px_38px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] hover:translate-y-[-1px] hover:shadow-[0_22px_44px_rgba(255,255,255,0.15)] active:translate-y-[0px] transition-all"
                  >
                    Entrar
                  </Link>
                </div>
              </div>
            </div>
          </motion.header>
        </div>

        {/* Hero */}
        <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-16">
          <div className="text-center max-w-[860px] mx-auto">
            <h1 className="text-[34px] sm:text-[54px] lg:text-[64px] font-black tracking-tight leading-[1.06]">
              Tudo o que um investidor precisa,
              <br />
              em um só lugar
            </h1>
            <p className="mt-4 text-[14px] sm:text-[15px] text-white/45 font-medium leading-relaxed">
              Um hub seguro para acompanhar posições, performance, staking e fluxo de caixa. Com
              rastreabilidade on-chain e alertas inteligentes.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href="/login"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black text-[12px] font-black uppercase tracking-[0.18em] shadow-[0_18px_44px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] hover:translate-y-[-1px] hover:shadow-[0_22px_52px_rgba(255,255,255,0.15)] transition-all"
              >
                Começar Agora
              </Link>
              <Link
                href="#preview"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 text-white/70 text-[12px] font-black uppercase tracking-[0.18em] border border-white/10 hover:bg-white/20 hover:text-white transition-colors"
              >
                Ver como funciona
              </Link>
            </div>
          </div>

          <div id="preview" className="mt-12 scroll-mt-32 relative">
            <HeroPreviewFrame />
            {/* Massive Grounding Shadow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] h-32 bg-black/80 blur-[100px] pointer-events-none z-0" />
          </div>
        </main>

        {/* Hero Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0b0b0c] to-transparent pointer-events-none z-20" />
      </div>
    </div>
  );
}
