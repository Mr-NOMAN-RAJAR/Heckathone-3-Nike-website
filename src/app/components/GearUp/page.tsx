import Image from 'next/image';

export default function GearUpSection() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gear Up</h2>

        {/* Category Links */}
        <div className="flex justify-between items-center border border-red-400 px-4 py-2 rounded-md">
          <a href="#" className="text-gray-800 font-medium hover:underline">
            Shop Men&#39;s
          </a>
          <a href="#" className="text-gray-800 font-medium hover:underline">
            Shop Women&#39;s
          </a>
        </div>

        {/* Product Carousel */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4">
            {/* Product Card 1 */}
            <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
              <Image
                src="/g1.png"
                alt="Nike Dri-FIT ADV Techknit Ultra"
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">
                  Nike Dri-FIT ADV Techknit Ultra
                </h3>
                <p className="text-sm text-gray-600">Men&#39;s Short-Sleeve Running Top</p>
                <p className="mt-2 text-base font-semibold text-gray-900">₹ 2,695</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
              <Image
                src="/g2.png"
                alt="Nike Dri-FIT Challenger"
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">Nike Dri-FIT Challenger</h3>
                <p className="text-sm text-gray-600">Men&#39;s Running Shorts</p>
                <p className="mt-2 text-base font-semibold text-gray-900">₹ 2,495</p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
              <Image
                src="/g3.png"
                alt="Nike Dri-FIT ADV Run Division"
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">
                  Nike Dri-FIT ADV Run Division
                </h3>
                <p className="text-sm text-gray-600">Women&#39;s Long-Sleeve Top</p>
                <p className="mt-2 text-base font-semibold text-gray-900">₹ 3,295</p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
              <Image
                src="/g4.png"
                alt="Nike Fast"
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">Nike Fast</h3>
                <p className="text-sm text-gray-600">
                  Women&#39;s Mid-Rise Running Leggings with Pockets
                </p>
                <p className="mt-2 text-base font-semibold text-gray-900">₹ 1,795</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
