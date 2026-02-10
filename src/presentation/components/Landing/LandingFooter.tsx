'use client';

import React from 'react';
import {
  GithubLogo,
  TwitterLogo,
  DiscordLogo,
  TelegramLogo,
  ArrowRight,
} from '@phosphor-icons/react';
import { BrandMark } from '@/presentation/components/Brand/BrandMark';

export function LandingFooter() {
  return (
    <footer className="relative pt-32 pb-16 bg-[#0b0b0c] overflow-hidden">
      {/* Seam Bridge (Previous -> Footer) */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0b0b0c] to-transparent pointer-events-none" />
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[1200px] h-[420px] bg-[radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[110px] opacity-50 pointer-events-none" />

      {/* Top Shine (soft, not a hard divider) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
                <BrandMark className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">
                Voltz<span className="font-medium text-white/90">Bucket</span>
              </span>
            </div>
            <p className="text-white/30 text-[15px] leading-relaxed max-w-[320px] mb-8">
              A plataforma definitiva para traders e instituições que buscam elite em execução e
              inteligência on-chain.
            </p>
            <div className="flex items-center gap-4">
              {[TwitterLogo, DiscordLogo, TelegramLogo, GithubLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
                Produto
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'Funcionalidades', href: '#features' },
                  { label: 'Preços', href: '#pricing' },
                  { label: 'Segurança', href: '#security' },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-white/30 text-[14px] hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
                Acesso
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'Entrar', href: '/login' },
                  { label: 'Criar Conta', href: '/register' },
                  { label: 'Docs', href: '/docs' },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-white/30 text-[14px] hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
              Fique por dentro
            </h4>
            <p className="text-white/30 text-[14px] mb-6">
              Receba as últimas atualizações de mercado e novas funcionalidades.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-[14px] outline-none focus:border-white/20 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-white text-black rounded-xl hover:bg-white/90 transition-all flex items-center justify-center">
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[12px]">
            © 2026 VoltzBucket. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/20 text-[12px] hover:text-white/40 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-white/20 text-[12px] hover:text-white/40 transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
