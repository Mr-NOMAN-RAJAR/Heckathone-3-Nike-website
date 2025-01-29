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
import filters from "../filters";

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleSort = (option: string) => {
    setSortOption(option);
    let sortedProducts = [...products];
    if (option === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((filter) => filter !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.some((filter) => {
      if (filters[0].options.find((opt) => opt.value === filter)) {
        return product.gender === filter;
      }
      if (filters[1].options.find((opt) => opt.value === filter)) {
        const priceRange = filter.split("-").map(Number);
        if (priceRange.length === 2) {
          return (
            product.price >= priceRange[0] && product.price <= priceRange[1]
          );
        } else if (filter === "under-5000") {
          return product.price < 5000;
        }
      }
      return false;
    });
  });

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
      {/* Header Section */}
      <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200 bg-gray-50">
        <div className="text-xl font-semibold">
          New Products ({filteredProducts.length})
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-gray-600 hover:text-black flex items-center">
            Hide Filters
            <FunnelIcon className="w-5 h-5 ml-1" />
          </button>

          <div className="relative">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
              onChange={(e) => handleSort(e.target.value)}
              value={sortOption}
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/5 p-4 border-r border-gray-300 bg-gray-100">
          <ul>
            <li className="mb-4">
              <h3 className="font-semibold">Categories</h3>
              <ul className="pl-4 text-gray-600">
                <li>Shoes</li>
                <li>Sports Bra</li>
                <li>Tops & T-Shirts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trousers & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuits & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>Socks</li>
                <li>Accessories & Equipment</li>
              </ul>
            </li>
            {filters.map(
              (filterCategory: {
                category:
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.Key
                  | null
                  | undefined;
                options: any[];
              }) => (
                <li key={String(filterCategory.category)} className="mb-4">
                  <h3 className="font-semibold">
                    {String(filterCategory.category)}
                  </h3>
                  <ul className="pl-4 text-gray-600">
                    {filterCategory.options.map((option) => (
                      <li key={option.value}>
                        <label>
                          <input
                            type="checkbox"
                            className="mr-2"
                            value={option.value}
                            onChange={() => handleFilterChange(option.value)}
                          />
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Products Section */}
        <main className="flex-1 p-4 bg-gray-200">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-200">
            {/* Product Card */}
            {filteredProducts.map(
              (product, index) =>
                product.slug && (
                  <Link
                    href={`/product/${product.slug.current}`}
                    key={product._id}
                  >
                    <div
                      key={index}
                      className="border rounded-lg shadow-md bg-white hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.productName}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <p className="my-1 text-red-500 text-xs font-semibold">
                          {product.tag}
                        </p>
                        <h3 className="font-medium line-clamp-1">
                          {product.productName}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {product.description}
                        </p>
                        <p className="my-1 text-gray-700">{product.gender}</p>
                        <p className="mb-4 text-gray-700">{product.color}</p>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">₹{product.price}</p>
                          <button
                            className="bg-gradient-to-t from-green-600 to-green-400 text-white font-bold py-2 px-4 rounded-lg shadow-md"
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
