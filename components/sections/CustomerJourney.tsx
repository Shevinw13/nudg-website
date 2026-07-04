"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

/* ─── Journey Step ────────────────────────────────────────────────── */

function JourneyStep({
  number,
  title,
  description,
  children,
  accent = "teal",
}: {
  number: number;
  title: string;
  description: string;
  children?: React.ReactNode;
  accent?: "teal" | "green" | "amber";
}) {
  const accentColors = {
    teal: "bg-teal text-white",
    green: "bg-green-500 text-white",
    amber: "bg-amber-500 text-white",
  };

  return (
    <div className="flex gap-6 items-start">
      {/* Step number + vertical line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-10 h-10 rounded-full ${accentColors[accent]} flex items-center justify-center font-bold text-sm shadow-md`}>
          {number}
        </div>
        <div className="w-px h-full bg-lightGray min-h-[40px]" />
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <h3 className="text-lg font-semibold text-navy mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
}

/* ─── Phone Frame ─────────────────────────────────────────────────── */

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative inline-block rounded-[28px] bg-gray-800 border-[6px] border-gray-800 shadow-xl overflow-hidden">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-[70px] h-[20px] bg-black rounded-full" />
      <div className="rounded-[22px] overflow-hidden bg-white w-[200px] h-[433px]">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={433}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

/* ─── SMS Bubble inline ───────────────────────────────────────────── */

function SmsBubble({ direction, children }: { direction: "sent" | "received"; children: React.ReactNode }) {
  const isSent = direction === "sent";
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`max-w-[85%] px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line ${
        isSent ? "bg-navy text-white rounded-2xl rounded-br-sm" : "bg-white text-navy rounded-2xl rounded-bl-sm border border-gray-200"
      }`}>
        {children}
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────── */

export function CustomerJourney() {
  return (
    <SectionWrapper id="customer-journey" background="white">
      {/* Header */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            From job complete to 5-star review.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto">
            Your best customers want to help. They just need a nudge.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Journey Timeline */}
      <div className="max-w-3xl mx-auto">

        {/* Step 1: Complete the Job */}
        <AnimateOnScroll animation="fade-slide-up" delay={100}>
          <JourneyStep
            number={1}
            title="Complete the Job"
            description="Finish your service, exactly like you already do."
          />
        </AnimateOnScroll>

        {/* Step 2: Open Nudgli */}
        <AnimateOnScroll animation="fade-slide-up" delay={150}>
          <JourneyStep
            number={2}
            title="Open Nudgli"
            description="Your dashboard shows all review activity at a glance."
          >
            <PhoneFrame
              src="/images/mockups/app-dashboard.png"
              alt="Nudgli home dashboard showing review opportunities, positive responses, and recent activity"
            />
          </JourneyStep>
        </AnimateOnScroll>

        {/* Step 3: Send Review Request */}
        <AnimateOnScroll animation="fade-slide-up" delay={200}>
          <JourneyStep
            number={3}
            title="Send Review Request"
            description="Enter the customer's phone number. Tap send. Less than 10 seconds."
          >
            <PhoneFrame
              src="/images/mockups/app-send-request.png"
              alt="Nudgli send review request screen with customer name and phone number fields"
            />
          </JourneyStep>
        </AnimateOnScroll>

        {/* Step 4: Customer Receives Text */}
        <AnimateOnScroll animation="fade-slide-up" delay={250}>
          <JourneyStep
            number={4}
            title="Customer Receives Text"
            description="They get a friendly SMS asking to rate their experience 1–5."
          >
            <div className="bg-gray rounded-2xl p-5 max-w-sm">
              <SmsBubble direction="sent">
                Hi John! Thanks for choosing Summit Plumbing today.{"\n\n"}How would you rate your experience?{"\n"}Reply with a number from 1–5.
              </SmsBubble>
            </div>
          </JourneyStep>
        </AnimateOnScroll>

        {/* Step 5: Happy Customer Path */}
        <AnimateOnScroll animation="fade-slide-up" delay={300}>
          <JourneyStep
            number={5}
            title="Happy Customer Leaves a Google Review"
            description="4–5 star ratings automatically receive your Google Review link."
            accent="green"
          >
            <div className="bg-gray rounded-2xl p-5 max-w-sm space-y-3">
              <SmsBubble direction="received">5</SmsBubble>
              <SmsBubble direction="sent">
                {"🎉 Awesome! We're so glad you had a great experience.\n\nWould you mind leaving us a quick Google review?\n\nLeave a Review →\n\nThanks for supporting our local business!"}
              </SmsBubble>

              {/* Google Review card */}
              <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                  ))}
                </div>
                <p className="text-xs font-medium text-navy">John D.</p>
                <p className="text-xs text-gray-500 italic">&quot;Great service, very professional!&quot;</p>
                <div className="mt-2 inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-medium px-2 py-0.5 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Published on Google
                </div>
              </div>
            </div>
          </JourneyStep>
        </AnimateOnScroll>

        {/* Step 6: Dashboard Updates */}
        <AnimateOnScroll animation="fade-slide-up" delay={350}>
          <JourneyStep
            number={6}
            title="Dashboard Updates Automatically"
            description="Track your reviews, growth, and response rate in real time."
            accent="green"
          >
            <PhoneFrame
              src="/images/mockups/app-dashboard.png"
              alt="Nudgli dashboard showing updated review statistics and growth metrics"
            />
          </JourneyStep>
        </AnimateOnScroll>

        {/* Step 7: Needs Attention Path */}
        <AnimateOnScroll animation="fade-slide-up" delay={400}>
          <JourneyStep
            number={7}
            title="Unhappy? Feedback Comes to You, Not Google"
            description="1–3 star ratings are routed privately to your inbox so you can resolve issues before they become public reviews."
            accent="amber"
          >
            <div className="space-y-4">
              {/* SMS conversation */}
              <div className="bg-gray rounded-2xl p-5 max-w-sm space-y-3">
                <SmsBubble direction="received">2</SmsBubble>
                <SmsBubble direction="sent">
                  {"We're sorry your experience wasn't what we hoped for.\n\nSomeone from our team will reach out to make things right."}
                </SmsBubble>
              </div>

              {/* Inbox screenshot */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Your Inbox</p>
                <PhoneFrame
                  src="/images/mockups/app-inbox.png"
                  alt="Nudgli inbox showing customer feedback that needs attention with options to call or resolve"
                />
              </div>
            </div>
          </JourneyStep>
        </AnimateOnScroll>

      </div>
    </SectionWrapper>
  );
}
