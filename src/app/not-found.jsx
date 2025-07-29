import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div className='mt-4'>
        <Link className="btn-primary p-2 rounded-2xl text-black bg-amber-50" href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
