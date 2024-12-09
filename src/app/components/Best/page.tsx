export default function ProductSection() {
    return (
      <section className="px-6 py-8">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6">Best of Air Max</h2>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <img
              src="/best/b1.png"
              alt="Nike Air Max Pulse"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">Nike Air Max Pulse</h3>
              <p className="text-sm text-gray-500">Women's Shoes</p>
              <p className="text-xl font-semibold mt-2">₹13,995</p>
            </div>
          </div>
  
          {/* Product Card 2 */}
          <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <img
              src="/best/b2.png"
              alt="Nike Air Max Pulse"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">Nike Air Max Pulse</h3>
              <p className="text-sm text-gray-500">Men's Shoes</p>
              <p className="text-xl font-semibold mt-2">₹13,995</p>
            </div>
          </div>
  
          {/* Product Card 3 */}
          <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <img
              src="/best/b3.png"
              alt="Nike Air Max 97 SE"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">Nike Air Max 97 SE</h3>
              <p className="text-sm text-gray-500">Men's Shoes</p>
              <p className="text-xl font-semibold mt-2">₹16,995</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  