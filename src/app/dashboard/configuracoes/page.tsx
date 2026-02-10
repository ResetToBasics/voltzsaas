'use client';

import { DashboardLayout } from '@/presentation/components/DashboardLayout';
import { ComingSoon } from '@/presentation/components/ComingSoon';

export default function ConfiguracoesPage() {
  return (
    <DashboardLayout>
      <ComingSoon
        title="Configuracoes"
        subtitle="Preferencias, formato, moeda base, idioma e integracoes"
      />
    </DashboardLayout>
  );
}
