import React from 'react';

function Page() {
  return (
    <div>
      <section className="py-16 px-4 bg-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-black mb-8">
          The Essentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Men's Section */}
          <div className="relative w-full">
            <img
              src="/e1.png"
              alt="Men's"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Women's Section */}
          <div className="relative w-full">
            <img
              src="/e2.png"
              alt="Women's"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Kids' Section */}
          <div className="relative w-full">
            <img
              src="/e3.png"
              alt="Kids'"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
