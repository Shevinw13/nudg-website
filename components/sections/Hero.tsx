import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

export function Hero() {
  return (
    <SectionWrapper id="hero" background="white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* Text content — left column on desktop */}
        <div className="flex-1">
          <AnimateOnScroll animation="fade-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
              Your best customers want to help.{" "}
              <span className="text-teal">They just need a nudge.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-slide-up" delay={100}>
            <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
              Turn happy customers into 5-star Google reviews. Turn unhappy
              customers into private conversations before they go public.
            </p>
          </AnimateOnScroll>

          {/* Social proof stat */}
          <AnimateOnScroll animation="fade-slide-up" delay={150}>
            <div className="mt-6 inline-flex items-center gap-2 bg-mint rounded-full px-4 py-2">
              <Icon name="trending-up" size={16} className="text-teal" ariaHidden />
              <span className="text-sm font-medium text-navy">Service pros average 4x more reviews in 90 days</span>
            </div>
          </AnimateOnScroll>

          {/* Value Propositions — 2×2 grid on mobile, row on larger screens */}
          <AnimateOnScroll animation="fade-slide-up" delay={200}>
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {VALUE_PROPOSITIONS.map((prop) => (
                <div key={prop.title} className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center">
                    <Icon
                      name={prop.icon}
                      size={20}
                      className="text-teal"
                      ariaHidden
                    />
                  </div>
                  <span className="font-semibold text-sm text-navy">
                    {prop.title}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">{prop.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* App Store CTA */}
          <AnimateOnScroll animation="fade-slide-up" delay={300}>
            <div className="mt-10 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                href="#"
                ariaLabel="Nudgli coming soon to the App Store"
              >
                Coming Soon
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Phone mockup — right column on desktop */}
        <div className="mt-12 lg:mt-0 flex justify-center lg:flex-1">
          <AnimateOnScroll animation="slide-up" delay={200}>
            <div className="hover:scale-[1.02] transition-transform duration-300">
              <PhoneMockup
                imageSrc="/images/mockups/app-home.png"
                imageAlt="Nudgli app home screen showing review opportunities created, positive responses, needs follow-up, response rate, and recent activity"
                className="w-[320px] md:w-[380px] lg:w-[400px]"
                priority={true}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
