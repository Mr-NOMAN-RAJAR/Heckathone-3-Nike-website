import React from "react";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import Image from "next/image";

function join() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {/* Card Container */}
        <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-md shadow-md">
          {/* Nike Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo2.png"
              alt="Nike Logo"
              width={32} // Adjust width as needed
              height={32} // Adjust height as needed
            />
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl font-bold mb-4 text-gray-900">
            BECOME A NIKE MEMBER
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>

          {/* Form */}
          <form>
            {/* Email Address */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* First Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Get a Nike Member Reward every year on your Birthday.
              </p>
            </div>

            {/* Country Selector */}
            <div className="mb-4">
              <select
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                defaultValue="India"
              >
                <option>Pakistan</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>

            {/* Gender */}
            <div className="flex justify-between mb-4">
              <button
                type="button"
                className="w-[48%] py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
              >
                Male
              </button>
              <button
                type="button"
                className="w-[48%] py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
              >
                Female
              </button>
            </div>

            {/* Email Updates */}
            <div className="flex items-center space-x-2 mb-6">
              <input type="checkbox" className="h-4 w-4 text-black" />
              <span className="text-gray-600 text-sm">
                Sign up for emails to get updates from Nike on products, offers,
                and Member benefits.
              </span>
            </div>

            {/* Join Us Button */}
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition"
            >
              JOIN US
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            By creating an account, you agree to Nike&apos;s
            <a href="#" className="text-black underline">
              Privacy Policy
            </a>
            <a href="#" className="text-black underline">
              Terms of Use
            </a>
          </p>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already a Member?
            <a href="/JoinUs" className="text-black font-medium underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default join;
