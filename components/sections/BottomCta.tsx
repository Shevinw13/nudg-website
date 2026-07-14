"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useState } from "react";

const trustIndicators = [
  "7-day free trial",
  "No credit card required",
  "Cancel anytime",
];

export function BottomCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="beta" background="navy">
      <AnimateOnScroll animation="fade-slide-up">
        <div className="flex flex-col items-center text-center">
          {/* Nudgli logo */}
          <img
            src="/images/applogo.png"
            alt=""
            width={48}
            height={48}
            className="mb-6 rounded-xl"
            aria-hidden="true"
          />

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Join the Beta
          </h2>

          <p className="text-lg text-white/70 mb-8 max-w-lg">
            Be one of the first to try Nudgli. Sign up below and we&apos;ll send you an invite when your spot is ready.
          </p>

          {/* Beta Signup Form */}
          {status === "success" ? (
            <div className="bg-teal/20 border border-teal rounded-xl px-6 py-4">
              <p className="text-white font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-3"
            >
              <input type="text" name="_honey" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <input
                type="text"
                name="business"
                placeholder="Business name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 transition-colors mt-2 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Join the Beta"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">
            {trustIndicators.map((text) => (
              <div key={text} className="flex items-center gap-2">
                <Icon
                  name="check"
                  size={18}
                  className="text-teal"
                  ariaHidden={true}
                />
                <span className="text-base text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
