import Image from 'next/image';

export default function DontMissSection() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-lg font-medium text-gray-800 mb-4">Don&#39;t Miss</h2>

        {/* Content Box */}
        <div className="flex flex-col lg:flex-row gap-4 border border-red-400 p-4 rounded-md">
          {/* Images */}
          <div className="lg:w-2/3 flex gap-4">
            <Image
              src="/path-to-full-image.jpg"
              alt="Full Look"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <Image
              src="/path-to-portrait-image.jpg"
              alt="Portrait Look"
              width={200}
              height={300}
              className="w-[200px] h-[300px] object-cover rounded-md hidden lg:block"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            {/* Brand Information */}
            <div className="flex justify-between text-sm font-medium text-gray-600">
              <span>JORDAN BRAND</span>
              <span>SPRING</span>
              <span>2023</span>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-800">FLIGHT ESSENTIALS</h3>
              <p className="text-sm text-gray-600 mt-2">
                Your built-to-last, all-week wears — but with style only Jordan Brand can deliver.
              </p>
            </div>

            {/* Shop Button */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-block px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800"
              >
                Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
