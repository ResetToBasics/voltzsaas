'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function SuportePage() {
  return (
    <DashboardLayout>
      <ComingSoon title="Suporte" subtitle="Central de ajuda, tickets, status e contato" />
    </DashboardLayout>
  );
}
