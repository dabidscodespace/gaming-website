import { lazy, Suspense } from "react";
import Loader from "../components/Loader";

// Lazy‑loaded components
const Hero = lazy(() => import("../components/Hero"));
const GamesSection = lazy(() => import("../components/GamesSection"));

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh] bg-gray-900">
            <Loader />
          </div>
        }
      >
        <Hero />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh] bg-gray-900">
            <Loader />
          </div>
        }
      >
        <GamesSection />
      </Suspense>
    </div>
  );
};

export default Home;