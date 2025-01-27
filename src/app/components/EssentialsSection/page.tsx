import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div>
      <section className="py-16 px-4 sm:px-8 bg-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-black mb-8">
          The Essentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Men's Section */}
          <div className="relative w-full hover:shadow-xl transition duration-300 transform hover:scale-105">
            <Image
              src="/e1.png"
              alt="Men's"
              width={500} 
              height={300} 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Women's Section */}
          <div className="relative w-full hover:shadow-xl transition duration-300 transform hover:scale-105">
            <Image
              src="/e2.png"
              alt="Women's"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Kids' Section */}
          <div className="relative w-full hover:shadow-xl transition duration-300 transform hover:scale-105">
            <Image
              src="/e3.png"
              alt="Kids'"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
