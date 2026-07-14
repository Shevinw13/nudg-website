'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" aria-label="Nudgli - Back to home" className="flex items-center gap-2">
          <img src="/images/applogo.png" alt="" width={32} height={32} className="rounded-lg" aria-hidden="true" />
          <span className="font-bold text-xl text-navy tracking-tight">nudgli</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center min-h-[44px] text-sm font-medium text-gray-700 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#beta"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-2 rounded-xl bg-teal text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-label="Join the Nudgli beta"
          >
            Join the Beta
          </a>
        </div>
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-3 text-base font-medium text-gray-700 hover:text-teal hover:bg-mint rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <a
                href="#beta"
                className="block w-full text-center py-3 px-4 rounded-xl bg-teal text-white text-sm font-semibold"
              >
                Join the Beta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
