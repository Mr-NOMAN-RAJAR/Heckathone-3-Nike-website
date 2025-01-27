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
    address: "",
    zipCode: "",
    city: "",
    countery: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
    countery: false,
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
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
      countery: !formValues.countery,
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
      <nav className="flex items-center gap-2 pt-4 pl-6 bg-gray-50 py-4">
        <Link
          href={"/Cart"}
          className="text-[#666666] hover:text-black transition text-sm "
        >
          Cart
        </Link>
        <IoIosArrowForward />
        {/* <CgCheoveright /> */}
        <span>ChakeOut</span>
      </nav>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center pb-10  px-4 md:px-16">
        {/* Container */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">
              How would you like to get your order?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Customs regulation for India requires a copy of the recipient&apos;s
              KYC document (e.g., Aadhaar, PAN, or Passport) to clear the
              shipment.
            </p>
            <button className="border border-gray-400 text-gray-700 rounded-lg py-2 px-6 mb-8 hover:bg-gray-100">
              Deliver it
            </button>

            {/* Form Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">
                Enter your name and address:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                />

                {formErrors.firstName && (
                  <p className=" items-center text-sm text-red-500">
                    first Name is Riquired
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Enter your last Name"
                  id="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                />

                {formErrors.lastName && (
                  <p className="text-sm text-red-500">Last Name is Riquired</p>
                )}
              </div>
              <input
                type="text"
                placeholder="Address Line 1"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">
                  Address Line 1 is Riquired
                </p>
              )}
              <input
                type="text"
                placeholder="Address Line 2"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">
                  Address Line 2 is Riquired
                </p>
              )}
              <input
                type="text"
                placeholder="Address Line 3"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">
                  Address Line 3 is Riquired
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  id="zipCode"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                />

                {formErrors.zipCode && (
                  <p className="text-sm text-red-500">
                    Postal Code is Riquired
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Locality"
                  id="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                />

                {formErrors.city && (
                  <p className="text-sm text-red-500">Locality is Riquired</p>
                )}
              </div>
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
                  placeholder="Countery"
                  id="countery"
                  value={formValues.countery}
                  onChange={handleInputChange}
                  className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                />
                {formErrors.countery && (
                  <p className="text-sm text-red-500">Cuntery is Riquired</p>
                )}
              </div>

              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>Save this address to my profile</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>Make this my preferred address</span>
                </label>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  What&apos;s your contact information?
                </h2>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                  />

                  {formErrors.email && (
                    <p className="text-sm text-red-500">email is Riquired</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    A confirmation email will be sent after checkout.
                  </p>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    id="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className=" border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                  />
                  {formErrors.phone && (
                    <p className="text-sm text-red-500">
                      Phone Number is Riquired
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    A carrier might contact you to confirm delivery.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">What&apos;s your PAN?</h2>
                <div>
                  <label htmlFor="pan" className="block text-sm font-medium">
                    PAN
                  </label>
                  <input
                    type="text"
                    id="pan"
                    placeholder="Enter your PAN"
                    className=" mt-1 border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:ring-blue-500 "
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your PAN to enable payment with UPI, Net Banking, or
                    local card methods.
                  </p>
                </div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>Save PAN details to Nike Profile</span>
                </label>
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>
                  I have read and consent to eShopWorld processing my
                  information in accordance with the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Statement
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Cookie Policy
                  </a>
                  .
                </span>
              </label>
              <button
                type="submit"
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Continue
              </button>
              <div className="space-y-2 text-gray-600 text-sm pt-4">
                <p>Delivery</p>
                <p>Shipping</p>
                <p>Billing</p>
                <p>Payment</p>
              </div>
            </div>
          </div>
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
                  <div key={item._id} className="flex items-center gap-4 py-2">
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
    </>
  );
}
