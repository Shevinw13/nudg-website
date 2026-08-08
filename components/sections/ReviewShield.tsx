import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const SHIELD_FEATURES = [
  {
    icon: "shield",
    title: "Automatic Monitoring",
    description: "Nudgli scans your Google Business page every 4 hours and flags reviews that may violate Google's policies.",
  },
  {
    icon: "alert-circle",
    title: "AI Violation Detection",
    description: "Identifies fake reviews, spam, harassment, and conflict of interest — with confidence scores and evidence.",
  },
  {
    icon: "reply",
    title: "AI Response Suggestions",
    description: "Get professional, empathetic replies drafted for legitimate negative reviews. Copy, paste, done.",
  },
  {
    icon: "trending-up",
    title: "Manual Review Analysis",
    description: "Paste any review and get instant AI analysis. Know whether to report it or respond.",
  },
];

export function ReviewShield() {
  return (
    <SectionWrapper id="review-shield" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div>
          <AnimateOnScroll animation="fade-slide-up">
            <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6">
              <Icon name="shield" size={16} className="text-red-500" ariaHidden />
              <span className="text-sm font-medium text-red-700">Included in Growth &amp; Pro plans</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Protect your reputation, automatically.
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Fake reviews happen. Review Shield monitors your Google page, detects potential
              policy violations with AI, and helps you take action — before unfair reviews
              cost you customers.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SHIELD_FEATURES.map((feature, index) => (
              <AnimateOnScroll key={feature.title} animation="fade-slide-up" delay={index * 100}>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-mint flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={18} className="text-teal" ariaHidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Right: Phone mockup */}
        <AnimateOnScroll animation="slide-up" delay={200}>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup
              imageSrc="/images/mockups/app-review-shield.png"
              imageAlt="Nudgli Review Shield tab showing 20 reviews analyzed, 4 potential violations detected with confidence scores for fake engagement and spam"
              className="w-[280px] md:w-[320px]"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
