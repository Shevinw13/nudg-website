import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PricingCard } from "@/components/ui/PricingCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PRICING_TIERS } from "@/lib/constants";

export function Pricing() {
  return (
    <SectionWrapper id="pricing" background="white">
      <div className="text-center mb-12">
        <AnimateOnScroll animation="fade-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            All features included in every plan
          </p>
        </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        {/* On mobile, Growth (highlighted) renders first via order classes */}
        {PRICING_TIERS.map((tier, index) => (
          <AnimateOnScroll
            key={tier.id}
            animation="fade-slide-up"
            delay={index * 100}
            className={tier.highlighted ? "order-first md:order-none" : ""}
          >
            <PricingCard
              tier={tier.name}
              price={tier.price}
              smsQuota={tier.smsQuota}
              description={tier.description}
              highlighted={tier.highlighted}
              badge={tier.badge}
            />
          </AnimateOnScroll>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 space-y-1">
        <p>14-day free trial · No contracts · Cancel anytime</p>
        <p>Subscriptions managed through the Apple App Store</p>
      </div>
    </SectionWrapper>
  );
}
