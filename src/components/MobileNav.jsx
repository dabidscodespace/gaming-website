import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { IoSearchOutline, IoSunnyOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-t border-orange-600/50 shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-orange-600 to-transparent"></div>
      <div className="flex items-center justify-around px-2 py-2">
        <Link className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <FiHome className="text-gray-400 text-xl" />
          </div>

          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            HOME
          </span>
        </Link>
        <button className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <IoSearchOutline className="text-gray-400 text-xl" />
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            SEARCH
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 group relative -mt-6">
          <div className="relative p-4 rounded-full bg-linear-to-br from-orange-600 to-orange-700 shadow-2xl shadow-orange-600/50 group-hover:shadow-orange-600/70 transition-all duration-300 border-2 border-orange-500">
            <LuHeadphones className="text-white text-2xl" />
          </div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mt-1">
            SUPPORT
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <IoSunnyOutline className="text-gray-400 text-xl" />
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            DARK
          </span>
        </button>
        <Link className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <CgProfile className="text-gray-400 text-xl" />
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            PROFILE
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
