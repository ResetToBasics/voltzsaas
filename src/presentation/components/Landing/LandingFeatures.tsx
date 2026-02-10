'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CaretDown, ArrowsDownUp, CheckCircle, ChartLineUp } from '@phosphor-icons/react';

// --- REUSABLE COMPONENTS ---

function TokenSelector({ icon, symbol, color }: { icon: string; symbol: string; color: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#222] border border-white/10 px-3 py-1.5 rounded-full hover:bg-[#333] transition-colors cursor-pointer group/token">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <span className="text-[13px] font-semibold text-white">{symbol}</span>
      <CaretDown
        size={10}
        weight="bold"
        className="text-white/40 group-hover/token:text-white/60"
      />
    </div>
  );
}

type InputGroupProps = {
  label: string;
  amount: string;
  tokenIcon: string;
  tokenSymbol: string;
  tokenColor: string;
  subValue: string;
  showMax?: boolean;
};

function InputGroup({
  label,
  amount,
  tokenIcon,
  tokenSymbol,
  tokenColor,
  subValue,
  showMax,
}: InputGroupProps) {
  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 flex flex-col gap-2 transition-colors hover:border-white/20">
      <div className="flex justify-between items-center text-[13px] text-white/40 font-medium tracking-tight">
        <span>{label}</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          value={amount}
          readOnly
          className="bg-transparent border-none text-white text-3xl font-medium outline-none p-0 w-full tracking-tighter"
        />
        <TokenSelector icon={tokenIcon} symbol={tokenSymbol} color={tokenColor} />
      </div>
      <div className="flex justify-between items-center text-[12px] text-white/20 font-medium">
        <span>≈ {subValue}</span>
        {showMax && (
          <div className="flex items-center gap-1.5">
            <span className="text-white/10">1300 ETH</span>
            <button className="bg-[#222] px-2 py-0.5 rounded text-white/40 text-[10px] font-bold uppercase tracking-wider hover:text-white/60 transition-colors">
              Max
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// --- BENTO CARDS ---

function SwapBentoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full max-w-[420px] bg-[#0a0a0a] border border-white/10 rounded-[32px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[200px] h-[120px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] blur-[25px] pointer-events-none z-1" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />

      <div className="relative z-10 space-y-1">
        <div className="flex flex-col gap-1 mt-4">
          <InputGroup
            label="Vender"
            amount="1243"
            tokenIcon="♦"
            tokenSymbol="ETH"
            tokenColor="#627EEA"
            subValue="$3,543,072.084"
            showMax
          />

          <div className="relative h-0 flex items-center justify-center z-20">
            <button className="w-10 h-10 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all shadow-[0_0_0_6px_#0a0a0a] group/arrow">
              <ArrowsDownUp
                size={18}
                weight="bold"
                className="group-hover/arrow:scale-110 transition-transform"
              />
            </button>
          </div>

          <InputGroup
            label="Comprar"
            amount="54.158769"
            tokenIcon="₿"
            tokenSymbol="BTC"
            tokenColor="#F7931A"
            subValue="$3,543,072.084"
          />
        </div>

        <button className="w-full mt-4 p-4 rounded-2xl bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] border-t border-white/10 text-white font-bold tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:to-[#222] transition-colors active:scale-[0.98]">
          Swap Now
        </button>
      </div>
    </motion.div>
  );
}

type CandleProps = {
  type: 'green' | 'red';
  wickTop: string;
  wickBottom: string;
  bodyHeight: string;
  bodyBottom: string;
};

function Candle({ type, wickTop, wickBottom, bodyHeight, bodyBottom }: CandleProps) {
  return (
    <div className="relative w-2 h-full flex flex-col items-center justify-end">
      {/* Wick */}
      <div
        className={`absolute w-[1px] ${type === 'green' ? 'bg-[#2ebd85]' : 'bg-[#f6465d]'} opacity-70`}
        style={{ top: wickTop, bottom: wickBottom }}
      />
      {/* Body */}
      <div
        className={`w-full rounded-[2px] z-10 ${type === 'green' ? 'bg-[#2ebd85] shadow-[0_0_8px_rgba(46,189,133,0.15)]' : 'bg-[#f6465d]'}`}
        style={{ height: bodyHeight, marginBottom: bodyBottom }}
      />
    </div>
  );
}

function AnalyticsBentoCard() {
  const candles: CandleProps[] = [
    { type: 'green', wickTop: '50%', wickBottom: '20%', bodyHeight: '20%', bodyBottom: '25%' },
    { type: 'red', wickTop: '40%', wickBottom: '30%', bodyHeight: '15%', bodyBottom: '40%' },
    { type: 'red', wickTop: '55%', wickBottom: '20%', bodyHeight: '15%', bodyBottom: '25%' },
    { type: 'green', wickTop: '35%', wickBottom: '25%', bodyHeight: '30%', bodyBottom: '30%' },
    { type: 'red', wickTop: '45%', wickBottom: '30%', bodyHeight: '15%', bodyBottom: '35%' },
    { type: 'green', wickTop: '30%', wickBottom: '25%', bodyHeight: '35%', bodyBottom: '30%' },
    { type: 'red', wickTop: '40%', wickBottom: '35%', bodyHeight: '10%', bodyBottom: '40%' },
    { type: 'green', wickTop: '15%', wickBottom: '30%', bodyHeight: '45%', bodyBottom: '25%' },
    { type: 'red', wickTop: '25%', wickBottom: '30%', bodyHeight: '25%', bodyBottom: '35%' },
    { type: 'green', wickTop: '30%', wickBottom: '25%', bodyHeight: '30%', bodyBottom: '30%' },
    { type: 'red', wickTop: '45%', wickBottom: '20%', bodyHeight: '20%', bodyBottom: '30%' },
    { type: 'green', wickTop: '20%', wickBottom: '35%', bodyHeight: '35%', bodyBottom: '25%' },
    { type: 'red', wickTop: '40%', wickBottom: '15%', bodyHeight: '30%', bodyBottom: '25%' },
    { type: 'red', wickTop: '55%', wickBottom: '25%', bodyHeight: '5%', bodyBottom: '35%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full max-w-[600px] bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

      <div className="card-header flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="bg-[#141414] border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2.5 hover:border-white/20 transition-colors cursor-pointer">
          <span className="text-[#F7931A] font-bold text-lg leading-none">₿</span>
          <span className="text-[13px] font-semibold text-white">BTC Overview</span>
          <CaretDown size={10} weight="bold" className="text-white/40" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-[#141414] p-1 rounded-lg border border-white/10">
            {['1D', '7D', '30D', 'Cust'].map((t, i) => (
              <button
                key={t}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold tracking-tight transition-all ${i === 1 ? 'bg-[#2a2a2a] text-white' : 'text-white/20 hover:text-white/40'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-64 mb-4 border-b border-white/5">
        {/* Grid Lines */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-white/5 border-dashed"
            style={{ top: `${(i + 1) * 20}%` }}
          />
        ))}

        {/* Candles */}
        <div className="absolute inset-0 flex items-end justify-between px-2 pt-4 pb-0">
          {candles.map((c, i) => (
            <Candle key={i} {...c} />
          ))}
        </div>

        {/* Price Indicator */}
        <div className="absolute top-[30%] left-0 right-0 border-t border-white/20 border-dashed z-20" />
        <div className="absolute top-[30%] left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)] -translate-x-1/2 -translate-y-1/2 z-30" />
        <div className="absolute top-[30%] left-4 bg-[#141414] border border-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white -translate-y-1/2 z-30">
          6612.31
        </div>

        {/* Date Reference */}
        <div className="absolute top-[10%] bottom-0 left-[42%] border-l border-white/10 border-dashed z-20" />
        <div className="absolute top-[30%] left-[42%] w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border-2 border-white/40 -translate-x-1/2 -translate-y-1/2 z-30" />

        {/* Tooltip */}
        <div className="absolute top-[30%] left-[42%] translate-x-4 -translate-y-4 bg-[#141414]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 w-40 shadow-2xl z-40">
          <h4 className="text-[11px] font-bold text-white mb-2 whitespace-nowrap">16 Jul 2023</h4>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-white/40">Open:</span>
              <span className="text-white font-mono">6612.31</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-[#2ebd85]">High:</span>
              <span className="text-white font-mono">6940.11</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-[#f6465d]">Low:</span>
              <span className="text-white font-mono">6542.40</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-white/40">Close:</span>
              <span className="text-white font-mono">6489.58</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarketSummaryBentoCard() {
  const marketData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$9,331.37',
      trend: 'up',
      path: 'M0,25 C15,25 25,10 40,20 C55,30 65,5 80,10',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$531.37',
      trend: 'down',
      path: 'M0,20 C10,15 20,30 30,25 C45,15 55,10 65,25 C70,30 75,25 80,28',
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      price: '$331.37',
      trend: 'up',
      path: 'M0,22 C10,22 20,28 30,25 C40,20 50,15 60,20 C70,25 75,5 80,8',
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$101.37',
      trend: 'down',
      path: 'M0,25 C10,24 20,22 30,25 C40,28 50,10 60,15 C70,20 75,25 80,22',
    },
    {
      name: 'AVAX',
      symbol: '',
      price: '$39.18',
      trend: 'down',
      path: 'M0,28 C20,28 30,25 40,20 C50,15 60,25 80,22',
      faded: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full max-w-[420px] bg-[#0a0a0a] border border-white/10 rounded-[32px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

      <h2 className="text-white text-[15px] font-semibold mb-6 pb-4 border-b border-white/5">
        Resumo das Top 4
      </h2>

      <div className="space-y-2 mb-8">
        {marketData.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1.5fr_1fr_80px] items-center bg-[#121212] p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-[#181818] transition-all hover:-translate-y-0.5 group/item ${item.faded ? 'opacity-40' : ''}`}
          >
            <div className="text-[13px] font-bold text-[#e0e0e0] truncate">
              {item.name}{' '}
              <span className="text-white/20 font-medium ml-1 text-[11px]">
                {item.symbol ? `(${item.symbol})` : ''}
              </span>
            </div>
            <div className="text-[13px] font-semibold text-white/60 text-right pr-4 font-mono">
              {item.price}
            </div>
            <div className="w-20 h-8">
              <svg viewBox="0 0 80 35" preserveAspectRatio="none" className="overflow-visible">
                <path
                  d={`${item.path} V35 H0 Z`}
                  className={`${item.trend === 'up' ? 'fill-[#2ebd85]/10' : 'fill-[#f6465d]/10'}`}
                />
                <path
                  d={item.path}
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${item.trend === 'up' ? 'stroke-[#2ebd85]' : 'stroke-[#f6465d]'}`}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-white font-bold text-[15px]">Ferramentas Analíticas</h3>
        <p className="text-white/30 text-[13px] leading-relaxed">
          Snapshots em tempo real das principais moedas em uma interface limpa.
        </p>
      </div>
    </motion.div>
  );
}

// --- MAIN SECTION ---

export function LandingFeatures() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0b0b0c] overflow-hidden">
      {/* Seam Bridge (Hero -> Features) */}
      <div className="absolute top-0 left-0 right-0 h-[280px] bg-gradient-to-b from-[#0b0b0c] to-transparent pointer-events-none" />
      <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[1100px] h-[380px] bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.06)_0%,transparent_65%)] blur-[80px] opacity-70 pointer-events-none" />

      {/* Soft Top Highlight (keeps the page feeling like one canvas) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-60 pointer-events-none">
        <div className="absolute inset-0 blur-[6px] bg-white/[0.04]" />
      </div>

      {/* Simple Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-1/4 w-[400px] h-[400px] bg-white/[0.01] blur-[100px] rounded-full" />
      </div>

      {/* Seam Bridge (Features -> Next Section) */}
      <div className="absolute bottom-0 left-0 right-0 h-[240px] bg-gradient-to-t from-[#0b0b0c] to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[90px] opacity-60 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Feature 1: Swap (Left) | Text (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <SwapBentoCard />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/30 mb-2">
                <span className="text-[12px] font-black uppercase tracking-[0.3em]">
                  Alta Performance
                </span>
              </div>

              <h2 className="text-[42px] sm:text-[56px] font-black tracking-[-0.04em] leading-[0.95] text-white">
                Trocas <br />
                <span className="text-white/30 italic">Instantâneas.</span>
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/40 font-medium leading-relaxed max-w-[480px]">
                Troque qualquer token por outro com as melhores taxas do mercado, agregadas
                diretamente das principais DEXs em uma interface ultra-fluida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} weight="fill" className="text-white/20 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-[15px]">Agregação Inteligente</h4>
                  <p className="text-white/30 text-[13px] leading-snug">
                    Roteamento otimizado entre Uniswap, Curve e mais.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} weight="fill" className="text-white/20 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-[15px]">Segurança Máxima</h4>
                  <p className="text-white/30 text-[13px] leading-snug">
                    Simulação de transação antes da execução on-chain.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 2: Text (Left) | Analytics (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4 text-left lg:text-left">
              <div className="flex items-center gap-2 text-white/30 mb-2">
                <span className="text-[12px] font-black uppercase tracking-[0.3em]">
                  Análise Preditiva
                </span>
              </div>

              <h2 className="text-[42px] sm:text-[56px] font-black tracking-[-0.04em] leading-[0.95] text-white">
                Mercado em <br />
                <span className="text-white/30 italic">Tempo Real.</span>
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/40 font-medium leading-relaxed max-w-[480px]">
                Gráficos ao vivo, movimentos de preço e tendências de mercado atualizadas a cada
                segundo, oferecendo a clareza e velocidade necessárias para decisões estratégicas.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 backdrop-blur-sm">
                <ChartLineUp size={32} weight="duotone" className="text-white/40" />
                <div>
                  <h4 className="text-white font-bold text-[15px]">Insights On-Chain</h4>
                  <p className="text-white/30 text-[13px] leading-snug">
                    Acesso direto aos dados de liquidez e volume.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <AnalyticsBentoCard />
          </div>
        </div>

        {/* Feature 3: Summary (Left) | Text (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <MarketSummaryBentoCard />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/30 mb-2">
                <span className="text-[12px] font-black uppercase tracking-[0.3em]">
                  Visão Global
                </span>
              </div>

              <h2 className="text-[42px] sm:text-[56px] font-black tracking-[-0.04em] leading-[0.95] text-white">
                Monitoramento <br />
                <span className="text-white/30 italic">Multi-Asset.</span>
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/40 font-medium leading-relaxed max-w-[480px]">
                Acompanhe os principais ativos do ecossistema em uma única tela. Mini-gráficos
                dinâmicos mostram a tendência de curto prazo para que você nunca perca o timing.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              {[
                {
                  title: 'Diferencial Competitivo',
                  desc: 'Dados agregados de múltiplas fontes para precisão absoluta.',
                },
                {
                  title: 'Interface Adaptativa',
                  desc: 'Design otimizado para visualização rápida em qualquer dispositivo.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
                  <div>
                    <h4 className="text-white font-bold text-[15px]">{item.title}</h4>
                    <p className="text-white/30 text-[13px] leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
