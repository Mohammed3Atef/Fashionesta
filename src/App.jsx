import "./App.css";
import { OrbitSpace } from "orbit-space";

import Header from "./components/Header";
import CoverArea from "./components/Cover-Area";
import CategoriesSlider from "./components/Slide-Show";

import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/Products";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <CoverArea /> */}
              <ProductsList />
              <CategoriesSlider />
              <Footer />
            </>
          }
        />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="CreateProduct" element={<CreateProduct />} />
        <Route path="EditProduct/:productId" element={<EditProduct />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
