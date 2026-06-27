"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* ─── Down Arrow ──────────────────────────────────────────────────── */

function DownArrow() {
  return (
    <div className="flex justify-center py-6">
      <svg width="2" height="32" className="text-gray-200">
        <line x1="1" y1="0" x2="1" y2="32" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

/* ─── Branch Connector ────────────────────────────────────────────── */

function BranchConnector() {
  return (
    <div className="flex justify-center py-8">
      <svg width="200" height="48" viewBox="0 0 200 48" fill="none" className="text-gray-300">
        {/* Vertical stem */}
        <line x1="100" y1="0" x2="100" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        {/* Left branch */}
        <path d="M100 16 Q100 32 40 40" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Right branch */}
        <path d="M100 16 Q100 32 160 40" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Left dot */}
        <circle cx="40" cy="40" r="4" fill="#22C55E" />
        {/* Right dot */}
        <circle cx="160" cy="40" r="4" fill="#F59E0B" />
      </svg>
    </div>
  );
}

/* ─── SMS Bubble ──────────────────────────────────────────────────── */

function Bubble({ direction, children }: { direction: "sent" | "received"; children: React.ReactNode }) {
  const isSent = direction === "sent";
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed whitespace-pre-line ${
        isSent
          ? "bg-navy text-white rounded-[18px] rounded-br-[4px]"
          : "bg-white text-navy rounded-[18px] rounded-bl-[4px] shadow-sm border border-gray-100"
      }`}>
        {children}
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────── */

export function SmsDemo() {
  return (
    <SectionWrapper id="sms-demo" background="gray">
      {/* Header */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            From one text to more 5-star reviews.
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            One text. Two smart paths. Nudgli routes every customer to the right next step.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ─── Shared Journey (centered) ───────────────────────────── */}
      <div className="max-w-sm mx-auto">
        <AnimateOnScroll animation="fade-slide-up" delay={100}>
          <div className="bg-white rounded-2xl border border-lightGray px-6 py-5 shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="font-semibold text-navy text-sm">You send a review request</p>
            <p className="text-xs text-gray-400 mt-1">Customer&apos;s phone number → tap Send</p>
          </div>
        </AnimateOnScroll>

        <DownArrow />

        <AnimateOnScroll animation="fade-slide-up" delay={150}>
          <div className="bg-white rounded-2xl border border-lightGray px-6 py-5 shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="font-semibold text-navy text-sm">Customer replies with a rating</p>
            <p className="text-xs text-gray-400 mt-1">They text back a number from 1–5</p>
          </div>
        </AnimateOnScroll>

        <DownArrow />

        <AnimateOnScroll animation="fade-slide-up" delay={200}>
          <div className="bg-white rounded-2xl border border-lightGray px-6 py-5 shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
                <path d="M15 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
                <path d="M9 7h3a5 5 0 0 1 5 5v2" />
                <path d="M6 10v3a5 5 0 0 0 5 5h1" />
              </svg>
            </div>
            <p className="font-semibold text-navy text-sm">Smart Routing</p>
            <p className="text-xs text-gray-400 mt-1">One conversation. Two smart outcomes.</p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ─── Branch Connector ────────────────────────────────────── */}
      <AnimateOnScroll animation="fade-slide-up" delay={250}>
        <BranchConnector />
      </AnimateOnScroll>

      {/* ─── Two Paths ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* ─── Happy Customer ─────────────────────────────────────── */}
        <AnimateOnScroll animation="fade-slide-up" delay={300}>
          <div>
            {/* Branch Label */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-semibold text-navy">Happy Customer</p>
                <p className="text-xs text-gray-400">4–5 Stars</p>
              </div>
            </div>

            {/* SMS Conversation */}
            <div className="bg-white rounded-2xl border border-lightGray p-6 shadow-sm mb-6">
              <div className="bg-gray/60 rounded-xl p-4">
                <Bubble direction="sent">
                  Hi Jane! Thanks for choosing Summit Plumbing today. How would you rate your experience?{"\n\n"}Reply with a number from 1–5.
                </Bubble>
                <div className="flex justify-start mb-3 items-center gap-2">
                  <span className="bg-white border border-gray-100 shadow-sm text-navy rounded-[18px] rounded-bl-[4px] px-4 py-3 text-[13px] font-bold">5</span>
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">5</span>
                </div>
                <Bubble direction="sent">
                  {"🎉 Awesome! We're so glad you had a great experience.\n\nWould you mind taking 30 seconds to leave us a Google review?\n\nLeave a Review →\n\nThanks for supporting our local business!"}
                </Bubble>
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-2xl border border-lightGray border-l-4 border-l-green-500 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">New Google Review</p>
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic">&quot;Excellent service! Highly recommend.&quot;</p>
                  <p className="text-xs text-gray-400 mt-1">Published on Google</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ─── Needs Attention ────────────────────────────────────── */}
        <AnimateOnScroll animation="fade-slide-up" delay={400}>
          <div>
            {/* Branch Label */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <div>
                <p className="text-sm font-semibold text-navy">Needs Attention</p>
                <p className="text-xs text-gray-400">1–3 Stars</p>
              </div>
            </div>

            {/* SMS Conversation */}
            <div className="bg-white rounded-2xl border border-lightGray p-6 shadow-sm mb-6">
              <div className="bg-gray/60 rounded-xl p-4">
                <Bubble direction="sent">
                  Hi Jane! Thanks for choosing Summit Plumbing today. How would you rate your experience?{"\n\n"}Reply with a number from 1–5.
                </Bubble>
                <div className="flex justify-start mb-3 items-center gap-2">
                  <span className="bg-white border border-gray-100 shadow-sm text-navy rounded-[18px] rounded-bl-[4px] px-4 py-3 text-[13px] font-bold">2</span>
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">2</span>
                </div>
                <Bubble direction="sent">
                  {"We're sorry your experience wasn't what we hoped for.\n\nSomeone from our team will reach out shortly to make things right.\n\nThank you for your feedback."}
                </Bubble>
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-2xl border border-lightGray border-l-4 border-l-amber-500 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-6l-2 3H10l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy mb-2">Private Feedback</p>
                  <div className="bg-gray/60 rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-navy">Jane S.</span>
                      <span className="text-[10px] text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full">⭐⭐ Needs Attention</span>
                    </div>
                    <p className="text-xs text-gray-500 italic mb-2">&quot;Technician arrived late.&quot;</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-white border border-gray-200 rounded px-2 py-1 text-navy font-medium">Call Customer</span>
                      <span className="text-[10px] bg-white border border-gray-200 rounded px-2 py-1 text-navy font-medium">Mark Resolved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
