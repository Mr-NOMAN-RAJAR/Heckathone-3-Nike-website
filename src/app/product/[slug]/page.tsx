"use client";
/* eslint-disable @next/next/no-async-client-component */

import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/productstypes";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import { useEffect, useState } from "react";

interface ProductPage {
  params: { slug: string };
}

const getProduct = async (slug: string): Promise<Product> => {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
      description,
      _color,
      _size,
      _tags,
    }`,
    { slug }
  );
};

export default function ProductPage({ params }: ProductPage) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [slug]);

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

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="flex min-h-screen min-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 shadow-2xl rounded-lg overflow-hidden w-screen p-10">
          {/* Product Image */}
          <div className="relative w-full h-96 md:h-auto shadow-lg bg-white">
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              layout="fill"
              objectFit="contain"
              className="p-10"
            />
          </div>

          {/* Product Details */}
          <div className="p-8 flex flex-col justify-center shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.productName}
            </h1>
            {/* Product description */}
            <span className="text-3xl font-bold text-gray-900"></span>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-6">
              <span className="text-2xl font-semibold text-gray-800">
                $ {product.price}
              </span>
            </div>

            <button
              className="bg-gradient-to-tr from-slate-600 to-slate-300 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleToAddCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
