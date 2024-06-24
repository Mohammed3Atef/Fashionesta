import "./App.css";
import Header from "./components/Header";
import CoverArea from "./components/Cover-Area";
import GetProducts from "./components/Products";
import CategoriesSlider from "./components/Slide-Show";

import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/Products";
import Form from "./components/Form";

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
        <Route path="Form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
