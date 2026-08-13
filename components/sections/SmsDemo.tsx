"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SmsDemo() {
  return (
    <SectionWrapper id="sms-demo" background="gray" sectionClassName="!pb-6 lg:!pb-10">
      {/* Header */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            The Nudgli Difference
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            One text after every job. See how every customer feels in real time — then decide exactly who to send your Google review link to. All with one tap.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Two Outcomes */}
      <AnimateOnScroll animation="fade-slide-up" delay={150}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Instant Ratings + Google Link */}
          <div className="bg-white rounded-3xl border-2 border-teal/30 p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal to-teal/70" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">⭐⭐⭐⭐⭐</span>
              <span className="bg-mint text-teal rounded-full px-3 py-1 text-sm font-semibold">Real-Time Ratings</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">→ See Every Rating. You Choose Who Gets Your Google Link.</h3>
            <p className="text-navy/60 text-sm leading-relaxed">
              Every rating shows up in your dashboard instantly. See who loved the job, then send your Google review link to any customer with one tap — right when the experience is freshest. You&apos;re in control of who you ask, and when.
            </p>
          </div>

          {/* Feedback When It Matters */}
          <div className="bg-white rounded-3xl border-2 border-amber-200 p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">💬</span>
              <span className="bg-amber-50 text-amber-700 rounded-full px-3 py-1 text-sm font-semibold">Private Feedback</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">→ Catch Problems Before They Go Public</h3>
            <p className="text-navy/60 text-sm leading-relaxed">
              Low ratings automatically prompt customers to share what went wrong — privately, in your inbox. You see the issue, call them back, and fix it. That unhappy customer becomes a loyal one instead of a 1-star review.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
