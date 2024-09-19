import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Input } from '@/components/ui/input';   // Assuming you have an Input component
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-6">Create your account</h2>
          <p className="text-gray-500 font-bold 
          font-size-14 mt-5 mb-5
                    ">Join Us Today and Unlock Exclusive Features!</p>
        </div>

        {/* Google Sign-In Button */}
        {/* <Button className="w-full bg-white border border-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-100">
          <img src="/google-icon.svg" alt="Google" className="inline mr-2 h-4" />
          Login with Google
        </Button> */}

        {/* Divider */}
        {/* <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span className="h-px w-1/3 bg-gray-300"></span>
          <span>or</span>
          <span className="h-px w-1/3 bg-gray-300"></span>
        </div> */}

        {/* Registration Form */}
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

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

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" name="terms" required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to all <span className="font-semibold">Terms, Privacy Policy, and Fees</span>
            </label>
          </div>

          {/* Sign-Up Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Sign Up
          </Button>
        </form>

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
