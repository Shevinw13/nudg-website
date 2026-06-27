"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const KEY_FEATURES = [
  {
    icon: "tap",
    title: "Send in Seconds",
    description: "Enter a phone number. Tap send. That's the entire workflow.",
  },
  {
    icon: "route",
    title: "Smart Routing",
    description: "Happy customers get your Google Review link. Unhappy customers come to you first.",
  },
  {
    icon: "chart",
    title: "Track Everything",
    description: "See reviews, ratings, and growth from one simple dashboard.",
  },
  {
    icon: "shield",
    title: "Protect Your Reputation",
    description: "Resolve issues privately before they become public reviews.",
  },
  {
    icon: "lock",
    title: "No Setup Required",
    description: "Download. Sign up. Add your Google link. Start sending.",
  },
];

export function Features() {
  return (
    <SectionWrapper id="features" background="white">
      <div className="text-center mb-12">
        <AnimateOnScroll animation="fade-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            No CRM. No integrations. No complicated setup.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            A technician standing next to their truck can send a review request in seconds.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {KEY_FEATURES.map((feature, index) => (
          <AnimateOnScroll
            key={feature.title}
            animation="fade-slide-up"
            delay={index * 80}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="bg-gray rounded-2xl p-6 h-full flex flex-col hover-lift">
              <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={20} className="text-teal" ariaHidden />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
