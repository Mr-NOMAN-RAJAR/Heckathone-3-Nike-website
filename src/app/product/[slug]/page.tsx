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
import { IoMdCart } from "react-icons/io";
import { motion } from "framer-motion";

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden w-11/12 max-w-6xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product Image */}
        <div className="relative w-full h-96 md:h-auto bg-gray-200">
          <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-2xl md:rounded-bl-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {product.productName}
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-6">
              <span className="text-3xl font-semibold text-green-600">
                $ {product.price}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <button
              className="w-full hover:bg-gradient-to-r hover:from-green-400 hover:to-green-300 bg-gradient-to-r from-green-500 to-green-400  text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              onClick={(e) => handleToAddCart(e, product)}
            >
              Add to Cart
            </button>
            <Link
              href={`/Cart`}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            >
              <IoMdCart className="text-xl" />
              Go to Cart
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
