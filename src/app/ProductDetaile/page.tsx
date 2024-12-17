import React from "react";
import Image from 'next/image';
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
function page() {
  return (
    <>
      <Header />

      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl">
          {/* Product Image */}
          <div className="relative w-full h-96 md:h-auto">
            <Image
              src="/featured/shoe3.png" 
              alt="Nike Air Force 1"
              layout="fill"
              objectFit="contain"
              className="p-6"
            />
          </div>

          {/* Product Details */}
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Nike Air Force 1
            </h1> <span className="text-3xl font-bold text-gray-900">PLT.AF.ORM</span>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its "inside out" inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading and rich
              mixture of materials give this release an artisan finish.
            </p>

            {/* Price */}
            <div className="mt-6">
              <span className="text-2xl font-semibold text-gray-800">
                ₹ 8,695.00
              </span>
            </div>

            {/* Cart Button */}
            <button className="mt-6 bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
