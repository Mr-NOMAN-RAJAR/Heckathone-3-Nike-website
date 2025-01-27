"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/productstypes";
import { client } from "@/sanity/lib/client";
import { fourProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

export default function ProductSection() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchproducts() {
      const fetchedProduct: Product[] = await client.fetch(fourProducts);
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
    <div className="max-w-8xl mx-auto px-8 py-8">
      <h1 className="text-2xl font-bold mb-6 ">Our Latest Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-clip">
        {/* Product Card */}
        {product.map(
          (product, index) =>
            product.slug && (
              <Link href={`/product/${product.slug.current}`} key={product._id}>
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
                    <p className=" mb-2 text-gray-700">{product.color}</p>
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
    </div>
  );
}
