  'use client';
  import React, { useState } from 'react';
  import { Workflow, ArrowRight, Mail, Lock, Zap } from 'lucide-react';
import InputWithIcon from '../ui/InputWithIcon';
import Link from 'next/link';
  
  function SignInComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (email && password) {
        setIsSubmitted(true);
        console.log('Login with email:', email);
      }
    };
  
    return (
      <div className="min-h-screen bg-white flex">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>
          
          <div className="relative flex flex-col justify-center px-12 text-white z-10">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Zap className="w-12 h-12 mr-1" />
                <h1 className="text-4xl font-bold">WorkflowX</h1>
              </div>
              <h2 className="text-2xl font-light mb-6 leading-relaxed">
                Welcome back.<br />
                Continue your workflow.
              </h2>
              <p className="text-lg opacity-90 leading-relaxed max-w-md">
                Sign in to access your workspace and continue where you left off with your team's projects and workflows.
              </p>
            </div>
            
            <div className="space-y-4 text-sm opacity-80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Access your dashboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Resume your projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Connect with your team</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
          <div className="flex lg:hidden items-center justify-center mb-8">
            <Zap className="w-8 h-8 mr-3 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">WorkflowX</h1>
          </div>
  
          <div className="w-full max-w-md mx-auto">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome back
                  </h2>
                  <p className="text-gray-600">
                    Sign in to your WorkflowX account to continue.
                  </p>
                </div>
  
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputWithIcon
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    Icon={Mail}
                  />
  
                  <InputWithIcon
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required  
                    Icon={Lock}
                  />
  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
  
                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors font-medium group"
                  >
                    Sign in to your account
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
  
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="signup" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                      Sign up
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome back!
                  </h2>
                  <p className="text-gray-600">
                    You have successfully signed in to your WorkflowX account.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
                >
                  Sign in again
                </button>
              </div>
            )}
  
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                By signing in, you agree to our{' '}
                <a href="#" className="underline hover:text-gray-700 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-gray-700 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignInComponent;