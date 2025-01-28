"use client";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top bar */}
      <div className=" hidden md:flex justify-between  items-center px-4 py-2 text-xs font-medium text-gray-500 sm:text-sm">
        <Image src={"/logo1.png"} alt={"logo"} width={24} height={24} />

        <div className="flex gap-4 sm:gap-6">
          <span className="hover:text-gray-800 hover:underline">
            Find Link Store
          </span>
          <Link href="/Help" className="hover:text-gray-800 hover:underline">
            | Help
          </Link>
          <Link href="/JoinUs" className="hover:text-gray-800 hover:underline">
            | Join Us
          </Link>
          <Link href="/SignIn" className="hover:text-gray-800 hover:underline">
            | Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-4 py-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={"/logo2.png"} alt="Nike Logo" width={50} height={50} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-4 text-gray-700 font-medium text-sm sm:text-base ">
          <Link href="/Featured" className="hover:text-black">
            New & Featured
          </Link>
          <Link href="#" className="hover:text-black">
            Men
          </Link>
          <Link href="#" className="hover:text-black">
            Women
          </Link>
          <Link href="#" className="hover:text-black">
            Kids
          </Link>
          <Link href="#" className="hover:text-black">
            Sale
          </Link>
          <Link href="#" className="hover:text-black">
            SNKRS
          </Link>
        </nav>

        {/* Search, Wishlist, Cart */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none hover:shadow-md transition"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">
              <FaSearch />
            </span>
          </div>
          <span className="text-gray-700 hover:text-black">
            <FaHeart className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-125 transition-transform" />
          </span>
          <Link href="/Cart">
            <span className="text-gray-700 hover:text-black">
              <FaShoppingBag className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-125 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block lg:hidden px-4 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm w-full focus:outline-none"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">
            <FaSearch />
          </span>
        </div>

        <nav className="flex flex-wrap justify-around mt-4 text-gray-700 font-medium text-sm">
          <Link href="/Featured" className="hover:text-black">
            New & Featured
          </Link>
          <Link href="#" className="hover:text-black">
            Men
          </Link>
          <Link href="#" className="hover:text-black">
            Women
          </Link>
          <Link href="#" className="hover:text-black">
            Kids
          </Link>
          <Link href="#" className="hover:text-black">
            Sale
          </Link>
          <Link href="#" className="hover:text-black">
            SNKRS
          </Link>
        </nav>
      </div>
    </header>
  );
}
