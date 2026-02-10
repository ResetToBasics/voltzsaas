'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function ContasPage() {
  return (
    <DashboardLayout>
      <ComingSoon title="Contas" subtitle="Workspaces, enderecos, permissoes e conexoes" />
    </DashboardLayout>
  );
}
