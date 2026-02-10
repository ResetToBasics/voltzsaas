'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Crown, Rocket, Buildings } from '@phosphor-icons/react';

const pricingTiers = [
  {
    name: 'Starter',
    price: 'Gratuito',
    desc: 'Ideal para investidores individuais que estão começando.',
    icon: <Rocket size={24} weight="duotone" />,
    features: [
      'Swaps limitados',
      'Gráficos essenciais',
      'Suporte via comunidade',
      '1 carteira conectada',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mês',
    desc: 'Para traders sérios que precisam de velocidade e precisão.',
    icon: <Crown size={24} weight="duotone" />,
    features: [
      'Swaps ilimitados',
      'Análise preditiva com IA',
      'Suporte prioritário 24/7',
      'Carteiras ilimitadas',
      'Proteção Anti-MEV',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Consultar',
    desc: 'Infraestrutura dedicada para fundos e instituições.',
    icon: <Buildings size={24} weight="duotone" />,
    features: [
      'Nós dedicados',
      'API de alto volume',
      'Gerente de conta exclusivo',
      'Relatórios personalizados',
      'Seguro on-chain',
    ],
    highlight: false,
  },
];

export function LandingPricing() {
  return (
    <section className="relative py-32 sm:py-48 bg-[#0b0b0c] overflow-hidden">
      {/* Seam Bridge (Previous -> Pricing) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0b0b0c] to-transparent pointer-events-none" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[1000px] h-[320px] bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[90px] opacity-60 pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.01] blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(circle at 50% 35%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Seam Bridge (Pricing -> Next Section) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0b0c] to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/40 text-[11px] font-black uppercase tracking-[0.28em] mb-6"
          >
            Planos e Preços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[48px] sm:text-[64px] font-black tracking-[-0.04em] leading-[1.02] text-white"
          >
            Escolha o seu <br />
            <span className="text-white/30 italic">Nível de Poder.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-white/40 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-[720px] mx-auto"
          >
            Estrutura transparente, sem taxas escondidas. Comece grátis e evolua quando quiser.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: tier.highlight ? -6 : -4 }}
              className="group relative"
            >
              {tier.highlight && (
                <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10)_0%,transparent_60%)] blur-[80px] opacity-90 pointer-events-none" />
              )}

              <div
                className={[
                  'relative rounded-[44px] p-[1px] transition-colors duration-500 h-full',
                  tier.highlight
                    ? 'bg-gradient-to-b from-white/[0.25] via-white/[0.10] to-transparent'
                    : 'bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent group-hover:from-white/[0.18] group-hover:via-white/[0.08]',
                ].join(' ')}
              >
                <div
                  className={[
                    'relative rounded-[43px] p-8 h-full flex flex-col overflow-hidden',
                    'bg-[#0b0b0c]/60 backdrop-blur-3xl border border-white/[0.06]',
                    tier.highlight
                      ? 'shadow-[0_40px_90px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]'
                      : 'shadow-[0_30px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]',
                  ].join(' ')}
                >
                  {/* top sheen */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06)_0%,transparent_55%)] pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between gap-4 mb-7">
                    <div className="flex items-center gap-4">
                      <div
                        className={[
                          'w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors duration-500',
                          tier.highlight
                            ? 'bg-white text-black border-white shadow-[0_16px_34px_rgba(255,255,255,0.08)]'
                            : 'bg-white/5 text-white/50 border-white/10 group-hover:bg-white/10 group-hover:text-white',
                        ].join(' ')}
                      >
                        {tier.icon}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[18px] font-black text-white tracking-tight leading-tight">
                          {tier.name}
                        </h3>
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30">
                          {tier.highlight ? 'Recomendado' : 'Plano'}
                        </span>
                      </div>
                    </div>

                    {tier.highlight && (
                      <span className="shrink-0 px-3 py-1.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.22em] shadow-[0_18px_38px_rgba(255,255,255,0.12)]">
                        Mais popular
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[44px] font-black text-white tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-white/[0.35] font-bold text-[14px] tracking-tight">
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-white/40 text-[14px] leading-relaxed">{tier.desc}</p>
                  </div>

                  <div className="relative z-10 flex-1">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent mb-6" />
                    <ul className="space-y-3.5">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={[
                              'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border',
                              tier.highlight
                                ? 'bg-white/[0.08] text-white border-white/[0.15]'
                                : 'bg-white/[0.04] text-white/40 border-white/10',
                            ].join(' ')}
                          >
                            <Check size={12} weight="bold" />
                          </div>
                          <span className="text-[14px] text-white/55 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/register"
                    className={[
                      'relative z-10 mt-10 w-full py-4 rounded-2xl font-black text-[12px] uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center',
                      tier.highlight
                        ? 'bg-white text-black hover:bg-white/90 shadow-[0_18px_44px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(255,255,255,0.35)]'
                        : 'bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.10] hover:border-white/20',
                    ].join(' ')}
                  >
                    Começar agora
                  </Link>

                  <div className="relative z-10 mt-4 text-center text-[11px] text-white/25 font-semibold">
                    Cancele quando quiser
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
