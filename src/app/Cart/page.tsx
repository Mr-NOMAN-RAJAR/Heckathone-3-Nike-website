"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/productstypes";
import {
  getCartItems,
  removeFromCart,
  upDateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleremove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your item has been removed", "success");
      }
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    upDateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      upDateCartQuantity(id, product.inventory + 1);
      setCartItems(getCartItems());
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      upDateCartQuantity(id, product.inventory - 1);
      setCartItems(getCartItems());
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();

  const handleProceedCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("cart");
        setCartItems([]);
        Swal.fire(
          "Order Placed",
          "Your order has been placed successfully",
          "success"
        );
        router.push("/ChakeOut");

        setCartItems([]);
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Free Delivery Banner */}
      <div className="bg-white p-4 text-center text-sm border-b border-gray-200">
        <p>
          Free Delivery{" "}
          <span className="font-semibold">
            Applies to orders of ₹14,000.00 or more.
          </span>{" "}
          <a href="#" className="underline">
            View details
          </a>
        </p>
      </div>

      {/* Cart Section */}
      <div className="flex flex-col lg:flex-row mt-6">
        {/* Items Section */}
        <div className="bg-white shadow-md rounded-lg p-4 flex-1">
          <h2 className="text-xl font-semibold mb-4">Bag</h2>

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.color}</p>
                  <p className="text-sm text-gray-500 mt-4">
                    Size: <span className="font-medium">{item.size}</span>{" "}
                    &nbsp; Quantity:{" "}
                    <span className="font-medium">{item.inventory}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">MRP: ₹{item.price}</p>
                <div className="flex justify-end items-center gap-2 mt-2">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => handleDecrement(item._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => handleIncrement(item._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v8m4-4H8"
                      />
                    </svg>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleremove(item._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-4">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹{calculateTotal()}</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>₹{calculateTotal()}</p>
            </div>
          </div>
          <Link href={"/ChakeOut"}> 
            {" "}
            <button
              className="bg-white text-black w-full py-2 mt-4 rounded-lg hover:bg-gray-300 transition"
              onClick={handleProceedCheckout}
            >
              Member Checkout
            </button>
          </Link>
        </div> 
      </div>
    </div>
  );
}
