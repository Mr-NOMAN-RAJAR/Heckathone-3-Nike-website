export default function GearUpSection() {
    return (
      <section className="w-full py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gear Up</h2>
  
          {/* Category Links */}
          <div className="flex justify-between items-center border border-red-400 px-4 py-2 rounded-md">
            <a href="#" className="text-gray-800 font-medium hover:underline">
              Shop Men's
            </a>
            <a href="#" className="text-gray-800 font-medium hover:underline">
              Shop Women's
            </a>
          </div>
  
          {/* Product Carousel */}
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-4">
              {/* Product Card */}
              <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
                <img
                  src="/g1.png"
                  alt="Nike Dri-FIT ADV Techknit Ultra"
                  className="w-full h-[200px] object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800">
                    Nike Dri-FIT ADV Techknit Ultra
                  </h3>
                  <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                  <p className="mt-2 text-base font-semibold text-gray-900">₹ 2,695</p>
                </div>
              </div>
  
              {/* Duplicate and Edit for Other Products */}
              <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
                <img
                  src="/g2.png"
                  alt="Nike Dri-FIT Challenger"
                  className="w-full h-[200px] object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800">Nike Dri-FIT Challenger</h3>
                  <p className="text-sm text-gray-600">Men's Running Shorts</p>
                  <p className="mt-2 text-base font-semibold text-gray-900">₹ 2,495</p>
                </div>
              </div>
  
              <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
                <img
                  src="/g3.png"
                  alt="Nike Dri-FIT ADV Run Division"
                  className="w-full h-[200px] object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800">
                    Nike Dri-FIT ADV Run Division
                  </h3>
                  <p className="text-sm text-gray-600">Women's Long-Sleeve Top</p>
                  <p className="mt-2 text-base font-semibold text-gray-900">₹ 3,295</p>
                </div>
              </div>
  
              <div className="min-w-[200px] border border-gray-300 rounded-md shadow-sm">
                <img
                  src="/g4.png"
                  alt="Nike Fast"
                  className="w-full h-[200px] object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800">Nike Fast</h3>
                  <p className="text-sm text-gray-600">
                    Women's Mid-Rise Running Leggings with Pockets
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
  