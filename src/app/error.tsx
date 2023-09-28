'use client';

import Link from 'next/link';

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div>
        <p>Oops! Something went wrong.</p>
      </div>
      <div>
        <h1>{error.message || 'Page not found.'}</h1>
      </div>
      <div>
        <button onClick={reset}>Try Again</button>
        <Link href="/" passHref>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
}
