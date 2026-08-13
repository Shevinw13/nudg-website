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
            One text after every job. See how customers feel instantly — then send your Google review link while it&apos;s fresh.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Two Outcomes */}
      <AnimateOnScroll animation="fade-slide-up" delay={150}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Customer Rates You */}
          <div className="bg-white rounded-3xl border-2 border-teal/30 p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal to-teal/70" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">⭐⭐⭐⭐⭐</span>
              <span className="bg-mint text-teal rounded-full px-3 py-1 text-sm font-semibold">Instant Rating</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">→ You Get Notified</h3>
            <p className="text-navy/60 text-sm leading-relaxed">
              Customers rate their experience 1-5 via text. You get a push notification instantly — then send your Google review link with one tap while it&apos;s fresh.
            </p>
          </div>

          {/* Feedback When It Matters */}
          <div className="bg-white rounded-3xl border-2 border-amber-200 p-8 lg:p-10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">💬</span>
              <span className="bg-amber-50 text-amber-700 rounded-full px-3 py-1 text-sm font-semibold">Private Feedback</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">→ Catch Issues Early</h3>
            <p className="text-navy/60 text-sm leading-relaxed">
              Low ratings prompt customers to share what went wrong. You see the feedback in your inbox and can follow up before it becomes a public complaint.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
