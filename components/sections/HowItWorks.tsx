"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { StepCard } from "@/components/ui/StepCard";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { STEPS } from "@/lib/constants";

function ArrowRight() {
  return (
    <svg
      width="40"
      height="28"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal"
      aria-hidden="true"
    >
      <path
        d="M2 12h24m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      width="28"
      height="40"
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal"
      aria-hidden="true"
    >
      <path
        d="M12 2v24m0 0l-6-6m6 6l6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" background="mint">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        How It Works
      </h2>

      {/* Desktop layout: 3-column × 2-row grid with arrows */}
      <div className="hidden lg:block">
        {/* Row 1: Steps 1, 2, 3 */}
        <div className="grid grid-cols-5 items-center gap-y-8">
          {/* Step 1 */}
          <AnimateOnScroll delay={0} className="col-span-1">
            <StepCard
              stepNumber={STEPS[0].number}
              title={STEPS[0].title}
              description={STEPS[0].description}
              icon={<Icon name={STEPS[0].icon} size={32} />}
            />
          </AnimateOnScroll>

          {/* Arrow 1→2 */}
          <div className="col-span-1 flex justify-center">
            <ArrowRight />
          </div>

          {/* Step 2 */}
          <AnimateOnScroll delay={100} className="col-span-1">
            <StepCard
              stepNumber={STEPS[1].number}
              title={STEPS[1].title}
              description={STEPS[1].description}
              icon={<Icon name={STEPS[1].icon} size={32} />}
            />
          </AnimateOnScroll>

          {/* Arrow 2→3 */}
          <div className="col-span-1 flex justify-center">
            <ArrowRight />
          </div>

          {/* Step 3 */}
          <AnimateOnScroll delay={200} className="col-span-1">
            <StepCard
              stepNumber={STEPS[2].number}
              title={STEPS[2].title}
              description={STEPS[2].description}
              icon={<Icon name={STEPS[2].icon} size={32} />}
            />
          </AnimateOnScroll>
        </div>

        {/* Arrow connector between rows (below step 3, pointing down) */}
        <div className="flex justify-end pr-[10%] my-4">
          <ArrowDown />
        </div>

        {/* Row 2: Steps 6, 5, 4 (reversed to create flow from right to left) */}
        <div className="grid grid-cols-5 items-center">
          {/* Step 6 */}
          <AnimateOnScroll delay={500} className="col-span-1">
            <StepCard
              stepNumber={STEPS[5].number}
              title={STEPS[5].title}
              description={STEPS[5].description}
              icon={<Icon name={STEPS[5].icon} size={32} />}
            />
          </AnimateOnScroll>

          {/* Arrow 5→6 (pointing left, so we flip) */}
          <div className="col-span-1 flex justify-center rotate-180">
            <ArrowRight />
          </div>

          {/* Step 5 */}
          <AnimateOnScroll delay={400} className="col-span-1">
            <StepCard
              stepNumber={STEPS[4].number}
              title={STEPS[4].title}
              description={STEPS[4].description}
              icon={<Icon name={STEPS[4].icon} size={32} />}
            />
          </AnimateOnScroll>

          {/* Arrow 4→5 (pointing left, so we flip) */}
          <div className="col-span-1 flex justify-center rotate-180">
            <ArrowRight />
          </div>

          {/* Step 4 */}
          <AnimateOnScroll delay={300} className="col-span-1">
            <StepCard
              stepNumber={STEPS[3].number}
              title={STEPS[3].title}
              description={STEPS[3].description}
              icon={<Icon name={STEPS[3].icon} size={32} />}
            />
          </AnimateOnScroll>
        </div>
      </div>

      {/* Mobile layout: vertical stack with down arrows */}
      <div className="lg:hidden flex flex-col items-center gap-2">
        {STEPS.map((step, index) => (
          <div key={step.number} className="w-full max-w-sm">
            <AnimateOnScroll delay={index * 100}>
              <StepCard
                stepNumber={step.number}
                title={step.title}
                description={step.description}
                icon={<Icon name={step.icon} size={32} />}
              />
            </AnimateOnScroll>
            {index < STEPS.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
