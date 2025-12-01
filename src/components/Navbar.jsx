import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border-b-2 border-orange-600/30 shadow-2xl fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center md:justify-between h-16">
            {/* Right */}
            <div className="">
              <Link
                to={"/"}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <div className="flex justify-center items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-[0_0_25px_5px_rgba(249,115,22,0.5)]">
                    <img src={assets.logo} alt="" className="w-8 h-8" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-white tracking-wider text-xl uppercase relative">
                      GAMERZ
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-orange-600 to-transparent"></div>
                    </span>
                    <span className="font-bold text-orange-600 tracking-wider text-xl">
                      CHOICE
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Left */}
            <div className="hidden md:flex items-center gap-6">
              <button className="relative bg-linear-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 border-2 border-orange-500/50 py-1 px-4 gap-3 cursor-pointer font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" w-4 h-4 text-white"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
              <button className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600 text-gray-300">
                <IoSunnyOutline size={20} />
              </button>
              <button className="font-medium bg-orange-500 px-4 py-2 rounded-md text-sm text-white">
                Login
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-orange-600 to-transparent"></div>
        </div>
      </header>
      {/* Mobile Navbar */}
      <MobileNav />
    </>
  );
};

export default Navbar;
