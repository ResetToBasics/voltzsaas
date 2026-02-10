'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function AlertasPage() {
  return (
    <DashboardLayout>
      <ComingSoon title="Alertas" subtitle="Alertas de preco, risco, liquidez e eventos on-chain" />
    </DashboardLayout>
  );
}
