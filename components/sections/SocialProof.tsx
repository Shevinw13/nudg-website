import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { INDUSTRIES } from "@/lib/constants";

export function SocialProof() {
  return (
    <SectionWrapper id="social-proof" background="white">
      {/* Research-backed stats */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Why reviews matter
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Research from Harvard shows that better ratings directly drive revenue, and responding to feedback lifts your overall score.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-lightGray">
              <p className="text-3xl md:text-4xl font-bold text-teal mb-2">5–9%</p>
              <p className="text-sm text-gray-600">revenue increase per 1-star rating improvement</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-lightGray">
              <p className="text-3xl md:text-4xl font-bold text-teal mb-2">3×</p>
              <p className="text-sm text-gray-600">more reviews when businesses respond to feedback</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-lightGray">
              <p className="text-3xl md:text-4xl font-bold text-teal mb-2">#1</p>
              <p className="text-sm text-gray-600">trust signal for consumers choosing local businesses</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Industries */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
            Built for businesses that run on reputation.
          </h2>
          <p className="text-gray-500 mb-10 text-sm">Especially service pros, but any business that depends on reviews.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-mint flex items-center justify-center">
                  <Icon
                    name={industry.icon}
                    size={28}
                    className="text-teal"
                    ariaHidden
                  />
                </div>
                <span className="text-sm font-medium text-navy">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
