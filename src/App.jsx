import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Account from "./pages/Account";
import GamePage from "./pages/GamePage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

const App = () => {
  const [loader, setLoader] = useState(false);

  const setPageLoading = (status) => {
    setLoader(status);
  };
  return (
    <>
      {/* <Navbar /> */}
      <ScrollToTop />
      <div>
        {loader && <Loader />}
        <Routes>
          <Route path="/" element={<Home setPageLoading={setPageLoading} />} />
          <Route
            path="/product/:slug"
            element={<GamePage setPageLoading={setPageLoading} />}
          />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
