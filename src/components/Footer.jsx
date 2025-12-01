import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-linear-to-b from-gray-900 via-gray-800 to-black pt-20 pb-8 overflow-hidden border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group relative">
            <div className="relative bg-linear-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-lg p-6 border-2 border-orange-600/30 hover:border-orange-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-linear-to-b from-orange-600 to-orange-500 rounded-full"></div>
                <h3 className="text-xl font-black text-white tracking-wider uppercase">
                  <span className="text-orange-600">SQUAD</span>
                  UP
                </h3>
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
                  className="lucide lucide-zap w-5 h-5 text-orange-500 animate-pulse"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div className="flex justify-start gap-4">
                <Link className="relative flex items-center justify-center w-12 h-12 bg-linear-to-br from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-orange-600/50 group/icon rounded-tr-2xl rounded-bl-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook jsx-dcbc300c2f63b205 relative z-10"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link className="relative flex items-center justify-center w-12 h-12 bg-linear-to-br from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-orange-600/50 group/icon rounded-tr-2xl rounded-bl-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube jsx-dcbc300c2f63b205 relative z-10"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </Link>
                <Link className="relative flex items-center justify-center w-12 h-12 bg-linear-to-br from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-orange-600/50 group/icon rounded-tr-2xl rounded-bl-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send jsx-dcbc300c2f63b205 relative z-10"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
