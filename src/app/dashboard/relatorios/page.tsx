'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function RelatoriosPage() {
  return (
    <DashboardLayout>
      <ComingSoon
        title="Relatorios"
        subtitle="Performance, taxas, impostos (estimativa) e auditoria"
      />
    </DashboardLayout>
  );
}
