'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const SUPABASE_URL = 'https://lbecvdpvxjllrzrxscly.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZWN2ZHB2eGpsbHJ6cnhzY2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNTEyMzUsImV4cCI6MjA5NzgyNzIzNX0.zwpwOsvGDD4nqMcZlM8eC_wQQsLrl7CyzPxDlfRsvao';

function ConfirmContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [appUrl, setAppUrl] = useState<string | null>(null);

  useEffect(() => {
    const tokenHash = searchParams.get('token_hash');
    const type = searchParams.get('type');
    const redirectTo = searchParams.get('redirect_to') || 'nudgli://email-confirmed';

    if (!tokenHash || !type) {
      setStatus('error');
      return;
    }

    async function verify() {
      try {
        // Try POST verify endpoint with token_hash
        const res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({ token_hash: tokenHash, type }),
        });

        if (res.ok) {
          const data = await res.json();
          const url = `${redirectTo}#access_token=${data.access_token}&refresh_token=${data.refresh_token}`;
          setAppUrl(url);
          setStatus('success');
          window.location.href = url;
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    }

    verify();
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center px-6">
          <div className="animate-spin w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-white text-lg">Confirming your email...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center px-6 max-w-md">
          <p className="text-white text-lg mb-2">
            This link may have expired or is invalid.
          </p>
          <p className="text-slate-400">
            Try signing in — your email might already be confirmed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center px-6 max-w-md">
        <p className="text-white text-lg mb-4">Email confirmed!</p>
        {appUrl && (
          <a
            href={appUrl}
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold no-underline hover:bg-teal-600 transition-colors"
          >
            Open Nudgli
          </a>
        )}
        <p className="text-slate-400 text-sm mt-4">
          If the app didn&apos;t open automatically, tap the button above.
        </p>
      </div>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <p className="text-white text-lg">Loading...</p>
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  );
}
