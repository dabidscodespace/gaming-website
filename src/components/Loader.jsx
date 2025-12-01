// src/components/Loader.jsx
import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-900">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        colors={["#F77200", "#f77200"]}
      />
    </div>
  );
};

export default Loader;