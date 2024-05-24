import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/component/Home";
import MainRedux from "./Learn/Redux/MainRedux";
import FoodDetail from "./layout/component/FoodDetail";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/foods/:foodId/food_fooddetail"
            element={<FoodDetail />}
          />
          <Route path="/#R" element={<MainRedux />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
