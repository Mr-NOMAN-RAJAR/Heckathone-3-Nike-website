import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="flex justify-center flex-col items-center bg-[#fafafa] my-4 ">
      <div className="flex justify-center flex-col items-center pb-4">
        <h3 className="text-2xl text-black font-bold">Hello Nike App</h3>
        <p className="text-sm text-gray-600">
          <span>Download the app to access everything Nike.</span>
          <Link href={"/"}> Get Your Great</Link>
        </p>
      </div>
      <Image src={"/Hero.png"} alt={"shoes"} width={1432} height={700} />
      <div
        className="flex justify-center items-center flex-col p-10 text-center
            "
      >
        <p className="text-sm">First Look</p>
        <h2 className=" text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
        <p
          className="text-sm leading-5 w-full pt-3 pb-2 text-center
                lg:w-[60%]"
        >
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-black text-white rounded-full py-2 px-6 sm:px-8 md:px-10 lg:px-12  hover:shadow-xl transition duration-300 transform hover:scale-105">
            Notify Me
          </button>
          <Link href={"/Featured"}>
            <button className="bg-black text-white rounded-full py-2 px-6 sm:px-8 md:px-8   hover:shadow-xl transition duration-300 transform hover:scale-105">
              Shop Air Max
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
