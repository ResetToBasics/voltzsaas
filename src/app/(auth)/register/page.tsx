'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Envelope, Lock, User, ShieldCheck } from '@phosphor-icons/react';

export default function RegisterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-10"
    >
      <div className="space-y-3">
        <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <ShieldCheck size={22} weight="duotone" className="text-white/40" />
        </div>
        <h1 className="text-[32px] sm:text-[40px] font-black tracking-tight text-white leading-tight">
          Crie seu <br />
          <span className="text-white/30 italic">Acesso Elite.</span>
        </h1>
        <p className="text-white/40 text-[15px] font-medium">
          Junte-se à nova era de trading institucional e IA.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="group relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/50 transition-colors">
              <User size={20} weight="duotone" />
            </div>
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-[15px] outline-none focus:border-white/10 focus:bg-white/[0.05] transition-all"
            />
          </div>

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
              placeholder="Crie uma senha forte"
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-[15px] outline-none focus:border-white/10 focus:bg-white/[0.05] transition-all"
            />
          </div>
        </div>

        <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
          <ShieldCheck size={24} weight="duotone" className="text-emerald-400 shrink-0" />
          <p className="text-[12px] text-white/35 leading-snug">
            Ao se cadastrar, você concorda com nossos{' '}
            <a href="#" className="underline hover:text-white">
              Termos de Serviço
            </a>{' '}
            e{' '}
            <a href="#" className="underline hover:text-white">
              Política de Privacidade
            </a>
            .
          </p>
        </div>

        <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all">
          Criar Minha Conta
          <ArrowRight size={18} weight="bold" />
        </button>
      </div>
    </motion.div>
  );
}
