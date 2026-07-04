"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { INDUSTRIES } from "@/lib/constants";

const TESTIMONIALS_DATA = [
  {
    quote: "I punch in the number before I even get back to my truck. Took me maybe 5 seconds to figure out. Already got 9 new reviews this month.",
    name: "Tom R.",
    title: "Austin, TX",
    business: "HVAC",
    initials: "TR",
    rating: 5,
    source: "App Store",
  },
  {
    quote: "Went from 12 reviews to 80+ in about three months. I didn't change anything else. Just started using this after every job.",
    name: "Sarah M.",
    title: "Denver, CO",
    business: "Cleaning",
    initials: "SM",
    rating: 5,
    source: "App Store",
  },
  {
    quote: "Had a customer who was upset about a price. Instead of that becoming a 1-star review on Google, it came to me. Called him, sorted it out, he actually rebooked.",
    name: "Marcus J.",
    title: "Atlanta, GA",
    business: "Plumbing",
    initials: "MJ",
    rating: 5,
    source: "App Store",
  },
  {
    quote: "I'm 58 and not great with apps. This one I figured out in like 2 minutes. Type number, hit send, done. My Google rating went from 4.1 to 4.7.",
    name: "Steve K.",
    title: "Phoenix, AZ",
    business: "Landscaping",
    initials: "SK",
    rating: 5,
    source: "App Store",
  },
  {
    quote: "My guys hated asking for reviews in person. Now nobody has to. They just send the text and move on to the next job. Reviews tripled.",
    name: "David P.",
    title: "Chicago, IL",
    business: "Electrical",
    initials: "DP",
    rating: 4,
    source: "App Store",
  },
  {
    quote: "15 new Google reviews last month alone. Customers don't mind getting the text at all. A few even thanked me for making it easy.",
    name: "Jason W.",
    title: "Tampa, FL",
    business: "Pest Control",
    initials: "JW",
    rating: 5,
    source: "App Store",
  },
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = TESTIMONIALS_DATA[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <SectionWrapper id="social-proof" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Industries subsection */}
        <AnimateOnScroll animation="fade-slide-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Built for businesses that run on reputation.
            </h2>
            <p className="text-gray-500 mb-8 text-sm">Especially service pros, but any business that depends on reviews.</p>
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

        {/* Testimonial carousel */}
        <AnimateOnScroll animation="fade-slide-up" delay={200}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              Loved by Business Owners
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-lightGray relative">
              {/* 5-star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    size={20}
                    className={i < testimonial.rating ? "text-teal fill-teal" : "text-gray-200 fill-gray-200"}
                    ariaHidden
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed min-h-[100px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.business} · {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Source badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 bg-gray rounded-full px-3 py-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs text-gray-400">via {testimonial.source}</span>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-lightGray">
                <button
                  onClick={goPrev}
                  className="w-9 h-9 rounded-full border border-lightGray flex items-center justify-center hover:bg-mint transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentIndex ? "bg-teal" : "bg-lightGray"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goNext}
                  className="w-9 h-9 rounded-full border border-lightGray flex items-center justify-center hover:bg-mint transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
