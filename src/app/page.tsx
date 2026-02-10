import { LandingHero } from '@/presentation/components/Landing/LandingHero';
import { LandingFeatures } from '@/presentation/components/Landing/LandingFeatures';
import { LandingGlobalNetwork } from '@/presentation/components/Landing/LandingGlobalNetwork';
import { LandingPricing } from '@/presentation/components/Landing/LandingPricing';
import { LandingFAQ } from '@/presentation/components/Landing/LandingFAQ';
import { LandingFooter } from '@/presentation/components/Landing/LandingFooter';

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <LandingFeatures />
      <LandingGlobalNetwork />
      <LandingPricing />
      <LandingFAQ />
      <LandingFooter />
    </>
  );
}
