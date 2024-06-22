import "./App.css";
import Header from "./components/Header";
import CoverArea from "./components/Cover-Area";
import GetProducts from "./components/Products";
import CategoriesSlider from "./components/Slide-Show";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <CoverArea />
      <GetProducts />
      <CategoriesSlider />
      <Footer />
    </div>
  );
}

export default App;
