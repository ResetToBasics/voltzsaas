'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function ComprarVenderPage() {
  return (
    <DashboardLayout>
      <ComingSoon
        title="Comprar/Vender"
        subtitle="Ordem rapida, ordem avancada, swaps e limites por par"
      />
    </DashboardLayout>
  );
}
