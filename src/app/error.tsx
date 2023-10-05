'use client';

import Link from 'next/link';

export default function Error({
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
        <button
          className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2"
          onClick={reset}
        >
          Try Again
        </button>
        <Link href="/" passHref>
          <button className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
