"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SmsDemo() {
  return (
    <SectionWrapper id="sms-demo" background="white">
      {/* Header */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            The Nudgli Difference
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Every other platform sends all customers to Google. Nudgli is smarter.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Two Outcomes */}
      <AnimateOnScroll animation="fade-slide-up" delay={150}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Happy Customer */}
          <div className="bg-white rounded-3xl border-2 border-green-200 p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-green-500" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">⭐⭐⭐⭐⭐</span>
              <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-semibold">4–5 Stars</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">→ Google Review Link</h3>
            <p className="text-navy/60 text-sm leading-relaxed">
              Happy customers automatically receive your Google Review link. They leave a public 5-star review. Your reputation grows.
            </p>
          </div>

          {/* Needs Attention */}
          <div className="bg-white rounded-3xl border-2 border-amber-200 p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">⭐⭐☆☆☆</span>
              <span className="bg-amber-50 text-amber-700 rounded-full px-3 py-1 text-sm font-semibold">1–3 Stars</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">→ Private Feedback</h3>
            <p className="text-navy/60 text-sm leading-relaxed">
              Unhappy customers never see a Google link. Their feedback comes directly to you so you can resolve the issue before it becomes public.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
