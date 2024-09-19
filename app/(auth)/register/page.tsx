// pages/register.tsx
import React from 'react';
import Link from 'next/link';
import RegistrationForm from './form';

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-6">Create your account</h2>
          <p className="text-gray-500 font-bold text-sm mt-5 mb-5">
            Join Us Today and Unlock Exclusive Features!
          </p>
        </div>

        {/* Registration Form Component */}
        <RegistrationForm />

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-black hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
