'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" aria-label="Nudg - Back to home" className="flex items-center gap-2">
          {/* Teal arrow logo mark */}
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="48" height="48" rx="12" fill="#0CBFA6"/>
            <path d="M15 28c0-5 3-9 8-10v-4l10 8-10 8v-4c-4 0-6 2-8 6v-1c0-2 0-3 0-3z" fill="white"/>
          </svg>
          <span className="font-bold text-xl text-navy tracking-tight">nudg</span>
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
            href="#"
            className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg bg-teal text-white text-sm font-medium hover:bg-teal/90 transition-colors"
            aria-label="Download Nudg on the App Store"
          >
            Start Free Trial
          </a>
        </div>
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Open navigation"
          aria-expanded={false}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
