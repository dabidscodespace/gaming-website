import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllProducts } from "../Api";
import GameItem from "./GameItem";
import LoadingSkeleton from "./LoadingSkeleton";
import Title from "./Title";

const GamesSection = () => {
  const [gameProducts, setGameProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // start loader
        const data = await getAllProducts();
        setGameProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false); // stop loader
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-8 pb-16 md:py-16 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div>
          <Title text1="Top Up Now" text2="CHOOSE YOUR GAME" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <LoadingSkeleton key={i} />
              ))
            : gameProducts.map((item) => (
                <GameItem
                  key={item.id}
                  id={item.id}
                  slug={item.slug}
                  name={item.name}
                  image={item.images?.[0]?.src}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
