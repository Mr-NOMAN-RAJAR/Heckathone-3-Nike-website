import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Image from "next/image";

const NikeHelp = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-black">
        {/* Container */}
        <div className="max-w-7xl mx-auto p-6 lg:p-12">
          {/* Header */}
          <div className="text-center border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold mb-2">GET HELP</h1>
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              />
              <button className="absolute right-3 top-2 text-gray-400">
                🔍
              </button>
            </div>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p className="mb-4">
                We want to make buying your favourite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </li>
                <li>Apple Pay</li>
                <li>PayTM or local credit/debit card</li>
              </ul>
              <p>
                <span className=" font-semibold">Nike Members</span> can store
                multiple debit or credit cards in their profile for faster
                checkout. If you're not already a Member,{" "}
                <span className=" underline cursor-pointer">join us</span>{" "}
                today.
              </p>

              {/* Buttons */}
              <div className="flex space-x-4 my-6">
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  JOIN US
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  SHOP NIKE
                </button>
              </div>

              {/* FAQs */}
              <h3 className="text-xl font-bold mb-2">FAQs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Does my card need international purchases enabled?
                  </h4>
                  <p className="text-gray-600">
                    Yes, we recommend asking your bank to enable international
                    purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Can I pay for my order with multiple methods?
                  </h4>
                  <p className="text-gray-600">
                    No, payment for Nike orders can't be split between multiple
                    payment methods.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    What payment method is accepted for SNKRS orders?
                  </h4>
                  <p className="text-gray-600">
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-6 mx-auto max-w-md space-y-12">
              {/* CONTACT US HEADER */}
              <div className="text-center font-bold text-lg">CONTACT US</div>

              {/* PHONE SECTION */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Image
                    src="/best/image.png"
                    alt="Phone"
                    width={32}
                    height={32}
                    className="w-20 "
                  />
                </div>
                <p className="font-semibold">000 800 919 0566</p>
                <p className="text-sm">
                  Products & Orders: 24 hours a day,
                  <br />7 days a week
                </p>
                <p className="text-sm">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>

              {/* CHAT SECTION */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Image
                    src="/best/image (1).png"
                    alt="Chat"
                    width={32}
                    height={32}
                    className="w-12"
                  />
                </div>
                <p className="font-semibold">24 hours a day</p>
                <p className="text-sm">7 days a week</p>
              </div>

              {/* EMAIL SECTION */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Image
                    src="/best/image56.png"
                    alt="Email"
                    width={32}
                    height={32}
                    className="w-12"
                  />
                </div>
                <p className="font-semibold">We'll reply within</p>
                <p className="text-sm">five business days</p>
              </div>

              {/* STORE LOCATOR */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Image
                    src="/best/image (2).png"
                    alt="Store Locator"
                    width={32}
                    height={32}
                    className="w-12"
                  />
                </div>
                <p className="font-bold">STORE LOCATOR</p>
                <p className="text-sm">Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NikeHelp;
