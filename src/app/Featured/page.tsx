"use client";

import { FunnelIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/productstypes";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/actions";

export default function ProductSection() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchproducts() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchproducts();
  }, []);

  const handleToAddCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.productName} added to Cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <>
      <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
        <div className="text-xl font-semibold">New (500)</div>

        <div className="flex gap-4 items-center">
          <button className="text-gray-600 hover:text-black flex items-center">
            Hide Filters
            <FunnelIcon className="w-5 h-5 ml-1" />
          </button>

          <div className="relative">
            <button className="text-gray-600 hover:text-black flex items-center">
              Sort By
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/5 p-4 border-r border-gray-300 bg-gray-100">
          <ul>
            <li className="mb-4">
              <ul className="pl-4 text-gray-600">
                <li>Shoes</li>
                <li>Sports Bra</li>
                <li>Tops & T-Shirts </li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trousers & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuite & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>socks</li>
                <li>Accessories & eqipment </li>
              </ul>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Gender</h3>
              <ul className="pl-4 text-gray-600">
                <li>Men</li>
                <li>Women</li>
                <li>Unisex</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Shop By Price</h3>
              <ul className="pl-4 text-gray-600">
                <li>Under ₹5,000</li>
                <li>₹5,000 - ₹10,000</li>
                <li>₹10,000 - ₹20,000</li>
              </ul>
            </li>
          </ul>
        </aside>

        {/* Products Section */}
        <main className="flex-1 p-4 bg-gray-200">
          <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-4 bg-gray-200">
            {/* Product Card */}
            {product.map(
              (product, index) =>
                product.slug && (
                  <Link
                    href={`/product/${product.slug.current}`}
                    key={product._id}
                  >
                    <div
                      key={index}
                      className="border-2 rounded-lg  shadow-md  bg-white hover:shadow-xl transition duration-300 transform hover:scale-105"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.productName}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md  w-[348px] h-[348px]"
                        />
                      </div>
                      <div className=" p-4">
                        <p className="my-1  text-red-500 text-xs font-semibold rounded">
                          {product.tag}
                        </p>
                        <h3 className="font-medium line-clamp-1">
                          {product.productName}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {product.description}
                        </p>
                        <p className="my-1 text-gray-700">{product.gender}</p>
                        <p className=" mb-4 text-gray-700">{product.color}</p>
                        <div className="flex justify-between items-center">
                          <p>Price : {product.price}</p>
                          <button
                            className="bg-black/80 hover:bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl "
                            onClick={(e) => handleToAddCart(e, product)}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </main>
      </div>
    </>
  );
}
