import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" background="mint">
      <AnimateOnScroll animation="fade-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto">
            From job complete to 5-star review — in less than 10 seconds.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-slide-up" delay={200}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white p-2">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/customer-journey.png"
                alt="Nudgli customer journey: 12 steps from completing a job to getting a 5-star Google review, showing the complete workflow including sending a review request, customer replying via text, leaving a Google review, and tracking results on the dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
