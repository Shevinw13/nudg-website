import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + Tagline */}
          <div className="lg:col-span-1">
            {/* Nudgli logo */}
            <div className="mb-4">
              <img src="/images/applogo.png" alt="Nudgli logo" width={40} height={40} className="rounded-lg" />
              <span className="block text-2xl font-bold tracking-tight text-white mt-2">
                nudgli
              </span>
            </div>
            <p className="text-teal text-sm font-medium">
              The reviews you&apos;ve earned but never received.
            </p>
          </div>

          {/* Column 2: App Store Download */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lightGray mb-4">
              Download
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 min-h-[44px] bg-white text-navy px-4 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-label="Download Nudgli on the App Store"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16.5 12.5c0-3.5 2.5-4.5 2.5-4.5s-1.5-2-3.5-2.5c-2-.5-3 .5-3.5.5s-2-1-3.5-.5C6.5 6 5 8 5 10.5c0 4 3 8.5 5.5 8.5 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c2 0 4-3 4.5-5 0 0-2.5-1-3.5-1.5z"
                  fill="#0B1D3A"
                />
                <path
                  d="M13 4c.5-1.5-.5-3-1.5-4 0 0-2 .5-2.5 2.5s1 3 1.5 3c.5 0 2-0.5 2.5-1.5z"
                  fill="#0B1D3A"
                />
              </svg>
              Download on the App Store
            </a>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lightGray mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center min-h-[44px] text-base text-white/80 hover:text-teal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center min-h-[44px] text-base text-white/80 hover:text-teal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lightGray mb-4">
              Contact
            </h3>
            <a
              href="mailto:support@nudgli.app"
              className="inline-flex items-center min-h-[44px] text-base text-white/80 hover:text-teal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              support@nudgli.app
            </a>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60 text-center">
            &copy; {new Date().getFullYear()} Nudgli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
