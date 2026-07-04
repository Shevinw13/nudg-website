"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const KEY_FEATURES = [
  {
    icon: "tap",
    title: "One-Tap Requests",
    description: "Enter a phone number, tap send. No forms, no CRM, no integrations needed.",
    screen: "/images/mockups/app-inbox.png",
    screenAlt: "Nudgli app inbox view showing customer interactions",
  },
  {
    icon: "inbox",
    title: "Feedback Inbox",
    description: "Unhappy customers land here, not on Google. Call them back, resolve the issue, protect your reputation.",
    screen: "/images/mockups/app-send-request.png",
    screenAlt: "Nudgli send review request screen with a simple phone number input and send button",
  },
  {
    icon: "chart",
    title: "Real-Time Dashboard",
    description: "Track reviews, ratings, response rates, and month-over-month growth at a glance.",
    screen: "/images/mockups/app-dashboard.png",
    screenAlt: "Nudgli dashboard showing review statistics, response rate, and growth metrics",
  },
  {
    icon: "bell",
    title: "Instant Notifications",
    description: "Get a push alert within 60 seconds of new feedback, positive or negative.",
    screen: "/images/mockups/push-notification.svg",
    screenAlt: "Phone lock screen showing Nudgli push notifications for a new 5-star review and a needs-attention alert",
  },
  {
    icon: "copy-check",
    title: "Duplicate Protection",
    description: "Warns you if a customer was already texted in the last 24 hours. No accidental spam.",
    screen: "/images/mockups/duplicate-protection.svg",
    screenAlt: "Nudgli send screen showing a duplicate detection warning for a customer texted 4 hours ago",
  },
  {
    icon: "lock",
    title: "Secure by Default",
    description: "AES-256 encryption for all customer data. GDPR-style deletion on request.",
    screen: "/images/mockups/secure-settings.svg",
    screenAlt: "Nudgli security settings showing encryption status, audit logging, and data protection features",
  },
];

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = KEY_FEATURES[activeIndex];

  return (
    <SectionWrapper id="features" background="white" sectionClassName="!pt-4 lg:!pt-8">
      {/* "No complexity" callout */}
      <AnimateOnScroll animation="fade-slide-up">
        <div className="bg-mint rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto mb-10">
          <p className="text-xl md:text-2xl font-bold text-navy">
            No CRM. No integrations. No complicated setup.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            If you can send a text message, you can use Nudgli.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="text-center mb-10">
        <AnimateOnScroll animation="fade-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Everything You Need
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            Powerful where it counts. Simple everywhere else.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Two-column layout: features + interactive phone mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {KEY_FEATURES.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`text-left rounded-2xl p-5 h-full flex flex-col transition-all duration-200 ${
                index === activeIndex
                  ? "bg-mint ring-2 ring-teal shadow-md"
                  : "bg-gray hover:shadow-sm hover:-translate-y-0.5"
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                index === activeIndex ? "bg-teal" : "bg-mint"
              }`}>
                <Icon
                  name={feature.icon}
                  size={18}
                  className={index === activeIndex ? "text-white" : "text-teal"}
                  ariaHidden
                />
              </div>
              <h3 className="text-base font-semibold text-navy mb-1.5">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </button>
          ))}
        </div>

        {/* Right: Phone mockup that changes based on selected feature */}
        <AnimateOnScroll animation="fade-slide-up" delay={200}>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative rounded-[40px] bg-gray-900 p-3 shadow-2xl overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-[80px] h-[24px] bg-black rounded-full" />
                <div className="rounded-[28px] overflow-hidden bg-white w-[260px] h-[520px] sm:w-[280px] sm:h-[560px] relative" style={{ isolation: "isolate" }}>
                  {KEY_FEATURES.map((feature, index) => (
                    <img
                      key={feature.title}
                      src={feature.screen}
                      alt={feature.screenAlt}
                      width={280}
                      height={560}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Feature label badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5 flex items-center gap-2 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
                  <Icon name={activeFeature.icon} size={16} className="text-teal" ariaHidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-navy">{activeFeature.title}</p>
                  <p className="text-[10px] text-gray-400">Tap a feature to explore</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
