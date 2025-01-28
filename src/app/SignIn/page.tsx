import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {/* Card Container */}
        <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-md shadow-md">
          {/* Nike Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo2.png"
              alt="Nike Logo"
              width={32}
              height={32}
              className="h-8"
            />
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">
            YOUR ACCOUNT <br />
            FOR EVERYTHING <br />
            NIKE
          </h2>

          {/* Form */}
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Keep Me Signed In & Forgot Password */}
            <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-black" />
                <span>Keep me signed in</span>
              </label>
              <a href="#" className="text-black hover:underline">
                Forgotten your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition"
            >
              SIGN IN
            </button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 mt-6">
            <p>
              By logging in, you agree to Nike&apos;s
              <a href="#" className="text-black underline">
                Privacy Policy
              </a>
              and
              <a href="#" className="text-black underline">
                Terms of Use
              </a>
            </p>
            <p className="mt-4">
              Not a Member? <Link
               href="JoinUs" className="text-black font-medium underline">
                Join Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
