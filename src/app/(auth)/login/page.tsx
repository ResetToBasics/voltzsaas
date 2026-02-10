'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Envelope, Lock, GoogleLogo, GithubLogo, User } from '@phosphor-icons/react';

export default function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-10"
    >
      <div className="space-y-3">
        <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <User size={22} weight="duotone" className="text-white/40" />
        </div>
        <h1 className="text-[32px] sm:text-[40px] font-black tracking-tight text-white leading-tight">
          Bem-vindo de <br />
          <span className="text-white/30 italic">volta.</span>
        </h1>
        <p className="text-white/40 text-[15px] font-medium">
          Acesse sua conta para gerenciar seus ativos de elite.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="group relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/50 transition-colors">
              <Envelope size={20} weight="duotone" />
            </div>
            <input
              type="email"
              placeholder="Email profissional"
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-[15px] outline-none focus:border-white/10 focus:bg-white/[0.05] transition-all"
            />
          </div>

          <div className="group relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/50 transition-colors">
              <Lock size={20} weight="duotone" />
            </div>
            <input
              type="password"
              placeholder="Sua senha secreta"
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-[15px] outline-none focus:border-white/10 focus:bg-white/[0.05] transition-all"
            />
            <Link
              href="/forgot-password"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-bold text-white/30 hover:text-white/60 transition-colors"
            >
              Esqueceu?
            </Link>
          </div>
        </div>

        <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all">
          Entrar na Plataforma
          <ArrowRight size={18} weight="bold" />
        </button>

        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <span className="relative bg-[#050505] px-4 text-[11px] font-black uppercase tracking-[0.2em] text-white/20">
            Ou use
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all text-white/60 hover:text-white">
            <GoogleLogo size={20} weight="fill" />
            <span className="text-[13px] font-bold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all text-white/60 hover:text-white">
            <GithubLogo size={20} weight="fill" />
            <span className="text-[13px] font-bold">Github</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
