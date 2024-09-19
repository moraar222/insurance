import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Input } from '@/components/ui/input';   // Assuming you have an Input component
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-6">Reset your password</h2>
          <p className="text-gray-500 font-bold 
          font-size-14 mt-5 mb-5">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Forgot Password Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Send Reset Link Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Send Reset Link
          </Button>
        </form>

        {/* Back to Login Link */}
        <p className="text-center text-sm text-gray-500">
          Remember your password?{' '}
          <Link href="/login" className="font-semibold text-black hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
