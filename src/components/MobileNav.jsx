import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-t border-orange-600/50 shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-orange-600 to-transparent"></div>
      <div className="flex items-center justify-around px-2 py-2">
        <Link className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </div>

          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            HOME
          </span>
        </Link>
        <button className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            SEARCH
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 group relative -mt-6">
          <div className="relative p-4 rounded-full bg-linear-to-br from-orange-600 to-orange-700 shadow-2xl shadow-orange-600/50 group-hover:shadow-orange-600/70 transition-all duration-300 border-2 border-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-headphones w-6 h-6 text-white"
            >
              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mt-1">
            SUPPORT
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-orange-600 transition-colors uppercase tracking-wider">
            DARK
          </span>
        </button>
        <Link className="flex flex-col items-center gap-1 group relative">
          <div className="relative p-3 rounded-2xl bg-gray-800/50 group-hover:bg-orange-600/20 transition-all duration-300 border border-gray-700 group-hover:border-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
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
