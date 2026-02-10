'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function SegurancaPage() {
  return (
    <DashboardLayout>
      <ComingSoon title="Seguranca" subtitle="2FA, whitelists, chaves, limites e politicas" />
    </DashboardLayout>
  );
}
