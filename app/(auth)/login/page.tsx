import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Input } from '@/components/ui/input';   // Assuming you have an Input component
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-6">Welcome Back!</h2>
          <p className="text-gray-500 font-bold 
          font-size-14 mt-5 mb-5">
            Log in to your account to continue
          </p>
        </div>

        {/* Login Form */}
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

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link href="/forgotpassword" className="text-sm font-semibold text-red hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Log In Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Log In
          </Button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link href="/register" className="font-semibold text-black hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
