import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
export default function Nav() {
  return (
    <header className="">
      {/* Top bar */}
      <div className=" flex justify-between items-center px-7 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500 ">
        <Image src={"/logo1.png"} alt={"logo"} width={24} height={24} />

        <div className="flex gap-6">
          <Link
            href="/FindStore#"
            className="hover:text-gray-800 hover:underline"
          >
            Find Link Store
          </Link>
          <Link href="/Help" className="hover:text-gray-800 hover:underline">
            {" "}
            | Help
          </Link>
          <Link href="/JoinUs" className="hover:text-gray-800 hover:underline">
            {" "}
            | Join Us
          </Link>
          <Link href="/SingIn" className="hover:text-gray-800 hover:underline">
            {" "}
            | Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center sm:w-80">
          <Image src={"/logo2.png"} alt="Nike Logo" width={50} height={50} />
        </div>

        {/* (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
          <Link href="/Featured" className="hover:text-black whitespace-nowrap">
            New & Featured
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Men
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Women
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Kids
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            Sale
          </Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">
            SNKRS
          </Link>
        </nav>

        {/* (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block ">
            <input
              type="text"
              placeholder="Search"
              className=" hover:shadow-sm transition duration-300 transform hover:scale-105 border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-gray-500 ">
              <FaSearch />
            </span>
          </div>
          <span className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black">
            <FaHeart className=" size-5 hover:shadow-xl transition duration-300 transform hover:scale-125" />
          </span>
          <Link href={`/Cart`}>
          <span className="text-gray-700 md:w-[28px] md:h-[28px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black">
            <FaShoppingBag className="size-5 hover:shadow-xl transition duration-300 transform hover:scale-125" />
          </span></Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">
            <FaSearch />
          </span>
        </div>
      </div>
    </header>
  );
}
