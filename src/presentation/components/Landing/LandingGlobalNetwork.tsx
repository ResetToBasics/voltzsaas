'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from '@/components/ui/map';
import { Globe, ShieldCheck, Lightning } from '@phosphor-icons/react';

export function LandingGlobalNetwork() {
  return (
    <section className="relative py-32 sm:py-48 bg-[#0b0b0c] overflow-hidden">
      {/* Seam Bridge (Previous -> Global Network) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0b0b0c] to-transparent pointer-events-none" />

      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/[0.015] blur-[150px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      </div>

      {/* Seam Bridge (Global Network -> Next Section) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0b0c] to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-white/30 mb-4"
          >
            <Globe size={20} weight="duotone" className="text-white/50" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em]">
              Rede Global de Elite
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[48px] sm:text-[72px] font-black tracking-[-0.04em] leading-[0.9] text-white max-w-[800px] mx-auto"
          >
            Infraestrutura <br />
            <span className="text-white/30 italic">Sem Fronteiras.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-[18px] sm:text-[22px] text-white/40 font-medium leading-relaxed max-w-[600px] mx-auto"
          >
            Conectividade de latência zero alimentada por nós distribuídos nos principais centros
            financeiros do mundo.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[28px] sm:rounded-[48px] border border-white/5 bg-black/40 backdrop-blur-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        >
          {/* Top Edge Highlight for the Map Frame */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

          <WorldMap
            containerClassName="w-full h-full relative"
            mapBackgroundColor="transparent"
            mapDotColor="rgba(255, 255, 255, 0.1)"
            lineColor="#ffffff"
            animationDuration={4}
            dots={[
              {
                start: { lat: 40.7128, lng: -74.006, label: 'Nova York' },
                end: { lat: 51.5074, lng: -0.1278, label: 'Londres' },
              },
              {
                start: { lat: -23.5505, lng: -46.6333, label: 'São Paulo' },
                end: { lat: 1.3521, lng: 103.8198, label: 'Singapura' },
              },
              {
                start: { lat: 35.6762, lng: 139.6503, label: 'Tóquio' },
                end: { lat: 25.2048, lng: 55.2708, label: 'Dubai' },
              },
              {
                start: { lat: 52.52, lng: 13.405, label: 'Berlim' },
                end: { lat: -33.8688, lng: 151.2093, label: 'Sydney' },
              },
            ]}
          />

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Lightning size={28} weight="duotone" className="text-white" />,
              title: 'Latência Ultra-Baixa',
              desc: 'Roteamento inteligente para execuções em milissegundos.',
              color: 'from-blue-500/20',
            },
            {
              icon: <ShieldCheck size={28} weight="duotone" className="text-white" />,
              title: 'Nós Seguros',
              desc: 'Infraestrutura segregada com criptografia de hardware.',
              color: 'from-emerald-500/20',
            },
            {
              icon: <Globe size={28} weight="duotone" className="text-white" />,
              title: '99.9% Uptime',
              desc: 'Disponibilidade global garantida por redundância nativa.',
              color: 'from-purple-500/20',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className="group relative flex flex-col gap-6 p-8 rounded-[32px] bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Inner Glow/Depth */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.color} to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Top Edge Highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-[20px] tracking-tight mb-3">
                  {item.title}
                </h4>
                <p className="text-white/30 text-[15px] leading-relaxed group-hover:text-white/50 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Hover Bottom Detail */}
              <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="text-[40px] font-black italic tracking-tighter text-white select-none">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
