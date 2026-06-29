"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { INDUSTRIES } from "@/lib/constants";

const TESTIMONIALS_DATA = [
  {
    quote: "Nudgli made getting reviews effortless. I simply enter the customer's number before I leave the job and the reviews start coming in. It's the simplest tool we've added to our business.",
    name: "Tom R.",
    title: "Owner",
    business: "HVAC Company",
    initials: "TR",
  },
  {
    quote: "We went from 12 Google reviews to over 80 in three months. Customers actually want to leave reviews — they just needed that text reminder. Game changer for our visibility.",
    name: "Sarah M.",
    title: "Owner",
    business: "Cleaning Service",
    initials: "SM",
  },
  {
    quote: "The best part is catching unhappy customers before they go to Google. We've resolved issues privately that would have been 1-star reviews. Worth every penny.",
    name: "Marcus J.",
    title: "Operations Manager",
    business: "Plumbing Co.",
    initials: "MJ",
  },
  {
    quote: "I'm not a tech person at all. With Nudgli I just type the number and hit send. That's it. My Google ranking has gone up and I'm getting more calls than ever.",
    name: "Linda K.",
    title: "Owner",
    business: "Landscaping",
    initials: "LK",
  },
  {
    quote: "We used to ask customers in person and it felt awkward. Now Nudgli handles it automatically and our review count has tripled. My techs love how simple it is.",
    name: "David P.",
    title: "Founder",
    business: "Electrical Services",
    initials: "DP",
  },
  {
    quote: "Finally a tool that doesn't require training. My whole crew uses it — just enter the number after each job. We're averaging 15 new reviews a month now.",
    name: "Rachel W.",
    title: "Owner",
    business: "Pest Control",
    initials: "RW",
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

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
    <SectionWrapper id="social-proof" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Industries subsection */}
        <AnimateOnScroll animation="fade-slide-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Built for businesses that run on reputation.
            </h2>
            <p className="text-gray-500 mb-8 text-sm">Especially service pros — but any business that depends on reviews.</p>
            <div className="grid grid-cols-4 gap-8">
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
                    className="text-teal fill-teal"
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
                    {testimonial.title}, {testimonial.business}
                  </p>
                </div>
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
