import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/component/Home";
import MainRedux from "./Learn/Redux/MainRedux";
import Login from "./layout/component/Login";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/#R" element={<MainRedux />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
