import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const SHIELD_FEATURES = [
  {
    icon: "shield",
    title: "24/7 Monitoring",
    description: "Scans your Google page every 4 hours. New reviews are analyzed automatically — you don't lift a finger.",
  },
  {
    icon: "alert-circle",
    title: "Policy Violation Detection",
    description: "AI identifies exactly which Google policy a review violates — fake engagement, spam, harassment, conflict of interest — with evidence and confidence scores.",
  },
  {
    icon: "star",
    title: "Guided Removal",
    description: "Step-by-step instructions to report violating reviews to Google. We tell you what to flag and why it qualifies for removal.",
  },
  {
    icon: "reply",
    title: "AI Response Drafts",
    description: "For legitimate negative reviews, get a professional response generated instantly. Copy, paste, protect your reputation.",
  },
];

export function ReviewShield() {
  return (
    <SectionWrapper id="review-shield" background="gray">
      <AnimateOnScroll animation="fade-slide-up">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6">
            <Icon name="shield" size={16} className="text-red-500" ariaHidden />
            <span className="text-sm font-medium text-red-700">Included in Growth &amp; Pro plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Bad reviews don&apos;t have to stick.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Review Shield uses AI to monitor your Google reviews, detect policy violations,
            and guide you through getting them removed — before they cost you customers.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Phone mockup */}
        <AnimateOnScroll animation="slide-up" delay={100}>
          <div className="flex justify-center">
            <PhoneMockup
              imageSrc="/images/mockups/app-review-shield.png"
              imageAlt="Nudgli Review Shield tab showing 20 reviews analyzed, 4 potential violations detected including fake engagement and spam with confidence scores"
              className="w-[280px] md:w-[320px]"
            />
          </div>
        </AnimateOnScroll>

        {/* Right: Features */}
        <div className="space-y-6">
          {SHIELD_FEATURES.map((feature, index) => (
            <AnimateOnScroll key={feature.title} animation="fade-slide-up" delay={index * 100}>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon} size={20} className="text-teal" ariaHidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
