import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { ReviewShield } from '@/components/sections/ReviewShield';
import { SmsDemo } from '@/components/sections/SmsDemo';
import { SocialProof } from '@/components/sections/SocialProof';
import { Comparison } from '@/components/sections/Comparison';
import { Pricing } from '@/components/sections/Pricing';
import { BottomCta } from '@/components/sections/BottomCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SmsDemo />
      <Features />
      <ReviewShield />
      <SocialProof />
      <Comparison />
      <Pricing />
      <BottomCta />
    </>
  );
}
