'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Envelope, PaperPlaneTilt } from '@phosphor-icons/react';

export default function ForgotPasswordPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-10"
    >
      <div className="space-y-3">
        <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <Envelope size={22} weight="duotone" className="text-white/40" />
        </div>
        <h1 className="text-[32px] sm:text-[40px] font-black tracking-tight text-white leading-tight">
          Recuperar <br />
          <span className="text-white/30 italic">Identidade.</span>
        </h1>
        <p className="text-white/40 text-[15px] font-medium">
          Enviaremos um link de recuperação para o seu email.
        </p>
      </div>

      <div className="space-y-6">
        <div className="group relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/50 transition-colors">
            <Envelope size={20} weight="duotone" />
          </div>
          <input
            type="email"
            placeholder="Email cadastrado"
            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-[15px] outline-none focus:border-white/10 focus:bg-white/[0.05] transition-all"
          />
        </div>

        <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all">
          Enviar Instruções
          <PaperPlaneTilt size={18} weight="bold" />
        </button>
      </div>
    </motion.div>
  );
}
