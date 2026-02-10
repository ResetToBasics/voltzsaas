'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@phosphor-icons/react';

const faqs = [
  {
    q: 'Como o roteamento inteligente garante as melhores taxas?',
    a: 'Nosso algoritmo varre instantaneamente mais de 50 DEXs e agregadores de liquidez para encontrar o caminho com menor slippage e menores taxas ocultas para sua troca.',
  },
  {
    q: 'O sistema é custodial ou não-custodial?',
    a: 'Somos 100% não-custodiais. Suas chaves nunca saem do seu navegador ou hardware wallet. Você mantém total controle sobre seus ativos em todos os momentos.',
  },
  {
    q: 'Quais redes blockchain são suportadas atualmente?',
    a: 'Atualmente suportamos Ethereum, Arbitrum, Optimism, Polygon e Base. Estamos em fase de testes para integrar Solana e Avalanche nas próximas semanas.',
  },
  {
    q: 'Como funciona o seguro on-chain para o plano Enterprise?',
    a: 'Utilizamos protocolos de cobertura descentralizada para garantir transações de alto volume contra falhas de smart contract ou exploits de infraestrutura.',
  },
];

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-[#0b0b0c] overflow-hidden">
      {/* Seam Bridge (Previous -> FAQ) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0b0b0c] to-transparent pointer-events-none" />
      <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[100px] opacity-50 pointer-events-none" />

      {/* Seam Bridge (FAQ -> Footer) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0b0b0c] to-transparent pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-[11px] font-black uppercase tracking-widest mb-6"
          >
            Dúvidas Comuns
          </motion.div>
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-tight text-white mb-4">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
              >
                <span className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight pr-8">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-white text-black' : 'text-white/40'}`}
                >
                  {openIndex === i ? (
                    <Minus size={16} weight="bold" />
                  ) : (
                    <Plus size={16} weight="bold" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 sm:px-8 pb-8 text-white/40 text-[15px] leading-relaxed border-t border-white/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
