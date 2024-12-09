export default function FeaturedSection() {
    return (
      <section className="w-full bg-white">
        {/* Featured Section */}
        
        <div className="relative"><p className="pl-8">Featured</p>
          <img
            src="/Featured.png" 
            alt="Running in the perfect pair"
            className="w-full h-[400px] object-cover sm:h-[500px] lg:h-[600px] px-8"
          />
          <div className="flex flex-col items-center text-center px-4 py-8">
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl text-gray-800">
              STEP INTO WHAT FEELS GOOD
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Find Your Shoe
            </button>
          </div>
        </div>
      </section>
    );
  }
  