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
          {/* Nudg teal curved-arrow logo mark */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="mb-6"
          >
            <rect width="48" height="48" rx="12" fill="#0CBFA6"/>
            <path
              d="M15 28c0-5 3-9 8-10v-4l10 8-10 8v-4c-4 0-6 2-8 6v-1c0-2 0-3 0-3z"
              fill="white"
            />
          </svg>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Your best customers want to help. They just need a nudge.
          </h2>

          <p className="text-lg text-white/70 mb-8 max-w-lg">
            Start turning completed jobs into more 5-star reviews today.
          </p>

          {/* CTA Button */}
          <Button variant="primary" size="lg" href="#">
            Start Free Trial
          </Button>
          <a href="#" className="mt-3 text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4">
            Download on the App Store
          </a>

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
