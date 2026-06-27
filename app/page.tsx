import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { SmsDemo } from '@/components/sections/SmsDemo';
import { Pricing } from '@/components/sections/Pricing';
import { SocialProof } from '@/components/sections/SocialProof';
import { BottomCta } from '@/components/sections/BottomCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <SmsDemo />
      <Pricing />
      <SocialProof />
      <BottomCta />
    </>
  );
}
