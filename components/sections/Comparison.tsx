import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const OLD_WAY = [
  "Awkwardly ask customers in person",
  "Most people say \"sure\" and never do it",
  "Negative reviews go straight to Google",
  "No system — you forget after every job",
  "Maybe 1–2 reviews per month",
  "Zero insight into what went wrong",
  "Costs you thousands in lost customers",
];

const NUDGLI_WAY = [
  "One text in 5 seconds, right after the job",
  "85% actually respond via text",
  "Get notified instantly, then send your Google link with one tap",
  "Automatic — works every single time",
  "10–20+ new reviews per month",
  "Real feedback you can act on immediately",
  "Plans starting at $9.99/mo — Review Shield free, forever",
];

export function Comparison() {
  return (
    <SectionWrapper id="comparison" background="gray">
      <AnimateOnScroll animation="fade-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Stop leaving reviews to chance.
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          See what changes when you give customers the easiest possible way to share their experience.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* The Nudgli Way */}
        <AnimateOnScroll animation="fade-slide-up" delay={100}>
          <div className="rounded-2xl border-2 border-teal bg-gradient-to-b from-mint to-white p-8 h-full relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </div>
            <h3 className="text-xl font-bold text-navy mb-6">The Nudgli way</h3>
            <ul className="space-y-4">
              {NUDGLI_WAY.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* The Old Way */}
        <AnimateOnScroll animation="fade-slide-up" delay={200}>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 h-full">
            <h3 className="text-xl font-bold text-gray-400 mb-6">The old way</h3>
            <ul className="space-y-4">
              {OLD_WAY.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
