"use client";

import React, { useState } from "react";
import { Workflow, ArrowRight, Mail, Zap } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };


  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="relative flex flex-col justify-center px-12 text-white z-10">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-12 h-12 mr-1" />
              <h1 className="text-4xl font-bold">WorkflowX</h1>
            </div>
            <h2 className="text-2xl font-light mb-6 leading-relaxed">
              Streamline your processes.
              <br />
              Amplify your productivity.
            </h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-md">
              Transform the way you work with intelligent automation and
              seamless collaboration tools designed for modern teams.
            </p>
          </div>

          <div className="space-y-4 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span>Automate repetitive tasks</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span>Collaborate in real-time</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span>Scale effortlessly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="flex lg:hidden items-center justify-center mb-8">
          <Workflow className="w-8 h-8 mr-3 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">WorkflowX</h1>
        </div>

        <div className="w-full max-w-md mx-auto">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Get started today
                </h2>
                <p className="text-gray-600">
                  Join thousands of teams already using WorkflowX to boost their
                  productivity.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors font-medium group"
                >
                  Create your account
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Check your email!
                </h2>
                <p className="text-gray-600">
                  We've sent you a sign-up link at{" "}
                  <span className="font-medium">{email}</span>
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
              >
                Try another email
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="underline hover:text-gray-700 transition-colors"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
