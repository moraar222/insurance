// pages/login.tsx
import React from 'react';
import LoginForm from './form'; // Adjust the import path as needed
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-6">Welcome Back!</h2>
          <p className="text-gray-500 font-bold text-sm mt-5 mb-5">
            Log in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Forgot Password Link */}
        <div className="text-right">
          <Link href="/forgotpassword" className="text-sm font-semibold text-red-500 hover:underline">
            Forgot password?
          </Link>
        </div>

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
};

export default Login;
