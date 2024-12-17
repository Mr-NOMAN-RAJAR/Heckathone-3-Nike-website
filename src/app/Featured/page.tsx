import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 border-r border-gray-300">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <ul>
            <li className="mb-4">
              <h3 className="font-semibold">Category</h3>
              <ul className="pl-4 text-gray-600">
                <li>Shoes</li>
                <li>Sports Bra</li>
                <li>T-Shirts</li>
                <li>Jackets</li>
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
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-6">New (500)</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Product Card */}
            {[
              {
                name: "Nike Air Force 1 Mid '07",
                price: "₹10,795.00",
                image: "/featured/shoe1.png",
                tag: "Just In",
              },
              {
                name: "Nike Court Vision Low",
                price: "₹4,295.00",
                image: "/featured/shoe2.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe3.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe4.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe5.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe6.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe7.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe8.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe9.png",
                tag: "Just In",
              },
              {
                name: "Nike Air Force 1 PLATFORM",
                price: "₹6,295.00",
                image: "/featured/shoe10.png",
                tag: "Just In",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="border-2 p-4 rounded-lg shadow hover:shadow-xl transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                  <span className="text-red-500 text-xs px-2 py-1 rounded absolute top-2 left-2">
                    {product.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-medium">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
