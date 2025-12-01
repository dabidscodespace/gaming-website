import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { getProductBySlug, getProductVariations } from "../Api";
import GameForm from "../components/GameForm";
import Loader from "../components/Loader";

const GamePage = ({ setPageLoading }) => {
  const { slug } = useParams();
  const [selectedVar, setSelectedVar] = useState(null);
  const [product, setProduct] = useState(null);
  const [variations, setVariations] = useState([]);

  const scrollToForm = () => {
    const form = document.getElementById("gameform");
    if (form) {
      
      const headerHeight = 80;
      const y =
        form.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setPageLoading(true);
        const prod = await getProductBySlug(slug);
        setProduct(prod);
        if (prod?.id) {
          const vars = await getProductVariations(prod.id);
          setVariations(vars);
        }
      } finally {
        setPageLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-12 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        {/* ===== Product Header ===== */}
        <div className="bg-gray-800 rounded-2xl shadow-xl border-2 border-orange-800 overflow-hidden mb-6 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-orange-400 to-orange-600" />
          <div className="absolute top-0 right-0 w-2 h-full bg-linear-to-b from-orange-400 to-orange-600" />
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <div className="text-xs font-black text-orange-600 tracking-wider mb-1">
                  INSTANT DELIVERY
                </div>
                <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                  {product.name}
                </h1>
              </div>
            </div>

            <div className="bg-linear-to-r from-orange-900/30 to-yellow-900/30 rounded-xl p-4 md:p-6 border-2 border-orange-700 relative overflow-hidden">
              <h2 className="text-center md:text-2xl font-black text-orange-200 leading-tight">
                ORDER TIME 11 AM TO 12 PM
              </h2>
            </div>
          </div>
        </div>

        {/* ===== Package Selection ===== */}
        <div className="bg-gray-800 rounded-2xl shadow-xl border-2 border-orange-800 p-6 md:p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 via-orange-600 to-orange-400" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-900/50 rounded-lg flex items-center justify-center">
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
                className="lucide lucide-package w-6 h-6 text-orange-400"
              >
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                <path d="M12 22V12" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <path d="m7.5 4.27 9 5.15" />
              </svg>
            </div>
            <div className="text-lg md:text-xl font-black text-white uppercase tracking-wide">
              SELECT YOUR PACKAGE
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {variations.map((v) => {
              const isSelected = selectedVar === v;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVar(v);
                    scrollToForm();
                  }}
                  className={`group relative p-4 rounded-xl border-2 transition-all duration-300
          text-left overflow-hidden cursor-pointer
          ${
            isSelected
              ? " bg-linear-to-br from-orange-500 to-orange-600 border-orange-600 shadow-lg"
              : "bg-gray-700 border-gray-600 hover:border-orange-500 hover:shadow-md hover:scale-105"
          }`}
                >
                  {isSelected ? (
                    <div className="absolute top-2 right-2 text-xl text-white ">
                      <IoCheckmarkCircleOutline />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="relative z-10">
                    <div className="text-lg font-black mb-1 text-white">
                      {v.attributes?.[0]?.option}
                    </div>
                    <div className="text-sm font-bold text-orange-200">
                      ৳{v.price}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ===== Checkout / Game Form ===== */}
          <div id="gameform">
            <GameForm selectedVar={selectedVar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
