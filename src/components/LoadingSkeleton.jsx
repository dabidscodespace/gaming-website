import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => (
  <div className="rounded-xl overflow-hidden">
    <Skeleton
      height={180}
      width="100%"
      baseColor="#374151"
      highlightColor="#4B5563"
      borderRadius="0.75rem"
    />
  </div>
);

export default LoadingSkeleton;