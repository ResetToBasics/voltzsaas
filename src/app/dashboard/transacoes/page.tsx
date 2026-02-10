'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function TransacoesPage() {
  return (
    <DashboardLayout>
      <ComingSoon
        title="Transacoes"
        subtitle="Historico completo, filtros por rede/status e exportacao CSV"
      />
    </DashboardLayout>
  );
}
