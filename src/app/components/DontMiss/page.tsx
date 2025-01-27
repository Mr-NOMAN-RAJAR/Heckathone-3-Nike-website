import Image from "next/image";
import Link from "next/link";

export default function FlightEssentialsSection() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-8">
      {/* Content Section */}
      <div className="relative z-10 text-center mt-8 sm:mt-12">
        {/* "Don't Miss" Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Don&apos;t Miss
        </h2>

        {/* Full-Width Image Section */}
        <div className="w-full mb-8">
          <Image
            src="/DontMiss.png"
            alt="Flight Essentials"
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Subheading and Description */}
        <div className="px-4 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
            FLIGHT ESSENTIALS
          </h3>
          <p className="text-base sm:text-lg text-gray-700">
            Your built-to-last, all-week wear—but with style only Jordan Brand
            can deliver.
          </p>
        </div>

        {/* Shop Button */}
        <div className="mt-6">
          <Link href={`/Featured`}>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800  hover:shadow-xl transition duration-200 transform hover:scale-105">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
