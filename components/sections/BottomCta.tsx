"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const trustIndicators = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
];

export function BottomCta() {
  return (
    <SectionWrapper id="bottom-cta" background="navy">
      <AnimateOnScroll animation="fade-slide-up">
        <div className="flex flex-col items-center text-center">
          {/* Nudgli logo */}
          <img
            src="/images/applogo.png"
            alt=""
            width={48}
            height={48}
            className="mb-6 rounded-xl"
            aria-hidden="true"
          />

          {/* Headline — varied from hero */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Every completed job is a 5-star review waiting to happen.
          </h2>

          <p className="text-lg text-white/70 mb-8 max-w-lg">
            Stop leaving reviews on the table. Start collecting them today.
          </p>

          {/* CTA Button — different from hero */}
          <Button variant="primary" size="lg" href="#">
            Coming Soon
          </Button>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">
            {trustIndicators.map((text) => (
              <div key={text} className="flex items-center gap-2">
                <Icon
                  name="check"
                  size={18}
                  className="text-teal"
                  ariaHidden={true}
                />
                <span className="text-base text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
