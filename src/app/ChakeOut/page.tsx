"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/productstypes";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { CogIcon } from "@heroicons/react/16/solid";
import { IoIosArrowForward } from "react-icons/io";

export default function ChakeOutpage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setfromValuse] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    zipCode: "",
    city: "",
    country: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address1: false,
    address2: false,
    zipCode: false,
    city: false,
    country: false,
  });
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);
  const Subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfromValuse({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };
  const validateForm = () => {
    const error = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email.includes("@"),
      phone: !formValues.phone,
      address1: !formValues.address1,
      address2: !formValues.address2,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
      country: !formValues.country,
    };
    setFormErrors(error);
    return Object.values(error).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    }
  };
  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center gap-2 pt-4 pl-6 bg-gray-50 py-4">
        <Link
          href={"/Cart"}
          className="text-[#666666] hover:text-black transition text-sm"
        >
          Cart
        </Link>
        <IoIosArrowForward />
        <span>Checkout</span>
      </nav>

      {/* Main Container */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 md:px-16">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-6">
              How would you like to get your order?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Customs regulation for India requires a copy of the
              recipient&apos;s KYC document (e.g., Aadhaar, PAN, or Passport) to
              clear the shipment.
            </p>
            <button className="border border-gray-400 text-gray-700 rounded-lg py-2 px-6 mb-8 hover:bg-gray-100">
              Deliver it
            </button>

            {/* Form Section */}
            <form className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">
                Enter your name and address:
              </h3>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
              </div>

              {/* Address Fields */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  id="address1"
                  value={formValues.address1}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  id="address2"
                  value={formValues.address2}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
              </div>

              {/* Location Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  id="zipCode"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
              </div>

              {/* State and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="border border-gray-300 rounded-lg p-3 w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    State/Territory
                  </option>
                  <option>Pakistan</option>
                </select>
                <input
                  type="text"
                  placeholder="Country"
                  id="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  id="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
              >
                Continue
              </button>
            </form>
          </div>

          {/* Right Section */}

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <p className="text-sm text-gray-600">
                Subtotal: <span>${Subtotal}</span>
              </p>
              <p className="text-sm text-gray-600">Delivery/Shipping: Free</p>
              <p className="text-lg font-semibold text-gray-800">
                Total: ${Subtotal.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              (The total reflects the price of your order, including duties and
              taxes.)
            </p>

            {cartItems.length > 0
              ? cartItems.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 py-2"
                    >
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt="image"
                          width={50}
                          height={50}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                      <div>
                        <p className="text-sm font-semibold">
                          {item.productName}
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.inventory}
                        </p>
                        <p className="text-sm font-semibold">
                          {item.price * item.inventory}
                        </p>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
