'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { OverviewHeader } from '@/presentation/components/Dashboard/OverviewHeader';
import { StatCard } from '@/presentation/components/Dashboard/StatCard';
import { EquityEvolutionChart } from '@/presentation/components/Dashboard/EquityEvolutionChart';
import { ActiveContractsCard } from '@/presentation/components/Dashboard/ActiveContractsCard';

// Mock Data Generators
const generateAreaLoop = () =>
  Array.from({ length: 15 }, (_, i) => ({ value: 40 + Math.sin(i / 2) * 20 + Math.random() * 10 }));
const generateBarLoop = () =>
  Array.from({ length: 10 }, () => ({ value: Math.random() * 80 + 20 }));

import { useState, useEffect } from 'react';

// ... (imports remain)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full bg-[#202022] overflow-hidden">
        <OverviewHeader />

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pb-10">
          <div className="px-4 sm:px-6 lg:px-12 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
            <StatCard
              title="Rendimento Total"
              value="1,150.50"
              change="+8.5%"
              chartType="area"
              chartColor="#10B981" // Emerald
              data={generateAreaLoop()}
              loading={isLoading}
            />
            <StatCard
              title="Rendimento Staking"
              value="300.42"
              change="+15.5%"
              chartType="area"
              chartColor="#F59E0B" // Amber
              data={generateAreaLoop()}
              loading={isLoading}
            />
            <StatCard
              title="Contratos Ativos"
              value="30"
              subtitle="(24 Trades / 6 Stake)"
              change="+4.9%"
              chartType="bar"
              chartColor="#6366F1" // Indigo
              data={generateBarLoop()}
              loading={isLoading}
            />
            <StatCard
              title="Taxas Pagas"
              value="10,40"
              changeType="negative"
              change="+20.2%"
              chartType="bar"
              chartColor="#EF4444" // Red
              data={generateBarLoop()}
              loading={isLoading}
            />
          </div>

          <div className="px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-4 mt-4 sm:mt-6 w-full">
            <div className="flex-1 min-w-0">
              <EquityEvolutionChart loading={isLoading} />
            </div>
            <div className="flex-1 min-w-0">
              <ActiveContractsCard loading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
